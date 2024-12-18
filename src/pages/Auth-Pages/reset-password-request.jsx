import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import logo from "../../assets/login-logo.png";
import welcomeImage from "../../assets/welcome-logo.gif";
import volunteeringImage from "../../assets/Group.png";
import svgImage from "../../assets/SVGRepo_iconCarrier.png";
import vectorImage from "../../assets/vector.png";
import group1Image from "../../assets/Group1.png";
import group2Image from "../../assets/Group2.png";
import { toast } from "react-hot-toast";
import ToastProvider from "../../components/toasterMessages";

const PasswordResetRequest = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState(""); // State for email input
  const [error, setError] = useState(""); // State for error messages
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleLogoClick = () => {
    navigate("/"); // Navigate to home page
  };

  const handleSendClick = async () => {
    if (!email) {
      setError("Email is required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/forgot-password",
        { email }
      );

      // Save email and OTP to localStorage
      localStorage.setItem("email", email);
      if (response.data.otp) {
        localStorage.setItem("otp", response.data.otp);
      }

      setSuccessMessage(
        "Password reset instructions have been sent to your email."
      );
      setError(""); // Clear any previous errors
      navigate("/password-reset"); // Navigate to the password reset page
    } catch (error) {
      console.error("Password reset request failed:", error);

      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Failed to send password reset request. Please try again.";

      toast.error(errorMessage); // Display the error message
      toast.success(""); // Clear success message if there was an error
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col md:flex-row">
      <ToastProvider />
      {/* Left Side (Form Section) */}
      <div className="w-full md:w-3/5 flex flex-col items-center justify-center bg-white relative px-4 md:px-0">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-44 h-auto cursor-pointer mb-6 md:absolute md:top-10 md:left-4 mx-auto md:mx-0"
          onClick={handleLogoClick}
          style={{ animation: "ease-out 900ms" }}
        />

        <div className="max-w-md w-full">
          {/* Title and Description */}
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-center text-[#7A89C2] mb-6">
              Reset Password
            </h2>
            <p className="text-center text-black font-cabin text-[20px] font-normal leading-[24.3px]">
              Enter the email associated with your account
              <br />
              and we'll send an email with instructions to
              <br />
              reset your password.
            </p>
          </div>

          {/* Email Input */}
          <div className="w-full mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full h-12 border ${
                error ? "border-red-500" : "border-[#7A89C2]"
              } rounded-full p-4`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            {successMessage && (
              <p className="text-green-500 text-sm mt-1">{successMessage}</p>
            )}
          </div>

          {/* Send Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSendClick}
              className="w-1/2 h-12 rounded-full border border-[#7A89C2] bg-white text-[#7A89C2] font-bold hover:bg-[#7A89C2] hover:text-white transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Right Side (Information or Image Section) */}
      <div className="w-full md:w-2/5 bg-[#7A89C2] flex flex-col items-center justify-start relative mt-6 md:mt-0 min-h-[calc(100vh-56px)]">
        <img src={svgImage} alt="SVG" className="w-20 h-24 mt-1" />

        <div className="absolute w-full top-1/2 transform -translate-y-full text-center text-white">
          <h1 className="font-amsterdam text-4xl font-normal leading-[119.1px]">
            Welcome!
          </h1>
          <p className="font-cabin text-lg font-medium leading-[24.3px]">
            Empower and inspire
            <br />
            women everywhere
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

export default PasswordResetRequest;
