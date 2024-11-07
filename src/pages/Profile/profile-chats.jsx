import React, { useState, useEffect, useMemo } from "react";
import { FiUser, FiSearch, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Helper-Functions/UserContext";
import axios from "axios"; 
import { toast } from "react-hot-toast";
import ToastProvider from "../../components/toasterMessages";

const ProfileChats = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [searchData, setSearchData] = useState([]); // For search results
  const [messages, setMessages] = useState([]); // For all messages
  const [searchQuery, setSearchQuery] = useState("");
  const [connectionStatuses, setConnectionStatuses] = useState({});
  const [latestSearchedUser, setLatestSearchedUser] = useState(null);

  // Fetch search data based on searchQuery
  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/search?name=${searchQuery}`);
        setSearchData(response.data);

        if (response.data.length > 0) {
          setLatestSearchedUser(response.data[0]);
        }

        const statuses = {};
        for (const chat of response.data) {
          const statusResponse = await axios.post("http://localhost:8080/api/chat/status", {
            sender_id: user.id,
            receiver_id: chat.id,
          });
          statuses[chat.id] = statusResponse.data.status;
        }
        setConnectionStatuses(statuses);
      } catch (error) {
        console.error("Error fetching chat data or connection status:", error);
      }
    };

    if (searchQuery) {
      fetchChatData();
    } else {
      setSearchData([]);
    }
  }, [searchQuery, user.id]);

  // Fetch all messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/chat/all-messages/${user.id}`);
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
        toast.error("Error fetching messages.");
      }
    };

    fetchMessages();
  }, [user.id]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const handleConnect = async (receiverId) => {
    try {
      await axios.post("http://localhost:8080/api/chat/connect/request", {
        sender_id: user.id,
        receiver_id: receiverId,
      });

      setConnectionStatuses((prevStatuses) => ({
        ...prevStatuses,
        [receiverId]: "Requested",
      }));

      toast.success("Connection request sent successfully!");
    } catch (error) {
      console.error("Error sending connection request:", error);
      toast.error("Something went wrong.");
    }
  };

  // Helper function to group messages by date
  const groupMessagesByDate = (messages) => {
    return messages.reduce((groups, message) => {
      const date = new Date(message.date_time);
      const dateKey = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(message);
      return groups;
    }, {});
  };

  const groupedMessages = useMemo(() => groupMessagesByDate(messages), [messages]);

  return (
    <div className="flex flex-col min-h-screen">
      <ToastProvider />
      <div className="flex-grow flex flex-col space-y-6 p-4 sm:p-6 max-w-screen-xl mx-auto w-full">

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

        {searchQuery && (
          <FiArrowLeft
            onClick={clearSearch}
            className="text-[#7A89C2] cursor-pointer"
            size={24}
          />
        )}

        {!searchQuery && latestSearchedUser && (
          <div className="space-y-4 mt-4">
            <div 
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => navigate("/profile/profile-view", {
                state: {
                  id: latestSearchedUser.id,
                  username: `${latestSearchedUser.first_name} ${latestSearchedUser.last_name}`,
                  email: latestSearchedUser.email,
                  profile_picture: latestSearchedUser.profile_picture
                }
              })}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300">
                {latestSearchedUser.profile_picture ? (
                  <img
                    src={latestSearchedUser.profile_picture}
                    alt={`${latestSearchedUser.first_name} ${latestSearchedUser.last_name}`}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <FiUser size={24} className="text-[#7A89C2]" />
                )}
              </div>
              <div className="text-left">
                <span className="text-[#7A89C2] font-semibold text-base sm:text-lg">
                  {latestSearchedUser.first_name} {latestSearchedUser.last_name}
                </span>
                <span className="text-[#7A89C2] ml-2 text-sm sm:text-base">{latestSearchedUser.job_title || "Business"}</span>
              </div>
            </div>

            {/* Retain the horizontal line */}
            <div className="border-t border-[#7A89C2]"></div>
          </div>
        )}

        <div className="space-y-4 mt-4">
          {searchQuery ? (
            searchData.length > 0 ? (
              searchData.map((chat) => (
                <div key={chat.id} className="flex items-center justify-between p-3 border-b border-[#7A89C2]">
                  <div 
                    className="flex items-center space-x-4 cursor-pointer"
                    onClick={() => navigate("/profile/profile-view", {
                      state: {
                        id: chat.id,
                        username: `${chat.first_name} ${chat.last_name}`,
                        email: chat.email,
                        profile_picture: chat.profile_picture
                      }
                    })}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300">
                      {chat.profile_picture ? (
                        <img
                          src={chat.profile_picture}
                          alt={`${chat.first_name} ${chat.last_name}`}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <FiUser size={24} className="text-[#7A89C2]" />
                      )}
                    </div>
                    <div>
                      <span className="text-[#00000099] font-semibold text-sm sm:text-base">{chat.first_name} {chat.last_name}</span>
                      <div className="flex space-x-2">
                        <span className="text-[#00000099] text-xs sm:text-sm">{chat.job_title}</span> 
                        <span className="text-[#00000099] text-xs sm:text-sm">{chat.email}</span> 
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => connectionStatuses[chat.id] === "connect" && handleConnect(chat.id)}
                    className={`text-sm px-4 py-1 rounded-lg ${
                      connectionStatuses[chat.id] === "connect"
                        ? "bg-gradient-to-r from-[#2C3F87] to-[#7A89C2] text-white"
                        : connectionStatuses[chat.id] === "requested"
                        ? "bg-[#EADFE2] text-[#00000066]"
                        : "bg-gray-200 text-[#00000066]"
                    }`}
                  >
                    {connectionStatuses[chat.id] === "connect" ? "Connect" : "Requested"}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No results found</p>
            )
          ) : (
            <div className="space-y-4">
              {Object.keys(groupedMessages).length > 0 ? (
                Object.keys(groupedMessages).sort((a, b) => {
                  // Convert date strings back to Date objects for accurate sorting
                  const dateA = new Date(a);
                  const dateB = new Date(b);
                  return dateB - dateA; // Sort descending by date
                }).map((date) => (
                  <div key={date}>
                    <div className="flex justify-center my-4">
                      <span className="bg-[#7A89C2] text-white px-4 py-1 rounded-full text-sm sm:text-base">
                        {date}
                      </span>
                    </div>
                    {groupedMessages[date].map((chat) => (
                      <div key={chat.id} className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-100 rounded-md">
                        <div 
                          className="flex items-center space-x-3 sm:space-x-4 cursor-pointer"
                          onClick={() => navigate("/profile/profile-view", {
                            state: {
                              id: chat.id,
                              username: `${chat.sender?.first_name} ${chat.sender?.last_name}`,
                              email: chat.sender?.email
                            }
                          })}
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300">
                            {chat.sender && chat.sender.profile_picture ? (
                              <img
                                src={chat.sender.profile_picture}
                                alt={`${chat.sender.first_name} ${chat.sender.last_name}`}
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              <FiUser size={20} className="text-[#7A89C2]" />
                            )}
                          </div>
                          <div>
                            <span className="text-[#00000099] font-semibold text-sm sm:text-base">
                              {chat.sender?.first_name} {chat.sender?.last_name}
                            </span>
                            <span className="text-[#00000099] ml-2 text-xs sm:text-sm">{chat.sender?.job_title}</span>
                            <p className="text-[#00000099] text-xs sm:text-sm">{chat.content}</p>
                          </div>
                        </div>
                        <span className="text-gray-500 text-xs sm:text-sm">
                          {new Date(chat.date_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No messages available.</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-[#7A89C2]"></div>
      <div className="flex justify-between items-center mt-2 p-4 text-gray-700">
        <span className="text-[#00000099] text-sm sm:text-base">Reply</span>
        <span className="text-[#7A89C2] text-sm sm:text-base">Sent</span>
      </div>
    </div>
  );
};

export default ProfileChats;
