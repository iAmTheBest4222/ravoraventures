import React from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  HeartIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const OurApproach = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Discovery',
      icon: MagnifyingGlassIcon,
      description: 'Understanding your idea, market, and vision',
      details: [
        'Initial consultation and idea assessment',
        'Market opportunity analysis',
        'Team evaluation and founder fit',
        'Competitive landscape review',
        'Initial business model validation',
      ],
      duration: '2-4 weeks',
      outcome: 'Clear understanding of opportunity and fit',
    },
    {
      step: 2,
      title: 'Validation',
      icon: CheckCircleIcon,
      description: 'Testing feasibility and refining business models',
      details: [
        'Customer discovery and validation',
        'Product-market fit assessment',
        'Financial model development',
        'Technical feasibility review',
        'Regulatory and compliance check',
      ],
      duration: '4-6 weeks',
      outcome: 'Validated business model and market fit',
    },
    {
      step: 3,
      title: 'Execution',
      icon: RocketLaunchIcon,
      description: 'Supporting product development and early traction',
      details: [
        'Product development support',
        'MVP development and testing',
        'Early customer acquisition',
        'Team building and hiring',
        'Operational setup and processes',
      ],
      duration: '6-12 months',
      outcome: 'Working product with initial traction',
    },
    {
      step: 4,
      title: 'Funding',
      icon: CurrencyDollarIcon,
      description: 'Preparing you for investors and securing capital',
      details: [
        'Investment readiness preparation',
        'Pitch deck development',
        'Investor network introduction',
        'Due diligence support',
        'Term sheet negotiation',
      ],
      duration: '2-3 months',
      outcome: 'Successful funding round completion',
    },
    {
      step: 5,
      title: 'Scaling',
      icon: ChartBarIcon,
      description: 'Expanding into new markets and building partnerships',
      details: [
        'Market expansion strategy',
        'Partnership development',
        'Team scaling and culture building',
        'Process optimization',
        'Technology infrastructure scaling',
      ],
      duration: '12-24 months',
      outcome: 'Scalable business with market presence',
    },
    {
      step: 6,
      title: 'Sustainability',
      icon: HeartIcon,
      description: 'Creating businesses that last for decades',
      details: [
        'Long-term strategic planning',
        'Corporate governance setup',
        'Exit strategy planning',
        'Legacy building initiatives',
        'Ongoing mentorship and support',
      ],
      duration: 'Ongoing',
      outcome: 'Sustainable, long-term business success',
    },
  ];

  const principles = [
    {
      title: 'Entrepreneur-First Approach',
      description: 'We put entrepreneurs at the center of everything we do, ensuring their success is our primary focus.',
      icon: HeartIcon,
    },
    {
      title: 'Data-Driven Decisions',
      description: 'All our decisions are backed by thorough research, market analysis, and data insights.',
      icon: ChartBarIcon,
    },
    {
      title: 'Long-Term Partnership',
      description: 'We build lasting relationships with our portfolio companies, supporting them through all growth stages.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Innovation Focus',
      description: 'We seek out and support truly innovative solutions that can transform industries.',
      icon: RocketLaunchIcon,
    },
  ];

  const caseStudies = [
    {
      company: 'FinTechX',
      sector: 'FinTech',
      stage: 'Series A',
      description: 'From idea to ₹100Cr valuation in 18 months',
      highlights: [
        'Identified market gap in digital payments',
        'Provided seed funding and mentorship',
        'Helped scale to 1M+ users',
        'Facilitated Series A funding round',
      ],
      result: 'Successfully raised ₹50Cr Series A',
    },
    {
      company: 'GreenEdge',
      sector: 'CleanTech',
      stage: 'Seed',
      description: 'Building sustainable energy solutions for India',
      highlights: [
        'Validated clean energy market opportunity',
        'Connected with industry experts',
        'Developed scalable business model',
        'Secured pilot customers',
      ],
      result: 'Ready for Series A funding',
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
              Our Approach
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              A proven 6-step process that transforms ideas into sustainable, 
              successful businesses that create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
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
              Our 6-Step Process
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              From initial discovery to long-term sustainability, we guide you through every stage of growth.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange/20 hidden lg:block"></div>
            
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-charcoal mb-2">{step.title}</h3>
                          <p className="text-orange font-medium">{step.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-medium-gray mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-charcoal mb-3">What We Do:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-medium-gray">
                              <CheckCircleIcon className="h-4 w-4 text-success-green mr-3 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-orange/10 p-4 rounded-lg">
                        <p className="text-charcoal font-medium">
                          <span className="text-orange">Outcome:</span> {step.outcome}
                        </p>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-full lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
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
              Our Core Principles
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              These principles guide every interaction and decision we make with our portfolio companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="h-8 w-8 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {principle.title}
                </h3>
                <p className="text-medium-gray leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Success Stories
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              See how our approach has helped companies achieve remarkable success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                    {study.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">{study.company}</h3>
                    <p className="text-orange font-medium">{study.sector} • {study.stage}</p>
                  </div>
                </div>
                
                <p className="text-lg text-medium-gray mb-6 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {study.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center text-medium-gray">
                        <CheckCircleIcon className="h-4 w-4 text-success-green mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-success-green/10 p-4 rounded-lg">
                  <p className="text-charcoal font-medium">
                    <span className="text-success-green">Result:</span> {study.result}
                  </p>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven approach can help accelerate your startup's growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Apply Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <PlayIcon className="mr-2 h-5 w-5" />
                Watch Our Process
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurApproach;
