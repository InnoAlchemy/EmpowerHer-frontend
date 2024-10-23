// EventDetails.js
import React, { useState, useEffect } from "react";
import Navbar from "../../components/home/navbar";
import Footer from "../../components/home/footer";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import leadingchange from "../../assets/leadingchange.png"; // Default image for events


const EventDetails = () => {
  const location = useLocation(); // Access location
  const navigate = useNavigate(); // Initialize navigate

  // Extract event and workshop data from state
  const event = location.state?.event;
  const workshop = location.state?.workshop;

  // Determine the type of content to display
  const isEvent = !!event;
  const isWorkshop = !!workshop;

  // State for ticket count and payment step
  const [count, setCount] = useState(1);
  const [currentStep, setCurrentStep] = useState(1); // Progress bar state

  // Define pricing variables based on content type
  const ticketPrice = isEvent ? event.price : workshop?.price || 20.0;
  const discount = 5.0;
  const additionalFee = 0.0;
  const serviceFee = 2.0;
  const total = ticketPrice * count - discount + serviceFee;

  // Handlers for ticket count
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) { // Ensure at least one ticket is selected
      setCount(count - 1);
    }
  };

  // Handlers for payment steps
  const handleProceedClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2); // Move to step 2 on click
    }
    // You can add further steps or submission logic here
  };

  const handleBackClick = () => {
    if (currentStep === 2) {
      setCurrentStep(1); // Move back to step 1
    }
  };

  // Redirect to ProgramsInitiatives if neither event nor workshop data is available
  useEffect(() => {
    if (!isEvent && !isWorkshop) {
      navigate('/programs-initiatives');
    }
  }, [isEvent, isWorkshop, navigate]);

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString(undefined, options);
  };

  // Helper function to format time from "HH:MM:SS" to "H:MM AM/PM"
  const formatTime = (timeString) => {
    if (!timeString) return "N/A";
    const [hour, minute] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hour), parseInt(minute));
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  // Destructure data based on content type with default values
  const {
    title = isEvent ? "Event Title Not Available" : "Workshop Title Not Available",
    description = isEvent ? "No description available for this event." : "No description available for this workshop.",
    date: contentDate,
    start_time,
    end_time,
    location: contentLocation = isEvent ? "Location not specified" : "Location not specified",
    type = isEvent ? "Type not specified" : "Type not specified",
    image: contentImage,
    Languages = "Language not specified",
    instructor = isWorkshop ? "Instructor not specified" : undefined // Assuming 'instructor' field is for workshops
  } = isEvent ? event : workshop || {};

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      {/* Content Title */}
      <section className="w-full max-w-[1400px] mx-auto p-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-[#7A89C2] font-cabin text-[28px] md:text-[35px] font-bold">
            {isEvent ? "Event Details" : "Workshop Details"}
          </h1>
          <hr className="w-[150px] md:w-[200px] mx-auto border-t-2 border-[#7A89C2] mt-2 mb-6" />
        </div>

        {/* Content Image */}
        <div className="w-full">
          <img
            src={contentImage }
            alt={title}
            className="w-full h-[250px] md:h-[366px] object-cover rounded-[10px]"
          />
        </div>

        {/* Content Description */}
        <div className="mt-6 md:mt-8">
          <p className="font-cabin text-[24px] md:text-[30px] font-bold text-[#7A89C2]">
            {title}
          </p>
          <p className="mt-4 text-[#00000099] text-[16px] md:text-[20px] leading-relaxed whitespace-nowrap">
            {description}
          </p>
        </div>

        {/* Content Details */}
        <div className="mt-6 md:mt-8 space-y-2 md:flex md:space-y-0 md:space-x-12">
          <div>
            <p className="font-cabin text-[18px] md:text-[20px] font-medium">
              Date:{" "}
              <span className="text-[#7A89C2] ml-2">{formatDate(contentDate)}</span>
            </p>
            <p className="font-cabin text-[18px] md:text-[20px] font-medium">
              Time:{" "}
              <span className="text-[#7A89C2] ml-2">
                {formatTime(start_time)} till {formatTime(end_time)}
              </span>
            </p>
            <p className="font-cabin text-[18px] md:text-[20px] font-medium">
              Ticket Price: <span className="text-[#7A89C2] ml-2">${ticketPrice}</span>
            </p>
          </div>
          <div>
            <p className="font-cabin text-[18px] md:text-[20px] font-medium">
              Location:{" "}
              <span className="text-[#7A89C2] ml-2">
                {contentLocation}
              </span>
            </p>
            <p className="font-cabin text-[18px] md:text-[20px] font-medium">
              Type: <span className="text-[#7A89C2] ml-2">{type}</span>
            </p>
            {isWorkshop && (
              <p className="font-cabin text-[18px] md:text-[20px] font-medium">
                Instructor: <span className="text-[#7A89C2] ml-2">{instructor}</span>
              </p>
            )}
            <p className="font-cabin text-[18px] md:text-[20px] font-medium">
              Languages: <span className="text-[#7A89C2] ml-2">{Languages}</span>
            </p>
          </div>
        </div>

        {/* Counter Section */}
        <div className="mt-8 md:mt-10 flex flex-col items-center">
          <p className="text-[#7A89C2] text-2xl font-bold mb-4">
            Number Of Tickets
          </p>
          <div className="flex items-center space-x-6 md:space-x-8">
            <button
              onClick={decrement}
              className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#7A89C2] text-[#7A89C2] rounded-full flex items-center justify-center text-3xl focus:outline-none"
              disabled={count <= 1} // Disable decrement button if count is 1
            >
              -
            </button>
            <span className="text-[#7A89C2] text-2xl md:text-3xl font-bold">
              {count}
            </span>
            <button
              onClick={increment}
              className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#7A89C2] text-[#7A89C2] rounded-full flex items-center justify-center text-3xl focus:outline-none"
            >
              +
            </button>
          </div>
        </div>
      </section>

      {/* Payment Details Section */}
      <section className="w-full max-w-[1400px] mx-auto p-4 sm:px-6 lg:px-8">
        {currentStep === 1 && (
          <section className="w-full">
            {/* Payment Details Title */}
            <div className="text-center">
              <h1 className="text-[#7A89C2] font-cabin text-[28px] md:text-[35px] font-bold">
                Payment Details
              </h1>
              <hr className="w-[150px] md:w-[200px] mx-auto border-t-2 border-[#7A89C2] mt-1 mb-6" />
            </div>

            {/* Ticket Summary */}
            <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-b-2 pb-4 border-gray-300">
              <div className="flex items-center">
                <img
                  src={contentImage }
                  alt={`${isEvent ? "Event" : "Workshop"} Ticket`}
                  className="w-[140px] h-[80px] md:w-[180px] md:h-[100px] rounded-lg object-cover mr-4"
                />
                <p className="font-cabin text-[18px] md:text-[20px] text-[#7A89C2] font-bold">
                  {isEvent ? "Event Ticket" : "Workshop Ticket"} x{count}
                </p>
              </div>
              <p className="font-cabin text-[18px] md:text-[20px] text-[#7A89C2] font-bold">
                ${(ticketPrice * count).toFixed(2)}
              </p>
            </div>

            {/* Pricing Breakdown */}
            <div className="mt-4 space-y-2 font-cabin">
              <div className="flex justify-between">
                <p className="text-[18px] md:text-[20px] text-[#00000099]">
                  Ticket Price:
                </p>
                <p className="text-[18px] md:text-[20px] text-[#7A89C2]">
                  ${(ticketPrice * count).toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[18px] md:text-[20px] text-[#00000099]">
                  Discount:
                </p>
                <p className="text-[18px] md:text-[20px] text-[#7A89C2]">
                  -${discount.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[18px] md:text-[20px] text-[#00000099]">
                  Additional Fees:
                </p>
                <p className="text-[18px] md:text-[20px] text-[#7A89C2]">
                  -${additionalFee.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[18px] md:text-[20px] text-[#00000099]">
                  Service Fee:
                </p>
                <p className="text-[18px] md:text-[20px] text-[#7A89C2]">
                  +${serviceFee.toFixed(2)}
                </p>
              </div>
              <hr className="border-t-2 border-gray-300 my-2" />
              <div className="flex justify-between">
                <p className="text-[18px] md:text-[20px] font-bold text-[#00000099]">
                  Grand Total:
                </p>
                <p className="text-[18px] md:text-[20px] font-bold text-[#7A89C2]">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div
                className={`w-[50px] md:w-[60px] h-[8px] md:h-[10px] rounded-full ${
                  currentStep === 1 ? "bg-[#7A89C2]" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`w-[50px] md:w-[60px] h-[8px] md:h-[10px] rounded-full ${
                  currentStep === 2 ? "bg-[#7A89C2]" : "bg-gray-300"
                }`}
              ></div>
            </div>

            {/* Proceed to Checkout Button */}
            <div className="mt-10 flex justify-center mb-10">
              <button
                onClick={handleProceedClick}
                className="w-[80%] md:w-[60%] bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white py-3 text-center text-lg font-bold rounded-full focus:outline-none
                  hover:bg-gray-700 hover:text-[#7A89C2] transition duration-300 ease-in-out"
              >
                Proceed to Checkout
              </button>
            </div>
          </section>
        )}

        {currentStep === 2 && (
          // Payment Form Section
          <section className="w-full">
            {/* Payment Details Title with Back Button */}
            <FaArrowLeft
                onClick={handleBackClick}
                className="cursor-pointer text-[#00000099] text-2xl mr-4"
              />
            <div className="text-center flex items-center justify-center mb-4">
             
              <h1 className="text-[#7A89C2] font-cabin text-[28px] md:text-[35px] font-bold">
                Payment Details
              </h1>
            </div>
            <hr className="w-[150px] md:w-[200px] mx-auto border-t-2 border-[#7A89C2] mt-1 mb-6" />

            {/* Payment Form */}
            <div className="mt-8 space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-[#00000099] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john.doe@email.com"
                  className="w-full px-4 py-3 border border-[#7A89C2] rounded-full"
                />
              </div>

              {/* Full Name on Card */}
              <div>
                <label className="block text-[#00000099] font-medium mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name on Card"
                  className="w-full px-4 py-3 border border-[#7A89C2] rounded-full"
                />
              </div>

              {/* Card Number */}
              <div>
                <label className="block text-[#00000099] font-medium mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9101 1121"
                  className="w-full px-4 py-3 border border-[#7A89C2] rounded-full"
                />
              </div>

              {/* Expiry Date and CVV */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label className="block text-[#00000099] font-medium mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-[#7A89C2] rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[#00000099] font-medium mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full px-4 py-3 border border-[#7A89C2] rounded-full"
                  />
                </div>
                {/* Country Dropdown */}
                <div className="relative flex-1">
                  <label className="block text-[#00000099] font-medium mb-2">
                    Country
                  </label>
                  <select className="w-full px-4 py-3 border border-[#7A89C2] rounded-full appearance-none">
                    <option>Select Country</option>
                    <option>Lebanon</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                  <span className="absolute inset-y-0 right-4 top-[30px] flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#7A89C2]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 01-.7-.29l-3-3a1 1 0 011.42-1.42L10 9.58l2.29-2.29a1 1 0 011.42 1.42l-3 3A1 1 0 0110 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div
                className={`w-[50px] md:w-[60px] h-[8px] md:h-[10px] rounded-full ${
                  currentStep === 1 ? "bg-[#7A89C2]" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`w-[50px] md:w-[60px] h-[8px] md:h-[10px] rounded-full ${
                  currentStep === 2 ? "bg-[#7A89C2]" : "bg-gray-300"
                }`}
              ></div>
            </div>

           {/* Proceed to Checkout Button */}
           <div className="mt-10 flex justify-center mb-10"> 
              <button
                onClick={handleProceedClick}
                className="w-[80%] md:w-[60%] bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white py-3 text-center text-lg font-bold rounded-full focus:outline-none
                  hover:from-gray-700 hover:to-gray-700 hover:text-[#7A89C2] transition duration-300 ease-in-out" // Updated hover classes
              >
                Proceed to Checkout
              </button>
            </div>
          </section>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default EventDetails;
