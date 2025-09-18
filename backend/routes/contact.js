const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const router = express.Router();

// Validation middleware
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('company')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Company name cannot exceed 200 characters'),
  body('type')
    .isIn(['startup', 'investor', 'partnership', 'general'])
    .withMessage('Invalid inquiry type'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters')
];

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', contactValidation, async (req, res) => {
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

    const { name, email, company, type, message } = req.body;

    // Check if contact already exists (prevent spam)
    const existingContact = await Contact.findOne({
      email,
      message,
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } // Last 24 hours
    });

    if (existingContact) {
      return res.status(429).json({
        status: 'error',
        message: 'Duplicate submission detected. Please wait before submitting again.'
      });
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      company,
      type,
      message,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    await contact.save();

    // Send email notification to admin
    const { sendContactEmail } = require('../utils/mailer');
    try {
      await sendContactEmail({ name, email, company, type, message });
    } catch (emailError) {
      console.error('Error sending contact email:', emailError);
      // Optionally, you can still return success but log the error
    }

    res.status(201).json({
      status: 'success',
      message: 'Thank you for your message. We will get back to you soon!',
      data: {
        id: contact._id,
        type: contact.type
      }
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to submit contact form. Please try again later.'
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contacts (Admin only)
// @access  Private
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, type, status, search } = req.query;
    const query = {};

    // Apply filters
    if (type) query.type = type;
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-__v');

    const total = await Contact.countDocuments(query);

    res.json({
      status: 'success',
      data: {
        contacts,
        pagination: {
          current: parseInt(page),
          pages: Math.ceil(total / limit),
          total
        }
      }
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch contacts'
    });
  }
});

// @route   GET /api/contact/:id
// @desc    Get single contact (Admin only)
// @access  Private
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact not found'
      });
    }

    res.json({
      status: 'success',
      data: contact
    });

  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch contact'
    });
  }
});

// @route   PUT /api/contact/:id
// @desc    Update contact status (Admin only)
// @access  Private
router.put('/:id', async (req, res) => {
  try {
    const { status, priority, assignedTo, notes } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, priority, assignedTo, $push: { notes } },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact not found'
      });
    }

    res.json({
      status: 'success',
      message: 'Contact updated successfully',
      data: contact
    });

  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update contact'
    });
  }
});

module.exports = router;


