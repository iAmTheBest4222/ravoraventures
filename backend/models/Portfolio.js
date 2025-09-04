const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
    maxlength: [200, 'Company name cannot be more than 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot be more than 2000 characters']
  },
  shortDescription: {
    type: String,
    trim: true,
    maxlength: [500, 'Short description cannot be more than 500 characters']
  },
  industry: {
    type: String,
    required: [true, 'Industry is required'],
    enum: ['FinTech', 'CleanTech', 'HealthTech', 'EdTech', 'AI/ML', 'E-commerce', 'SaaS', 'Other']
  },
  stage: {
    type: String,
    required: [true, 'Stage is required'],
    enum: ['Idea', 'Seed', 'Series A', 'Series B', 'Series C+', 'IPO', 'Acquired']
  },
  founded: {
    type: Number,
    required: [true, 'Founded year is required'],
    min: [1900, 'Founded year must be after 1900'],
    max: [new Date().getFullYear(), 'Founded year cannot be in the future']
  },
  location: {
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true
    },
    state: {
      type: String,
      trim: true
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
      trim: true,
      default: 'India'
    }
  },
  website: {
    type: String,
    trim: true,
    match: [/^https?:\/\/.+/, 'Website must be a valid URL']
  },
  logo: {
    type: String,
    trim: true
  },
  founders: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      required: true,
      trim: true
    },
    linkedin: {
      type: String,
      trim: true
    }
  }],
  funding: {
    totalRaised: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      default: 'INR'
    },
    lastRound: {
      amount: Number,
      date: Date,
      investors: [String]
    }
  },
  metrics: {
    employees: {
      min: Number,
      max: Number
    },
    users: String,
    revenue: String,
    growth: String,
    partnerships: String
  },
  highlights: [String],
  status: {
    type: String,
    enum: ['active', 'exited', 'acquired', 'closed'],
    default: 'active'
  },
  featured: {
    type: Boolean,
    default: false
  },
  investmentDate: {
    type: Date
  },
  exitDate: {
    type: Date
  },
  exitValue: {
    type: Number
  },
  tags: [String],
  socialMedia: {
    linkedin: String,
    twitter: String,
    facebook: String
  }
}, {
  timestamps: true
});

// Index for better query performance
portfolioSchema.index({ name: 1 });
portfolioSchema.index({ industry: 1 });
portfolioSchema.index({ stage: 1 });
portfolioSchema.index({ status: 1 });
portfolioSchema.index({ featured: 1 });
portfolioSchema.index({ 'location.city': 1 });
portfolioSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Portfolio', portfolioSchema);
