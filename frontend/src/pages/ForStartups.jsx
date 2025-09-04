import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LightBulbIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ForStartups = () => {
  const applicationProcess = [
    {
      step: 1,
      title: 'Initial Application',
      description: 'Submit your startup details and business plan',
      duration: '5 minutes',
      requirements: [
        'Company overview and mission',
        'Founder information and background',
        'Business model and revenue streams',
        'Market analysis and competition',
        'Funding requirements and use of funds',
      ],
    },
    {
      step: 2,
      title: 'Initial Review',
      description: 'Our team reviews your application and business model',
      duration: '1-2 weeks',
      requirements: [
        'Business model validation',
        'Market opportunity assessment',
        'Team evaluation',
        'Initial fit with our focus areas',
        'Preliminary due diligence',
      ],
    },
    {
      step: 3,
      title: 'Pitch Presentation',
      description: 'Present your startup to our investment committee',
      duration: '30 minutes',
      requirements: [
        '10-minute pitch presentation',
        'Q&A session with investors',
        'Financial projections and metrics',
        'Growth strategy and milestones',
        'Team and execution plan',
      ],
    },
    {
      step: 4,
      title: 'Due Diligence',
      description: 'Comprehensive evaluation of your startup',
      duration: '2-4 weeks',
      requirements: [
        'Financial and legal due diligence',
        'Market validation and customer interviews',
        'Technical assessment',
        'Team background verification',
        'Reference checks',
      ],
    },
    {
      step: 5,
      title: 'Investment Decision',
      description: 'Final decision and term sheet negotiation',
      duration: '1-2 weeks',
      requirements: [
        'Investment committee approval',
        'Term sheet preparation',
        'Legal documentation',
        'Funding completion',
        'Partnership agreement',
      ],
    },
  ];

  const benefits = [
    {
      icon: CurrencyDollarIcon,
      title: 'Funding Support',
      description: 'Access to seed and Series A funding from our network of investors',
      details: [
        'Seed funding: ₹10L - ₹2Cr',
        'Series A: ₹2Cr - ₹20Cr',
        'Follow-on funding support',
        'Investor network access',
      ],
    },
    {
      icon: UserGroupIcon,
      title: 'Mentorship Network',
      description: 'Connect with industry experts and successful entrepreneurs',
      details: [
        'One-on-one mentorship sessions',
        'Industry expert network',
        'Peer learning groups',
        'Regular progress reviews',
      ],
    },
    {
      icon: ChartBarIcon,
      title: 'Growth Acceleration',
      description: 'Structured programs to accelerate your startup\'s growth',
      details: [
        '3-month acceleration program',
        'Growth strategy development',
        'Market expansion support',
        'Operational scaling guidance',
      ],
    },
    {
      icon: LightBulbIcon,
      title: 'Strategic Guidance',
      description: 'Expert advice on business strategy and market positioning',
      details: [
        'Business model optimization',
        'Go-to-market strategy',
        'Partnership development',
        'Exit strategy planning',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'FinTechX',
      role: 'Founder & CEO',
      quote: 'Ravora Ventures didn\'t just provide funding, they became our true partners. Their mentorship and network helped us scale from 0 to 1M users in just 18 months.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      company: 'GreenEdge',
      role: 'Co-founder',
      quote: 'The acceleration program was game-changing. We went from idea to market-ready product in 6 months with their structured approach and expert guidance.',
      rating: 5,
    },
    {
      name: 'Sneha Reddy',
      company: 'HealthPlus',
      role: 'Founder',
      quote: 'Their focus on sustainable growth and long-term partnership has been invaluable. They\'ve been with us through every challenge and milestone.',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'What stage of startups do you invest in?',
      answer: 'We invest in early-stage startups from idea stage to Series A, with a focus on companies that have validated their product-market fit and are ready to scale.',
    },
    {
      question: 'What is the typical investment amount?',
      answer: 'Our investments range from ₹10L to ₹20Cr depending on the stage and needs of the startup. We typically lead or co-lead seed rounds and participate in Series A rounds.',
    },
    {
      question: 'How long does the application process take?',
      answer: 'The entire process typically takes 4-8 weeks from initial application to funding completion, depending on the complexity of due diligence required.',
    },
    {
      question: 'Do you provide ongoing support after investment?',
      answer: 'Yes, we provide comprehensive ongoing support including mentorship, strategic guidance, network access, and follow-on funding support throughout your growth journey.',
    },
    {
      question: 'What sectors do you focus on?',
      answer: 'We focus on Technology & AI, Clean Energy, FinTech, HealthTech, and Consumer sectors, with particular interest in companies solving real-world problems.',
    },
    {
      question: 'What makes a successful application?',
      answer: 'Successful applications typically have a strong founding team, validated market opportunity, clear business model, and alignment with our focus areas and investment thesis.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>For Startups - Ravora Ventures</title>
        <meta name="description" content="Apply to Ravora Ventures for funding, mentorship, and growth acceleration. Learn about our application process and startup support programs." />
        <meta property="og:title" content="For Startups - Ravora Ventures" />
        <meta property="og:description" content="Apply to Ravora Ventures for funding, mentorship, and growth acceleration. Learn about our application process and startup support programs." />
      </Helmet>

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
              For Startups
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to turn your innovative idea into a successful business? 
              We provide funding, mentorship, and the support you need to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Apply Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Download Application Guide
                <DocumentTextIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
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
              Application Process
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Our streamlined 5-step process makes it easy to apply and get the support you need.
            </p>
          </motion.div>

          <div className="space-y-12">
            {applicationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              >
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal">{step.title}</h3>
                      <p className="text-orange font-medium flex items-center">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        {step.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-medium-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <Card className="p-6">
                    <h4 className="font-semibold text-charcoal mb-4">Requirements:</h4>
                    <ul className="space-y-2">
                      {step.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-medium-gray">
                          <CheckCircleIcon className="h-4 w-4 text-success-green mr-3 flex-shrink-0" />
                          {requirement}
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

      {/* Benefits */}
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
              What You Get
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Comprehensive support beyond just funding to help your startup succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {benefit.title}
                </h3>
                <p className="text-medium-gray mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                <ul className="space-y-2 text-sm text-medium-gray">
                  {benefit.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>• {detail}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Hear from entrepreneurs who have built successful companies with our support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-orange fill-current" />
                  ))}
                </div>
                <blockquote className="text-medium-gray mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-orange text-sm">{testimonial.role}</div>
                  <div className="text-medium-gray text-sm">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Common questions about our application process and startup support.
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
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful entrepreneurs who have built their dreams with Ravora Ventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Start Application
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ForStartups;
