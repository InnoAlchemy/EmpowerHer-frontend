import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/login-logo.png";
import welcomeImage from "../../assets/welcome-logo.gif";
import volunteeringImage from "../../assets/Group.png";
import svgImage from "../../assets/SVGRepo_iconCarrier.png";
import vectorImage from "../../assets/vector.png";
import group1Image from "../../assets/Group1.png";
import group2Image from "../../assets/Group2.png";
import checkEmail from "../../assets/check-email.gif";

const CheckEmail = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleOpenEmailAppClick = () => {
    const email = sessionStorage.getItem("email"); // Retrieve email from session storage
    if (email) {
      window.open(
        `https://mail.google.com/mail/u/0/?fs=1&to=${email}`,
        "_blank"
      );
    } else {
      alert("No email found in session storage.");
    }
  };

  const handleConfirmClick = () => {
    navigate("/login"); // Navigate to login screen on confirmation
  };

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col md:flex-row">
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
            <h2 className="text-3xl font-bold text-center text-[#7A89C2] mb-8">
              Approval
            </h2>
            <div className="flex justify-center md:justify-center mb-8">
              <img src={checkEmail} alt="check-email" className="w-44 h-44" />
            </div>
            <p className="text-center text-black font-cabin text-[20px] font-normal leading-[24.3px] whitespace-nowrap">
              We have sent password recovery instructions <br />
              to your email.
            </p>
          </div>

          {/* Open Email App Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleOpenEmailAppClick}
              className="w-1/2 h-12 rounded-full border border-[#7A89C2] bg-white text-[#7A89C2] font-bold hover:bg-[#7A89C2] hover:text-white transition duration-300"
            >
              Open Email App
            </button>
          </div>

          {/* Confirmed Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleConfirmClick}
              className="w-1/2 h-12 rounded-full border border-[#7A89C2] bg-white text-[#7A89C2] font-bold hover:bg-[#7A89C2] hover:text-white transition duration-300"
            >
              Confirmed
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

export default CheckEmail;
