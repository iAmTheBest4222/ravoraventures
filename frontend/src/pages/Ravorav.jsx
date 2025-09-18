import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

const initialState = {
  companyName: '',
  representativeName: '',
  dpiitCertificate: '',
  phone: '',
  yearEstablished: '',
  email: '',
  address: '',
  website: '',
  sector: '',
  briefCompany: '',
  briefProblem: '',
  briefTech: '',
  novelty: '',
  productStatus: '',
  trlStage: '',
  competitive: '',
  marketOpportunity: '',
  fundingRequired: '',
  fundingUse: '',
  otherFunding: '',
  valuation: '',
  registeredPrivateLimited: '',
};

const wordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;

const Ravorav = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.companyName) newErrors.companyName = 'Required';
    if (!form.representativeName) newErrors.representativeName = 'Required';
    if (!form.phone || !/^\d{10}$/.test(form.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!form.yearEstablished) newErrors.yearEstablished = 'Required';
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.address) newErrors.address = 'Required';
    if (!form.sector) newErrors.sector = 'Required';
    if (!form.briefCompany || wordCount(form.briefCompany) > 100) newErrors.briefCompany = 'Max 100 words';
    if (!form.briefProblem || wordCount(form.briefProblem) > 400) newErrors.briefProblem = 'Max 400 words';
    if (!form.briefTech || wordCount(form.briefTech) > 400) newErrors.briefTech = 'Max 400 words';
    if (!form.novelty || wordCount(form.novelty) > 200) newErrors.novelty = 'Max 200 words';
    if (!form.fundingRequired) newErrors.fundingRequired = 'Required';
    if (!form.fundingUse) newErrors.fundingUse = 'Required';
    if (!form.registeredPrivateLimited) newErrors.registeredPrivateLimited = 'Required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/ravorav-apply`,
          form
        );
        if (res.data.success) {
          setSubmitted(true);
        } else {
          setApiError('Submission failed. Please try again.');
        }
      } catch (err) {
        setApiError(err.response?.data?.error || 'Submission failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-white min-h-screen flex items-center justify-center">
        <Card className="max-w-xl mx-auto p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-orange mb-4">Thank you for applying!</h2>
          <p className="text-lg text-medium-gray mb-2">A confirmation email has been sent to your registered email ID.</p>
          <p className="text-medium-gray">We appreciate your interest. Our team will review your submission and get in touch soon.</p>
        </Card>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white min-h-screen flex items-center justify-center">
      <Card className="max-w-2xl w-full mx-auto p-8 shadow-lg">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-bold text-center text-orange mb-8">RavoraV Application Form</motion.h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Company name *</label>
              <input name="companyName" value={form.companyName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
              {errors.companyName && <span className="text-red-500 text-xs">{errors.companyName}</span>}
            </div>
            <div>
              <label className="block font-medium mb-2">Company representative's name *</label>
              <input name="representativeName" value={form.representativeName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
              {errors.representativeName && <span className="text-red-500 text-xs">{errors.representativeName}</span>}
            </div>
            <div>
              <label className="block font-medium mb-2">DPIIT Certificate Number</label>
              <input name="dpiitCertificate" value={form.dpiitCertificate} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
            </div>
            <div>
              <label className="block font-medium mb-2">Phone *</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" type="number" />
              {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
            </div>
            <div>
              <label className="block font-medium mb-2">Year of establishment *</label>
              <input name="yearEstablished" value={form.yearEstablished} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" type="number" />
              {errors.yearEstablished && <span className="text-red-500 text-xs">{errors.yearEstablished}</span>}
            </div>
            <div>
              <label className="block font-medium mb-2">Email ID *</label>
              <input name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" type="email" />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">Full postal address for correspondence *</label>
            <textarea name="address" value={form.address} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
            {errors.address && <span className="text-red-500 text-xs">{errors.address}</span>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Website</label>
              <input name="website" value={form.website} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
            </div>
            <div>
              <label className="block font-medium mb-2">Sector/Industry *</label>
              <input name="sector" value={form.sector} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
              {errors.sector && <span className="text-red-500 text-xs">{errors.sector}</span>}
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">Brief description of company (100 words) *</label>
            <textarea name="briefCompany" value={form.briefCompany} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" maxLength={800} />
            <span className="text-xs text-gray-500">{wordCount(form.briefCompany)}/100 words</span>
            {errors.briefCompany && <span className="text-red-500 text-xs">{errors.briefCompany}</span>}
          </div>
          <div>
            <label className="block font-medium mb-2">Brief description of the problem being addressed and the potential impact (400 words) *</label>
            <textarea name="briefProblem" value={form.briefProblem} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" maxLength={3200} />
            <span className="text-xs text-gray-500">{wordCount(form.briefProblem)}/400 words</span>
            {errors.briefProblem && <span className="text-red-500 text-xs">{errors.briefProblem}</span>}
          </div>
          <div>
            <label className="block font-medium mb-2">Brief description of the company's technology/product including technical details (400 words) *</label>
            <textarea name="briefTech" value={form.briefTech} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" maxLength={3200} />
            <span className="text-xs text-gray-500">{wordCount(form.briefTech)}/400 words</span>
            {errors.briefTech && <span className="text-red-500 text-xs">{errors.briefTech}</span>}
          </div>
          <div>
            <label className="block font-medium mb-2">Describe the novelty and innovation of the company’s product(s) (200 words) *</label>
            <textarea name="novelty" value={form.novelty} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" maxLength={1600} />
            <span className="text-xs text-gray-500">{wordCount(form.novelty)}/200 words</span>
            {errors.novelty && <span className="text-red-500 text-xs">{errors.novelty}</span>}
          </div>
          <div>
            <label className="block font-medium mb-2">Current status of the product(s)/R&D *</label>
            <textarea name="productStatus" value={form.productStatus} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
          </div>
          <div>
            <label className="block font-medium mb-2">Current TRL stage of your technology/product *</label>
            <select name="trlStage" value={form.trlStage} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange">
              <option value="">Select TRL Stage</option>
              <option value="1">TRL 1</option>
              <option value="2">TRL 2</option>
              <option value="3">TRL 3</option>
              <option value="4">TRL 4</option>
              <option value="5">TRL 5</option>
              <option value="6">TRL 6</option>
              <option value="7">TRL 7</option>
              <option value="8">TRL 8</option>
              <option value="9">TRL 9</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-2">Competitive landscape and differentiator of your product/technology</label>
            <textarea name="competitive" value={form.competitive} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
          </div>
          <div>
            <label className="block font-medium mb-2">Market opportunity of your product/technology</label>
            <textarea name="marketOpportunity" value={form.marketOpportunity} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Amount of funding required (in INR) *</label>
              <input name="fundingRequired" value={form.fundingRequired} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" type="number" />
              {errors.fundingRequired && <span className="text-red-500 text-xs">{errors.fundingRequired}</span>}
            </div>
            <div>
              <label className="block font-medium mb-2">What will the funding be used for? *</label>
              <textarea name="fundingUse" value={form.fundingUse} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
              {errors.fundingUse && <span className="text-red-500 text-xs">{errors.fundingUse}</span>}
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">Other funding sources till date (Please specify the name of the funding agency and the amount raised in INR)</label>
            <textarea name="otherFunding" value={form.otherFunding} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
          </div>
          <div>
            <label className="block font-medium mb-2">Current valuation of the company (in INR). Please specify how the valuation was done and if vetted by CA/financial expert. *</label>
            <textarea name="valuation" value={form.valuation} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange" />
          </div>
          <div>
            <label className="block font-medium mb-2">Registered as Private Limited *</label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="registeredPrivateLimited" value="Yes" checked={form.registeredPrivateLimited === 'Yes'} onChange={handleChange} required /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="registeredPrivateLimited" value="No" checked={form.registeredPrivateLimited === 'No'} onChange={handleChange} required /> No
              </label>
            </div>
            {errors.registeredPrivateLimited && <span className="text-red-500 text-xs">{errors.registeredPrivateLimited}</span>}
          </div>
          {apiError && <div className="text-red-500 text-center text-sm mb-2">{apiError}</div>}
          <div className="pt-8">
            <button type="submit" className="w-full py-3 px-6 bg-orange text-white font-bold rounded-lg shadow hover:bg-navy-blue transition-colors duration-200" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default Ravorav;
