import React from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

function OurApproach() {
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
    <>
      {/* Hero Section */}
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

      {/* ...existing process and principles code... */}
    </>
  );
}

export default OurApproach;
