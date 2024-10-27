import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F7F7FF] text-[#3C3C3C] py-8 px-4 md:px-8 mt-2">
        <div className="max-w-1xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to="/">
                <h1 className="text-2xl font-bold text-[#2D5F5D]">
                  JournoTrip
                </h1>
              </Link>

              <p className="text-md mb-2 mt-2">
                A platform to inspire and be inspired by journeys around the
                world.
              </p>
              <Link
                to="/about"
                className="text-[#3C3C3C] hover:text-[#F2C14E] font-bold"
              >
                Learn More
              </Link>
            </div>

            {/* Links Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#2D5F5D] mb-4">
                Quick Links
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-[#3C3C3C] hover:text-[#F2C14E]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/explore"
                    className="text-[#3C3C3C] hover:text-[#F2C14E]"
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[#3C3C3C] hover:text-[#F2C14E]"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#2D5F5D] mb-4">
                Follow Us
              </h2>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3C3C3C] hover:text-[#F2C14E]"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3C3C3C] hover:text-[#F2C14E]"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3C3C3C] hover:text-[#F2C14E]"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3C3C3C] hover:text-[#F2C14E]"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-4 border-t border-[#E5E7EB] pt-4 text-center text-md text-[#2D5F5D] font-bold">
            <p>
              &copy; {new Date().getFullYear()} JournoTrip. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
