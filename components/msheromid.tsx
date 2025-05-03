import React from "next/image"; // Note: Image is no longer used, but kept for potential future use

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
  <iframe
    className="absolute top-0 left-0 w-full h-full rounded-lg"
    src="https://www.youtube.com/embed/Wt6kfNDXN4g"
    title="Relationship Guidance Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
        </div>

        <div className="w-full md:w-1/2 text-justify md:text-left ml-6">
          <h1 className="text-4xl font-bold mb-4">
            Navigate Relationships with <span className="text-teal-500">Confidence & Clarity</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Every wife should glow in marriage and you should not be different. All that excitement before your wedding day doesn’t have to fly outside the window in marriage. Your relationship with your husband can grow even deeper, more exciting and blissful.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;