'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_2r8ni7b';
      const templateId = 'template_ssw1wc8';
      const publicKey = 'OZ4FY3xynmHsfpSnk';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        // Alternative variable names that might be expected
        from_name: formData.name,
        from_email: formData.email,
        user_message: formData.message,
      };

      // Initialize EmailJS with public key
      emailjs.init(publicKey);
      
      console.log('Sending email with params:', templateParams);
      
      // Send email
      const result = await emailjs.send(serviceId, templateId, templateParams);
      
      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 bg-[var(--background)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          } mb-4`}>
            Get In Touch
          </h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Feel free to reach out for collaborations, opportunities, or just a friendly hello!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Add hidden spam protection field */}
            <input type="text" name="_gotcha" className="hidden" />

            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } mb-2`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700 text-gray-300' 
                    : 'bg-white border-gray-100 text-gray-700'
                } rounded-2xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400`}
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } mb-2`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700 text-gray-300' 
                    : 'bg-white border-gray-100 text-gray-700'
                } rounded-2xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400`}
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } mb-2`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700 text-gray-300' 
                    : 'bg-white border-gray-100 text-gray-700'
                } rounded-2xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400`}
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-5 h-5" />
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-500 text-sm text-center mt-4">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm text-center mt-4">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;