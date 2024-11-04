// AddPost.js
import React, { useState } from "react";
import axios from "axios";
import CustomDropdown from "../components/custom-dropdown";
import cloud from "../assets/cloud-icon.png";
import { useUser } from "../Helper-Functions/UserContext";
import { toast } from "react-hot-toast";
import ToastProvider from "../components/toasterMessages";

const AddPost = ({ onClose, onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [file, setFile] = useState(null); // State to store the uploaded file
  const [preview, setPreview] = useState(null); // State to store file preview
  const { user } = useUser();
  const dropdownOptions = ["Investors", "Partners", "Clients", "Others"];

  

  // Handle drag-and-drop file upload
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setPreviewFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Set preview based on file type
  const setPreviewFile = (file) => {
    if (file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else if (file.type.startsWith("video/")) {
      setPreview(URL.createObjectURL(file));
    } else if (file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsText(file);
    } else {
      setPreview(null); // No specific preview for other file types
    }
  };

  // Clear uploaded file
  const clearFile = () => {
    setFile(null);
    setPreview(null);
  };

  // Handle form submission to create a new post
  const handleCreatePost = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", description);
    formData.append("status", selectedOption.toLowerCase());
    formData.append("user_id", user.id);
    if (file) formData.append("media_url", file);

    try {
      const response = await axios.post("http://localhost:8080/api/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Post created successfully!");
      onPostCreated();
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      toast.error("Error creating post. Please try again.");
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <ToastProvider />
      <div className="bg-white p-4 rounded-2xl max-w-[700px] w-full relative">
        <h2 className="text-[#7A89C2] font-bold text-xl mb-3">New Post</h2>
        
        {/* Post Title */}
        <label className="block text-[#00000099] text-md font-semibold mb-1">
          Post Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="EmpowerHer Summit: Leading the Charge"
          className="w-full h-10 p-2 rounded-[10px] border border-[#7A89C2] text-gray-700 placeholder-gray-500 mb-3 focus:outline-none"
        />

        {/* Custom Dropdown */}
        <label className="block text-[#00000099] text-md font-semibold mb-1">
          What are you looking for?
        </label>
        <CustomDropdown
          options={dropdownOptions}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          placeholder="Select an option"
          placeholderBgColor="bg-white"
          dropdownBgColor="bg-white"
          placeholderHeight="h-12"
        />

        {/* Upload File */}
        <label className="block text-[#00000099] text-md font-semibold mb-1 mt-2">
          Upload File
        </label>
        <div
          className="w-full h-24 p-3 rounded-lg bg-[#EADFE2] flex items-center justify-center text-gray-500 mb-3 border border-[#7A89C2] relative overflow-hidden md:h-36 lg:h-36"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {preview ? (
            <>
              {file && file.type.startsWith("image/") && (
                <img
                  src={preview}
                  alt="Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {file && file.type.startsWith("video/") && (
                <video
                  controls
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={preview} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              )}
              {file && file.type === "text/plain" && (
                <textarea
                  readOnly
                  value={preview}
                  className="w-full h-full p-2 bg-[#EADFE2] rounded-lg border border-[#7A89C2] text-gray-700 placeholder-gray-500 mb-3 focus:outline-none absolute inset-0"
                  style={{ resize: "none" }}
                />
              )}
              <button
                onClick={clearFile}
                className="text-gray-500 hover:text-gray-700 text-lg font-bold absolute top-2 right-2"
              >
                &times;
              </button>
            </>
          ) : (
            <>
 <div className="flex flex-col items-center justify-center">
  <img src={cloud} alt="cloud icon" className="mb-2 w-14 h-14" />
  <span className="text-gray-600 opacity-50">Drag & drop files or Browse</span>
</div>

            </>
          )}
        </div>

        {/* Display Uploaded File (if any) */}
        {file && (
          <div className="mb-3 flex items-center space-x-3">
            <span className="bg-[#EADFE2] rounded-full px-3 py-1 text-gray-700">
              {file.name} <span className="text-gray-500">({(file.size / (1024 * 1024)).toFixed(2)} MB)</span>
            </span>
            <button
              onClick={clearFile}
              className="text-gray-500 hover:text-gray-700 text-lg font-bold"
            >
              &times;
            </button>
          </div>
        )}

        {/* Post Description */}
        <label className="block text-[#00000099] text-md font-semibold mb-1">
          Post Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Type here"
          className="w-full h-24 p-2 bg-[#EADFE2] rounded-lg border border-[#7A89C2] text-gray-700 placeholder-gray-500 mb-3 focus:outline-none"
        ></textarea>

        {/* Request and Cancel Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handleCreatePost}
            className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#2C3F87] to-[#7A89C2]"
          >
            Request
          </button>
          <button
            onClick={() => {
              clearFile();
              onClose();
            }}
            className="px-6 py-2 rounded-full font-semibold text-gray-700 bg-[#EADFE2]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
