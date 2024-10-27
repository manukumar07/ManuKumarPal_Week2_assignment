import {
  FaMapMarkerAlt,
  FaCameraRetro,
  FaUserFriends,
  FaHiking,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

const cardData = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Find Your Destination",
    description:
      "Search through countless travel destinations and find the perfect place for your next adventure.",
  },
  {
    icon: <FaCameraRetro />,
    title: "Capture Moments",
    description:
      "Document your travels with photos and share your unique experiences with others.",
  },
  {
    icon: <FaUserFriends />,
    title: "Connect with Travelers",
    description:
      "Join a community of travelers and share tips, advice, and stories with like-minded individuals.",
  },
  {
    icon: <FaHiking />,
    title: "Adventure Awaits",
    description:
      "Explore breathtaking landscapes and embark on thrilling adventures that will leave you inspired.",
  },
  {
    icon: <FaGlobe />,
    title: "Cultural Experiences",
    description:
      "Immerse yourself in diverse cultures and traditions around the globe for a richer travel experience.",
  },
  // {
  //   icon: <FaHeart />,
  //   title: "Create Lasting Memories",
  //   description:
  //     "Build unforgettable memories with loved ones while exploring new places and experiences together.",
  // },
];

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div className="flex justify-center mb-3">
        <div className="text-[#2D5F5D] text-4xl sm:text-5xl md:text-6xl">
          {icon}
        </div>
      </div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1">
        {title}
      </h2>
      <p className="text-[#7F8C8D] text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Explore = () => {
  return (
    <section className="bg-[#F7F7FF] text-[#3C3C3C] py-8 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Explore the World</h1>
      <p className="text-base sm:text-lg text-[#7F8C8D] mb-8">
        Discover new destinations and connect with fellow travelers.
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      {/* Add a Call to Action Button */}
      <div className="mt-8">
        <a
          href="/explore"
          className="bg-[#2D5F5D] text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-[#F78154] transition duration-300"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
};

export default Explore;
