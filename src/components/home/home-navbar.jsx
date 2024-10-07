import React from "react";
import logo from "../../assets/EmpowerHer-logo.png"; // Adjust the path as needed

const HomeNavbar = () => {
  return (
    <nav
      className="bg-white shadow-md py-[19px] px-[39px] flex justify-center"
      style={{ width: "1280px", height: "83.93px" }}
    >
      {/* Frame 135 - Content */}
      <div
        className="flex items-center justify-between"
        style={{ width: "1202px", height: "45.93px" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-0">
          <img
            src={logo}
            alt="Empower Her Energy Logo"
            style={{ width: "176px", height: "45.93px" }}
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-[40px] items-center">
          {/* Home */}
          <li
            className="text-black font-normal"
            style={{
              width: "53px",
              height: "24px",
              fontFamily: "Cabin",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "24.3px",
              textAlign: "left",
              whiteSpace: 'nowrap', 
            }}
          >
            Home
          </li>

          {/* Programs & Initiatives */}
          <li
            className="font-normal cursor-pointer"
            style={{
              width: "182px",
              height: "24px",
              fontFamily: "Cabin",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "24.3px",
              textAlign: "left",
              color: "#7A89C2", 
              whiteSpace: 'nowrap', 
            }}
            onClick={() => {
              // Navigate to "Programs & Initiatives Main Page"
              window.location.href = "/programs-and-initiatives"; // Adjust this path as needed
            }}
            onMouseEnter={(e) => {
              // Optional: Add animation on hover
              e.currentTarget.style.transition = "all 0.9s ease-in";
              e.currentTarget.style.opacity = "0.8"; // Example hover effect
            }}
            onMouseLeave={(e) => {
              // Optional: Reset on mouse leave
              e.currentTarget.style.opacity = "1";
            }}
          >
            Programs & Initiatives
          </li>

          {/* Get Involved */}
          <li
            className="font-normal cursor-pointer"
            style={{
              width: "107px",
              height: "24px",
              fontFamily: "Cabin",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "24.3px",
              textAlign: "left",
              color: "#7A89C2", 
              whiteSpace: 'nowrap', 
            }}
            onClick={() => {
              // Navigate to "Get Involved Main Page"
              window.location.href = "/get-involved"; // Adjust this path as needed
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transition = "all 0.9s ease-in";
              e.currentTarget.style.opacity = "0.8"; // Example hover effect
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Get Involved
          </li>

          {/* Discover Her */}
          <li
            className="font-normal cursor-pointer"
            style={{
              width: "105px",
              height: "24px",
              fontFamily: "Cabin",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "24.3px",
              textAlign: "left",
              color: "#7A89C2", 
              whiteSpace: 'nowrap', 
            }}
            onClick={() => {
              // Navigate to "Discover Her Main Page"
              window.location.href = "/discover-her"; // Adjust this path as needed
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transition = "all 0.9s ease-in";
              e.currentTarget.style.opacity = "0.8"; // Example hover effect
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Discover Her
          </li>

          {/* Contact Us */}
          <li
            className="font-normal cursor-pointer"
            style={{
              width: "94px",
              height: "24px",
              fontFamily: "Cabin",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "24.3px",
              textAlign: "left",
              color: "#7A89C2", 
              whiteSpace: 'nowrap', 
            }}
            onClick={() => {
              // Navigate to "Contact Us Main Page"
              window.location.href = "/contact-us"; // Adjust this path as needed
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transition = "all 0.9s ease-in";
              e.currentTarget.style.opacity = "0.8"; // Example hover effect
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Contact Us
          </li>
        </ul>

        {/* Login Button */}
        <button
          className="flex items-center justify-center text-white py-[6px] px-[32px] border border-[#7A89C2]"
          style={{
            width: "112px",
            height: "36px",
            borderRadius: "15px",
            background: "linear-gradient(90deg, #3F3F3F 0%, #7A89C2 100%)",
          }}
          onClick={() => (window.location.href = "/login")}
        >
          <span
            className="font-semibold font-cabin text-[20px] leading-[24.3px] text-left"
            style={{
              width: "48px",
              height: "24px",
            }}
          >
            Login
          </span>
        </button>
      </div>
    </nav>
  );
};

export default HomeNavbar;
