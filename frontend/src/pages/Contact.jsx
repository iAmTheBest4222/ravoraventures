import React from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

import Card from '../components/ui/Card';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Office Address',
    details: [
      'New Delhi, India'
  // Address removed as per requirements
    ],
    },
  // Phone section removed as per requirements
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
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-charcoal mb-8">Get in Touch</h2>
            <p className="text-lg text-medium-gray text-center leading-relaxed mb-8 break-words">
              We're here to help you succeed. Whether you're an entrepreneur looking for funding or an investor seeking opportunities, we'd love to connect with you.<br />
              Please reach out to us directly at <a href="mailto:info@ravoraventures.com" className="text-orange font-semibold underline break-all">info@ravoraventures.com</a>.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="flex-1 p-6 flex flex-col items-center text-center shadow-md min-w-0 w-full max-w-lg min-h-[220px] md:min-h-[260px] break-words">
                  <div className="w-14 h-14 bg-orange/10 rounded-full flex items-center justify-center mb-4">
                    <info.icon className="h-7 w-7 text-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2 break-words">{info.title}</h3>
                  <div className="space-y-1 w-full">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-medium-gray break-words text-sm w-full whitespace-pre-line">{detail}</p>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            <span className="inline-block bg-orange/10 text-orange px-6 py-3 rounded-full font-medium text-center">
              Business Hours: Mon-Fri 9:00 AM - 6:00 PM IST
            </span>
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

    </>
  );
};

export default Contact;
