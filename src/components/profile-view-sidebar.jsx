import React, { useState } from "react";
import { FiCamera, FiEdit, FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useUser } from "../Helper-Functions/UserContext";
import ToastProvider from "../components/toasterMessages";
import facebookIcon from "../assets/facebook.png";
import instgram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const ProfileViewSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user } = useUser(); // Get the current logged-in user's info
  const navigate = useNavigate();
  const location = useLocation();
  const { id, username, email, profile_picture } = location.state || {};

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle sending a connection request
  const handleConnect = async () => {
    try {
      await axios.post("http://localhost:8080/api/chat/connect/request", {
        sender_id: user.id, // Current user's ID as sender
        receiver_id: id, // The passed-in ID as the receiver
      });

      toast.success("Connection request sent successfully!");
    } catch (error) {
      console.error("Error sending connection request:", error);
      toast.error("Something went wrong.");
    }
  };

  // Function to handle redirection to profile chats
  const handleChatRedirect = () => {
    navigate("/profile/profile-chats", {
      state: {
        id,
        username,
        email,
        profile_picture,
      },
    });
  };

  // Check if the current route is "/profile/profile-view"
  const isProfileViewRoute = location.pathname === "/profile/profile-view";

  return (
    <div className="relative">
      <ToastProvider />
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
          <div className="relative mb-6 mt-8 flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
              {profile_picture ? (
                <img
                  src={profile_picture}
                  alt={`${username}'s profile`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FiCamera className="w-10 h-10 text-[#4A227C]" />
              )}
            </div>
            <h2 className="text-xl font-semibold mt-4">{username || "No Username"}</h2>
            <p className="text-gray-300">{email || "No Email"}</p>
            <p className="text-gray-300">Business Name</p>

            {/* Connect and Chat Buttons */}
            <div className="flex flex-col items-center space-y-2 mt-6 w-full px-8">
              <button
                onClick={handleConnect}
                className="w-[100px] py-2 rounded-full bg-gradient-to-r from-[#4A227C] to-[#7A89C2] text-white font-semibold"
              >
                Connect
              </button>
              <button
                onClick={handleChatRedirect}
                className="w-[80px] py-2 rounded-full bg-gradient-to-r from-[#4A227C] to-[#7A89C2] text-white font-semibold"
              >
                Chat
              </button>
            </div>

            {/* Social Icons with border */}
            <div className="flex space-x-6 mt-6">
              <img className="text-xl" src={linkedin} alt="Linked in" />
              <img className="text-xl" src={instgram} alt="Instagram" />
              <img className="text-xl" src={facebookIcon} alt="Facebook" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileViewSidebar;
