import React from 'react';
import { motion } from 'framer-motion';
// Unused icon imports removed to resolve ESLint errors

const Home = () => {
  // features array removed as it is unused

  // ...existing code...

  const stats = [
    { number: '₹500Cr+', label: 'Capital Deployed' },
    { number: '15+', label: 'Years Experience' },
    { number: '95%', label: 'Success Rate' },
  ];

  return (
    <>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-light-gray via-white to-light-gray overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-navy-blue rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-success-green rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-tight">
              Where Ideas Meet
              <span className="text-orange block">Capital</span>
            </h1>
            <p className="text-xl md:text-2xl text-medium-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              Where Startups Become Stories. Empowering entrepreneurs with the right tools, 
              networks, and knowledge to create businesses that last.
            </p>
            
            {/* Removed Start Your Journey and Join Our Network CTAs as per requirements */}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                  {stat.number}
                </div>
                <div className="text-medium-gray text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-charcoal rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-charcoal rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
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
              How We Help You Succeed
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Our comprehensive approach ensures your startup has everything it needs to thrive in today's competitive market.
            </p>
          </motion.div>

          {/* Card feature grid removed as per requirements and to fix build error */}
        </div>
      </section>


  {/* Portfolio Highlights section removed as per requirements */}
  {/* CTA Section removed as per requirements */}
  </>
  );
};

export default Home;
