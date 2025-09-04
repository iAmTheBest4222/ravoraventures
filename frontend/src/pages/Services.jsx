import React from 'react';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Services = () => {
  const services = [
    {
      icon: LightBulbIcon,
      title: 'Ideation & Strategy',
      description: 'Transform your ideas into viable business models with our strategic guidance and market analysis.',
      features: [
        'Business model validation',
        'Market research and analysis',
        'Competitive landscape assessment',
        'Go-to-market strategy development',
        'Financial modeling and projections',
      ],
      process: [
        'Initial consultation and idea assessment',
        'Market validation and research',
        'Business model refinement',
        'Strategic planning and roadmap creation',
      ],
    },
    {
      icon: UserGroupIcon,
      title: 'Mentorship & Guidance',
      description: 'Learn from industry experts and successful entrepreneurs through our comprehensive mentorship program.',
      features: [
        'One-on-one mentorship sessions',
        'Industry expert network access',
        'Peer learning and networking',
        'Regular progress reviews',
        'Personalized growth plans',
      ],
      process: [
        'Mentor matching based on industry and needs',
        'Structured mentorship program setup',
        'Regular check-ins and guidance',
        'Network expansion and connections',
      ],
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Funding & Investment Access',
      description: 'Access capital from our network of investors and funding partners across different stages.',
      features: [
        'Seed and Series A funding',
        'Investor network access',
        'Pitch deck preparation',
        'Due diligence support',
        'Term sheet negotiation',
      ],
      process: [
        'Investment readiness assessment',
        'Pitch deck and presentation preparation',
        'Investor introductions and meetings',
        'Due diligence and negotiation support',
      ],
    },
    {
      icon: RocketLaunchIcon,
      title: 'Scaling & Acceleration',
      description: 'Scale your startup with our proven acceleration programs and operational support.',
      features: [
        'Acceleration program participation',
        'Operational scaling support',
        'Technology infrastructure setup',
        'Team building and hiring',
        'Process optimization',
      ],
      process: [
        'Acceleration program enrollment',
        'Intensive growth phase support',
        'Operational scaling guidance',
        'Performance monitoring and optimization',
      ],
    },
    {
      icon: ChartBarIcon,
      title: 'Long-Term Growth Support',
      description: 'Ongoing support for sustained growth and market expansion beyond initial funding.',
      features: [
        'Strategic advisory services',
        'Market expansion support',
        'Partnership development',
        'Exit strategy planning',
        'Ongoing mentorship and guidance',
      ],
      process: [
        'Long-term strategic planning',
        'Market expansion strategy',
        'Partnership and alliance development',
        'Exit planning and execution',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Proven Track Record',
      description: '15+ years of experience with 95% success rate',
      icon: CheckCircleIcon,
    },
    {
      title: 'Comprehensive Support',
      description: 'End-to-end support from ideation to exit',
      icon: CheckCircleIcon,
    },
    {
      title: 'Expert Network',
      description: 'Access to 500+ industry experts and mentors',
      icon: CheckCircleIcon,
    },
    {
      title: 'Flexible Programs',
      description: 'Customized programs based on your specific needs',
      icon: CheckCircleIcon,
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
              Our Services
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Comprehensive support for every stage of your entrepreneurial journey, 
              from initial idea to market leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              Complete Startup Support
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Our integrated approach ensures you have everything you need to build a successful business.
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-orange" />
                    </div>
                    <h3 className="text-3xl font-bold text-charcoal">{service.title}</h3>
                  </div>
                  <p className="text-lg text-medium-gray mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-charcoal mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-medium-gray">
                          <CheckCircleIcon className="h-5 w-5 text-success-green mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button size="lg">
                    Learn More
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="p-8">
                    <h4 className="text-xl font-semibold text-charcoal mb-6">Our Process:</h4>
                    <div className="space-y-4">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <div className="w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          <p className="text-medium-gray">{step}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Ravora Ventures?
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              We provide more than just funding - we offer comprehensive support that makes the difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-success-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-success-green" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {benefit.title}
                </h3>
                <p className="text-medium-gray leading-relaxed">
                  {benefit.description}
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help accelerate your startup's growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Schedule a Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                View Our Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
