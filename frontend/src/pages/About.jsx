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

  // timeline removed as it is unused

  // team removed as it is unused

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

          <div className="flex flex-wrap justify-center items-center gap-8 max-w-3xl mx-auto py-4">
            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md px-8 py-6 min-w-[180px] min-h-[100px] mx-2 my-2">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-1 text-center">₹500Cr+</div>
              <div className="text-medium-gray text-base md:text-lg font-medium text-center">Capital Deployed</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md px-8 py-6 min-w-[180px] min-h-[100px] mx-2 my-2">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-1 text-center">15+</div>
              <div className="text-medium-gray text-base md:text-lg font-medium text-center">Years Experience</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md px-8 py-6 min-w-[180px] min-h-[100px] mx-2 my-2">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-1 text-center">95%</div>
              <div className="text-medium-gray text-base md:text-lg font-medium text-center">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
