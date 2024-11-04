import React, { useState } from "react";
import { FiUser, FiSearch, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useUser } from "../../Helper-Functions/UserContext";

const ProfileChats = () => {
  const { user } = useUser();
  const chatData = [
    { id: 1, name: "Name Example", description: "Business", message: "Hey [Name], hope you're doing well! Just came across your profile and thought I'd drop a quick message. How’s everything going on your end these days?", time: "5m" },
    { id: 2, name: "Name Example 2", description: "Business", message: "Hey [Name], hope you're doing well! Just came across your profile and thought I'd drop a quick message. How’s everything going on your end these days?", time: "10m" }
  ];
  const chatDataS = [
    { id: 1, name: "John Doe", description: "company-name", message: "Job-Title", time: "5m", status: "Connect" },
    { id: 2, name: "Jane Smith", description: "company-name", message: "Job-Title", time: "10m", status: "Requested" },
    { id: 3, name: "Alice Johnson", description: "company-name", message: "Job-Title", time: "15m", status: "Connect" },
    { id: 4, name: "Bob Brown", description: "company-name", message: "Job-Title", time: "20m", status: "Requested" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = chatDataS.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow flex flex-col space-y-6 p-4 sm:p-6 max-w-screen-xl mx-auto w-full">
        
        {/* Header with Chats title and Search Bar */}
        <div className="flex items-center space-x-4 w-full">
          <h1 className="font-cabin font-semibold text-[#7A89C2] text-2xl sm:text-3xl lg:text-4xl">
            Chat
          </h1>
         
          <div className="relative left-6 w-full max-w-[500px] lg:max-w-[739px]">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full h-10 sm:h-12 pl-10 pr-4 rounded-lg bg-[#7A89C226] text-gray-700 placeholder-gray-700 focus:outline-none"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
          </div>
        </div>
        
        {searchQuery ? (
            <FiArrowLeft
              onClick={clearSearch}
              className="text-[#7A89C2] cursor-pointer"
              size={24}
            />
          ) : null}
        
        {/* Profile Icon and Info */}
        {!searchQuery && (
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-4">
              <Link to="/profile/profile-view" className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300">
                <FiUser size={24} className="text-[#7A89C2]" />
              </Link>
              <div className="text-left">
                <span className="text-[#7A89C2] font-semibold text-base sm:text-lg">Name Example</span>
                <span className="text-[#7A89C2] ml-2 text-sm sm:text-base">Business</span>
              </div>
            </div>

            {/* Separator Line */}
            <div className="border-t border-[#7A89C2]"></div>
            <div className="flex items-center justify-center text-[#00000099] text-sm sm:text-base">Sep 17</div>
          </div>
        )}

        {/* Conditionally Rendered Chat Items */}
        <div className="space-y-4 mt-4">
          {searchQuery ? (
            filteredChats.length > 0 ? (
              filteredChats.map((chat) => (
                <div key={chat.id} className="flex items-center justify-between p-3 border-b border-[#7A89C2]">
                  <div className="flex items-center space-x-4">
                    <Link to="/profile/profile-view" className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300">
                      <FiUser size={24} className="text-[#7A89C2]" />
                    </Link>
                    <div>
                      <span className="text-[#00000099] font-semibold text-sm sm:text-base">{chat.name}</span>
                      <div className="flex space-x-2">
                        <span className="text-[#00000099] text-xs sm:text-sm">{chat.message}</span>
                        <span className="text-[#00000099] text-xs sm:text-sm">{chat.description}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className={`text-sm px-4 py-1 rounded-lg ${
                      chat.status === "Connect"
                        ? "bg-gradient-to-r from-[#2C3F87] to-[#7A89C2] text-white"
                        : chat.status === "Requested"
                        ? "bg-[#EADFE2] text-[#00000066]"
                        : "bg-gray-200 text-[#00000066]"
                    }`}
                  >
                    {chat.status}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No results found</p>
            )
          ) : (
            // Original Chat List when no search query
            <div className="space-y-4">
              {chatData.map((chat) => (
                <div key={chat.id} className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-100 rounded-md">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Link to="/profile/profile-view" className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300">
                      <FiUser size={20} className="text-[#7A89C2]" />
                    </Link>
                    <div>
                      <span className="text-[#00000099] font-semibold text-sm sm:text-base">{chat.name}</span>
                      <span className="text-[#00000099] ml-2 text-xs sm:text-sm">{chat.description}</span>
                      <p className="text-[#00000099] text-xs sm:text-sm">{chat.message}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs sm:text-sm">{chat.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Line with Reply and Sent Text */}
      <div className="border-t border-[#7A89C2]"></div>
      <div className="flex justify-between items-center mt-2 p-4 text-gray-700">
        <span className="text-[#00000099] text-sm sm:text-base">Reply</span>
        <span className="text-[#7A89C2] text-sm sm:text-base">Sent</span>
      </div>
    </div>
  );
};

export default ProfileChats;
