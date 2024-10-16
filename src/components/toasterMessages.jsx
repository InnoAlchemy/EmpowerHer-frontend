// src/components/ToastProvider.jsx

import React from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center" // Position the toasts at the top center
      reverseOrder={false}
      toastOptions={{
        // Define default styles for success and error toasts using Tailwind classes
        success: {
          className: "bg-green-500 text-white rounded-md shadow-lg px-4 py-2",
          iconTheme: {
            primary: "#ffffff", // Icon color
            secondary: "#38a169", // Icon background (matches Tailwind's green-500)
          },
          duration: 3000, // Optional: Duration in milliseconds
        },
        error: {
          className: "bg-red-500 text-white rounded-md shadow-lg px-4 py-2",
          iconTheme: {
            primary: "#ffffff", // Icon color
            secondary: "#e53e3e", // Icon background (matches Tailwind's red-500)
          },
          duration: 5000, // Optional: Duration in milliseconds
        },
        // You can add more toast types (info, warning, etc.) here
      }}
    />
  );
};

export default ToastProvider;
