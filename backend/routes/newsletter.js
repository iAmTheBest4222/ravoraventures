const express = require('express');
const { body, validationResult } = require('express-validator');
const Newsletter = require('../models/Newsletter');
const router = express.Router();

// Validation middleware
const newsletterValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('preferences')
    .optional()
    .isArray()
    .withMessage('Preferences must be an array'),
  body('source')
    .optional()
    .isIn(['website', 'social_media', 'referral', 'event', 'other'])
    .withMessage('Invalid source')
];

// @route   POST /api/newsletter
// @desc    Subscribe to newsletter
// @access  Public
router.post('/', newsletterValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, preferences = ['all'], source = 'website' } = req.body;

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
      if (existingSubscriber.status === 'unsubscribed') {
        // Reactivate subscription
        existingSubscriber.status = 'active';
        existingSubscriber.preferences = preferences;
        existingSubscriber.subscribedAt = new Date();
        existingSubscriber.unsubscribedAt = undefined;
        await existingSubscriber.save();

        return res.json({
          status: 'success',
          message: 'Welcome back! Your subscription has been reactivated.',
          data: { email: existingSubscriber.email }
        });
      } else {
        return res.status(409).json({
          status: 'error',
          message: 'This email is already subscribed to our newsletter'
        });
      }
    }

    // Create new subscription
    const newsletter = new Newsletter({
      email,
      preferences,
      source,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    await newsletter.save();

    // TODO: Send welcome email
    // TODO: Add to email marketing platform

    res.status(201).json({
      status: 'success',
      message: 'Successfully subscribed to our newsletter!',
      data: { email: newsletter.email }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to subscribe to newsletter. Please try again later.'
    });
  }
});

// @route   DELETE /api/newsletter
// @desc    Unsubscribe from newsletter
// @access  Public
router.delete('/', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        status: 'error',
        message: 'Email is required'
      });
    }

    const subscriber = await Newsletter.findOne({ email });

    if (!subscriber) {
      return res.status(404).json({
        status: 'error',
        message: 'Email not found in our newsletter list'
      });
    }

    if (subscriber.status === 'unsubscribed') {
      return res.status(409).json({
        status: 'error',
        message: 'This email is already unsubscribed'
      });
    }

    subscriber.status = 'unsubscribed';
    subscriber.unsubscribedAt = new Date();
    await subscriber.save();

    res.json({
      status: 'success',
      message: 'Successfully unsubscribed from our newsletter'
    });

  } catch (error) {
    console.error('Newsletter unsubscription error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to unsubscribe. Please try again later.'
    });
  }
});

// @route   GET /api/newsletter
// @desc    Get all subscribers (Admin only)
// @access  Private
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 50, status, source } = req.query;
    const query = {};

    // Apply filters
    if (status) query.status = status;
    if (source) query.source = source;

    const subscribers = await Newsletter.find(query)
      .sort({ subscribedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-__v');

    const total = await Newsletter.countDocuments(query);

    res.json({
      status: 'success',
      data: {
        subscribers,
        pagination: {
          current: parseInt(page),
          pages: Math.ceil(total / limit),
          total
        }
      }
    });

  } catch (error) {
    console.error('Get subscribers error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch subscribers'
    });
  }
});

// @route   GET /api/newsletter/stats
// @desc    Get newsletter statistics (Admin only)
// @access  Private
router.get('/stats', async (req, res) => {
  try {
    const totalSubscribers = await Newsletter.countDocuments({ status: 'active' });
    const unsubscribed = await Newsletter.countDocuments({ status: 'unsubscribed' });
    const bounced = await Newsletter.countDocuments({ status: 'bounced' });
    
    const sourceStats = await Newsletter.aggregate([
      { $match: { status: 'active' } },
      { $group: { _id: '$source', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    const monthlyStats = await Newsletter.aggregate([
      { $match: { status: 'active' } },
      {
        $group: {
          _id: {
            year: { $year: '$subscribedAt' },
            month: { $month: '$subscribedAt' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 12 }
    ]);

    res.json({
      status: 'success',
      data: {
        total: totalSubscribers,
        unsubscribed,
        bounced,
        sourceBreakdown: sourceStats,
        monthlyGrowth: monthlyStats
      }
    });

  } catch (error) {
    console.error('Get newsletter stats error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch newsletter statistics'
    });
  }
});

module.exports = router;


