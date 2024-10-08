import React, { useState } from "react"; // Import useState
import logo from "../../assets/EmpowerHer-logo.png"; // Adjust the path as needed

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-5 w-full">
      {/* Container for content */}
      <div className="max-w-screen-l mx-auto flex items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Empower Her Energy Logo"
            className="w-44 h-12" // Responsive width and height
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 items-center">
          {/* Home */}
          <li className="text-black font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity"
           onClick={() => (window.location.href = "/")}>Home</li>

          {/* Programs & Initiatives */}
          <li
            className="text-[#7A89C2] font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => (window.location.href = "/programs-initiatives")}
          >
            Programs & Initiatives
          </li>

          {/* Get Involved */}
          <li
            className="text-[#7A89C2] font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => (window.location.href = "/get-involved")}
          >
            Get Involved
          </li>

          {/* Discover Her */}
          <li
            className="text-[#7A89C2] font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => (window.location.href = "/discover-her")}
          >
            Discover Her
          </li>

          {/* Contact Us */}
          <li
            className="text-[#7A89C2] font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => (window.location.href = "/contact-us")}
          >
            Contact Us
          </li>
        </ul>

        {/* Login Button */}
        <button
          className="bg-gradient-to-r from-gray-700 to-[#7A89C2] text-white py-1.5 px-4 sm:px-8 border border-[#7A89C2] rounded-[15px] hover:bg-gradient-to-l transition-all"
          onClick={() => (window.location.href = "/login")}
        >
          <span className="font-semibold text-lg">Login</span>
        </button>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-[#7A89C2] focus:outline-none"
            aria-label="Open Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && ( // Render mobile menu based on state
        <div className="md:hidden">
          <ul className="flex flex-col gap-5 mt-5 px-4 sm:px-8">
            <li className="text-black font-normal text-lg leading-[24.3px] cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}> {/* Close menu on click */}
              Home
            </li>
            <li
              className="text-[#7A89C2] font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = "/programs-initiatives";
              }}
            >
              Programs & Initiatives
            </li>
            <li
              className="text-[#7A89C2] font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = "/get-involved";
              }}
            >
              Get Involved
            </li>
            <li
              className="text-[#7A89C2] font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = "/discover-her";
              }}
            >
              Discover Her
            </li>
            <li
              className="text-[#7A89C2] font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = "/contact-us";
              }}
            >
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
