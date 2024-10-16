import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/login-logo.png";
import welcomeImage from "../../assets/welcome-logo.gif";
import volunteeringImage from "../../assets/Group.png";
import svgImage from "../../assets/SVGRepo_iconCarrier.png";
import vectorImage from "../../assets/vector.png";
import group1Image from "../../assets/Group1.png";
import group2Image from "../../assets/Group2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast"; 
import ToastProvider from "../../components/toasterMessages";

const PasswordResetPassword = () => {
  const navigate = useNavigate();

  // State management
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogoClick = () => navigate("/");

  const handleResetClick = async () => {
    const email = localStorage.getItem("email");
    const otp = Number(localStorage.getItem("otp")); // Convert OTP to number

    if (!password || !confirmPassword) {
      setError("Both password fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/reset-password",
        {
          email,
          otp,
          new_password: password,
          confirm_password: confirmPassword,
        }
      );

      setSuccessMessage("Password reset successful! Redirecting to login...");
      setError("");
      localStorage.removeItem("email");
      localStorage.removeItem("otp");

      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Password reset failed:", error);

      const errorMessage =
        error.response?.data?.message ||
        "Failed to reset password. Please try again.";
      setError(errorMessage);
      setSuccessMessage("");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col md:flex-row">
        <ToastProvider />
      <div className="w-full md:w-3/5 flex flex-col items-center justify-center bg-white relative px-4 md:px-0">
        <img
          src={logo}
          alt="Logo"
          className="w-44 h-auto cursor-pointer mb-6 md:absolute md:top-10 md:left-4 mx-auto md:mx-0"
          onClick={handleLogoClick}
          style={{ animation: "ease-out 900ms" }}
        />

        <div className="max-w-md w-full">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-center text-[#7A89C2] mb-6">
              Reset Password
            </h2>
            <p className="text-center text-black font-cabin text-[20px] font-normal leading-[24.3px]">
              Your new password must be different <br />
              from previous passwords.
            </p>
          </div>

          {/* Password Input */}
          <div className="w-full mb-4 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 border border-[#7A89C2] rounded-full p-4 pr-12"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-4 top-3 text-gray-500"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="w-full mb-4 relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Re-Enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-12 border border-[#7A89C2] rounded-full p-4 pr-12"
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute right-4 top-3 text-gray-500"
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          {/* Reset Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleResetClick}
              className="w-1/2 h-12 rounded-full border border-[#7A89C2] bg-white text-[#7A89C2] font-bold hover:bg-[#7A89C2] hover:text-white transition duration-300"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/5 bg-[#7A89C2] flex flex-col items-center justify-start relative mt-6 md:mt-0 min-h-[calc(100vh-56px)]">
        <img src={svgImage} alt="SVG" className="w-20 h-24 mt-1" />
        <div className="absolute w-full top-1/2 transform -translate-y-full text-center text-white">
          <h1 className="font-amsterdam text-4xl font-normal leading-[119.1px]">
            Welcome!
          </h1>
          <p className="font-cabin text-lg font-medium leading-[24.3px]">
            Empower and inspire
            <br /> women everywhere
          </p>
        </div>
        <img
          src={welcomeImage}
          alt="Welcome"
          className="absolute w-56 h-56 sm:w-52 sm:h-52 md:w-56 md:h-56 top-2/3 transform -translate-y-1/2"
        />
        <div className="absolute w-full flex justify-between items-start h-full">
          <img
            src={volunteeringImage}
            alt="Volunteering"
            className="absolute left-0 w-30 h-auto top-1/3"
          />
          <img
            src={vectorImage}
            alt="Vector"
            className="absolute right-0 bottom-14 w-20 h-auto"
          />
        </div>
        <img
          src={group1Image}
          alt="Group 1"
          className="absolute right-0 w-15 h-auto top-1/3"
        />
        <img
          src={group2Image}
          alt="Group 2"
          className="absolute left-14 bottom-1 w-30 h-[100px]"
        />
      </div>
    </div>
  );
};

export default PasswordResetPassword;
