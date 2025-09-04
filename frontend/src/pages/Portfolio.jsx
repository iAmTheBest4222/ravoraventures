import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GlobeAltIcon,
  ArrowRightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState(null);

  const filters = ['All', 'FinTech', 'CleanTech', 'HealthTech', 'EdTech', 'AI/ML'];

  const portfolioCompanies = [
    {
      id: 1,
      name: 'FinTechX',
      description: 'Revolutionizing digital payments across India with seamless, secure, and instant transactions.',
      industry: 'FinTech',
      stage: 'Series A',
      founded: '2022',
      employees: '50-100',
      location: 'Mumbai',
      website: 'https://fintechx.com',
      logo: '💳',
      funding: '₹25Cr',
      valuation: '₹150Cr',
      highlights: [
        '1M+ active users',
        '₹500Cr+ transaction volume',
        '99.9% uptime',
        'Banking partnerships',
      ],
      fullDescription: 'FinTechX is transforming the digital payments landscape in India with its innovative payment solutions. The company has built a comprehensive platform that enables seamless transactions for individuals and businesses.',
      metrics: {
        users: '1M+',
        revenue: '₹50Cr',
        growth: '300%',
        partnerships: '25+',
      },
    },
    {
      id: 2,
      name: 'GreenEdge',
      description: 'Building sustainable energy solutions for a cleaner future with innovative solar and wind technologies.',
      industry: 'CleanTech',
      stage: 'Seed',
      founded: '2023',
      employees: '20-50',
      location: 'Bangalore',
      website: 'https://greenedge.com',
      logo: '🌱',
      funding: '₹8Cr',
      valuation: '₹40Cr',
      highlights: [
        '50MW+ solar capacity',
        'Carbon neutral operations',
        'Government partnerships',
        'Rural electrification',
      ],
      fullDescription: 'GreenEdge is at the forefront of India\'s clean energy revolution, developing innovative solar and wind energy solutions that are both sustainable and cost-effective.',
      metrics: {
        capacity: '50MW+',
        projects: '100+',
        savings: '₹10Cr+',
        impact: '25K+',
      },
    },
    {
      id: 3,
      name: 'HealthPlus',
      description: 'Making healthcare accessible and affordable through telemedicine and AI-powered diagnostics.',
      industry: 'HealthTech',
      stage: 'Series A',
      founded: '2021',
      employees: '100-200',
      location: 'Delhi',
      website: 'https://healthplus.com',
      logo: '🏥',
      funding: '₹30Cr',
      valuation: '₹200Cr',
      highlights: [
        '500K+ consultations',
        'AI-powered diagnostics',
        'Rural healthcare access',
        'Insurance partnerships',
      ],
      fullDescription: 'HealthPlus is democratizing healthcare access in India through its comprehensive telemedicine platform, bringing quality healthcare to underserved communities.',
      metrics: {
        consultations: '500K+',
        doctors: '1000+',
        cities: '50+',
        satisfaction: '95%',
      },
    },
    {
      id: 4,
      name: 'EduTech Pro',
      description: 'Transforming education delivery with personalized learning and AI-driven content recommendations.',
      industry: 'EdTech',
      stage: 'Series B',
      founded: '2020',
      employees: '200-500',
      location: 'Hyderabad',
      website: 'https://edutechpro.com',
      logo: '📚',
      funding: '₹75Cr',
      valuation: '₹500Cr',
      highlights: [
        '1M+ students',
        'AI-powered learning',
        'Government contracts',
        'International expansion',
      ],
      fullDescription: 'EduTech Pro is revolutionizing education in India with its AI-powered learning platform that provides personalized education experiences for students of all ages.',
      metrics: {
        students: '1M+',
        courses: '500+',
        completion: '85%',
        countries: '10+',
      },
    },
    {
      id: 5,
      name: 'DataViz AI',
      description: 'Empowering businesses with AI-driven data analytics and visualization solutions.',
      industry: 'AI/ML',
      stage: 'Series A',
      founded: '2022',
      employees: '30-75',
      location: 'Pune',
      website: 'https://datavizai.com',
      logo: '🤖',
      funding: '₹20Cr',
      valuation: '₹120Cr',
      highlights: [
        'Enterprise clients',
        'Real-time analytics',
        'Predictive modeling',
        'Cloud integration',
      ],
      fullDescription: 'DataViz AI is helping businesses make data-driven decisions with its advanced AI-powered analytics platform that transforms complex data into actionable insights.',
      metrics: {
        clients: '100+',
        dataPoints: '1B+',
        accuracy: '98%',
        insights: '10K+',
      },
    },
    {
      id: 6,
      name: 'AgriTech Solutions',
      description: 'Revolutionizing agriculture with IoT sensors, AI analytics, and precision farming technologies.',
      industry: 'CleanTech',
      stage: 'Seed',
      founded: '2023',
      employees: '15-30',
      location: 'Chandigarh',
      website: 'https://agritechsolutions.com',
      logo: '🚜',
      funding: '₹5Cr',
      valuation: '₹25Cr',
      highlights: [
        'IoT sensor network',
        'Precision farming',
        'Farmer partnerships',
        'Yield optimization',
      ],
      fullDescription: 'AgriTech Solutions is transforming Indian agriculture with smart farming technologies that help farmers increase yields while reducing resource consumption.',
      metrics: {
        farmers: '10K+',
        acres: '50K+',
        yield: '+25%',
        savings: '₹5Cr+',
      },
    },
  ];

  const filteredCompanies = selectedFilter === 'All' 
    ? portfolioCompanies 
    : portfolioCompanies.filter(company => company.industry === selectedFilter);

  const portfolioStats = [
    {
      title: 'Total Companies',
      value: '50+',
      description: 'Portfolio companies across various sectors',
    },
    {
      title: 'Total Investment',
      value: '₹500Cr+',
      description: 'Capital deployed across all investments',
    },
    {
      title: 'Average IRR',
      value: '35%+',
      description: 'Internal rate of return on investments',
    },
    {
      title: 'Successful Exits',
      value: '15+',
      description: 'Companies with successful exits or IPOs',
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
              Our Portfolio
            </h1>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Discover the innovative companies we're proud to support and help grow. 
              Our portfolio represents the future of Indian entrepreneurship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Stats */}
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
              Portfolio Overview
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Our investment performance and portfolio impact in numbers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">{stat.value}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{stat.title}</h3>
                <p className="text-medium-gray">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Portfolio Grid */}
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
              Portfolio Companies
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto mb-8">
              Explore our diverse portfolio of innovative companies across different sectors and stages.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedFilter === filter
                      ? 'bg-orange text-white'
                      : 'bg-white text-charcoal hover:bg-orange/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 cursor-pointer hover:shadow-xl transition-all duration-300" onClick={() => setSelectedCompany(company)}>
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{company.logo}</div>
                    <h3 className="text-2xl font-bold text-charcoal mb-2">{company.name}</h3>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <span className="bg-orange/10 text-orange px-3 py-1 rounded-full">
                        {company.industry}
                      </span>
                      <span className="bg-navy-blue/10 text-navy-blue px-3 py-1 rounded-full">
                        {company.stage}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-medium-gray mb-6 leading-relaxed">
                    {company.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-medium-gray">Founded:</span>
                      <span className="text-charcoal font-medium">{company.founded}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-medium-gray">Funding:</span>
                      <span className="text-charcoal font-medium">{company.funding}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-medium-gray">Valuation:</span>
                      <span className="text-charcoal font-medium">{company.valuation}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-medium-gray">Location:</span>
                      <span className="text-charcoal font-medium">{company.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange hover:text-orange/80 transition-colors"
                    >
                      <GlobeAltIcon className="h-5 w-5" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Detail Modal */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-6xl mr-4">{selectedCompany.logo}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-charcoal">{selectedCompany.name}</h2>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="bg-orange/10 text-orange px-3 py-1 rounded-full text-sm">
                        {selectedCompany.industry}
                      </span>
                      <span className="bg-navy-blue/10 text-navy-blue px-3 py-1 rounded-full text-sm">
                        {selectedCompany.stage}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="text-medium-gray hover:text-charcoal transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Company Overview</h3>
                  <p className="text-medium-gray leading-relaxed mb-6">
                    {selectedCompany.description}
                  </p>

                  <h3 className="text-xl font-semibold text-charcoal mb-4">Key Highlights</h3>
                  <ul className="space-y-2">
                    {selectedCompany.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-medium-gray">
                        <div className="w-2 h-2 bg-orange rounded-full mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Key Metrics</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(selectedCompany.metrics).map(([key, value]) => (
                      <div key={key} className="bg-light-gray p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange mb-1">{value}</div>
                        <div className="text-sm text-medium-gray capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-charcoal mb-4">Company Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-medium-gray">Founded:</span>
                      <span className="text-charcoal font-medium">{selectedCompany.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-medium-gray">Employees:</span>
                      <span className="text-charcoal font-medium">{selectedCompany.employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-medium-gray">Location:</span>
                      <span className="text-charcoal font-medium">{selectedCompany.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-medium-gray">Funding:</span>
                      <span className="text-charcoal font-medium">{selectedCompany.funding}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-medium-gray">Valuation:</span>
                      <span className="text-charcoal font-medium">{selectedCompany.valuation}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={selectedCompany.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange hover:text-orange/80 transition-colors"
                    >
                      <GlobeAltIcon className="h-5 w-5 mr-2" />
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
              Want to Join Our Portfolio?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you're building something innovative that aligns with our focus areas, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Apply for Investment
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
