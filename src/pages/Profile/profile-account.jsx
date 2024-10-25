import React, { useState } from "react";
import CustomDropdown from '../../components/custom-dropdown'
import { FaCloudUploadAlt } from "react-icons/fa";
const ProfileAccount = () => {
    // State for dropdowns
    const [selectedCountry, setSelectedCountry] = useState("Lebanon");
    const [selectedOrganizationType, setSelectedOrganizationType] = useState("Company (SME)");
    const [selectedCity, setSelectedCity] = useState("Beirut");
    const [selectedSector, setSelectedSector] = useState("Real Estate");
  
    // Dropdown options
    const countryOptions = ["Lebanon", "United States", "Canada"];
    const organizationTypeOptions = ["Company (SME)", "Startup", "Non-Profit"];
    const cityOptions = ["Beirut", "New York", "Paris"];
    const sectorOptions = ["Real Estate", "Tech", "Finance"];
  
    return (
      <div className="flex flex-col space-y-6 p-6 max-w-screen-xl mx-auto w-full">
        {/* Account Header */}
        <h1
          className="font-cabin font-semibold text-[#7A89C2] text-left"
          style={{
            fontSize: "40px",
            lineHeight: "48.6px",
          }}
        >
          Account
        </h1>
  
        {/* Full Name Section */}
        <div>
          <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Aysha Wright"
            className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700 placeholder-gray-500"
          />
        </div>
  
        {/* Email Section */}
        <div className="relative">
          <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Email@example.com"
            className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700 placeholder-gray-500"
          />
          <button className="absolute top-2/3 right-4 transform -translate-y-1/2 h-10 px-4 rounded-lg bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white">
            Change
          </button>
        </div>
  
        {/* Password Section */}
        <div className="relative">
          <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="***************"
            className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700 placeholder-gray-500"
          />
          <button className="absolute top-2/3 right-4 transform -translate-y-1/2 h-10 px-4 rounded-lg bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white">
            Change
          </button>
        </div>
  
        {/* Country Dropdown */}
        <CustomDropdown
          label="Country"
          options={countryOptions}
          selectedOption={selectedCountry}
          setSelectedOption={setSelectedCountry}
        />
  
        {/* Phone Number and Job Title Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Phone Number */}
          <div className="relative flex-grow">
            <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+961 1234 567"
              className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700 placeholder-gray-500"
            />
            <button className="absolute top-2/3 right-4 transform -translate-y-1/2 h-10 px-4 rounded-lg bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white">
              Change
            </button>
          </div>
  
          {/* Job Title */}
          <div className="flex-grow">
            <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
              Job Title
            </label>
            <input
              type="text"
              placeholder="HR Manager"
              className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
  
        {/* Organization Information Section */}
        <h2 className="text-2xl text-[#7A89C2] font-semibold mt-10">
          Organization Information (Available with subscription)
        </h2>
  
        {/* Organization's Name and Type */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
  {/* Organization's Name */}
  <div className="flex-grow">
    <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
      Organization's Name
    </label>
    <input
      type="text"
      placeholder="Name Example"
      className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700"
    />
  </div>

  {/* Organization's Type Dropdown */}
  <div className="flex-grow">
    <CustomDropdown
      label="Organization's Type"
      options={organizationTypeOptions}
      selectedOption={selectedOrganizationType}
      setSelectedOption={setSelectedOrganizationType}
    />
  </div>
</div>

  
      
          {/* Email */}
          <div className="flex-grow">
            <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700"
            />
          </div>
  
          {/* Website */}
          <div className="flex-grow">
            <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
              Website
            </label>
            <input
              type="url"
              placeholder="www.example.com"
              className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700"
            />
          </div>
      
  
        {/* Country and City */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
  {/* Country Dropdown */}
  <div className="flex-grow">
    <CustomDropdown
      label="Country"
      options={countryOptions}
      selectedOption={selectedCountry}
      setSelectedOption={setSelectedCountry}
    />
  </div>

  {/* City Dropdown */}
  <div className="flex-grow">
    <CustomDropdown
      label="City"
      options={cityOptions}
      selectedOption={selectedCity}
      setSelectedOption={setSelectedCity}
    />
  </div>
</div>

        {/* Sector and Phone Number */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
  {/* Sector Dropdown */}
  <div className="flex-grow">
    <CustomDropdown
      label="Sector"
      options={sectorOptions}
      selectedOption={selectedSector}
      setSelectedOption={setSelectedSector}
    />
  </div>

  {/* Phone Number */}
  <div className="relative flex-grow">
    <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
      Phone Number
    </label>
    <input
      type="text"
      placeholder="+961 1234 567"
      className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700 text-left"
      style={{  textOverflow: "ellipsis" }}
    />
    <button className="absolute top-2/3 right-4 transform -translate-y-1/2 h-10 px-4 rounded-lg bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white">
      Change
    </button>
  </div>
</div>


  
        {/* Description */}
        <div className="mt-4">
          <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
            Description
          </label>
          <textarea
            placeholder="Write description here"
            className="w-full h-36 p-6 rounded-xl bg-[#7A89C226] text-gray-700"
          />
        </div>
  
        {/* Products and Logo Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
          {/* Products Section */}
          <div className="flex-grow relative">
            <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
              Products or Services
            </label>
            <textarea
              placeholder="Write description here"
              className="w-full h-36 p-6 rounded-xl bg-[#7A89C226] text-gray-700"
            />
            <div className="absolute bottom-4 left-4 flex items-center space-x-4">
              <button
                className="px-4 py-2 bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white rounded-md"
                onClick={() => document.getElementById("fileUpload").click()}
              >
                Attach Portfolio
              </button>
              <input
                id="fileUpload"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    document.getElementById("fileInfo").innerHTML = `${file.name} ${(
                      file.size / 1024
                    ).toFixed(2)} kb`;
                    document.getElementById("fileInfoContainer").classList.remove("hidden");
                  }
                }}
              />
              <div
                id="fileInfoContainer"
                className="bg-[#F5F5F5] rounded-lg p-2 flex items-center space-x-2 hidden"
              >
                <span id="fileInfo" className="text-gray-700"></span>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    document.getElementById("fileInfo").innerHTML = "";
                    document.getElementById("fileInfoContainer").classList.add("hidden");
                    document.getElementById("fileUpload").value = ""; // Clear file input
                  }}
                >
                  &times;
                </button>
              </div>
            </div>
          </div>
  
          {/* Logo Section */}
          <div className="flex-grow">
  <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
    Logo
  </label>
  <div
    className="w-full h-36 p-6 rounded-xl bg-[#7A89C226] flex flex-col items-center justify-center text-gray-700 relative"
    onDragOver={(e) => e.preventDefault()} // Prevent default to allow drop
    onDrop={(e) => {
      e.preventDefault();
      // Handle the dropped files here
    }}
  >
    
    <FaCloudUploadAlt className="text-4xl text-gray-400 opacity-50" />
    
    <p className="text-center text-gray-600 opacity-50 mt-2">
      Drag & drop files <br /> or
    </p>

    {/* Browse Button at the bottom */}
    <button
      className="mt-4 px-3 py-2 bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white rounded-md"
      onClick={() => document.getElementById("fileUpload").click()} // Trigger file input click
    >
      Browse
    </button>

    {/* Hidden File Input */}
    <input
      id="fileUpload"
      type="file"
      className="hidden"
      onChange={(e) => {
        // Handle the selected file
        console.log(e.target.files[0]);
      }}
    />
  </div>
</div>

        </div>
  
        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
          <div className="flex-grow">
            <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
              LinkedIn
            </label>
            <input
              type="url"
              placeholder="Link"
              className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700"
            />
          </div>
          <div className="flex-grow">
            <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
              Instagram
            </label>
            <input
              type="url"
              placeholder="Link"
              className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700"
            />
          </div>
          <div className="flex-grow">
            <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
              Facebook
            </label>
            <input
              type="url"
              placeholder="Link"
              className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileAccount;
