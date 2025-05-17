import React from 'react';

const SecuritySolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/business-growth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        {/* Content */}
        <div className="relative z-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Survive. Thrive. Lead.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Protect Your Business, Unleash Your Growth.
          </p>
          <a
            href="#cta"
            className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Your Path to Transformation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Survive */}
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Survive
              </h3>
              <p className="text-gray-700">
                Feel secure knowing your business is protected from cyber threats. Our AI-driven cybersecurity solutions detect and neutralize risks, so you can focus on what matters.
              </p>
            </div>
            {/* Thrive */}
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Thrive
              </h3>
              <p className="text-gray-700">
                Scale with confidence using our cloud solutions. Store, manage, and access your data seamlessly, empowering your team to work smarter and grow faster.
              </p>
            </div>
            {/* Lead */}
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Lead
              </h3>
              <p className="text-gray-700">
                Innovate with AI that predicts trends, optimizes operations, and positions you as a leader in your industry. Be the business others aspire to become.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Story Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/images/business-owner.jpg"
              alt="Business owner smiling confidently"
              className="w-full h-96 object-cover rounded-md"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Fear to Fearless
            </h2>
            <p className="text-gray-700 mb-4">
              “I nearly lost everything to a cyberattack. Bpurple’s solutions protected my data, streamlined my operations with cloud storage, and gave me AI insights to grow. Now, I lead my industry with confidence.”
            </p>
            <p className="text-gray-700 font-semibold">
              — John, Small Business Owner
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 px-4 md:px-8 bg-indigo-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Survive, Thrive, and Lead?
          </h2>
          <p className="text-lg mb-8">
            Take the first step toward a secure, scalable, and innovative future.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-600 py-3 px-6 rounded-md hover:bg-gray-200 transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-gray-900 text-white text-center">
        <p className="text-sm">
          © 2025 Bpurple Technology. All Rights Reserved.
        </p>
        <div className="mt-4">
          <a href="/contact" className="text-indigo-400 hover:underline mx-2">
            Contact Us
          </a>
          <a href="/privacy" className="text-indigo-400 hover:underline mx-2">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SecuritySolutions;