// src/pages/Profile/profile-notifications.jsx

import React, { useState, useEffect } from "react";
import { useUser } from "../../Helper-Functions/UserContext";
import { FiUser } from "react-icons/fi";
import axios from "axios";
import { useSocket } from "../../Helper-Functions/socket-context"; // Ensure correct import path

const ProfileNotifications = () => {
  const { user } = useUser();
  const { socket } = useSocket();
  
  const [notifications, setNotifications] = useState([]);
  const [selectedOption, setSelectedOption] = useState("general");

  // Fetch notifications from the backend API
  useEffect(() => {
    if (!user) return;

    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/notifications/user/${user.id}`);
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [user]);

  // Listen for real-time notifications via Socket.io
  useEffect(() => {
    if (!socket || !user) return;

    const handleNewNotification = (notification) => {
      // Prepend the new notification to the existing list
      setNotifications((prev) => [notification, ...prev]);
    };

    socket.on("newNotification", handleNewNotification);

    return () => {
      socket.off("newNotification", handleNewNotification);
    };
  }, [socket, user]);

  // Handler for selecting an option
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  // Handler for accepting a connection request
  const handleAccept = async (notif) => {
    try {
      const payload = {
        sender_id: notif.user.id,    // ID of the user who sent the connection request
        receiver_id: user.id,        // ID of the current user (receiver)
        action: "accept"
      };

      // Send POST request to respond to the connection request
      const response = await axios.post("http://localhost:8080/api/chat/connect/respond", payload);

      if (response.status === 200) {
        // Optionally, you can use the response data for more accurate state updates
        const updatedRequest = response.data.request;

        // Update the specific notification to reflect the accepted connection
        setNotifications((prevNotifications) =>
          prevNotifications.map((n) =>
            n.id === notif.id ? { ...n, isConnected: true } : n // Removed is_read: true
          )
        );
      } else {
        console.error("Failed to accept the connection request.");
        // Optionally, notify the user about the failure
      }
    } catch (error) {
      console.error("Error accepting connection request:", error);
      // Optionally, notify the user about the error
    }
  };

  // Filter notifications based on the selected type
  const filteredNotifications = notifications.filter((notif) => {
    if (selectedOption === "general") {
      return true; // Display all notifications in "General"
    }
    return notif.type === selectedOption;
  });


  return (
    <div className="flex flex-col space-y-6 p-4 sm:p-6 max-w-screen-xl mx-auto w-full">
      <h1 className="font-cabin font-semibold text-[#7A89C2] text-left text-3xl sm:text-4xl">
        Notifications
      </h1>

      <div className="flex flex-wrap space-x-2 text-lg font-semibold">
        {["general", "requests", "posts"].map((option, index) => (
          <React.Fragment key={option}>
            <button
              onClick={() => handleSelect(option)}
              className={`px-2 ${
                selectedOption === option ? "text-[#7A89C2]" : "text-[#00000066]"
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
            {index < 2 && <span className="text-[#7A89C2] hidden sm:inline-block">|</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Display filtered notifications based on the selected option */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 && <p>No notifications for this category.</p>}
        {filteredNotifications.map((notif) => (
          <div
            key={notif.id}
            className="flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-300 space-y-2 sm:space-y-0"
          >
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              {/* Display an icon based on notification type */}
              {notif.type === "shares" || notif.type === "views" ? (
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                  <FiUser size={24} className="text-gray-700" />
                </div>
              ) : (
                <img
                  src={notif.user.profile_picture || "https://via.placeholder.com/40"}
                  alt={notif.user.username}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div className="flex flex-col sm:flex-row sm:items-center w-full">
                <span className={`font-medium ${notif.is_read ? "text-[#00000099]" : "text-[#7A89C2]"}`}>
                  {notif.user.username}
                </span>
                <span className="font-medium text-[#00000099] ml-0 sm:ml-2">{notif.message}</span>
              </div>
            </div>
            {/* Display different actions based on notification type */}
            <div className="flex space-x-2">
              {(notif.type === "general" || notif.type === "shares" || notif.type === "views" || notif.type === "posts") && (
                <button
                  className="w-full sm:w-auto px-4 py-1 bg-gradient-to-r from-[#2C3F87] to-[#7A89C2] text-[#FFFFFF] rounded-md"
                  onClick={() => {
                    // Handle view navigation based on notification type
                    if (notif.type === "posts") {
                      // Example: Navigate to the event details page
                      window.location.href = `/profile/profile-posts?id=${notif.post_id}`;
                    } else if (notif.type === "shares" || notif.type === "views") {
                      // Example: Navigate to the discover her article page
                      window.location.href = `/profile/profile-posts?id=${notif.post_id}`;
                    } else {
                      // Handle other general notifications if necessary
                    }
                  }}
                >
                  View
                </button>
              )}
              {notif.type === "requests" && (
                <>
                  {/* If the connection is accepted, show "Connected" instead of buttons */}
                  {notif.isConnected ? (
                    <span className="px-4 py-1 bg-green-200 text-green-800 rounded-md font-semibold">
                      Connected
                    </span>
                  ) : (
                    <>
                      <button
                        className="w-full sm:w-auto px-4 py-1 bg-gradient-to-r from-[#2C3F87] to-[#7A89C2] text-[#FFFFFF] rounded-md"
                        onClick={() => handleAccept(notif)}
                      >
                        Accept
                      </button>
                      <button className="w-full sm:w-auto px-4 py-1 bg-[#EADFE2] text-[#00000066] rounded-md">
                        Reject
                      </button>
                    </>
                  )}
                </>
              )}
        
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileNotifications;
