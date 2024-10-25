import React, { useState } from "react";

// Custom dropdown component
const CustomDropdown = ({ label, options, selectedOption, setSelectedOption }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };
  
    const handleSelectOption = (option) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    };
  
    return (
      <div className="relative">
        <label className="block text-[#7A89C2] text-xl font-semibold mb-2">
          {label}
        </label>
        <div
          className="w-full h-16 p-4 pr-10 rounded-xl bg-[#7A89C226] text-gray-700 cursor-pointer flex items-center justify-between"
          onClick={toggleDropdown}
        >
          <span className="flex-1">{selectedOption}</span> {/* Ensure this takes up available space */}
          <div
            className={`transform w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent ${
              isDropdownOpen
                ? "border-t-[15px] border-t-[#7A89C2] rotate-180"
                : "border-b-[15px] border-b-[#7A89C2]"
            } transition-transform duration-300`}
          ></div>
        </div>
        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-2 rounded-lg bg-white shadow-lg">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelectOption(option)}
                className="px-4 py-2 cursor-pointer hover:bg-[#7A89C226]"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  

export default CustomDropdown;
