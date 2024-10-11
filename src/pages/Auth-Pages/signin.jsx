import React from 'react';
import logo from '../../assets/login-logo.png'; 
import welcomeImage from '../../assets/output-onlinegiftools.png';
import volunteeringImage from '../../assets/Group.png'; 
import svgImage from '../../assets/SVGRepo_iconCarrier.png'; 
import vectorImage from '../../assets/vector.png'; 
import group1Image from '../../assets/Group1.png'; 
import group2Image from '../../assets/Group2.png'; 
import google from '../../assets/google.png';
import linkedin from '../../assets/linkedin.png';

const SignIn = () => {
  const handleLogoClick = () => {
    console.log('Navigating to Registration'); // Placeholder for navigation logic
  };

  const handleSignInClick = () => {
    console.log('Sign In Clicked'); // Placeholder for sign-in logic
  };

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side (Form Section) */}
      <div className="w-full md:w-3/5 flex items-center justify-center bg-white relative">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="absolute w-44 h-auto top-10 left-4 cursor-pointer"
          onClick={handleLogoClick}
          style={{
            animation: 'ease-out 900ms',
          }}
        />
        
        <div className="max-w-md w-full">
          {/* Social Media Icons */}
          <div className="flex flex-col items-center mb-8 mt-18">
            <h2 className="text-3xl font-bold text-center text-[#7A89C2] mb-6">Sign In Using</h2>

            <div className="flex items-center gap-6 mb-4">
              <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#EAEAEA] p-2">
                <img src={google} alt="google" className="text-[#DB4437] text-[32px]" />
              </button>
              <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#106FD3] p-2">
                <img src={linkedin} alt="linkedin" className="text-[#106FD3] text-[32px]" />
              </button>
            </div>

            <p className="text-center text-black font-cabin text-[20px] font-normal leading-[24.3px]">
              or use your email account
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

          {/* Password Input */}
          <div className="w-full mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 border border-[#7A89C2] rounded-full p-4"
            />
          </div>

          {/* Checkbox Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span className="text-sm font-normal text-[#00000099]">Remember me</span>
            </div>
            <span className="text-sm font-normal text-black">Forgot your password?</span>
          </div>

          {/* Sign In Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSignInClick}
              className="w-1/2 h-12 flex items-center justify-center rounded-full border border-[#7A89C2] bg-white"
            >
              <span className="text-[#7A89C2] font-cabin text-lg font-bold">Sign In</span>
            </button>
          </div>

          {/* Registration Prompt */}
          <div className="text-center mt-4">
            <p className="font-cabin text-sm font-normal leading-[18.23px]">
              Don’t have an account?{' '}
              <span
                className="cursor-pointer underline text-[#7A89C2] transition duration-900 ease-in"
                onClick={handleLogoClick}
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Information or Image Section) */}
      <div className="w-full md:w-2/5 bg-[#7A89C2] flex flex-col items-center justify-start relative mt-6 md:mt-0 min-h-[calc(100vh-56px)]">
        {/* SVG Image - Center Top */}
        <img
          src={svgImage}
          alt="SVG"
          className="w-20 h-24 mt-1"  // Adjust the margin-top to fine-tune spacing
        />

        {/* Welcome Text (Positioned Above the Welcome Image) */}
        <div className="absolute w-full top-1/2 transform -translate-y-full text-center text-white">
          <h1 className="font-amsterdam text-4xl font-normal leading-[119.1px] text-center">
            Welcome!
          </h1>
          <p className="font-cabin text-lg font-medium leading-[24.3px]">
            Empower and inspire<br />women everywhere
          </p>
        </div>

        {/* Welcome Image */}
        <img
          src={welcomeImage}
          alt="Welcome"
          className="absolute w-68 h-68 top-2/3 transform -translate-y-1/2"
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
          className="absolute left-14 bottom-4 w-30 h-[100px]"
        />
      </div>
    </div>
  );
};

export default SignIn;
