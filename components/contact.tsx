"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@askmrzsparkles.com"; // Replace with your actual email address
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50 mb-10">
      {/* Left Column: Image */}
      <div className="relative">
        <Image
          src="/SINGLESPIC1.png" // Replace with your actual image path
          alt="Contact us illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Column: Contact Elements */}
      <div className="flex flex-col items-center justify-center gap-6 bg-teal-100 p-6">
        {/* Mail Icon */}
        <Mail
          className="w-16 h-16 md:w-20 md:h-20 text-teal-600"
          aria-hidden="true"
        />

        {/* Phone Number */}
        <a
          href="tel:+234 706 223 3111" // Replace with your actual phone number
          className="text-lg md:text-xl text-gray-900 hover:text-teal-600 transition-colors"
          aria-label="Call us"
        >
          +234 706 223 3111
        </a>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Link
            href="https://facebook.com/your-page" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <Facebook
              className="w-8 h-8 md:w-10 md:h-10 text-teal-600 hover:text-teal-700 transition-colors"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="https://instagram.com/your-page" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <Instagram
              className="w-8 h-8 md:w-10 md:h-10 text-teal-600 hover:text-teal-700 transition-colors"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="https://linkedin.com/company/your-page" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn page"
          >
            <Linkedin
              className="w-8 h-8 md:w-10 md:h-10 text-teal-600 hover:text-teal-700 transition-colors"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="https://twitter.com/your-page" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter page"
          >
            <Twitter
              className="w-8 h-8 md:w-10 md:h-10 text-teal-600 hover:text-teal-700 transition-colors"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Contact Button */}
        <button
          onClick={handleEmailClick}
          className="bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-full text-lg md:text-xl text-white font-semibold shadow-md transition-transform transform hover:scale-105"
          aria-label="Send us an email"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact;




// "use client";

// import React, { useState, FormEvent } from "react";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   subject: string;
//   message: string;
//   subscribe: boolean;
// }

// const CONVERTKIT_FORM_ID = "YOUR_FORM_ID"; // Replace with your ConvertKit Form ID
// const CONVERTKIT_API_URL = `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`;

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     subscribe: false,
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     // Basic validation
//     if (
//       !formData.name.trim() ||
//       !formData.email.trim() ||
//       !formData.subject.trim() ||
//       !formData.message.trim()
//     ) {
//       setError("Please fill out all required fields.");
//       return;
//     }

//     setError(null);
//     setLoading(true);

//     try {
//       // ConvertKit subscription if opted in
//       if (formData.subscribe) {
//         const payload = {
//           api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY, // Add your API key to env
//           email: formData.email,
//           first_name: formData.name,
//           fields: {
//             phone: formData.phone,
//             subject: formData.subject,
//             message: formData.message,
//           },
//         };

//         const res = await fetch(CONVERTKIT_API_URL, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         });

//         if (!res.ok) {
//           throw new Error("Failed to subscribe to newsletter.");
//         }
//       }

//       // Here you can also send form data to your backend or email service

//       setSubmitted(true);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//         subscribe: false,
//       });
//     } catch (err: any) {
//       setError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-lg w-full space-y-6">
//         <div>
//           <h2 className="text-center text-4xl font-extrabold text-gray-900">
//             Contact Us
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             We’d love to hear from you! Fill out the form below.
//           </p>
//         </div>

//         {submitted ? (
//           <div className="text-center text-teal-600">
//             <p>Thank you for your message! We’ll get back to you soon.</p>
//             <button
//               className="mt-4 text-teal-700 hover:underline"
//               onClick={() => setSubmitted(false)}
//             >
//               Send another message
//             </button>
//           </div>
//         ) : (
//           <form className="space-y-5" onSubmit={handleSubmit} noValidate>
//             {/* Name */}
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your full name"
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="your.email@example.com"
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="+1 (555) 123-4567"
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
//               />
//             </div>

//             {/* Subject */}
//             <div>
//               <label
//                 htmlFor="subject"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Subject <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="Subject of your message"
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Message <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Write your message here..."
//                 required
//                 className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
//               />
//             </div>

//             {/* Newsletter Subscription */}
//             <div className="flex items-center">
//               <input
//                 id="subscribe"
//                 name="subscribe"
//                 type="checkbox"
//                 checked={formData.subscribe}
//                 onChange={handleChange}
//                 className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
//               />
//               <label
//                 htmlFor="subscribe"
//                 className="ml-2 block text-sm text-gray-700 select-none"
//               >
//                 Subscribe to our newsletter
//               </label>
//             </div>

//             {/* Error Message */}
//             {error && (
//               <p className="text-red-600 text-center text-sm font-medium">{error}</p>
//             )}

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full flex justify-center py-2 px-4 rounded-md text-white font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
//                   loading ? "bg-teal-300 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700"
//                 }`}
//               >
//                 {loading ? "Sending..." : "Send Message"}
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Contact;
