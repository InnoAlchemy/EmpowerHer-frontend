
import React from "react";
import CustomDropdown from "../../components/custom-dropdown";
import cloud from "../../assets/cloud-icon.png";
import { useState } from "react";


const OrganizationInformation = ({
  membership,

}) => {
  // State for dropdowns
  const [selectedCountry, setSelectedCountry] = useState("Lebanon");
  const [selectedOrganizationType, setSelectedOrganizationType] = useState("Company (SME)");
  const [selectedCity, setSelectedCity] = useState("Beirut");
  const [selectedSector, setSelectedSector] = useState("Real Estate");

  const [productFile, setProductFile] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const countryOptions = ["Lebanon", "United States", "Canada"];
  const organizationTypeOptions = ["Company (SME)", "Startup", "Non-Profit"];
  const cityOptions = ["Beirut", "New York", "Paris"];
  const sectorOptions = ["Real Estate", "Tech", "Finance"];
  // Handlers for file uploads
  const handleProductFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductFile({
        name: file.name,
        size: (file.size / 1024).toFixed(2),
      });
    }
  };

  const handleLogoFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(URL.createObjectURL(file));
    }
  };

  const handleLogoDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setLogoFile(URL.createObjectURL(file));
    }
  };

  const handleLogoRemove = () => {
    setLogoFile(null);
    document.getElementById("logoFileUpload").value = ""; // Reset file input
  };

  return (
    <div className="relative mt-4">
      {/* Lock Overlay */}
      {membership === null && (
        <div className="absolute inset-0 bg-opacity-5 flex items-center justify-center z-10">
          {/* You can add a lock icon or message here if desired */}
        </div>
      )}

      {/* Organization Information Section */}
      <h2
        className={`text-2xl text-[#7A89C2] font-semibold mt-10 ${
          membership === null ? "pointer-events-none opacity-50" : ""
        }`}
      >
        Organization Information (Available with subscription)
      </h2>

      <div
        className={`flex flex-col space-y-4 ${
          membership === null ? "pointer-events-none opacity-50" : ""
        }`}
      >
        {/* Organization's Name and Type */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
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
          <div className="flex-grow">
            <CustomDropdown
              label="Country"
              options={countryOptions}
              selectedOption={selectedCountry}
              setSelectedOption={setSelectedCountry}
            />
          </div>

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
          <div className="flex-grow basis-1/2">
            <CustomDropdown
              label="Sector"
              options={sectorOptions}
              selectedOption={selectedSector}
              setSelectedOption={setSelectedSector}
            />
          </div>

          <div className="relative flex-grow basis-1/2">
            <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+961 1234 567"
              className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700 text-left"
              style={{ textOverflow: "ellipsis" }}
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
            className="w-full h-[210px] p-6 rounded-xl bg-[#7A89C226] text-gray-700"
          />
        </div>

        {/* Products and Logo Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <div className="flex-grow relative">
            <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
              Products or Services
            </label>
            <textarea
              placeholder="Write description here"
              className="w-full h-[210px] p-6 rounded-xl bg-[#7A89C226] text-gray-700"
            />
            <div className="absolute bottom-4 left-4 flex items-center space-x-4">
              <button
                className="px-4 py-2 bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white rounded-md"
                onClick={() =>
                  document.getElementById("productFileUpload").click()
                }
              >
                Attach Portfolio
              </button>
              <input
                id="productFileUpload"
                type="file"
                className="hidden"
                onChange={handleProductFileUpload}
              />
              {productFile && (
                <div className="bg-[#EADFE2] rounded-[20px] p-1 flex items-center space-x-2">
                  <span className="text-[#7A89C2]">
                    {productFile.name}{" "}
                    <span className="ml-2 text-[#00000099]">
                      ({productFile.size} kb)
                    </span>
                  </span>
                  <button
                    className="text-[#7A89C2] hover:text-gray-700"
                    onClick={() => setProductFile(null)}
                  >
                    &times;
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex-grow">
            <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
              Logo
            </label>
            <div
              className="w-full h-50 p-6 rounded-xl bg-[#7A89C226] flex flex-col items-center justify-center text-gray-700 relative"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleLogoDrop}
            >
              {logoFile ? (
                <div className="relative w-full h-full flex flex-col items-center">
                  <img
                    src={logoFile}
                    alt="logo preview"
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <button
                    className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center bg-[#7A89C2] text-gray-500 hover:text-gray-700 rounded-full text-lg"
                    onClick={handleLogoRemove}
                  >
                    &times;
                  </button>
                </div>
              ) : (
                <>
                  <img src={cloud} alt="cloud icon" />
                  <p className="text-center text-gray-600 opacity-50 mt-2">
                    Drag & drop files <br /> or
                  </p>
                </>
              )}
              <button
                className="mt-4 px-3 py-2 bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white rounded-md"
                onClick={() => document.getElementById("logoFileUpload").click()}
              >
                Browse
              </button>
              <input
                id="logoFileUpload"
                type="file"
                className="hidden"
                onChange={handleLogoFileUpload}
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
    </div>
  );
};

export default OrganizationInformation;
