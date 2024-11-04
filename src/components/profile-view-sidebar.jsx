import React, { useState } from "react";
import { FiCamera, FiEdit, FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import facebookIcon from "../assets/facebook.png";
import instgram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const ProfileViewSidebar = ({ username = "Aysha Wright" }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Check if the current route is "/profile/profile-view"
  const isProfileViewRoute = location.pathname === "/profile/profile-view";

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="fixed top-[85px] left-0 z-50 bg-[#2C3F87] text-white p-2 rounded-md focus:outline-none md:hidden"
      >
        {isSidebarOpen ? <FiX size={14} /> : <FiMenu size={14} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full z-40 w-72 p-6 flex flex-col items-center bg-gradient-to-b from-[#2C3F87] to-[#7A89C2] text-white transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0`}
      >
        {isProfileViewRoute && (
          // Sidebar with social links for the "/profile/profile-view" route
          <div className="relative mb-6 mt-8 flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-purple-100 flex items-center justify-center">
              <FiCamera className="w-10 h-10 text-[#4A227C]" />
            </div>
            <h2 className="text-xl font-semibold mt-4">{username}</h2>
            <p className="text-gray-300">Small Business</p>
            <p className="text-gray-300">Business Name</p>

            {/* Connect and Chat Buttons */}
            <div className="flex flex-col items-center space-y-2 mt-6 w-full px-8">
              <button className="w-[100px] py-2 rounded-full bg-gradient-to-r from-[#4A227C] to-[#7A89C2] text-white font-semibold">
                Connect
              </button>
              <button className="w-[80px] py-2 rounded-full bg-gradient-to-r from-[#4A227C] to-[#7A89C2] text-white font-semibold">
                Chat
              </button>
            </div>

            {/* Social Icons with border */}
            <div className="flex space-x-6 mt-6">
              <img className="text-xl" src={linkedin} alt="Linked in" />
              <img className="text-xl" src={instgram} alt="insta" />
              <img className="text-xl" src={facebookIcon} alt="fb" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileViewSidebar;
