import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Icon for cancel
import { MdAttachFile } from "react-icons/md"; // Icon for attach file
import axios from "axios"; // Axios for API requests
import { toast } from "react-hot-toast"; 
import ToastProvider from "../../components/toasterMessages";

const ContactForm = ({ category }) => {
  const [firstName, setFirstName] = useState(""); // State for first name
  const [lastName, setLastName] = useState(""); // State for last name
  const [email, setEmail] = useState(""); // State for email
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number
  const [message, setMessage] = useState(""); // State for the message
  const [selectedFile, setSelectedFile] = useState(null); // State for the selected file

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setMessage(""); // Clear message if a file is selected
    }
  };

  // Remove selected file
  const handleFileRemove = () => {
    setSelectedFile(null); // Clear the selected file
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate that at least one of the message or file is provided
    if (!firstName || !lastName || !email || (!message && !selectedFile)) {
      alert("Please fill out all required fields.");
      return;
    }

    const formData = new FormData(); // Create a FormData object
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("phone_number", phoneNumber);
    formData.append("category", category); // Include the selected category

    // Append the content based on whether a file is selected or not
    if (selectedFile) {
      formData.append("content", selectedFile); // Append the file to the form data
    } else {
      formData.append("content", message); // Append the text message if no file is uploaded
    }

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post("http://localhost:8080/api/forms", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file upload
        },
      });

      console.log("Form submitted successfully:", response.data);
      toast.success("Form submitted successfully!");

      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setSelectedFile(null); // Clear the selected file
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
      // Optionally, handle specific error messages here
    }
  };

  return (
    
    <form
      className="flex flex-col gap-6 w-auto p-4 mt-12 rounded-[25px] ml-0 md:ml-16"
      onSubmit={handleSubmit}
    >
        <ToastProvider />
      <h2 className="font-cabin text-xl md:text-2xl lg:text-[35px] font-medium text-[#7A89C2] text-left mb-4">
        Send a Form
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <input
          type="text"
          placeholder="First Name *"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
        />
        <input
          type="text"
          placeholder="Last Name *"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <input
          type="email"
          placeholder="Email Address *"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="flex-1 p-4 h-[50px] md:h-[64px] rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
        />
      </div>

      {/* Message and File Attachment Section */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <textarea
            placeholder="Message *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            // Removed the 'required' attribute
            className="w-full h-[150px] md:h-[237px] p-4 rounded-[30px] border border-[#7A89C2] focus:outline-none focus:ring-2 focus:ring-[#7A89C2]"
          />
          <div className="absolute bottom-2 left-2 flex items-center gap-2 ml-4">
            <label
              htmlFor="file-upload"
              className="flex items-center cursor-pointer text-[#00000099] text-lg"
            >
              <MdAttachFile className="mr-1 mb-2" />
              
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
        {/* Optional: Inform users they can provide either a message or a file */}
        <p className="text-sm text-gray-500">
          You can provide either a message or upload a text file.
        </p>
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

export default ContactForm;
