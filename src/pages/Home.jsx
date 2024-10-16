import React, { useEffect, useState } from "react";
import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";
import axios from "axios";
import {
  formatDateForArticles,
  formatDate,
  getDay,
  formatTime,
  getTextColor,
} from "../Helper-Functions/date-formatters";

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const { upcomingEvents } = homeData || {};

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/combined_api_data_for_pages/home"
        );
     
        setHomeData(response.data);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      }
    };

    fetchHomePageData();
  }, []);

  if (!homeData) {
    return <div>Loading...</div>;
  }

  const homeAboutUsData = homeData.staticPages.find(
    (page) => page.key === "home_about_us"
  );
  const homeHeaderData = homeData.staticPages.find(
    (page) => page.key === "home_header"
  );

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      {/* Hero Section */}
      <section
        className="flex-grow bg-cover bg-center h-[600px] w-full"
        style={{ backgroundImage: `url(${homeHeaderData.image})` }}
      >
        <div className="flex items-center justify-center h-full">
          {/* Frame 297 */}
          <div className="relative flex flex-col items-center justify-center w-full max-w-[1198px] h-auto p-4">
            {/* Frame 35 */}
            <div className="flex flex-col items-center gap-8 w-full">
              {/* Text Block */}
              <div className="text-center">
                <h1 className="font-cabin text-[40px] font-medium leading-[48.6px] text-[#7A89C2]">
                  {homeHeaderData.title.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h1>
              </div>

              {/* Button */}
              <button
                className="w-[281px] h-[45px] bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] 
                         text-white text-[20px] font-semibold leading-[24.3px] 
                         py-[10px] px-[57px] rounded-[15px] border-t border-solid border-[#7A89C2] whitespace-nowrap"
                onClick={() =>
                  (window.location.href = homeHeaderData
                    ? homeHeaderData.button_link
                    : "#")
                }
              >
                {homeHeaderData.button_text}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section*/}
      <div className="w-[auto] h-[auto]">
        <section className="py-10 px-5 sm:px-10 h-auto flex flex-col md:flex-row">
          {/* Left Side - Image and Button */}
          <div className="flex-none w-full md:w-1/2 h-auto gap-3 mb-6 md:mb-0">
            <div className="w-full h-full bg-white rounded-lg p-3 flex flex-col items-center">
            <img
  src={homeAboutUsData.image}
  alt="About Us"
  className="w-[320px] h-[500px] mt-4 object-cover"
/>


              <button
                className="mt-6 w-[281px] h-[55px] flex items-center justify-center border border-[#7A89C2] bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] rounded-lg"
                onClick={() =>
                  (window.location.href = homeAboutUsData.button_link)
                }
              >
                <span className="text-lg text-white font-semibold">
                  {homeAboutUsData.button_text}
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - About Us Text */}
          <div className="flex-1 max-w-[953px] h-auto gap-10">
            <h2 className="text-6xl sm:text-6xl md:text-8xl text-left text-[#7A89C2] font-brice mb-4">
              {homeAboutUsData.title}
            </h2>

            <div className="flex flex-col gap-2">
              {homeAboutUsData.description.split("\n").map((line, index) => (
                <p
                  key={index}
                  className={`text-base sm:text-lg text-left ${getTextColor(
                    line
                  )}`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}

        <section className="py-10 px-5 sm:px-10 md:px-20 lg:px-40">
          <div className="h-auto gap-10 flex flex-col items-center">
            <h2 className="text-center text-[#7A89C2] font-brice text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-10 lg:mb-10 font-bold">
              Meet Our Team
            </h2>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              {homeData.teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-[280px] sm:w-[316px] h-[320px] rounded-[15px] bg-[#00000008] shadow-[0px_6px_6px_-2px_rgba(0,0,0,0.25)]"
                >
                  <img
                    src={member.image} // Use dynamic image
                    alt={member.title}
                    className="w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 rounded-full border-3 border-[#7A89C2] mb-4 mt-6 object-cover"
                  />
                  <p className="text-[#7A89C2] font-cabin text-md sm:text-lg font-semibold mb-2 sm:mb-4">
                    {member.title}
                  </p>
                  <p className="text-[#7A89C2] font-cabin text-sm sm:text-base font-medium mb-2 sm:mb-4">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Articles Section */}
        <section className="py-5 px-5 sm:px-10 md:px-20 lg:px-40 w-full h-auto">
  <h2 className="font-brice text-[30px] sm:text-[35px] md:text-[40px] font-normal leading-[1.4] text-center text-[#7A89C2] mb-8">
    Trending Articles
  </h2>

  <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-8">
    {homeData.trendingArticles.map((article, index) => (
      <div
        key={index}
        className="max-w-xs bg-white shadow-md w-full sm:w-[332px] h-[450px] overflow-hidden"
      >
        <img
          src={article.header_file}
          alt="Article"
          className="w-full h-[179px] sm:h-[179px] md:h-[200px] rounded-t-lg object-cover"
        />
        <div className="w-full h-full pt-2 pb-4 pl-5 pr-4 rounded-b-lg bg-[#EADFE280]  ">
          {/* Title */}
          <h3 className="w-full mb-2 text-left text-[#7A89C2] font-inter text-[15px] sm:text-[16px] md:text-[18px] font-semibold leading-tight">
            {article.title}
          </h3>
          {/* Date */}
          <p className="w-full text-left text-black font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium mb-2">
            {formatDateForArticles(article.date)}
          </p>
          {/* Description */}
          <p className="w-full text-left text-black font-inter text-[12px] sm:text-[13px] md:text-[14px] font-semibold leading-snug">
            {article.description}
          </p>
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-8">
    <button className="w-full sm:w-[133px] lg:w-[200px] h-[50px] rounded-[15px] border-t border-[#7A89C2] bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] flex items-center justify-center">
      <span className="text-white font-cabin text-[20px] font-semibold leading-[24.3px]">
        View All
      </span>
    </button>
  </div>
</section>


        {/* Events Section */}

        <section className="py-10 px-5 sm:px-10 md:px-20 lg:px-40 h-auto w-full">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl text-center text-[#7A89C2] font-semibold mb-16">
            Our upcoming events and activities
          </h2>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-14">
            {/* Map through upcomingEvents */}
            {upcomingEvents &&
              upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative max-w-xs bg-white shadow-md w-full"
                >
                  {/* Date Section */}
                  <div className="absolute top-[-50px] left-1/3 transform -translate-x-1/2 flex items-center z-10">
                    <div className="bg-[#7A89C2] text-white rounded-full w-[70px] h-[70px]  flex items-center justify-center text-2xl md:text-xl sm:text-lg font-bold">
                      {getDay(event.date)} {/* Display the day */}
                    </div>

                    <div className="bg-[#F7F7F7] text-[#7A89C2] py-2 px-4 rounded-[15px] text-[20px] font-normal text-center whitespace-nowrap">
                      {formatDate(event.date)}{" "}
                      {/* Display formatted month and year */}
                    </div>
                  </div>

                  <div className="bg-white shadow-md rounded-lg overflow-hidden h-auto">
                    <div
                      className="bg-cover bg-center h-[300px] sm:h-[350px] md:h-[400px]"
                      style={{ backgroundImage: `url(${event.image})` }}
                    >
                      <div className="p-8 text-center bg-gradient-to-t from-white to-transparent h-full flex flex-col justify-end">
                        <p className="text-[#7A89C2] font-bold text-lg sm:text-xl">
                          {event.title}
                        </p>
                        <p className="text-[#7A89C2] text-sm sm:text-base mt-2">
                          {event.description}
                        </p>
                        <p className="text-[#7A89C2] font-bold text-md sm:text-lg mt-4">
                          {formatTime(event.start_time)} -{" "}
                          {formatTime(event.end_time)}
                        </p>
                        <button className="mt-6 bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white py-2 px-4 rounded-md w-full">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
