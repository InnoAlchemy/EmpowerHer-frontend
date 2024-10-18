import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Importing an icon for cancel
import { MdAttachFile, MdKeyboardArrowDown } from "react-icons/md"; // Import arrow down icon

const NominationForm = ({ handleSubmit }) => {
  const [message, setMessage] = useState(""); // State for the message
  const [selectedFile, setSelectedFile] = useState(null); // State for the selected file
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown open/close
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null); // Clear the selected file
  };

  const categories = [
    "Leadership",
    "Innovation",
    "Community Impact"
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  return (
    <form className="flex flex-col gap-6 w-auto p-4 mt-12 rounded-[25px] ml-0 md:ml-16" onSubmit={handleSubmit}>
      <h2 className="font-cabin text-xl md:text-2xl lg:text-[35px] font-medium text-[#7A89C2] text-left mb-4">Send a Form</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <input
          type="text"
          placeholder="Nominator's Full Name "
          required
          className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
        />
        <input
          type="email"
          placeholder="Nominator Email Address *"
          required
          className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <input
          type="text"
          placeholder="Nominee's Full Name *"
          required
          className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
        />
        <input
          type="email"
          placeholder="Nominee's Email Address *"
          required
          className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
        />
      </div>

      <div className="relative flex-1">
        <div
          className={`flex justify-between items-center p-4 h-[64px] rounded-[30px] border border-[#7A89C2] transition-all duration-300 ${dropdownOpen ? 'rounded-b-none' : ''}`}
          onClick={toggleDropdown}
        >
          <span className="text-[#7A89C2] text-lg">{selectedCategory || "Nomination Category *"}</span>
          <MdKeyboardArrowDown className="text-[#7A89C2]" size={24} />
        </div>
        {dropdownOpen && (
          <div className="absolute z-10 mt-0 w-full bg-white border border-[#7A89C2] rounded-b-[30px] shadow-lg">
            {categories.map((category, index) => (
              <div key={index}>
                <div
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </div>
                {index < categories.length - 1 && (
                  <div className="border-b border-[#7A89C2] h-[15px]"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reason for nomination and File Attachment Section */}
      <div className={`flex flex-col gap-4 ${dropdownOpen ? 'mt-[150px]' : 'mt-4'}`}> {/* Adjust margin based on dropdown state */}
        <div className="relative">
          <textarea
            placeholder="Reason For Nomination *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full h-[150px] md:h-[237px] p-4 rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
          />
          <div className="absolute bottom-2 left-2 flex items-center gap-2 ml-4">
            <label
              htmlFor="file-upload"
              className="flex items-center cursor-pointer text-[#00000] text-lg"
            >
              <MdAttachFile className="mr-1 mb-2" />
              
              
            </label>
            {selectedFile && (
              <div className="bg-gray-200 rounded-[30px] p-2 flex items-center">
                <span className="text-sm text-black mr-2">{selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)</span>
                <AiOutlineClose onClick={handleFileRemove} className="cursor-pointer text-red-600" />
              </div>
            )}
          </div>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
            accept=".txt" // Limit to text files
          />
        </div>
      </div>

      {/* Centered Button with Increased Width */}
      <div className="flex justify-center md:justify-center mt-8 mb-8">
        <button
          type="submit"
          className="bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white text-lg font-semibold py-2 px-8 rounded-lg hover:opacity-90 transition duration-300 w-full max-w-[300px]"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default NominationForm;