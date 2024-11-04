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
      socket.emit("joinRoom", userId);
      console.log(`Joined room: user_${userId}`);
    }

    // Cleanup on unmount
    return () => {
      if (userId) {
        socket.emit("leaveRoom", userId);
        console.log(`Left room: user_${userId}`);
      }
      socket.disconnect();
    };
  }, [userId]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom Hook to use the Socket
export const useSocket = () => {
  return useContext(SocketContext);
};
