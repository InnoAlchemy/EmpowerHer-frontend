import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/login-logo.png";
import welcomeImage from "../../assets/welcome-logo.gif";
import volunteeringImage from "../../assets/Group.png";
import svgImage from "../../assets/SVGRepo_iconCarrier.png";
import vectorImage from "../../assets/vector.png";
import group1Image from "../../assets/Group1.png";
import group2Image from "../../assets/Group2.png";
import EmailAnimation from "../../assets/verification.gif";

const Verification = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleLogoClick = () => {
    navigate("/registration"); // Placeholder for navigation logic
  };

  const handleInputChange = (index, value) => {
    const newCode = [...code];
    if (/^\d?$/.test(value)) {
      // Ensure only digits are entered
      newCode[index] = value;
      setCode(newCode);
      // Automatically focus next input if value is entered
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleVerifyClick = () => {
    const verificationCode = code.join("");
    console.log("Verifying code:", verificationCode);
    // Add verification logic here
  };

  const handleResend = () => {
    console.log("Resend email clicked");
    // Add resend email logic here
  };

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side (Form Section) */}
      <div className="w-full md:w-3/5 flex items-center justify-center bg-white p-6 md:p-12">
        <div className="w-full max-w-md">
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

          {/* Title */}
          <h1 className="text-[#7A89C2] font-cabin text-4xl font-semibold mb-4 text-center md:text-center">
            Verification
          </h1>

          {/* Email Animation Image */}
          <div className="flex justify-center md:justify-center mb-2">
            <img
              src={EmailAnimation}
              alt="Email Animation"
              className="w-48 h-48"
            />
          </div>

          {/* Instruction Text */}
          <p className="text-center md:text-center text-black text-sm mb-6">
            Enter the six-digit code we sent to your <br /> email address to
            verify your Pump account:
          </p>

          {/* Verification Code Inputs */}
          <div className="flex justify-between mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="w-12 h-16 text-center border border-[#7A89C2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerifyClick}
            className="w-full h-12 rounded-full border border-[#7A89C2] bg-white text-[#7A89C2] font-bold hover:bg-[#7A89C2] hover:text-white transition duration-300"
          >
            Verify and Continue
          </button>

          {/* Verification Prompt */}
          <div className="text-center mt-4">
            <p className="font-cabin text-sm">
              Didn't receive an Email?{" "}
              <Link
                to="#"
                onClick={handleResend}
                className="underline text-[#7A89C2] hover:text-[#5a6ab8]"
              >
                Resend
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Information or Image Section) */}
      <div className="w-full md:w-2/5 bg-[#7A89C2] flex flex-col items-center justify-start relative mt-6 md:mt-0 min-h-[calc(100vh-56px)]">
        {/* SVG Image - Center Top */}
        <img src={svgImage} alt="SVG" className="w-20 h-24 mt-1" />

        {/* Welcome Text (Positioned Above the Welcome Image) */}
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

export default Verification;
