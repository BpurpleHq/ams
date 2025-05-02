import Image from "next/image";

const BooksSection: React.FC = () => {
  return (
    <section className="bg-teal-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Get the newest collection of our books</h2>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Order Now
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/herolady.png" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default BooksSection;