// src/pages/ProfileAccount.js

import React, { useState } from "react";
import CustomDropdown from "../../components/custom-dropdown";
import { useUser } from "../../Helper-Functions/UserContext";
import OrganizationInformation from "./profile-account-organization"; // Import the new component
import axios from "axios"; // Ensure axios is imported if it's used here

const ProfileAccount = () => {
  const { user } = useUser();
  const {
    id,
    username,
    email,
    membership,
    profile_picture,
    country,
    phone_number,
    job_title,
  } = user;

  // State for dropdowns
  const [selectedCountry, setSelectedCountry] = useState("Lebanon");


  // Dropdown options
  const countryOptions = ["Lebanon", "United States", "Canada"];
  

  const [editMode, setEditMode] = useState({
    email: false,
    phone_number: false,
    job_title: false,
  });

  const [formData, setFormData] = useState({
    username,
    email,
    phone_number,
    job_title,
  });

  const handleChangeClick = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: true }));
  };

  const handleSaveClick = async (field) => {
    const form = new FormData();
    form.append("username", formData.username);
    form.append("email", formData.email);
    form.append("phone_number", formData.phone_number);
    form.append("job_title", formData.job_title);

    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/${id}`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setEditMode((prev) => ({ ...prev, [field]: false }));
      setFormData((prev) => ({ ...prev, ...response.data })); // Update form data with the response data
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };



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
      <section className="relative">
        {/* Full Name Section */}
        <div>
          <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={username || ""}
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
            value={email || ""}
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
              value={phone_number || ""}
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
              value={job_title || "none"}
              className="w-full h-16 p-4 rounded-xl bg-[#7A89C226] text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      </section>

      {/* Organization Information Section */}
      <OrganizationInformation
        membership={membership}
    user_id={id}
      />
    </div>
  );
};

export default ProfileAccount;
