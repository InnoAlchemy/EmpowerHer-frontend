
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/EmpowerHer-logo.png";
import UserMenu from "../profile-icon-menu"; // Adjust path accordingly

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);

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

  return (
    <nav className="bg-white shadow-md py-5 w-full">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={logo}
              alt="Empower Her Energy Logo"
              className="w-44 h-12"
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 items-center">
          {/* Home */}
          <li className="font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black"
                  : "text-[#7A89C2]"
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
                isActive
                  ? "text-black"
                  : "text-[#7A89C2]"
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
                isActive
                  ? "text-black"
                  : "text-[#7A89C2]"
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
                isActive
                  ? "text-black"
                  : "text-[#7A89C2]"
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
                isActive
                  ? "text-black"
                  : "text-[#7A89C2]"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Conditional Rendering: UserMenu or Login Button */}
        {isLoggedIn ? (
          <UserMenu
            userEmail={userEmail}
            profileImage={profileImage}
          />
        ) : (
          <NavLink to="/login">
            <button className="bg-gradient-to-r from-gray-700 to-[#7A89C2] text-white py-1.5 px-4 sm:px-8 border border-[#7A89C2] rounded-[15px] hover:bg-gradient-to-l transition-all">
              <span className="font-semibold text-lg">Login</span>
            </button>
          </NavLink>
        )}

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-[#7A89C2] focus:outline-none"
            aria-label="Open Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
      {isMobileMenuOpen && (
        <div className="md:hidden">
          {/* Mobile navigation menu goes here */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
