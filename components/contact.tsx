"use client";

import React, { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // State for form submission status
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    // Log form data (replace with API call in a real app)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setError(null);

    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-2">
        {/* Heading */}
       {/* <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We’d love to hear from you! Fill out the form below.
          </p>
        </div>*/}

        {/* Form */}
        {submitted ? (
          <div className="text-center text-teal-600">
            <p>Thank you for your message! We’ll get back to you soon.</p>
            <button
              className="mt-4 text-blue-600 hover:underline"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;