import Image from "next/image";

const services = [
  {
    title: "Singles",
    description: "Elevate your personal growth and attain clarity with dedicated coaching tailored for singles, as seasoned relationship coach...",
    image: "/ms1.png",
  },
  {
    title: "Individual Coaching",
    description: "Our tailored one-on-one coaching sessions help you identify and overcome personal barriers, empowering you to evolve into the best version of...",
    image: "/ms1.png",
  },
  {
    title: "Dating Clarity for Relationships",
    description: "Are you ready to attract and build meaningful relationships? Our Clarity sessions are designed to help you understand your patterns...",
    image: "/ms1.png",
  },
  {
    title: "Premarital Counseling (Marriage Preparatory)",
    description: "Preparing for marriage is a significant step, our premarital counseling program offers comprehensive guidance to ensure you and...",
    image: "/ms1.png",
  },
  {
    title: "Married Coaching",
    description: "Marriage is a continuous journey of growth and connection. Our dedicated coaching focuses on enhancing...",
    image: "/ms1.png",
  },
  {
    title: "Couples Coaching",
    description: "Couples Coaching is designed to help partners navigate challenges together to strengthen their relationships and...",
    image: "/ms1.png",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Transform Your <span className="text-teal-700">Marriage Today</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div key={index} className="bg-teal-50 p-6 text-left">
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={100}
                className="rounded-full mx-50 my-50 mb-4 "
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/** <button className="text-yellow-500 font-semibold hover:underline">
                 Read More
               </button> **/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;



// import Image from "next/image";

// const services = [
//   {
//     title: "Singles",
//     description: "Elevate your personal growth and attain clarity with dedicated coaching tailored for singles, as seasoned relationship coach...",
//     image: "/images/service1.jpg",
//   },
//   {
//     title: "Individual Coaching",
//     description: "Our tailored one-on-one coaching sessions help you identify and overcome personal barriers, empowering you to evolve into the best version of...",
//     image: "/images/service2.jpg",
//   },
//   {
//     title: "Dating Clarity for Relationships",
//     description: "Are you ready to attract and build meaningful relationships? Our Clarity sessions are designed to help you understand your patterns...",
//     image: "/images/service3.jpg",
//   },
//   {
//     title: "Premarital Counseling (Marriage Preparatory)",
//     description: "Preparing for marriage is a significant step, our premarital counseling program offers comprehensive guidance to ensure you and...",
//     image: "/images/service4.jpg",
//   },
//   {
//     title: "Married Coaching",
//     description: "Marriage is a continuous journey of growth and connection. Our dedicated coaching focuses on enhancing...",
//     image: "/images/service5.jpg",
//   },
//   {
//     title: "Couples Coaching",
//     description: "Couples Coaching is designed to help partners navigate challenges together to strengthen their relationships and...",
//     image: "/images/service6.jpg",
//   },
// ];

// const ServicesSection: React.FC = () => {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-4">
//           Transform Your <span className="text-teal-500">Marriage Today</span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
//               <Image src={service.image} alt={service.title} width={100} height={100} className="rounded-full mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-600 mb-4">{service.description}</p>
//               <button className="text-teal-500 font-semibold hover:underline">Read More</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;