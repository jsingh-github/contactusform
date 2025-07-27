import React, { useState } from 'react';
import { Mail, Phone, MapPin, User, MessageSquare, ChevronDown, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    reason: '',
    subject: '',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const reasons = [
    'General Inquiry',
    'Technical Support',
    'Sales Question',
    'Partnership Opportunity',
    'Feedback',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReasonSelect = (reason) => {
    setFormData(prev => ({
      ...prev,
      reason: reason
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E8E2D4' }}>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our services, need assistance, or just want to say hello, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Cards - Left Side */}
          <div className="space-y-6 lg:order-1">
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CC785C' }}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-1">Email Us</h3>
                  <p className="text-gray-600">hello@company.com</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B8956B' }}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A67B5B' }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-1">Visit Us</h3>
                  <div className="text-gray-600">
                    <p>123 Business Street</p>
                    <p>Suite 100</p>
                    <p>City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="bg-white rounded-2xl p-8 shadow-lg lg:order-2">
            <h2 className="text-2xl font-semibold text-black mb-2">Send us a message</h2>
            <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="flex items-center text-black font-medium mb-2">
                    <User className="w-4 h-4 mr-2" style={{ color: '#CC785C' }} />
                    Full Name <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      focusRingColor: '#CC785C',
                      '--tw-ring-color': '#CC785C'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#CC785C';
                      e.target.style.boxShadow = `0 0 0 3px rgba(204, 120, 92, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D4D4D4';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="flex items-center text-black font-medium mb-2">
                    <Mail className="w-4 h-4 mr-2" style={{ color: '#CC785C' }} />
                    Email Address <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#CC785C';
                      e.target.style.boxShadow = `0 0 0 3px rgba(204, 120, 92, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D4D4D4';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Contact Reason */}
              <div>
                <label className="flex items-center text-black font-medium mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" style={{ color: '#CC785C' }} />
                  What are you contacting us about? <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      backgroundColor: '#FAFAF7',
                      borderColor: '#E5E4DF'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#CC785C';
                      e.target.style.boxShadow = `0 0 0 3px rgba(204, 120, 92, 0.1)`;
                    }}
                    onBlur={(e) => {
                      setTimeout(() => {
                        e.target.style.borderColor = '#E5E4DF';
                        e.target.style.boxShadow = 'none';
                      }, 200);
                    }}
                  >
                    <span className={formData.reason ? 'text-black' : 'text-gray-500'}>
                      {formData.reason || 'Select a reason'}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                      {reasons.map((reason, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleReasonSelect(reason)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:bg-gray-50"
                        >
                          {reason}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="flex items-center text-black font-medium mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" style={{ color: '#CC785C' }} />
                  Subject <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#CC785C';
                    e.target.style.boxShadow = `0 0 0 3px rgba(204, 120, 92, 0.1)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D4D4D4';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center text-black font-medium mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" style={{ color: '#CC785C' }} />
                  Message <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#CC785C';
                    e.target.style.boxShadow = `0 0 0 3px rgba(204, 120, 92, 0.1)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D4D4D4';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                style={{ 
                  backgroundColor: '#CC785C',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#B84D43';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#CC785C';
                }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
