// src/socket.js

import { io } from "socket.io-client";

// Define the server URL based on the environment
const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-production-domain.com" // Replace with your production URL
    : "http://localhost:8080"; // Replace with your development URL

// Initialize Socket.io client
const socket = io(SERVER_URL, {
  transports: ["websocket"], // Use WebSocket only
  reconnectionAttempts: 5, // Number of reconnection attempts before giving up
});

// Listen for connection errors
socket.on("connect_error", (err) => {
  console.error("Connection Error:", err.message);
});

export default socket;
