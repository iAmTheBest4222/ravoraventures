import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  UsersIcon,
  TrophyIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

import Card from '../components/ui/Card';

const About = () => {
  const values = [
    {
      icon: HeartIcon,
      title: 'Passion for Innovation',
      description: 'We believe in the power of innovative ideas to transform industries and create lasting impact.',
    },
    {
      icon: UsersIcon,
      title: 'Entrepreneur-First',
      description: 'Every decision we make is guided by what\'s best for the entrepreneurs we serve.',
    },
    {
      icon: TrophyIcon,
      title: 'Excellence in Execution',
      description: 'We strive for excellence in everything we do, from due diligence to portfolio support.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Perspective',
      description: 'We bring international best practices while understanding local market dynamics.',
    },
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Foundation',
      description: 'Ravora Ventures was founded with a vision to democratize access to capital and mentorship for Indian entrepreneurs.',
    },
    {
      year: '2012',
      title: 'First Success',
      description: 'Our first portfolio company achieved a successful exit, validating our investment thesis and approach.',
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'We expanded our focus to include emerging sectors like fintech, healthtech, and cleantech.',
    },
    {
      year: '2018',
      title: 'Scale',
      description: 'Launched our accelerator program to support early-stage startups with comprehensive mentorship.',
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description: 'Adapted our processes for the digital age, enabling remote collaboration and virtual due diligence.',
    },
    {
      year: '2024',
      title: 'Future Ready',
  description: 'Positioned as India\'s leading venture capital firm.',
    },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & Managing Partner',
      description: 'Former investment banker with 20+ years of experience in venture capital and private equity.',
      image: '👨‍💼',
    },
    {
      name: 'Priya Sharma',
      position: 'Partner - Technology',
      description: 'Ex-Google engineer and serial entrepreneur with deep expertise in emerging technologies.',
      image: '👩‍💻',
    },
    {
      name: 'Amit Patel',
      position: 'Partner - Operations',
      description: 'Operations expert with a track record of scaling startups from seed to IPO.',
      image: '👨‍🔧',
    },
    {
      name: 'Sneha Reddy',
      position: 'Partner - Strategy',
      description: 'Former McKinsey consultant specializing in market strategy and business development.',
      image: '👩‍💼',
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
              About Ravora Ventures
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              We are more than just investors. We are partners in your success, 
              committed to building businesses that last and create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-charcoal mb-6">Our Mission</h2>
              <p className="text-lg text-medium-gray leading-relaxed mb-8">
                To empower entrepreneurs with the right tools, networks, and knowledge so they can create 
                businesses that last. We believe that every great idea deserves the opportunity to become 
                a great company.
              </p>
              <div className="bg-orange/10 p-6 rounded-xl border-l-4 border-orange">
                <p className="text-charcoal font-medium italic">
                  "We don't just invest in companies, we invest in people and their dreams."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-charcoal mb-6">Our Vision</h2>
              <p className="text-lg text-medium-gray leading-relaxed mb-8">
                To become India's most trusted ecosystem where startups and investors come together to 
                co-create impact-driven companies that shape the future of our economy and society.
              </p>
              <div className="bg-navy-blue/10 p-6 rounded-xl border-l-4 border-navy-blue">
                <p className="text-charcoal font-medium italic">
                  "Building tomorrow's unicorns, today."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              These principles guide everything we do and shape our relationships with entrepreneurs and investors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-medium-gray leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

  {/* Timeline (Our Journey) section removed as per requirements */}

  {/* Meet Our Team section removed as per requirements */}

      {/* Stats */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The results speak for themselves - our companies have created significant value and impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* 50+ Portfolio Companies stat removed as per requirements */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange mb-2">₹500Cr+</div>
              <div className="text-gray-300">Capital Deployed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
