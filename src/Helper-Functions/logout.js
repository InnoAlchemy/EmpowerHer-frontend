// src/logout.js
import { useNavigate } from "react-router-dom";

const handleLogout = () => {
  // Remove token and user information from localStorage and sessionStorage
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("profileImage");
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("profileImage");

  return (navigate) => {
    navigate("/home"); // Navigate to home
    window.location.reload(); // Refresh the page
  };
};

export default handleLogout;
