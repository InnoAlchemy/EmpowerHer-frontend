import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Icon for cancel
import { MdAttachFile, MdKeyboardArrowDown } from "react-icons/md"; // Icons for attach file and dropdown
import axios from "axios"; // Axios for API requests
import { toast, Toaster } from "react-hot-toast"; // Toast for notifications

const PartnershipForm = () => {
  // State for form fields
  const [organizationName, setOrganizationName] = useState("");
  const [contactFullName, setContactFullName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [descriptionOfProposal, setDescriptionOfProposal] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // State for partnership types
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fetch partnership categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/partnership_types");
        setCategories(response.data); // Assuming API returns [{id, title}, ...]
      } catch (error) {
        console.error("Error fetching partnership types:", error);
        toast.error("Failed to load partnership categories.");
      }
    };

    fetchCategories();
  }, []);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setDescriptionOfProposal(""); // Clear description if a file is selected
      console.log("Selected file:", file);
    }
  };

  // Remove selected file
  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  // Toggle dropdown for partnership types
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle partnership type selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  // Handle description input change
  const handleDescriptionChange = (e) => {
    setDescriptionOfProposal(e.target.value);
    if (e.target.value.trim() !== "") {
      setSelectedFile(null); // Clear file if user starts typing a description
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (
      !organizationName.trim() ||
      !contactFullName.trim() ||
      !contactEmail.trim() ||
      !contactPhone.trim() ||
      !selectedCategory
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }

    // Ensure either description or file is provided
    if (!descriptionOfProposal.trim() && !selectedFile) {
      toast.error("Please provide a description of the proposal or upload a text file.");
      return;
    }

    // Construct form data
    const formData = new FormData();
    formData.append("organization_name", organizationName);
    formData.append("contact_person_full_name", contactFullName);
    formData.append("contact_person_email", contactEmail);
    formData.append("phone_number", contactPhone);
    formData.append("partnership_type_id", selectedCategory.id); // Send partnership_type_id

    // Append description or file
    if (selectedFile) {
      formData.append("description_of_proposal", selectedFile); // Assuming backend handles file upload in this field
    } else {
      formData.append("description_of_proposal", descriptionOfProposal);
    }

    // Debugging: Log form data entries
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    try {
      // Submit the form data to the backend
      const response = await axios.post("http://localhost:8080/api/partnership_forms", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Form submitted successfully:", response.data);
      toast.success("Partnership form submitted successfully!");

      // Reset form fields
      setOrganizationName("");
      setContactFullName("");
      setContactEmail("");
      setContactPhone("");
      setDescriptionOfProposal("");
      setSelectedFile(null);
      setSelectedCategory(null);
    } catch (error) {
      console.error("Error submitting partnership form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="flex justify-center px-4 sm:px-8 lg:px-16">
      {/* Added a container div with max-w and centering */}
      <form
        className="flex flex-col gap-6 w-full max-w-[1400px] p-4 mt-12 rounded-[25px] "
        onSubmit={handleSubmit}
      >
        <Toaster /> {/* To display toast notifications */}
        <h2 className="font-cabin text-xl md:text-2xl lg:text-[35px] font-medium text-[#7A89C2] text-left mb-4">
          Send a Form
        </h2>

        {/* Organization and Contact Person Information */}
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Organization/Individual Name *"
            required
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
          />
          <input
            type="text"
            placeholder="Contact Person's Full Name *"
            required
            value={contactFullName}
            onChange={(e) => setContactFullName(e.target.value)}
            className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="email"
            placeholder="Contact Person's Email Address *"
            required
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
          />
          <input
            type="tel"
            placeholder="Contact Person's Phone Number *"
            required
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
          />
        </div>

        {/* Partnership Type Dropdown */}
        <div className="relative flex-1">
          <div
            className={`flex justify-between items-center p-4 h-[64px] rounded-[30px] border border-[#7A89C2] transition-all duration-300 ${
              dropdownOpen ? "rounded-b-none" : ""
            } cursor-pointer`}
            onClick={toggleDropdown}
          >
            <span className="text-[#7A89C2] text-lg">
              {selectedCategory ? selectedCategory.title : "Partnership Type *"}
            </span>
            <MdKeyboardArrowDown className="text-[#7A89C2]" size={24} />
          </div>
          {dropdownOpen && (
            <div className="absolute z-10 mt-0 w-full bg-white border border-[#7A89C2] rounded-b-[30px] shadow-lg">
              {categories.map((category, index) => (
                <div key={category.id}>
                  <div
                    className="p-2 hover:bg-[#EADFE2] cursor-pointer"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category.title}
                  </div>
                  {/* Conditionally render the separator or spacer */}
                  {index < categories.length - 1 ? (
                    <div className="border-b border-[#7A89C2] h-[15px]"></div>
                  ) : (
                    <div className="h-[15px]"></div> // Spacer for the last item
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Description of Proposal and File Attachment Section */}
        <div className={`flex flex-col gap-4 ${dropdownOpen ? "mt-[150px]" : "mt-4"}`}>
          {/* Adjust margin based on dropdown state */}
          <div className="relative">
            <textarea
              placeholder="Description of Proposal *"
              value={descriptionOfProposal}
              onChange={handleDescriptionChange} // Use the new handler
              required={!selectedFile} // Make it required only if no file is uploaded
              className="w-full h-[150px] md:h-[237px] p-4 rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
            />
            <div className="absolute bottom-2 left-2 flex items-center gap-2 ml-4">
              <label
                htmlFor="file-upload"
                className="flex items-center cursor-pointer text-[#00000099] text-lg"
              >
                <MdAttachFile className="mr-1 mb-2" />
                {/* Optional: Add text like "Attach File" */}
                {/* <span>Attach File</span> */}
              </label>
              {selectedFile && (
                <div className="bg-[#EADFE2] rounded-[30px] p-2 mb-2 flex items-center">
                  <span className="text-sm text-black mr-2">
                    {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
                  </span>
                  <AiOutlineClose
                    onClick={handleFileRemove}
                    className="cursor-pointer text-[#7A89C2]"
                  />
                </div>
              )}
            </div>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
              accept=".txt, .pdf, .doc, .docx, .xls, .xlsx, .jpeg, .jpg, .png, .gif, .webp, .zip, .rar" // Allow all supported file types
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center md:justify-center mt-8 mb-8">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white text-lg font-semibold py-2 px-8 rounded-lg hover:opacity-90 transition duration-300 w-full max-w-[300px]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnershipForm;
