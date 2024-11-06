// src/contexts/SocketContext.js

import React, { createContext, useContext, useEffect } from "react";
import socket from "../socket";

// Create a Context for the Socket
const SocketContext = createContext();

// Create a Provider Component
export const SocketProvider = ({ children, userId }) => {
  useEffect(() => {
    if (userId) {
      // Join the user's specific room
      socket.emit("joinUserRoom", userId);
      console.log(`Joined user room: user_${userId}`);
    }

    // Cleanup on unmount
    return () => {
      if (userId) {
        socket.emit("leaveUserRoom", userId);
        console.log(`Left user room: user_${userId}`);
      }
      socket.disconnect();
    };
  }, [userId]);

  // Function to join a post room
  const joinPostRoom = (postId) => {
    socket.emit("joinPostRoom", postId);
    console.log(`Joined post room: post_${postId}`);
  };

  // Function to leave a post room
  const leavePostRoom = (postId) => {
    socket.emit("leavePostRoom", postId);
    console.log(`Left post room: post_${postId}`);
  };

  return (
    <SocketContext.Provider value={{ socket, joinPostRoom, leavePostRoom }}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom Hook to use the Socket
export const useSocket = () => {
  return useContext(SocketContext);
};
