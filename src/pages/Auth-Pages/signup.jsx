import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validateSignUp } from "../../Helper-Functions/validations";
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
const SignUp = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  // State to manage form input and errors
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});

  const handleLogoClick = () => {
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));

    if (errors[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const handleSignUpClick = async () => {
    const validationErrors = validateSignUp(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        formValues
      );

      if (response.status === 201) {
        sessionStorage.setItem("email", formValues.email);
        alert("Registration successful!");
        navigate("/verification");
      }
    } catch (error) {
      console.error("Signup failed:", error);

      // Extracting the error message from the API response
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Signup failed. Please try again.";

      alert(errorMessage); // Display the error message in an alert
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side (Form Section) */}
      <div className="w-full md:w-3/5 flex items-center justify-center bg-white">
        <div className="max-w-md w-full">
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

          {/* Social Media Icons */}
          <div className="flex flex-col items-center mb-8 mt-18">
            <h2 className="text-3xl font-bold text-center text-[#7A89C2] mb-6">
              Sign Up Using
            </h2>

            <div className="flex items-center gap-6 mb-4">
              <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#EAEAEA] p-2">
                <img
                  src={google}
                  alt="google"
                  className="text-[#DB4437] text-[32px]"
                />
              </button>
              <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#106FD3] p-2">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="text-[#106FD3] text-[32px]"
                />
              </button>
            </div>

            <p className="text-center text-black font-cabin text-[20px] font-normal leading-[24.3px]">
              or use your email account
            </p>
          </div>

          {/* First Name and Last Name Inputs */}
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formValues.first_name}
                onChange={handleInputChange}
                className={`w-full h-12 border ${
                  errors.first_name ? "border-red-500" : "border-[#7A89C2]"
                } rounded-full p-4`}
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
              )}
            </div>
            <div className="w-1/2 pl-2">
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formValues.last_name}
                onChange={handleInputChange}
                className={`w-full h-12 border ${
                  errors.last_name ? "border-red-500" : "border-[#7A89C2]"
                } rounded-full p-4`}
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
              )}
            </div>
          </div>

          {/* Email Input */}
          <div className="w-full mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleInputChange}
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
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleInputChange}
              className={`w-full h-12 border ${
                errors.password ? "border-red-500" : "border-[#7A89C2]"
              } rounded-full p-4`}
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

          {/* Confirm Password Input */}
          <div className="w-full mb-4 relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirm_password"
              placeholder="Re-Enter Password"
              value={formValues.confirm_password}
              onChange={handleInputChange}
              className={`w-full h-12 border ${
                errors.confirm_password ? "border-red-500" : "border-[#7A89C2]"
              } rounded-full p-4`}
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-4 top-3 text-gray-500"
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.confirm_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirm_password}
              </p>
            )}
          </div>

          {/* Sign Up Button */}
          <div className="w-full flex justify-center mt-6">
            <button
              onClick={handleSignUpClick}
              className="w-1/2 h-12 rounded-full border border-[#7A89C2] bg-white text-[#7A89C2] font-bold hover:bg-[#7A89C2] hover:text-white transition duration-300"
            >
              Sign Up
            </button>
          </div>

          {/* Registration Prompt */}
          <div className="text-center mt-4">
            <p className="font-cabin text-sm font-normal leading-[18.23px]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline text-[#7A89C2] transition duration-300 ease-in-out cursor-pointer hover:text-[#5a6ab8]"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Information or Image Section) */}
      <div className="w-full md:w-2/5 bg-[#7A89C2] flex flex-col items-center justify-start relative mt-6 md:mt-0 min-h-[calc(100vh-56px)]">
        {" "}
        {/* Ensure the height is consistent */}
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

export default SignUp;
