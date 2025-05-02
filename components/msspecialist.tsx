import Image from "next/image";

const SpecialistSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image src="/images/specialist.jpg" alt="Fejiro Adaka" width={300} height={300} className="rounded-lg mx-auto" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-500 uppercase">Our Specialist</p>
          <h3 className="text-2xl font-semibold">Fejiro Adaka</h3>
          <p className="text-gray-600">Guidance Counsellor</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-teal-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook Icon */}
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-teal-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Twitter Icon */}
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="text-teal-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Instagram Icon */}
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.97 1.826 5.354.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.155 3.384 1.898 5.071 5.282 5.226C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 3.384-.155 5.071-1.898 5.226-5.282C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.668-.072-4.948-.155-3.384-1.898-5.071-5.282-5.226C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-teal-600">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialistSection;