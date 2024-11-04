import React, { useState } from "react";

// Custom dropdown component
const CustomDropdown = ({
  label,
  options,
  selectedOption,
  setSelectedOption,
  placeholderColor = "text-[#7A89C2]", // Default placeholder text color
  placeholderHeight = "h-16", // Default placeholder height
  placeholderBgColor = "bg-[#7A89C226]", // Default placeholder background color
  dropdownBgColor = "bg-[#7A89C226]", // Default dropdown background color
  placeholderBorderColor = "border-[#7A89C2]", // Default placeholder border color
  dropdownBorderColor = "border-[#7A89C2]" // Default dropdown border color
}) => {
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
        className={`w-full ${placeholderHeight} px-4 pr-10 rounded-t-2xl ${
          isDropdownOpen ? "rounded-b-none" : "rounded-b-2xl"
        } ${placeholderBgColor} ${placeholderBorderColor} border text-[#7A89C2] cursor-pointer flex items-center justify-between`}
        onClick={toggleDropdown}
      >
        <span className={`flex-1 ${!selectedOption ? placeholderColor : ""}`}>
          {selectedOption || "Select an option"}
        </span>
        <div
          className={`transform w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent ${
            isDropdownOpen
              ? "border-t-[10px] border-t-[#7A89C2] rotate-180"
              : "border-b-[10px] border-b-[#7A89C2]"
          } transition-transform duration-300`}
        ></div>
      </div>
      {isDropdownOpen && (
        <div
          className={`w-full rounded-b-2xl ${dropdownBgColor} ${dropdownBorderColor} shadow-lg border-t`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelectOption(option)}
              className={`px-4 py-2 cursor-pointer text-[#7A89C2] hover:${dropdownBgColor} ${
                index < options.length - 1 ? `border-b ${dropdownBorderColor}` : ""
              }`}
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
