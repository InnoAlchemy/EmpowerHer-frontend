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
import google from "../../assets/google.png";
import linkedin from "../../assets/linkedin.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignIn = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  // State to manage email and password
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogoClick = () => {
    // Navigate to the home page or another desired route
    navigate("/"); // Replace '/home' with your desired route
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const validateInputs = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignInClick = async () => {
    if (!validateInputs()) return;

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token } = response.data;

      // Store token based on "Remember Me" state
      if (rememberMe) {
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
      } else {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("email", email);
      }

      navigate("/"); // Navigate to the home page on success
    } catch (error) {
      console.error("Login failed:", error);

      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Login failed. Please try again.";

      alert(errorMessage); // Display the error message from the backend
    }
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
              Sign In Using
            </h2>

            <div className="flex items-center gap-6 mb-4">
              <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#EAEAEA] p-2">
                <img
                  src={google}
                  alt="Google"
                  className="text-[#DB4437] text-[32px]"
                />
              </button>
              <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#106FD3] p-2">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="text-[#106FD3] text-[32px]"
                />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full h-12 border ${
                errors.email ? "border-red-500" : "border-[#7A89C2]"
              } rounded-full p-4`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}

          <div className="w-full mb-4 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full h-12 border ${
                errors.password ? "border-red-500" : "border-[#7A89C2]"
              } rounded-full p-4 pr-12`} // Added padding for the button
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-3 text-gray-500"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="text-sm font-normal text-[#00000099]">
                Remember me
              </span>
            </div>
            <span className="text-sm font-normal text-black">
              <Link
                to="/password-reset-request"
                className="cursor-pointer underline transition duration-300 ease-in-out hover:text-[#5a6ab8]"
              >
                Forgot your password?
              </Link>
            </span>
          </div>

          {/* Sign In Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSignInClick}
              className="w-1/2 h-12 rounded-full border border-[#7A89C2] bg-white text-[#7A89C2] font-bold hover:bg-[#7A89C2] hover:text-white transition duration-300"
            >
              Sign In
            </button>
          </div>

          {/* Registration Prompt */}
          <div className="text-center mt-4">
            <p className="font-cabin text-sm font-normal leading-[18.23px]">
              Don’t have an account?{" "}
              <Link
                to="/signup" // Navigate to /signup
                className="cursor-pointer underline text-[#7A89C2] transition duration-300 ease-in-out hover:text-[#5a6ab8]"
              >
                Register
              </Link>
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

export default SignIn;
