import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import logo from "../../assets/login-logo.png";
import welcomeImage from "../../assets/welcome-logo.gif";
import volunteeringImage from "../../assets/Group.png";
import svgImage from "../../assets/SVGRepo_iconCarrier.png";
import vectorImage from "../../assets/vector.png";
import group1Image from "../../assets/Group1.png";
import group2Image from "../../assets/Group2.png";

const PasswordResetRequest = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogoClick = () => {
    // Navigate to the home page or another desired route
    navigate("/home"); // Replace '/home' with your desired route
  };

  const handleSendClick = () => {
    // Placeholder for sign-in logic
    console.log("Send Clicked");
    // You can add actual sign-in logic here
  };

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side (Form Section) */}
      <div className="w-full md:w-3/5 flex flex-col items-center justify-center bg-white relative px-4 md:px-0">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-44 h-auto cursor-pointer mb-6 md:absolute md:top-10 md:left-4 mx-auto md:mx-0"
          onClick={handleLogoClick}
          style={{
            animation: "ease-out 900ms",
          }}
        />

        <div className="max-w-md w-full">
          {/* Social Media Icons */}
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
              className="w-full h-12 border border-[#7A89C2] rounded-full p-4"
            />
          </div>

          {/* Sign In Button */}
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
        {/* SVG Image - Center Top */}
        <img
          src={svgImage}
          alt="SVG"
          className="w-20 h-24 mt-1" // Adjust the margin-top to fine-tune spacing
        />

        {/* Welcome Text (Positioned Above the Welcome Image) */}
        <div className="absolute w-full top-1/2 transform -translate-y-full text-center text-white">
          <h1 className="font-amsterdam text-4xl font-normal leading-[119.1px] text-center">
            Welcome!
          </h1>
          <p className="font-cabin text-lg font-medium leading-[24.3px]">
            Empower and inspire
            <br />
            women everywhere
          </p>
        </div>

        {/* Welcome Image */}
        <img
  src={welcomeImage}
  alt="Welcome"
  className="absolute w-56 h-56 sm:w-52 sm:h-52 md:w-56 md:h-56 top-2/3 transform -translate-y-1/2"
/>

        {/* Side and Bottom Images */}
        <div className="absolute w-full flex justify-between items-start h-full">
          {/* Volunteering Image - Left */}
          <img
            src={volunteeringImage}
            alt="Volunteering"
            className="absolute left-0 w-30 h-auto top-1/3"
          />

          {/* Vector Image - Right */}
          <img
            src={vectorImage}
            alt="Vector"
            className="absolute right-0 bottom-14 w-20 h-auto"
          />
        </div>

        {/* Group 1 Image - Bottom Left */}
        <img
          src={group1Image}
          alt="Group 1"
          className="absolute right-0 w-15 h-auto top-1/3"
        />

        {/* Group 2 Image - Bottom Right */}
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
