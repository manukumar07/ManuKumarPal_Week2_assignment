import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#2D5F5D] text-[#F7F7FF]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold">
          <Link to="/">JournoTrip</Link>
        </div>

        {/* hamburger icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <AiOutlineClose className="w-8 h-8" />
            ) : (
              <GiHamburgerMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* navigation links */}
        <div className={`hidden md:flex items-center space-x-8`}>
          <Link to="/" className="hover:text-[#F2C14E] font-extrabold ">
            Home
          </Link>
          <Link
            to="/my-journal"
            className="hover:text-[#F2C14E] font-extrabold "
          >
            My-Journal
          </Link>
          <Link
            to="/add-entry"
            className="hover:text-[#F2C14E] font-extrabold "
          >
            Add-Entry
          </Link>
          <Link to="/explore" className="hover:text-[#F2C14E] font-extrabold ">
            Explore
          </Link>
          <Link to="/about" className="hover:text-[#F2C14E] font-extrabold ">
            About-us
          </Link>
        </div>
      </div>

      {/* mobile menu  */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-[#2D5F5D] mt-4`}
      >
        <Link
          to="/"
          className="block text-center py-2 hover:text-[#F78154] font-extrabold "
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/my-journal"
          className="block text-center py-2 hover:text-[#F78154] font-extrabold "
          onClick={toggleMenu}
        >
          My-Journal
        </Link>
        <Link
          to="/add-entry"
          className="block text-center py-2 hover:text-[#F78154] font-extrabold "
          onClick={toggleMenu}
        >
          Add-Entry
        </Link>
        <Link
          to="/explore"
          className="block text-center py-2 hover:text-[#F78154] font-extrabold "
          onClick={toggleMenu}
        >
          Explore
        </Link>
        <Link
          to="/about"
          className="block text-center py-2 hover:text-[#F78154] font-extrabold "
          onClick={toggleMenu}
        >
          About-us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
