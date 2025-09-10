import React from 'react';
import { motion } from 'framer-motion';
// Unused icon imports removed to resolve ESLint errors

function OurApproach() {

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
