import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  ClockIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ForInvestors = () => {
  const investmentOpportunities = [
    {
      title: 'Seed Stage Investments',
      description: 'Early-stage investments in innovative startups with high growth potential',
      amount: '₹10L - ₹2Cr',
      focus: 'Product development and market validation',
      benefits: [
        'High growth potential',
        'Early entry valuation',
        'Active involvement in strategy',
        'Long-term value creation',
      ],
    },
    {
      title: 'Series A Co-investments',
      description: 'Co-investment opportunities in proven startups ready to scale',
      amount: '₹2Cr - ₹20Cr',
      focus: 'Market expansion and team building',
      benefits: [
        'Proven business models',
        'Reduced risk profile',
        'Diversified portfolio',
        'Professional management',
      ],
    },
    {
      title: 'Follow-on Investments',
      description: 'Additional funding rounds for existing portfolio companies',
      amount: '₹5Cr - ₹50Cr',
      focus: 'Scaling and market leadership',
      benefits: [
        'Proven track record',
        'Lower risk profile',
        'Higher success probability',
        'Liquidity opportunities',
      ],
    },
  ];

  const dueDiligenceProcess = [
    {
      step: 1,
      title: 'Initial Screening',
      description: 'Comprehensive evaluation of investment opportunities',
      duration: '1-2 weeks',
      activities: [
        'Business model analysis',
        'Market opportunity assessment',
        'Team evaluation',
        'Financial projections review',
        'Competitive landscape analysis',
      ],
    },
    {
      step: 2,
      title: 'Deep Dive Analysis',
      description: 'Detailed due diligence on selected opportunities',
      duration: '2-4 weeks',
      activities: [
        'Financial and legal due diligence',
        'Customer and market validation',
        'Technical assessment',
        'Management team interviews',
        'Reference checks',
      ],
    },
    {
      step: 3,
      title: 'Investment Committee Review',
      description: 'Final review and approval by investment committee',
      duration: '1 week',
      activities: [
        'Investment thesis presentation',
        'Risk assessment',
        'Return projections',
        'Portfolio fit analysis',
        'Final approval decision',
      ],
    },
    {
      step: 4,
      title: 'Deal Execution',
      description: 'Legal documentation and funding completion',
      duration: '1-2 weeks',
      activities: [
        'Term sheet negotiation',
        'Legal documentation',
        'Funding completion',
        'Board representation setup',
        'Ongoing monitoring setup',
      ],
    },
  ];

  const networkBenefits = [
    {
      icon: UserGroupIcon,
      title: 'Exclusive Network Access',
      description: 'Connect with other high-net-worth individuals and institutional investors',
      details: [
        'Monthly investor meetups',
        'Deal flow sharing',
        'Co-investment opportunities',
        'Industry networking events',
      ],
    },
    {
      icon: ChartBarIcon,
      title: 'Professional Management',
      description: 'Experienced team handles all aspects of investment management',
      details: [
        'Due diligence expertise',
        'Portfolio monitoring',
        'Value creation support',
        'Exit strategy execution',
      ],
    },
    {
      icon: ShieldCheckIcon,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies',
      details: [
        'Diversified portfolio approach',
        'Regular performance monitoring',
        'Risk assessment frameworks',
        'Exit planning and execution',
      ],
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Transparent Reporting',
      description: 'Regular updates on portfolio performance and investment opportunities',
      details: [
        'Quarterly performance reports',
        'Portfolio company updates',
        'Market insights and trends',
        'Investment opportunity pipeline',
      ],
    },
  ];

  const portfolioMetrics = [
    {
      metric: 'IRR',
      value: '35%+',
      description: 'Average internal rate of return across all investments',
    },
    {
      metric: 'Success Rate',
      value: '95%',
      description: 'Percentage of portfolio companies that achieved positive outcomes',
    },
    {
      metric: 'Average Exit',
      value: '5.2x',
      description: 'Average multiple on invested capital at exit',
    },
    {
      metric: 'Portfolio Value',
      value: '₹500Cr+',
      description: 'Total value of current portfolio companies',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Angel Investor',
      company: 'TechCorp Ventures',
      quote: 'Ravora Ventures has consistently delivered exceptional returns. Their due diligence process and portfolio management are world-class.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Family Office',
      company: 'Sharma Capital',
      quote: 'The co-investment opportunities and network access have been invaluable. I\'ve made some of my best investments through Ravora.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Institutional Investor',
      company: 'Patel Investments',
      quote: 'Their focus on sustainable growth and long-term value creation aligns perfectly with our investment philosophy.',
      rating: 5,
    },
  ];

  return (
    <>{/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-light-gray via-white to-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              For Investors
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed mb-8">
              Join our exclusive network of investors and access curated investment opportunities 
              with professional management and proven returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Join Our Network
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Download Investor Kit
                <DocumentTextIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Proven Track Record
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Our investment performance speaks for itself with consistent returns and successful exits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioMetrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">{metric.value}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{metric.metric}</h3>
                <p className="text-medium-gray">{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Investment Opportunities
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Access curated investment opportunities across different stages and sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {investmentOpportunities.map((opportunity, index) => (
              <Card key={index} className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{opportunity.title}</h3>
                  <div className="text-orange text-xl font-semibold mb-2">{opportunity.amount}</div>
                  <p className="text-medium-gray">{opportunity.focus}</p>
                </div>
                
                <p className="text-medium-gray mb-6 leading-relaxed">
                  {opportunity.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-charcoal mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-medium-gray">
                        <CheckCircleIcon className="h-4 w-4 text-success-green mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Due Diligence Process
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Our rigorous due diligence process ensures we only present the best investment opportunities.
            </p>
          </motion.div>

          <div className="space-y-12">
            {dueDiligenceProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              >
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal">{step.title}</h3>
                      <p className="text-orange font-medium flex items-center">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        {step.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-medium-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <Card className="p-6">
                    <h4 className="font-semibold text-charcoal mb-4">Key Activities:</h4>
                    <ul className="space-y-2">
                      {step.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-center text-medium-gray">
                          <CheckCircleIcon className="h-4 w-4 text-success-green mr-3 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Benefits */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Network Benefits
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Join an exclusive network of successful investors and entrepreneurs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkBenefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {benefit.title}
                </h3>
                <p className="text-medium-gray mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                <ul className="space-y-2 text-sm text-medium-gray">
                  {benefit.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>• {detail}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              What Our Investors Say
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Hear from our network of successful investors about their experience with Ravora Ventures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-orange fill-current" />
                  ))}
                </div>
                <blockquote className="text-medium-gray mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-orange text-sm">{testimonial.role}</div>
                  <div className="text-medium-gray text-sm">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Invest?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our exclusive network of investors and access curated investment opportunities with proven returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Join Our Network
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Schedule a Meeting
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ForInvestors;
