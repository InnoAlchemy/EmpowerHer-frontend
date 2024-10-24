import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi"; // Feather Icons for profile icon
import axios from "axios";

const UserMenu = ({ userEmail, profileImage }) => {
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [username, setUsername] = useState(""); // State to store the fetched username

  // Fetch the username from the API based on the userEmail
  useEffect(() => {
    if (userEmail) {
      axios
        .get(`http://localhost:8080/api/users/email/${userEmail}`)
        .then((response) => {
          setUsername(response.data.first_name + " " + response.data.last_name); // Assuming response contains first_name and last_name
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userEmail]);

  // Toggle UserMenu visibility
  const handleProfileClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  // Handle image error if the profile image fails to load
  const handleImageError = () => {
    setIsUserMenuOpen(false);
  };

  // Handle user logout logic
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("profileImage");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("profileImage");

    // Navigate directly to /home after removing the token without page refresh
    navigate("/home"); // Navigate to home after logout
  };

  return (
    <div className="relative">
      {/* Profile Image, Arrow Icon, and Toggle Menu */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={handleProfileClick}>
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
            onError={handleImageError} // Handle image load error
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <FiUser size={24} className="text-gray-700" /> {/* Icon with gray background */}
          </div>
        )}

        {/* Custom Arrow */}
        <div
          className={`w-0 h-0 ml-2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent ${
            isUserMenuOpen
              ? "border-t-[15px] border-t-[#7A89C2] rotate-180"
              : "border-b-[15px] border-b-[#7A89C2] rotate-0"
          } transition-transform duration-300`}
        ></div>
      </div>

      {/* Conditional Rendering of the Menu */}
      {isUserMenuOpen && (
        <div className="absolute left-[-70px] mt-8 w-56 rounded-lg shadow-lg bg-gray-50">
          <div className="rounded-t-lg p-4 text-[#7A89C2] text-center hover:bg-[#7A89C2] hover:text-white cursor-pointer p-2 rounded mb-2">
            {username || userEmail} {/* Display username if fetched, otherwise userEmail */}
          </div>
          {/* Line separator */}
          <hr className="my-2 border-t border-gray-300" />
            <div
              className="text-[#7A89C2] text-center hover:bg-[#7A89C2] hover:text-white cursor-pointer p-2 rounded mb-2"
              onClick={() => navigate("/profile")}
            >
              Settings
            </div>

            {/* Line separator */}
            <hr className="my-2 border-t border-gray-300" />

            <div
              className="text-[#AB2849] text-center hover:bg-[#7A89C2] hover:text-white cursor-pointer p-2 rounded-b-lg"
              onClick={handleLogout}
            >
              Log Out
            </div>
          
        </div>
      )}
    </div>
  );
};

export default UserMenu;
