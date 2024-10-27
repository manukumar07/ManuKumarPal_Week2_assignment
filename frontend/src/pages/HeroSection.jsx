import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[60vh] w-full"
      style={{ backgroundImage: "url('/traveljournal.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col justify-center items-center h-full max-w-4xl mx-auto text-center text-white">
        <h1
          className="text-5xl font-extrabold mb-4 animate-fade-in"
          style={{ color: "#F2C14E" }}
        >
          Start Your Journey
        </h1>
        <p className="mt-4 text-xl font-bold" style={{ color: "#F7F7FF" }}>
          Explore the world and share your adventures with us.
        </p>
        <Link
          to="/add-entry"
          className="mt-8 bg-[#F2C14E] text-white py-2 px-4 rounded shadow-lg hover:bg-[#F39C12] transition duration-300 font-extrabold"
          style={{ backgroundColor: "#F2C14E" }}
        >
          Add Your Entry
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
