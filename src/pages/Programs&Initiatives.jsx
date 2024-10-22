import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";
import MembershipCard from '../components/membershipCard';
import { formatDateForArticles } from '../Helper-Functions/date-formatters';

const ProgramsInitiatives = () => {
 
  // State for the events section slider
  const [eventsCurrent, setEventsCurrent] = useState(0);
  const [workshopCurrent, setWorkshopsCurrent] = useState(0);

  // Responsive card counts based on screen size
  const [cardCount, setCardCount] = useState(3);

  // State to store fetched data
  const [staticPages, setStaticPages] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [upcomingWorkshops, setUpcomingWorkshops] = useState([]);

  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handle responsive card count
  useEffect(() => {
    const updateCardCount = () => {
      if (window.innerWidth < 640) {
        setCardCount(1); // 1 card for mobile view
      } else if (window.innerWidth < 1024) {
        setCardCount(2); // 2 cards for tablet view
      } else {
        setCardCount(3); // 3 cards for desktop view
      }
    };
    updateCardCount();
    window.addEventListener("resize", updateCardCount);
    return () => window.removeEventListener("resize", updateCardCount);
  }, []);

 

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/combined_api_data_for_pages/programs-and-initiatives"
        );
        const data = response.data;
        setStaticPages(data.staticPages || []);
        setUpcomingEvents(data.UpcomingEvents.upcomingEvents || []);
        setUpcomingWorkshops(data.UpcomingEvents.upcomingWorkshops || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handlers for events slider
  const nextEventSlide = () => {
    setEventsCurrent((prev) =>
      prev === Math.ceil(upcomingEvents.length / cardCount) - 1 ? 0 : prev + 1
    );
  };

  const prevEventSlide = () => {
    setEventsCurrent((prev) =>
      prev === 0 ? Math.ceil(upcomingEvents.length / cardCount) - 1 : prev - 1
    );
  };

  // Handlers for workshops slider
  const nextWorkshopSlide = () => {
    setWorkshopsCurrent((prev) =>
      prev === Math.ceil(upcomingWorkshops.length / cardCount) - 1 ? 0 : prev + 1
    );
  };

  const prevWorkshopSlide = () => {
    setWorkshopsCurrent((prev) =>
      prev === 0 ? Math.ceil(upcomingWorkshops.length / cardCount) - 1 : prev - 1
    );
  };

  // Calculate progress bar width based on the current slide
  const eventProgressWidth =
    upcomingEvents.length > 0
      ? ((eventsCurrent + 1) / Math.ceil(upcomingEvents.length / cardCount)) * 100
      : 0;
  const workshopProgressWidth =
    upcomingWorkshops.length > 0
      ? ((workshopCurrent + 1) / Math.ceil(upcomingWorkshops.length / cardCount)) * 100
      : 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      {/* Section One */}
    
    <section className="w-full max-w-7xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[690px] relative mx-auto overflow-hidden">
        {/* Display only if there is at least one staticPage */}
        {staticPages.length > 0 && (
          <>
            {/* Single Image Display */}
            <div className="w-full h-full">
              <img
                src={staticPages[0].image}
                alt={staticPages[0].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay Frame */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              {/* Dynamic Content from the first staticPage */}
              <h1 className="text-[#7A89C2] font-cabin font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                {staticPages[0].title}
              </h1>
              {staticPages[0].description && (
                <p className="text-[#7A89C2] font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
                  {staticPages[0].description}
                </p>
              )}
              {staticPages[0].button_text && staticPages[0].button_link && (
                <a
                  href={staticPages[0].button_link}
                  className="mt-6 w-64 sm:w-72 lg:w-80 h-14 bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] border border-[#7A89C2] rounded-2xl text-white flex items-center justify-center px-6 py-2 hover:opacity-90 transition-opacity duration-300"
                >
                  {staticPages[0].button_text}
                </a>
              )}
            </div>
          </>
        )}
      </section>



      {/* Second Section (Upcoming Events) */}
      <section className="w-full max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Title and Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-left text-[#7A89C2] font-cabin font-medium text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-0">
            Upcoming Events
          </h2>
          <button className="bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white font-medium rounded-xl py-2 px-8 sm:px-12 border border-[#7A89C2]">
            View All
          </button>
        </div>

        {/* Events Slider */}
        <div className="overflow-hidden relative">
          {upcomingEvents.length === 0 ? (
            <p className="text-center text-gray-500">No info yet.</p>
          ) : (
            <>
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${eventsCurrent * (100 / cardCount)}%)`,
                }}
              >
               {/* Event Card */}
{upcomingEvents.map((event, index) => (
  <div
    key={index}
    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 mb-4 group"
  >
    <div className="bg-[#EADFE280] rounded-[10px] shadow-lg overflow-hidden transition-transform duration-300 transform group-hover:scale-105 relative h-80"> {/* Added h-80 */}
      {/* Event Image */}
      <div className="relative h-46"> {/* Set fixed height for image container */}
        <img
          src={event.image || image1} // Fallback image
          alt={event.title}
          className="w-full h-full object-cover"
        />
        {/* Date Badge */}
        <div className="absolute top-0 left-0 bg-[#7A89C2] text-white px-3 py-2 rounded-tl-md text-xs font-bold">
          {formatDateForArticles(event.date)}
        </div>
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center px-4 py-2">
          <span className="text-sm font-bold">
            {event.title}
          </span>
        </div>
      </div>

      {/* Event Description */}
      <div className="p-4 text-[#7A89C2] font-inter text-sm text-center h-24 overflow-hidden"> {/* Added h-24 and overflow-hidden */}
        {event.description}
      </div>

      {/* On-hover effect covering entire card */}
      <div className="absolute inset-0 bg-[#7A89C2] text-[#FFFFFF] flex flex-col justify-center items-center p-6 rounded-[10px] opacity-0 group-hover:opacity-90 transition-opacity duration-300">
        {/* Title */}
        <h3 className="text-sm font-bold mb-4 mt-2 text-center">
          {event.title}
        </h3>

        {/* First Horizontal Line */}
        <hr className="border-t border-white w-full mb-4" />

        {/* Icon-Text Container with Vertical Line */}
        <div className="relative w-full mb-4">
          {/* Vertical Line */}
          <div className="absolute left-1/4 top-[-12px] bottom-[-5px] border-l border-white"></div>

          {/* Icon + Date */}
          <div className="flex items-center w-full py-2">
            <div className="w-1/4 flex justify-center">
              <svg
                className="w-5 h-5 text-[#FFFFFF]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10m-7 5h4M5 8h14v13H5z"
                />
              </svg>
            </div>

            <div className="w-3/4 pl-6">
              <p className="text-xs">{formatDateForArticles(event.date)}</p>
            </div>
          </div>

          {/* Horizontal Line Between Rows */}
          <hr className="border-t border-white w-full my-2" />

          {/* Icon + Location */}
          <div className="flex items-center w-full py-2">
            <div className="w-1/4 flex justify-center">
              <svg
                className="w-5 h-5 text-[#FFFFFF]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zM6 8a6 6 0 1112 0c0 3.228-2.472 6.238-5.325 8.748a1 1 0 01-1.35 0C8.472 14.238 6 11.228 6 8z"
                />
              </svg>
            </div>

            <div className="w-3/4 pl-6">
              <p className="text-xs">
                {event.location || "Location not specified"}
              </p>
            </div>
          </div>

          {/* Horizontal Line Between Rows */}
          <hr className="border-t border-white w-full my-2" />

          {/* Icon + Price */}
          <div className="flex items-center w-full py-2">
            <div className="w-1/4 flex justify-center">
              <svg
                className="w-5 h-5 text-[#FFFFFF]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.636 0-3.191-.632-4.364-1.768M6 12.2C5.073 12.63 4 12.882 3 12.706M21 16.706c0 1.253-1.26 2.13-2.364 1.768C17.809 18.368 16.254 19 15 19c-1.254 0-2.809-.632-4.364-1.768"
                />
              </svg>
            </div>

            <div className="w-3/4 pl-6">
              <p className="text-xs">
                ${event.price !== undefined ? event.price.toFixed(2) : "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Purchase Button */}
        <button className="w-[60%] py-2 bg-[#5B6CA2] text-white rounded-md hover:bg-white hover:text-red-500 transition-colors duration-300 text-sm">
          Purchase Tickets
        </button>
      </div>
    </div>
  </div>
))}

              </div>

              {/* Slider Progress Bar */}
              <div className="relative mt-4 h-2">
                {/* Full-width bar (background) */}
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[#00000099] opacity-30"></div>
                {/* Progress bar */}
                <div
                  className="absolute top-0 left-0 h-full bg-[#7A89C2] rounded-full"
                  style={{
                    width: `${eventProgressWidth}%`,
                    transition: "width 0.5s ease",
                  }}
                ></div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={prevEventSlide}
                  className="text-[#7A89C2] hover:underline"
                >
                  Previous
                </button>
                <button
                  onClick={nextEventSlide}
                  className="text-[#7A89C2] hover:underline"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Third Section (Upcoming Workshops) */}
      <section className="w-full max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Title and Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-left text-[#7A89C2] font-cabin font-medium text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-0">
            Upcoming Workshops
          </h2>
          <button className="bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white font-medium rounded-xl py-2 px-8 sm:px-12 border border-[#7A89C2]">
            View All
          </button>
        </div>

        {/* Workshops Slider */}
        <div className="overflow-hidden relative">
          {upcomingWorkshops.length === 0 ? (
            <p className="text-center text-gray-500">No info yet.</p>
          ) : (
            <>
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${workshopCurrent * (100 / cardCount)}%)`,
                }}
              >
               {upcomingWorkshops.map((workshop, index) => (
  <div
    key={index}
    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 mb-4 group"
  >
    {/* Fixed Height Card Container with Flex Layout */}
    <div className="bg-[#EADFE280] rounded-lg shadow-lg overflow-hidden relative group h-80 flex flex-col"> {/* Added h-80 and flex flex-col */}
      
      {/* Workshop Image with Fixed Height */}
      <div className="relative h-48"> {/* Added h-32 */}
        <img
          src={workshop.image || image1} // Fallback image
          alt={workshop.title}
          className="w-full h-full object-cover"
        />
        {/* Date Badge */}
        <div className="absolute top-0 left-0 bg-[#7A89C2] text-white px-3 py-2 rounded-tl-md text-xs font-bold">
          {formatDateForArticles(workshop.date)}
        </div>
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center px-4 py-2">
          <span className="text-sm font-bold">
            {workshop.title}
          </span>
        </div>
      </div>

      {/* Workshop Instructor */}
      <div className="p-1 text-[#7A89C2] font-inter text-sm text-left">
        <span className="text-black font-semibold">
          Instructor:
        </span>{" "}
        {workshop.instructor}
      </div>

      {/* Workshop Description with Fixed Height and Overflow Handling */}
      <div className="p-1 text-[#7A89C2] font-inter text-sm text-left h-16 overflow-hidden"> {/* Added h-16 and overflow-hidden */}
        <span className="text-black font-semibold">Details:</span>{" "}
        {workshop.description || workshop.details}
      </div>

      {/* Spacer to Fill Remaining Space (Optional) */}
      <div className="flex-1"></div> {/* Ensures the card height is fixed even if content is less */}

      {/* On-hover Overlay */}
      <div className="absolute inset-0 bg-[#7A89C2] text-[#FFFFFF] flex flex-col justify-center items-center p-6 rounded-lg opacity-0 group-hover:opacity-90 transition-opacity duration-300">
        {/* Workshop Title */}
        <h3 className="text-sm font-bold mb-4 mt-4 text-center">
          {workshop.title}
        </h3>

        {/* First Horizontal Line */}
        <hr className="border-t border-white w-full mb-4" />

        {/* Icon-Text Container with Vertical Line */}
        <div className="relative w-full mb-4">
          {/* Vertical Line */}
          <div className="absolute left-1/4 top-[-12px] bottom-[-5px] border-l border-white"></div>

          {/* Icon + Date */}
          <div className="flex items-center w-full py-2">
            <div className="w-1/4 flex justify-center">
              <svg
                className="w-5 h-5 text-[#FFFFFF]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10m-7 5h4M5 8h14v13H5z"
                />
              </svg>
            </div>

            <div className="w-3/4 pl-6">
              <p className="text-xs">{formatDateForArticles(workshop.date)}</p>
            </div>
          </div>

          {/* Horizontal Line Between Rows */}
          <hr className="border-t border-white w-full my-2" />

          {/* Icon + Location */}
          <div className="flex items-center w-full py-2">
            <div className="w-1/4 flex justify-center">
              <svg
                className="w-5 h-5 text-[#FFFFFF]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zM6 8a6 6 0 1112 0c0 3.228-2.472 6.238-5.325 8.748a1 1 0 01-1.35 0C8.472 14.238 6 11.228 6 8z"
                />
              </svg>
            </div>

            <div className="w-3/4 pl-6">
              <p className="text-xs">
                {workshop.location || "Location not specified"}
              </p>
            </div>
          </div>

          {/* Horizontal Line Between Rows */}
          <hr className="border-t border-white w-full my-2" />

          {/* Icon + Instructor */}
          <div className="flex items-center w-full py-2">
            <div className="w-1/4 flex justify-center">
              <svg
                className="w-5 h-5 text-[#FFFFFF]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A11.945 11.945 0 0112 16c2.485 0 4.735.686 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <div className="w-3/4 pl-6">
              <p className="text-xs">{workshop.instructor}</p>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <button className="w-[60%] py-2 bg-[#5B6CA2] text-white rounded-md hover:bg-white hover:text-red-500 transition-colors duration-300 text-sm">
          Register Now
        </button>
      </div>
    </div>
  </div>
))}

              </div>

              {/* Slider Progress Bar */}
              <div className="relative mt-4 h-2">
                {/* Full-width bar (background) */}
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[#00000099] opacity-30"></div>
                {/* Progress bar */}
                <div
                  className="absolute top-0 left-0 h-full bg-[#7A89C2] rounded-full"
                  style={{
                    width: `${workshopProgressWidth}%`,
                    transition: "width 0.5s ease",
                  }}
                ></div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={prevWorkshopSlide}
                  className="text-[#7A89C2] hover:underline"
                >
                  Previous
                </button>
                <button
                  onClick={nextWorkshopSlide}
                  className="text-[#7A89C2] hover:underline"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Insert MembershipCard Component */}
      <MembershipCard />
      <Footer />
    </div>
  );
};

export default ProgramsInitiatives;
