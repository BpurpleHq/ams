const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h2>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your Email"
            className="border border-gray-300 rounded-l-full px-4 py-2 w-64 focus:outline-none"
          />
          <button className="bg-teal-500 text-white px-6 py-2 rounded-r-full hover:bg-teal-600">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;