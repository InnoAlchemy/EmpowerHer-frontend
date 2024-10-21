import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Icon for cancel
import { MdAttachFile, MdKeyboardArrowDown } from "react-icons/md"; // Icons for attach file and dropdown
import axios from "axios"; // Axios for API requests
import { toast, Toaster } from "react-hot-toast"; // Toast for notifications

const NominationForm = () => {
  // State for form fields
  const [nominatorFullName, setNominatorFullName] = useState("");
  const [nomineeFullName, setNomineeFullName] = useState("");
  const [nominatorEmail, setNominatorEmail] = useState("");
  const [nomineeEmail, setNomineeEmail] = useState("");
  const [reasonForNomination, setReasonForNomination] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // State for nomination types
  const [nominationTypes, setNominationTypes] = useState([]);
  const [selectedNominationType, setSelectedNominationType] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fetch nomination types from the API
  useEffect(() => {
    const fetchNominationTypes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/nomination_types");
        setNominationTypes(response.data); // Assuming API returns [{id, title}, ...]
      } catch (error) {
        console.error("Error fetching nomination types:", error);
        toast.error("Failed to load nomination categories.");
      }
    };

    fetchNominationTypes();
  }, []);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setReasonForNomination(""); // Clear reason if a file is selected
      console.log("Selected file:", file);
    }
  };

  // Remove selected file
  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  // Toggle dropdown for nomination types
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle nomination type selection
  const handleNominationTypeSelect = (nominationType) => {
    setSelectedNominationType(nominationType);
    setDropdownOpen(false);
  };

  // Handle reason input change
  const handleReasonChange = (e) => {
    setReasonForNomination(e.target.value);
    if (e.target.value.trim() !== "") {
      setSelectedFile(null); // Clear file if user starts typing a reason
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (
      !nominatorFullName.trim() ||
      !nomineeFullName.trim() ||
      !nominatorEmail.trim() ||
      !nomineeEmail.trim() ||
      !selectedNominationType
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }

    // Ensure either reason or file is provided
    if (!reasonForNomination.trim() && !selectedFile) {
      toast.error("Please provide a reason for nomination or upload a text file.");
      return;
    }

    // Construct form data
    const formData = new FormData();
    formData.append("nominator_full_name", nominatorFullName);
    formData.append("nominee_full_name", nomineeFullName);
    formData.append("nominator_email", nominatorEmail);
    formData.append("nominee_email", nomineeEmail);
    formData.append("nomination_type_id", selectedNominationType.id); // Send nomination_type_id

    // Append reason or file
    if (selectedFile) {
      formData.append("reason_for_nomination", selectedFile); // Use the correct field name
    } else {
      formData.append("reason_for_nomination", reasonForNomination);
    }

    // Debugging: Log form data entries
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    try {
      // Submit the form data to the backend
      const response = await axios.post("http://localhost:8080/api/nomination_forms", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Form submitted successfully:", response.data);
      toast.success("Nomination submitted successfully!");

      // Reset form fields
      setNominatorFullName("");
      setNomineeFullName("");
      setNominatorEmail("");
      setNomineeEmail("");
      setReasonForNomination("");
      setSelectedFile(null);
      setSelectedNominationType(null);
    } catch (error) {
      console.error("Error submitting nomination:", error);
      toast.error("Error submitting nomination. Please try again.");
    }
  };

  return (
    <div className="flex justify-center px-4 sm:px-8 lg:px-16">
      {/* Added a container div with max-w and centering */}
      <form
        className="flex flex-col gap-6 w-full max-w-[1400px] p-4 mt-12 rounded-[25px] "
        onSubmit={handleSubmit}
      >
        <Toaster /> {/* Ensure Toaster is included to display toast notifications */}
        <h2 className="font-cabin text-xl md:text-2xl lg:text-[35px] font-medium text-[#7A89C2] text-left mb-4">
          Send a Nomination Form
        </h2>

        {/* Nominator and Nominee Information */}
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Nominator's Full Name *"
            required
            value={nominatorFullName}
            onChange={(e) => setNominatorFullName(e.target.value)}
            className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
          />
          <input
            type="email"
            placeholder="Nominator Email Address *"
            required
            value={nominatorEmail}
            onChange={(e) => setNominatorEmail(e.target.value)}
            className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Nominee's Full Name *"
            required
            value={nomineeFullName}
            onChange={(e) => setNomineeFullName(e.target.value)}
            className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
          />
          <input
            type="email"
            placeholder="Nominee's Email Address *"
            required
            value={nomineeEmail}
            onChange={(e) => setNomineeEmail(e.target.value)}
            className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
          />
        </div>

        {/* Nomination Type Dropdown */}
        <div className="relative flex-1">
          <div
            className={`flex justify-between items-center p-4 h-[64px] rounded-[30px] border border-[#7A89C2] transition-all duration-300 ${
              dropdownOpen ? "rounded-b-none" : ""
            } cursor-pointer`}
            onClick={toggleDropdown}
          >
            <span className="text-[#7A89C2] text-lg">
              {selectedNominationType ? selectedNominationType.title : "Nomination Category *"}
            </span>
            <MdKeyboardArrowDown className="text-[#7A89C2]" size={24} />
          </div>
          {dropdownOpen && (
            <div className="absolute z-10 mt-0 w-full bg-white border border-[#7A89C2] rounded-b-[30px] shadow-lg">
              {nominationTypes.map((type, index) => (
                <div key={type.id}>
                  <div
                    className="p-2 hover:bg-[#EADFE2] cursor-pointer"
                    onClick={() => handleNominationTypeSelect(type)}
                  >
                    {type.title}
                  </div>
                  {/* Conditionally render the separator or spacer */}
                  {index < nominationTypes.length - 1 ? (
                    <div className="border-b border-[#7A89C2] h-[15px]"></div>
                  ) : (
                    <div className="h-[15px]"></div> // Spacer for the last item
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Reason for Nomination and File Attachment Section */}
        <div className={`flex flex-col gap-4 ${dropdownOpen ? "mt-[150px]" : "mt-4"}`}>
          {/* Adjust margin based on dropdown state */}
          <div className="relative">
            <textarea
              placeholder="Reason For Nomination *"
              value={reasonForNomination}
              onChange={handleReasonChange} // Use the new handler
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
              accept=".txt" // Limit to text files
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8 mb-8">
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

export default NominationForm;
