import React, { useState } from 'react';
import { FiCamera, FiEdit, FiMenu, FiX } from 'react-icons/fi';
import handleLogout from "../Helper-Functions/logout";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../Helper-Functions/UserContext";

const ProfileSidebar = () => {
    const { user } = useUser();
    const { username, membership } = user;
    const [selectedOption, setSelectedOption] = useState("Account");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Start with sidebar open
    const navigate = useNavigate();

    const handleSelection = (option) => {
        setSelectedOption(option);
        setIsSidebarOpen(false); // Close sidebar on option selection

        // Navigate to the exact paths as required
        if (option === "Account") {
            navigate(`/profile/profile-account`);
        } else if (option === "Tools") {
            navigate(`/profile/profile-tools`);
        }
    };

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative">
            {/* Toggle Button always visible on the left beside the sidebar */}
            <button
                onClick={toggleSidebar}
                className="fixed top-[85px] left-0 z-50 bg-[#2C3F87] text-white p-2 rounded-md focus:outline-none md:hidden"
            >
                {isSidebarOpen ? <FiX size={14} /> : <FiMenu size={14} />}
            </button>

            {/* Sidebar Section */}
            <div
                className={`fixed top-0 left-0 h-full z-40 w-72 p-6 flex flex-col items-center bg-gradient-to-r from-[#2C3F87] to-[#7A89C2] text-white transition-transform duration-300 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } md:static md:translate-x-0`} // Toggle logic for small screens
            >
                {/* Profile Image Section */}
                <div className="relative mb-4">
                    <div className="w-28 h-28 mt-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <FiCamera className="w-10 h-10 text-[#4A227C]" />
                    </div>
                    <div className="absolute bottom-0 left-[100px] p-1">
                        <FiEdit className="text-[#FFFFFF]" />
                    </div>
                </div>

                {/* Display dynamic username and membership */}
                <h2 className="text-xl font-semibold mt-4">{username || "Guest User"}</h2>
                <p className="text-gray-300">{membership ? membership.title : "Basic"}</p>

                {/* Menu Options */}
                <nav className="mt-8 w-full flex flex-col items-center">
                    <div
                        onClick={() => handleSelection("Account")}
                        className="relative w-full flex items-center"
                    >
                        {selectedOption === "Account" && (
                            <div className="absolute left-0 h-full w-1 bg-white"></div>
                        )}
                        <div
                            className={`w-full px-4 py-2 text-center cursor-pointer transition duration-300 rounded-md ${
                                selectedOption === "Account" ? "bg-[#00000026]" : ""
                            }`}
                        >
                            Account
                        </div>
                    </div>

                    <div
                        onClick={() => handleSelection("Tools")}
                        className="relative w-full flex items-center mt-4"
                    >
                        {selectedOption === "Tools" && (
                            <div className="absolute left-0 h-full w-1 bg-white"></div>
                        )}
                        <div
                            className={`w-full px-4 py-2 text-center cursor-pointer transition duration-300 rounded-md ${
                                selectedOption === "Tools" ? "bg-[#00000026]" : ""
                            }`}
                        >
                            Tools
                        </div>
                    </div>

                    {/* Logout Option */}
                    <div
                        className="mt-8 w-full px-4 py-2 text-center text-[#AB2849] cursor-pointer hover:bg-[#00000026] transition duration-300 rounded-md"
                        onClick={() => handleLogout()(navigate)}
                    >
                        Logout
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default ProfileSidebar;
