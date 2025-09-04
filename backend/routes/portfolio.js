const express = require('express');
const { body, validationResult } = require('express-validator');
const Portfolio = require('../models/Portfolio');
const router = express.Router();

// @route   GET /api/portfolio
// @desc    Get all portfolio companies
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 12, 
      industry, 
      stage, 
      status = 'active', 
      featured,
      search,
      sort = 'createdAt',
      order = 'desc'
    } = req.query;

    const query = {};

    // Apply filters
    if (industry) query.industry = industry;
    if (stage) query.stage = stage;
    if (status) query.status = status;
    if (featured !== undefined) query.featured = featured === 'true';
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { shortDescription: { $regex: search, $options: 'i' } },
        { 'location.city': { $regex: search, $options: 'i' } }
      ];
    }

    // Sort options
    const sortOptions = {};
    sortOptions[sort] = order === 'desc' ? -1 : 1;

    const companies = await Portfolio.find(query)
      .sort(sortOptions)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-__v -notes -socialMedia');

    const total = await Portfolio.countDocuments(query);

    res.json({
      status: 'success',
      data: {
        companies,
        pagination: {
          current: parseInt(page),
          pages: Math.ceil(total / limit),
          total
        }
      }
    });

  } catch (error) {
    console.error('Get portfolio error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch portfolio companies'
    });
  }
});

// @route   GET /api/portfolio/:id
// @desc    Get single portfolio company
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const company = await Portfolio.findById(req.params.id);
    
    if (!company) {
      return res.status(404).json({
        status: 'error',
        message: 'Portfolio company not found'
      });
    }

    res.json({
      status: 'success',
      data: company
    });

  } catch (error) {
    console.error('Get portfolio company error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch portfolio company'
    });
  }
});

// @route   GET /api/portfolio/stats/overview
// @desc    Get portfolio statistics
// @access  Public
router.get('/stats/overview', async (req, res) => {
  try {
    const totalCompanies = await Portfolio.countDocuments({ status: 'active' });
    const totalFunding = await Portfolio.aggregate([
      { $match: { status: 'active' } },
      { $group: { _id: null, total: { $sum: '$funding.totalRaised' } } }
    ]);

    const industryStats = await Portfolio.aggregate([
      { $match: { status: 'active' } },
      { $group: { _id: '$industry', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    const stageStats = await Portfolio.aggregate([
      { $match: { status: 'active' } },
      { $group: { _id: '$stage', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    const locationStats = await Portfolio.aggregate([
      { $match: { status: 'active' } },
      { $group: { _id: '$location.city', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    res.json({
      status: 'success',
      data: {
        totalCompanies,
        totalFunding: totalFunding[0]?.total || 0,
        industryBreakdown: industryStats,
        stageBreakdown: stageStats,
        topCities: locationStats
      }
    });

  } catch (error) {
    console.error('Get portfolio stats error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch portfolio statistics'
    });
  }
});

// @route   POST /api/portfolio
// @desc    Create new portfolio company (Admin only)
// @access  Private
router.post('/', [
  body('name').trim().isLength({ min: 2, max: 200 }).withMessage('Company name is required'),
  body('description').trim().isLength({ min: 10, max: 2000 }).withMessage('Description is required'),
  body('industry').isIn(['FinTech', 'CleanTech', 'HealthTech', 'EdTech', 'AI/ML', 'E-commerce', 'SaaS', 'Other']).withMessage('Invalid industry'),
  body('stage').isIn(['Idea', 'Seed', 'Series A', 'Series B', 'Series C+', 'IPO', 'Acquired']).withMessage('Invalid stage'),
  body('founded').isInt({ min: 1900, max: new Date().getFullYear() }).withMessage('Invalid founded year'),
  body('location.city').trim().isLength({ min: 2 }).withMessage('City is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const company = new Portfolio(req.body);
    await company.save();

    res.status(201).json({
      status: 'success',
      message: 'Portfolio company created successfully',
      data: company
    });

  } catch (error) {
    console.error('Create portfolio company error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to create portfolio company'
    });
  }
});

// @route   PUT /api/portfolio/:id
// @desc    Update portfolio company (Admin only)
// @access  Private
router.put('/:id', async (req, res) => {
  try {
    const company = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!company) {
      return res.status(404).json({
        status: 'error',
        message: 'Portfolio company not found'
      });
    }

    res.json({
      status: 'success',
      message: 'Portfolio company updated successfully',
      data: company
    });

  } catch (error) {
    console.error('Update portfolio company error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update portfolio company'
    });
  }
});

// @route   DELETE /api/portfolio/:id
// @desc    Delete portfolio company (Admin only)
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    const company = await Portfolio.findByIdAndDelete(req.params.id);

    if (!company) {
      return res.status(404).json({
        status: 'error',
        message: 'Portfolio company not found'
      });
    }

    res.json({
      status: 'success',
      message: 'Portfolio company deleted successfully'
    });

  } catch (error) {
    console.error('Delete portfolio company error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete portfolio company'
    });
  }
});

module.exports = router;
