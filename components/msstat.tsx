const StatsSection: React.FC = () => {
  return (
    <section className="bg-teal-500 text-white py-12">
      <div className="container mx-auto px-4 flex justify-around text-center">
        <div>
          <h3 className="text-4xl font-bold">100+</h3>
          <p>Happy Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">7+</h3>
          <p>Different Country</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">5+</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;