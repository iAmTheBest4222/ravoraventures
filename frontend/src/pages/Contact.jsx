import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
// import { contactAPI } from '../utils/api'; // Commented out since we're using simulated responses

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'startup',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For now, simulate success since backend isn't deployed yet
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        type: 'startup',
        message: '',
      });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Office Address',
    details: [
  // Address removed as per requirements
    ],
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: [
  // Phone number removed as per requirements
  'Mon-Fri: 9AM-6PM IST'
      ],
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: [
        'info@ravoraventures.com',
        'investments@ravoraventures.com',
        'partnerships@ravoraventures.com'
      ],
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 2:00 PM',
        'Sunday: Closed',
        'IST (Indian Standard Time)'
      ],
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to get a response?',
      answer: 'We typically respond to all inquiries within 24-48 hours during business days.',
    },
    {
      question: 'What information should I include in my application?',
      answer: 'Please include your company overview, business model, market analysis, team information, and funding requirements.',
    },
    {
      question: 'Do you invest in international startups?',
      answer: 'Currently, we focus on Indian startups, but we may consider international companies with strong India market potential.',
    },
    {
      question: 'What is your typical investment timeline?',
      answer: 'The entire process from application to funding typically takes 4-8 weeks, depending on due diligence requirements.',
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
              Contact Us
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Ready to start your entrepreneurial journey or join our investor network? 
              We'd love to hear from you and discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold text-charcoal mb-6">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-success-green/10 border border-success-green text-success-green px-4 py-3 rounded-lg mb-6 flex items-center"
                  >
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-warning-red/10 border border-warning-red text-warning-red px-4 py-3 rounded-lg mb-6 flex items-center"
                  >
                    <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                    Sorry, there was an error sending your message. Please try again.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-soft-gray rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-soft-gray rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-soft-gray rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all duration-200"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-charcoal mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-soft-gray rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all duration-200"
                      >
                        <option value="startup">Startup Application</option>
                        <option value="investor">Investor Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-soft-gray rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your project, idea, or how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-charcoal mb-6">Get in Touch</h2>
                  <p className="text-lg text-medium-gray leading-relaxed mb-8">
                    We're here to help you succeed. Whether you're an entrepreneur looking for funding 
                    or an investor seeking opportunities, we'd love to connect with you.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <info.icon className="h-6 w-6 text-orange" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-charcoal mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-medium-gray">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-medium-gray">
              Common questions about our investment process and partnership opportunities.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  {faq.question}
                </h3>
                <p className="text-medium-gray leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Located in the heart of New Delhi's business district, our office is easily accessible by public transport.
            </p>
          </motion.div>

          <Card className="p-8">
            <div className="bg-light-gray rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="h-16 w-16 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Interactive Map</h3>
                <p className="text-medium-gray">Map integration would go here</p>
                {/* Address removed as per requirements */}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
  {/* CTA Section removed as per requirements. Only Contact Us CTA remains elsewhere. */}
    </>
  );
};

export default Contact;
