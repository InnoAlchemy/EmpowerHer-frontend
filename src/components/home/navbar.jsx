import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/EmpowerHer-logo.png";
import UserMenu from "../profile-icon-menu"; // Adjust path accordingly
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger and close

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const mobileMenuRef = useRef(null); // Reference for detecting outside clicks

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
      const email = localStorage.getItem("email") || sessionStorage.getItem("email");
      const image = localStorage.getItem("profileImage") || sessionStorage.getItem("profileImage");

      if (token) {
        setIsLoggedIn(true);
        setUserEmail(email);
        setProfileImage(image);
      } else {
        setIsLoggedIn(false);
        setUserEmail("");
        setProfileImage(null);
      }
    };

    checkLoginStatus();

    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  // Toggle Mobile Menu visibility
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className="bg-white shadow-md py-4 w-full fixed top-0 left-0 z-40">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={logo}
              alt="Empower Her Energy Logo"
              className="w-40 h-12 object-contain"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-8 items-center">
          {/* Home */}
          <li className="font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-black" : "text-[#7A89C2]"
              }
            >
              Home
            </NavLink>
          </li>

          {/* Programs & Initiatives */}
          <li className="font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity">
            <NavLink
              to="/programs-initiatives"
              className={({ isActive }) =>
                isActive ? "text-black" : "text-[#7A89C2]"
              }
            >
              Programs & Initiatives
            </NavLink>
          </li>

          {/* Get Involved */}
          <li className="font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity">
            <NavLink
              to="/get-involved"
              className={({ isActive }) =>
                isActive ? "text-black" : "text-[#7A89C2]"
              }
            >
              Get Involved
            </NavLink>
          </li>

          {/* Discover Her */}
          <li className="font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity">
            <NavLink
              to="/discover-her"
              className={({ isActive }) =>
                isActive ? "text-black" : "text-[#7A89C2]"
              }
            >
              Discover Her
            </NavLink>
          </li>

          {/* Contact Us */}
          <li className="font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity">
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "text-black" : "text-[#7A89C2]"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Conditional Rendering: UserMenu or Login Button */}
        {isLoggedIn ? (
          <UserMenu userEmail={userEmail} profileImage={profileImage} />
        ) : (
          <NavLink to="/login">
            <button className="bg-gradient-to-r from-gray-700 to-[#7A89C2] text-white py-2 px-6 border border-[#7A89C2] rounded-full hover:bg-gradient-to-l transition-all">
              <span className="font-semibold text-lg">Login</span>
            </button>
          </NavLink>
        )}

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-[#7A89C2] focus:outline-none"
            aria-label="Toggle Menu"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out"
        >
          <ul className="flex flex-col items-center space-y-4 py-6">
            {/* Home */}
            <li className="w-full text-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full py-2 text-black bg-[#7A89C2] text-lg rounded transition-colors duration-200"
                    : "block w-full py-2 text-[#7A89C2] text-lg hover:bg-[#7A89C2] hover:text-white transition-colors duration-200"
                }
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                Home
              </NavLink>
            </li>

            {/* Programs & Initiatives */}
            <li className="w-full text-center">
              <NavLink
                to="/programs-initiatives"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full py-2 text-black bg-[#7A89C2] text-lg rounded transition-colors duration-200"
                    : "block w-full py-2 text-[#7A89C2] text-lg hover:bg-[#7A89C2] hover:text-white transition-colors duration-200"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Programs & Initiatives
              </NavLink>
            </li>

            {/* Get Involved */}
            <li className="w-full text-center">
              <NavLink
                to="/get-involved"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full py-2 text-black bg-[#7A89C2] text-lg rounded transition-colors duration-200"
                    : "block w-full py-2 text-[#7A89C2] text-lg hover:bg-[#7A89C2] hover:text-white transition-colors duration-200"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Involved
              </NavLink>
            </li>

            {/* Discover Her */}
            <li className="w-full text-center">
              <NavLink
                to="/discover-her"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full py-2 text-black bg-[#7A89C2] text-lg rounded transition-colors duration-200"
                    : "block w-full py-2 text-[#7A89C2] text-lg hover:bg-[#7A89C2] hover:text-white transition-colors duration-200"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Discover Her
              </NavLink>
            </li>

            {/* Contact Us */}
            <li className="w-full text-center">
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full py-2 text-black bg-[#7A89C2] text-lg rounded transition-colors duration-200"
                    : "block w-full py-2 text-[#7A89C2] text-lg hover:bg-[#7A89C2] hover:text-white transition-colors duration-200"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
