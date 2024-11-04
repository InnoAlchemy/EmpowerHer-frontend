import React, { useState } from "react";
import Logo from "../../assets/EmpowerHer-logo.png";
import ProfilePosts from "./profile-posts";

const ProfileView = () => {
  // State for tab selection
  const [selectedTab, setSelectedTab] = useState("Profile");

  return (
    <div className="flex flex-col space-y-8 p-8 max-w-[1400px] mx-auto w-full">
      {/* Tabs Section */}
      <div className="flex space-x-6 text-xl font-semibold mb-8">
        <button
          onClick={() => setSelectedTab("Profile")}
          className={`${
            selectedTab === "Profile" ? "text-[#7A89C2] text-[24px]" : "text-[#00000066] text-[20px]"
          }`}
        >
          Profile
        </button>
        <span className="text-[#00000099]">|</span>
        <button
          onClick={() => setSelectedTab("Posts")}
          className={`${
            selectedTab === "Posts" ? "text-[#7A89C2] text-[24px]" : "text-[#00000066] text-[20px]"
          }`}
        >
          Posts
        </button>
      </div>

      {/* Conditional Rendering Based on Selected Tab */}
      {selectedTab === "Profile" ? (
        <div className="space-y-6">
          {/* Profile Details Section */}
          <h1 className="font-cabin font-semibold text-[#7A89C2] text-2xl md:text-3xl mb-6">
            Profile Details
          </h1>

          <div className="mb-6">
            <label className="block text-[#7A89C2] text-base font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              value="Aysha Wright"
              readOnly
              className="w-full h-12 p-4 rounded-[20px] bg-[#7A89C226] text-[#7A89C2]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#7A89C2] text-base font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value="Email@example.com"
              readOnly
              className="w-full h-12 p-4 rounded-[20px] bg-[#7A89C226] text-[#7A89C2]"
            />
          </div>

          {/* Organization's Details Section */}
          <h2 className="text-[#7A89C2] font-semibold text-2xl md:text-3xl mb-6">
            Organization's Details
          </h2>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 mb-6">
            <div className="flex-grow">
              <label className="block text-[#7A89C2] text-base font-semibold mb-2">
                Organization's Name
              </label>
              <input
                type="text"
                value="Name Example"
                readOnly
                className="w-full h-12 p-4 rounded-[20px] bg-[#7A89C226] text-[#7A89C2]"
              />
            </div>

            <div className="flex-grow">
              <label className="block text-[#7A89C2] text-base font-semibold mb-2">
                Organization's Type
              </label>
              <input
                type="text"
                value="Company (SME)"
                readOnly
                className="w-full h-12 p-4 rounded-[20px] bg-[#7A89C226] text-[#7A89C2]"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#7A89C2] text-base font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value="Email@example.com"
              readOnly
              className="w-full h-12 p-4 rounded-[20px] bg-[#7A89C226] text-[#7A89C2]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#7A89C2] text-base font-semibold mb-2">
              Website
            </label>
            <input
              type="url"
              value="www.example.com"
              readOnly
              className="w-full h-12 p-4 rounded-[20px] bg-[#7A89C226] text-[#7A89C2]"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 mb-6">
            <div className="flex-grow">
              <label className="block text-[#7A89C2] text-base font-semibold mb-2">
                Country
              </label>
              <input
                type="text"
                value="Lebanon"
                readOnly
                className="w-full h-12 p-4 rounded-[20px] bg-[#7A89C226] text-[#7A89C2]"
              />
            </div>
            <div className="flex-grow">
              <label className="block text-[#7A89C2] text-base font-semibold mb-2">
                City
              </label>
              <input
                type="text"
                value="Beirut"
                readOnly
                className="w-full h-12 p-4 rounded-[20px] bg-[#7A89C226] text-[#7A89C2]"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#7A89C2] text-base font-semibold mb-2">
              Description
            </label>
            <textarea
              value="Lorem ipsum dolor sit amet consectetur..."
              readOnly
              className="w-full h-32 p-4 rounded-[20px] bg-[#7A89C226] text-[#7A89C2]"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 mb-6">
            {/* Services or Products Section with Button inside */}
            <div className="w-full md:w-1/2 relative">
              <label className="block text-[#7A89C2] text-base font-semibold mb-2">
                Services or Products
              </label>
              <div className="w-full h-auto p-4 rounded-[20px] bg-[#7A89C226] text-[#7A89C2] flex flex-col justify-between">
                <span>Lorem ipsum dolor sit amet consectetur...</span>
                <button
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white rounded-[20px] self-start"
                  disabled
                >
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Logo Section */}
            <div className="w-full md:w-1/2">
              <label className="block text-[#7A89C2] text-base font-semibold mb-2">
                Logo
              </label>
              <div className="flex items-center justify-center text-[#7A89C2] h-32 rounded-[20px]">
                {true ? (
                  <img
                    src={Logo}
                    alt="Logo Placeholder"
                    className="h-full object-contain rounded-[20px]"
                  />
                ) : (
                  <p className="text-center text-gray-600 opacity-50">
                    No logo available
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProfilePosts showTitle={false} showAddButton={false} columns={2} imageHeight="28rem" />
      )}
    </div>
  );
};

export default ProfileView;
