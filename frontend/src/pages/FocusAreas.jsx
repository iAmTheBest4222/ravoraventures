import React from 'react';
import { motion } from 'framer-motion';
import { 
  GlobeAltIcon,
  BoltIcon,
  CreditCardIcon,
  HeartIcon,
  ShoppingBagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const FocusAreas = () => {
  const focusAreas = [
    {
      icon: GlobeAltIcon,
      title: 'Technology & AI',
      emoji: '🌐',
      description: 'Revolutionary technologies and artificial intelligence solutions that transform industries.',
      investmentThesis: 'We invest in AI-first companies that solve real-world problems with scalable technology solutions.',
      trends: [
        'Machine Learning & Deep Learning',
        'Computer Vision & NLP',
        'Robotics & Automation',
        'Edge Computing & IoT',
        'Quantum Computing',
      ],
      examples: [
        'AI-powered healthcare diagnostics',
        'Autonomous vehicle technology',
        'Smart city infrastructure',
        'Predictive analytics platforms',
      ],
      stats: {
        companies: '15+',
        investment: '₹150Cr+',
        success: '90%',
      },
    },
    {
      icon: BoltIcon,
      title: 'Clean Energy & Sustainability',
      emoji: '⚡',
      description: 'Sustainable solutions for a greener future and clean energy transition.',
      investmentThesis: 'We focus on companies that are building the infrastructure for a sustainable future.',
      trends: [
        'Solar & Wind Energy',
        'Energy Storage Solutions',
        'Carbon Capture Technology',
        'Electric Vehicle Infrastructure',
        'Green Hydrogen',
      ],
      examples: [
        'Solar panel manufacturing',
        'Battery storage systems',
        'EV charging networks',
        'Waste-to-energy solutions',
      ],
      stats: {
        companies: '12+',
        investment: '₹120Cr+',
        success: '85%',
      },
    },
    {
      icon: CreditCardIcon,
      title: 'FinTech & Digital Assets',
      emoji: '💳',
      description: 'Financial technology innovations and digital asset solutions for modern finance.',
      investmentThesis: 'We invest in fintech companies that democratize financial services and improve accessibility.',
      trends: [
        'Digital Banking & Payments',
        'Blockchain & Cryptocurrency',
        'InsurTech & Lending',
        'Wealth Management',
        'RegTech & Compliance',
      ],
      examples: [
        'Mobile payment platforms',
        'Digital lending solutions',
        'Cryptocurrency exchanges',
        'Insurance technology',
      ],
      stats: {
        companies: '18+',
        investment: '₹200Cr+',
        success: '95%',
      },
    },
    {
      icon: HeartIcon,
      title: 'HealthTech & Biotech',
      emoji: '👩‍⚕️',
      description: 'Healthcare technology and biotechnology innovations that improve lives.',
      investmentThesis: 'We support companies that are making healthcare more accessible, affordable, and effective.',
      trends: [
        'Telemedicine & Remote Care',
        'Digital Therapeutics',
        'Medical Devices & Diagnostics',
        'Biotech & Pharmaceuticals',
        'Mental Health Technology',
      ],
      examples: [
        'Telemedicine platforms',
        'AI-powered diagnostics',
        'Wearable health devices',
        'Personalized medicine',
      ],
      stats: {
        companies: '10+',
        investment: '₹100Cr+',
        success: '88%',
      },
    },
    {
      icon: ShoppingBagIcon,
      title: 'Consumer & Lifestyle',
      emoji: '🛍',
      description: 'Consumer-focused innovations that enhance daily life and lifestyle experiences.',
      investmentThesis: 'We invest in consumer companies that understand changing consumer behavior and preferences.',
      trends: [
        'E-commerce & Marketplaces',
        'Food & Beverage Tech',
        'Fashion & Beauty Tech',
        'Home & Living',
        'Entertainment & Media',
      ],
      examples: [
        'Direct-to-consumer brands',
        'Food delivery platforms',
        'Fashion tech solutions',
        'Home automation systems',
      ],
      stats: {
        companies: '8+',
        investment: '₹80Cr+',
        success: '92%',
      },
    },
  ];

  const marketInsights = [
    {
      title: 'Market Size',
      value: '₹50,000Cr+',
      description: 'Total addressable market across our focus areas',
    },
    {
      title: 'Growth Rate',
      value: '25%+',
      description: 'Annual growth rate in our target sectors',
    },
    {
      title: 'Investment Activity',
      value: '₹2,000Cr+',
      description: 'Total investments made in the last 3 years',
    },
    {
      title: 'Exit Success',
      value: '15+',
      description: 'Successful exits and IPOs from our portfolio',
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
              Our Focus Areas
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              We invest in high-growth sectors that are shaping the future of India's economy 
              and creating lasting impact across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Insights */}
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
              Market Insights
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Our focus areas represent the most promising sectors for growth and innovation in India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketInsights.map((insight, index) => (
              <Card key={index} className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">{insight.value}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{insight.title}</h3>
                <p className="text-medium-gray">{insight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
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
              Investment Sectors
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Deep dive into our focus areas and understand our investment thesis for each sector.
            </p>
          </motion.div>

          <div className="space-y-16">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-center mb-6">
                    <div className="text-6xl mr-4">{area.emoji}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-charcoal mb-2">{area.title}</h3>
                      <div className="flex space-x-4 text-sm">
                        <span className="bg-orange/10 text-orange px-3 py-1 rounded-full">
                          {area.stats.companies} Companies
                        </span>
                        <span className="bg-navy-blue/10 text-navy-blue px-3 py-1 rounded-full">
                          {area.stats.investment} Invested
                        </span>
                        <span className="bg-success-green/10 text-success-green px-3 py-1 rounded-full">
                          {area.stats.success} Success Rate
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-medium-gray mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="bg-orange/5 p-6 rounded-xl border-l-4 border-orange mb-6">
                    <h4 className="font-semibold text-charcoal mb-2">Investment Thesis:</h4>
                    <p className="text-medium-gray">{area.investmentThesis}</p>
                  </div>

                  <Button size="lg">
                    Learn More
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div>
                  <Card className="p-8">
                    <h4 className="text-xl font-semibold text-charcoal mb-6">Key Trends:</h4>
                    <ul className="space-y-3 mb-8">
                      {area.trends.map((trend, trendIndex) => (
                        <li key={trendIndex} className="flex items-center text-medium-gray">
                          <div className="w-2 h-2 bg-orange rounded-full mr-3 flex-shrink-0"></div>
                          {trend}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-xl font-semibold text-charcoal mb-4">Example Applications:</h4>
                    <ul className="space-y-2">
                      {area.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-medium-gray text-sm">
                          • {example}
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

  {/* CTA Section removed as per requirements */}
    </>
  );
};

export default FocusAreas;
