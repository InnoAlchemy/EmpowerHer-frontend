// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/EmpowerHer-logo.png"; // Adjust the path as needed
import { FaUserCircle } from "react-icons/fa"; // Import the desired React Icon

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(""); // Optional: Display user's email
  const [profileImage, setProfileImage] = useState(null); // URL or path to profile image

  useEffect(() => {
    // Function to check login status
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
      const email = localStorage.getItem("email") || sessionStorage.getItem("email");
      const image = localStorage.getItem("profileImage") || sessionStorage.getItem("profileImage"); // Assuming you store profile image URL

      if (token) {
        setIsLoggedIn(true);
        setUserEmail(email);
        setProfileImage(image); // Set profile image if available
      } else {
        setIsLoggedIn(false);
        setUserEmail("");
        setProfileImage(null);
      }
    };

    // Initial check
    checkLoginStatus();

    // Event listener for storage changes (e.g., login/logout in another tab)
    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    // Clear tokens and user data from both localStorage and sessionStorage
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("profileImage");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("profileImage");

    // Update state
    setIsLoggedIn(false);
    setUserEmail("");
    setProfileImage(null);

    // Navigate to home or login page
    navigate("/"); // Adjust as needed
  };

  // Function to handle image load error
  const handleImageError = () => {
    setProfileImage(null); // Remove the image if it fails to load
  };

  return (
    <nav className="bg-white shadow-md py-5 w-full">
      {/* Container for content */}
      <div className="max-w-screen-l mx-auto flex items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={logo}
              alt="Empower Her Energy Logo"
              className="w-44 h-12" // Responsive width and height
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

        {/* Conditional Rendering: Profile Image/Icon or Login Button */}
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            {/* Profile Image or Icon */}
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer object-cover"
                onClick={() => navigate("/profile")}
                onError={handleImageError} // Handle image load error
              />
            ) : (
              <FaUserCircle
                size={40}
                className="text-gray-700 cursor-pointer"
                onClick={() => navigate("/profile")}
              />
            )}

            {/* Optional: Display user's email */}
            {userEmail && (
              <span className="text-black font-normal text-lg leading-[24.3px]">
                {userEmail}
              </span>
            )}

            {/* Logout Button */}
            <button
              className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
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
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-5 mt-5 px-4 sm:px-8">
            <li className="font-normal text-lg leading-[24.3px] cursor-pointer">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "text-[#7A89C2] hover:opacity-80 transition-opacity"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity">
              <NavLink
                to="/programs-initiatives"
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "text-[#7A89C2]"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Programs & Initiatives
              </NavLink>
            </li>
            <li className="font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity">
              <NavLink
                to="/get-involved"
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "text-[#7A89C2]"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Involved
              </NavLink>
            </li>
            <li className="font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity">
              <NavLink
                to="/discover-her"
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "text-[#7A89C2]"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Discover Her
              </NavLink>
            </li>
            <li className="font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity">
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-black"
                    : "text-[#7A89C2]"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>

            {/* Conditional Rendering in Mobile Menu */}
            {isLoggedIn ? (
              <>
                <li className="font-normal text-lg leading-[24.3px] cursor-pointer">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black"
                        : "text-[#7A89C2]"
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </NavLink>
                </li>
                <li
                  className="text-red-500 font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleLogout();
                  }}
                >
                  Logout
                </li>
              </>
            ) : (
              <li className="font-normal text-lg leading-[24.3px] cursor-pointer hover:opacity-80 transition-opacity">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black"
                      : "text-[#7A89C2]"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
