// UserMenu.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi"; // Feather Icons for profile icon
import axios from "axios";
import handleLogout from "../Helper-Functions/logout"; // Import the logout function
import { useUser } from "../Helper-Functions/UserContext";

const UserMenu = ({ userEmail}) => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for detecting outside clicks

  // Fetch user data from the API based on userEmail
  useEffect(() => {
    if (userEmail) {
      axios
        .get(`http://localhost:8080/api/users/email/${userEmail}`)
        .then((response) => {
          const userData = response.data;
          setUser({
            id: userData.id,
            username: `${userData.first_name} ${userData.last_name}`,
            membership: userData.membership,
            profile_picture: userData.profile_picture,
            country:userData.country,
            phone_number: userData.phone_number,
            job_title: userData.job_title,
            email: userData.email
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userEmail, setUser]);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle UserMenu visibility
  const handleProfileClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  // Handle image error if the profile image fails to load
  const handleImageError = () => {
    setIsUserMenuOpen(false);
  };

  // Navigate to the Profile page with user data
  const goToProfile = () => {
    navigate("/profile", { state: { username: user.username, membership: user.membership } });
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Image, Arrow Icon, and Toggle Menu */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleProfileClick}
      >
        {user.profile_picture ? (
          <img
            src={user.profile_picture}
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
        <div className="absolute left-[-80px] mt-10 w-56 rounded-lg shadow-lg bg-gray-50 z-50">
          {/* Dropdown Items */}
          <div
            className="rounded-t-lg p-4 text-[#7A89C2] text-center hover:bg-[#7A89C2] hover:text-white cursor-pointer"
            onClick={goToProfile} 
          >
            {user.username || userEmail} {/* Display username if fetched, otherwise userEmail */}
          </div>

          {/* Line separator */}
          <hr className="my-0 border-t border-gray-300" />

          <div
            className="w-full text-[#7A89C2] text-center hover:bg-[#7A89C2] hover:text-white cursor-pointer p-2"
            onClick={goToProfile} 
          >
            Settings
          </div>

          {/* Conditionally render Notifications and Chats for Corporate Membership */}
          {user.membership && user.membership.type === "corporate" && (
            <>
              {/* Line separator */}
              <hr className="my-0 border-t border-gray-300" />

              <div
                className="w-full text-[#7A89C2] text-center hover:bg-[#7A89C2] hover:text-white cursor-pointer p-2"
                onClick={() => navigate("/profile/profile-notifications")}
              >
                Notifications
              </div>

              {/* Line separator */}
              <hr className="my-0 border-t border-gray-300" />

              <div
                className="w-full text-[#7A89C2] text-center hover:bg-[#7A89C2] hover:text-white cursor-pointer p-2 rounded-b-lg"
                onClick={() => navigate("/profile/profile-chats")}
              >
                Chats
              </div>
            </>
          )}

          {/* If membership is not corporate, add Log Out as the last item */}
          {(!user.membership || user.membership.type !== "corporate") && (
            <>
              {/* Line separator */}
              <hr className="my-0 border-t border-gray-300" />

              <div
                className="w-full text-[#AB2849] text-center hover:bg-[#7A89C2] hover:text-white cursor-pointer p-2 rounded-b-lg"
                onClick={() => handleLogout()(navigate)}
              >
                Log Out
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
