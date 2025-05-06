import Image from "next/image";
import Link from "next/link"

const BooksSection: React.FC = () => {
  return (
    <section className="bg-teal-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Get the newest collection of our books</h2>
          <p className="text-lg mb-6">
            Take charge of your mind, emotions and actions. <br />
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
          </p>
          <Link href='/resources/books'>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            See More Books
          </button>
          </Link>
        </div>
        {/*<div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>*/}
      </div>
    </section>
  );
};

export default BooksSection;

