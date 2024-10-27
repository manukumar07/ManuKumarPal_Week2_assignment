const About = () => {
  return (
    <section className="bg-[#F7F7FF] text-[#3C3C3C] py-10 px-5 text-center mt-2">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">About-us</h1>
      <p className="text-lg md:text-xl text-[#7F8C8D] mb-5">
        Welcome to <span className="font-semibold">JournoTrip</span>, your
        ultimate travel journal application!
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold text-[#F2C14E] mb-4">
        Features
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#F2C14E] mb-2">
            ✈️ Easy Journal Entries
          </h3>
          <p className="text-[#7F8C8D]">
            Log your travels with a simple and intuitive interface.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#F2C14E] mb-2">
            📸 Photo Uploads
          </h3>
          <p className="text-[#7F8C8D]">
            Capture the sights and sounds of your travels visually, preserving
            them for future reminiscence.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#F2C14E] mb-2">
            🌍 Explore and Discover
          </h3>
          <p className="text-[#7F8C8D]">
            Browse entries from other travelers for inspiration and tips.
          </p>
        </div>

        {/* Feature Card 4 */}
        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#F2C14E] mb-2">
            📅 Organized by Date
          </h3>
          <p className="text-[#7F8C8D]">
            Keep your memories organized chronologically.
          </p>
        </div>

        {/* Feature Card 5 */}
        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#F2C14E] mb-2">
            👥 Community Engagement
          </h3>
          <p className="text-[#7F8C8D]">
            Engage with a community of travelers and share insights and advice.
          </p>
        </div>

        {/* Feature Card 6 */}
        <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#F2C14E] mb-2">
            📶 Offline Access
          </h3>
          <p className="text-[#7F8C8D]">
            Write and edit entries anytime, anywhere, ensuring you never miss a
            moment.
          </p>
        </div>
      </div>

      <p className="text-lg md:text-xl text-[#7F8C8D] mt-5">
        Join our community of travelers and start your journey today with{" "}
        <span className="font-semibold">JournoTrip</span>!
      </p>
    </section>
  );
};

export default About;
