import React from "react";
import Navbar from "../components/home/navbar"; // Assuming you have a separate component for the Navbar
import Footer from "../components/home/footer";
import image1 from "../assets/image1.png";
import Frame21 from "../assets/Frame21.png";
import image5 from "../assets/image5.png";
import image4 from "../assets/image4.png";
import image24 from "../assets/image24.png";
import during from "../assets/During.png";
import upcoming from "../assets/upcoming.png";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      {/* Hero Section */}
      <section
  className="flex-grow bg-cover bg-center h-[600px] w-full"
  style={{ backgroundImage: `url(${image1})` }}
>
  <div className="flex items-center justify-center h-full">
    {/* Frame 297 */}
    <div className="relative flex flex-col items-center justify-center w-full max-w-[1198px] h-auto p-4">
      {/* Frame 35 */}
      <div className="flex flex-col items-center gap-8 w-full">
        {/* Text Block */}
        <div className="text-center">
          <h1 className="font-cabin text-[40px] font-medium leading-[48.6px] text-[#7A89C2]">
            Be Part of the <br />
            Movement to Empower Women <br />
            Worldwide!
          </h1>
        </div>

        {/* Button */}
        <button
          className="w-[281px] h-[45px] bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] 
                     text-white text-[20px] font-semibold leading-[24.3px] 
                     py-[10px] px-[57px] rounded-[15px] border-t border-solid border-[#7A89C2] whitespace-nowrap"
        >
          Become a Member!
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
                src={Frame21}
                alt="Team member"
                className="w-[320px] h-[500px] mt-4"
              />

              <button className="mt-6 w-[281px] h-[55px] flex items-center justify-center border border-[#7A89C2] bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] rounded-lg">
                <span className="text-lg text-white font-semibold">
                  Find Out More
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - About Us Text */}
          <div className="flex-1 max-w-[953px] h-auto gap-10">
          <h2 className="text-6xl sm:text-6xl md:text-8xl text-left text-[#7A89C2] font-brice mb-4">
              ABOUT US
            </h2>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-left text-[#7A89C2]">
                Get to Know Us: Our Story and Team
              </h3>
              <p className="text-base sm:text-lg text-left text-black">
                Welcome to EmpowerHer.Energy, where we are dedicated to
                unlocking the power and potential of women across industries.
                Our platform is committed to supporting women in sectors where
                they are traditionally underrepresented compared to men,
                including STEM, leadership and executive positions, finance and
                investment banking, construction, and skilled trades.
              </p>
              <p className="text-base sm:text-lg text-left text-black">
                Born from a passionate desire to foster growth, empowerment, and
                advancement for women, EmpowerHer.Energy is a beacon of
                inspiration and support for women professionals, entrepreneurs,
                and enthusiasts alike.
              </p>
              <h3 className="text-xl sm:text-2xl font-medium text-left text-[#7A89C2]">
                What to expect?
              </h3>
              <p className="text-base sm:text-lg text-left text-black">
                With a rallying cry to redefine possibilities and shatter
                barriers, EmpowerHer.Energy embarks on a mission to illuminate
                these sectors with the brilliance and resilience of empowered
                women. This isn't just a platform; it is a movement—a journey of
                transformation where each empowered woman becomes a catalyst for
                a brighter, more inclusive energy future and where we teach men
                to live with empowered women.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-10 px-5 sm:px-10 md:px-20 lg:px-40">
          <div className="h-auto gap-10 flex flex-col items-center">
            {/* Title */}
            <h2 className="text-center text-[#7A89C2] font-brice text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-10 lg:mb-10 font-bold">
              Meet Our Team
            </h2>

            {/* Team Members */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8"> 
              {/* Team Member 1 */}
              <div className="flex flex-col items-center w-[280px] sm:w-[316px] h-[320px] rounded-[15px] bg-[#00000008] shadow-[0px_6px_6px_-2px_rgba(0,0,0,0.25)]">
                <img
                  src={image24}
                  alt="Alex Smith"
                  className="w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 rounded-full border-3 border-[#7A89C2] mb-4 mt-6"
                />
                <p className="text-[#7A89C2] font-cabin text-md sm:text-lg font-semibold mb-2 sm:mb-4">
                  Alex Smith
                </p>
                <p className="text-[#7A89C2] font-cabin text-sm sm:text-base font-medium mb-2 sm:mb-4">
                  Creative Leader
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="flex flex-col items-center w-[280px] sm:w-[316px] h-[320px] rounded-[15px] bg-[#00000008] shadow-[0px_6px_6px_-2px_rgba(0,0,0,0.25)]">
                <img
                  src={image4}
                  alt="May Brown"
                  className="w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 rounded-full border-3 border-[#7A89C2] mb-4 mt-6"
                />
                <p className="text-[#7A89C2] font-cabin text-md sm:text-lg font-semibold mb-2 sm:mb-4">
                  May Brown
                </p>
                <p className="text-[#7A89C2] font-cabin text-sm sm:text-base font-medium mb-2 sm:mb-4">
                  Creative Leader
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="flex flex-col items-center w-[280px] sm:w-[316px] h-[320px] rounded-[15px] bg-[#00000008] shadow-[0px_6px_6px_-2px_rgba(0,0,0,0.25)]">
                <img
                  src={image5}
                  alt="Roxie Swanson"
                  className="w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 rounded-full border-3 border-[#7A89C2] mb-4 mt-6"
                />
                <p className="text-[#7A89C2] font-cabin text-md sm:text-lg font-semibold mb-2 sm:mb-4">
                  Roxie Swanson
                </p>
                <p className="text-[#7A89C2] font-cabin text-sm sm:text-base font-medium mb-2 sm:mb-4">
                  Creative Leader
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Articles Section */}
        <section className="py-5 px-5 sm:px-10 md:px-20 lg:px-40 w-full h-auto">
  <h2 className="font-brice text-[30px] sm:text-[35px] md:text-[40px] font-normal leading-[1.4] text-center text-[#7A89C2] mb-8">
    Trending Articles
  </h2>

  <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-8">
    {/* First Article */}
    <div className="max-w-xs bg-white shadow-md w-full sm:w-[332px] h-auto">
      <img
        src={during}
        alt="Article"
        className="w-full h-[179px] sm:h-[179px] md:h-[200px] rounded-t-lg object-cover"
      />
      <div className="w-full h-auto pt-2 pb-4 pl-5 pr-4 rounded-b-lg bg-[#EADFE280]">
        {/* Title */}
        <h3 className="w-full mb-2 text-left text-[#7A89C2] font-inter text-[15px] sm:text-[16px] md:text-[18px] font-semibold leading-tight">
          Leading the Charge: Adiba El Masri’s Journey in Sustainable Architecture and Energy Innovation
        </h3>
        {/* Date */}
        <p className="w-full text-center text-black font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium mb-2">
          04 September 2024
        </p>
        {/* Description */}
        <p className="w-full text-left text-black font-inter text-[12px] sm:text-[13px] md:text-[14px] font-semibold leading-snug">
          Adiba El Masri is an accomplished architect and sustainability advocate with a strong focus on energy efficiency in the built environment. Her journey in the energy sector was inspired...
        </p>
      </div>
    </div>

    {/* Second Article */}
    <div className="max-w-xs bg-white shadow-md w-full sm:w-[332px] h-auto">
      <img
        src={during}
        alt="Article"
        className="w-full h-[179px] sm:h-[179px] md:h-[200px] rounded-t-lg object-cover"
      />
      <div className="w-full h-auto pt-2 pb-4 pl-5 pr-4 rounded-b-lg bg-[#EADFE280]">
        {/* Title */}
        <h3 className="w-full mb-2 text-left text-[#7A89C2] font-inter text-[15px] sm:text-[16px] md:text-[18px] font-semibold leading-tight">
          Leading the Charge: Adiba El Masri’s Journey in Sustainable Architecture and Energy Innovation
        </h3>
        {/* Date */}
        <p className="w-full text-center text-black font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium mb-2">
          04 September 2024
        </p>
        {/* Description */}
        <p className="w-full text-left text-black font-inter text-[12px] sm:text-[13px] md:text-[14px] font-semibold leading-snug">
          Adiba El Masri is an accomplished architect and sustainability advocate with a strong focus on energy efficiency in the built environment. Her journey in the energy sector was inspired...
        </p>
      </div>
    </div>

    {/* Third Article */}
    <div className="max-w-xs bg-white shadow-md w-full sm:w-[332px] h-auto">
      <img
        src={during}
        alt="Article"
        className="w-full h-[179px] sm:h-[179px] md:h-[200px] rounded-t-lg object-cover"
      />
      <div className="w-full h-auto pt-2 pb-4 pl-5 pr-4 rounded-b-lg bg-[#EADFE280]">
        {/* Title */}
        <h3 className="w-full mb-2 text-left text-[#7A89C2] font-inter text-[15px] sm:text-[16px] md:text-[18px] font-semibold leading-tight">
          Leading the Charge: Adiba El Masri’s Journey in Sustainable Architecture and Energy Innovation
        </h3>
        {/* Date */}
        <p className="w-full text-center text-black font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium mb-2">
          04 September 2024
        </p>
        {/* Description */}
        <p className="w-full text-left text-black font-inter text-[12px] sm:text-[13px] md:text-[14px] font-semibold leading-snug">
          Adiba El Masri is an accomplished architect and sustainability advocate with a strong focus on energy efficiency in the built environment. Her journey in the energy sector was inspired...
        </p>
      </div>
    </div>
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

  <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-8">
    {/* Event Card 1 */}
    <div className="relative max-w-xs bg-white shadow-md w-full">
      {/* Date Section for Card 1 */}
      <div className="absolute top-[-40px] left-1/3 transform -translate-x-1/2 flex items-center z-10">
        <div className="bg-[#7A89C2] text-white rounded-full w-[70px] h-[70px] flex items-center justify-center text-2xl font-bold">
          7
        </div>
        <div className="bg-[#F7F7F7] text-[#7A89C2] py-2 px-4 rounded-[15px] text-[20px] font-normal text-center whitespace-nowrap">
          October 2024
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden h-auto">
        <div
          className="bg-cover bg-center h-[300px] sm:h-[350px] md:h-[400px]"
          style={{ backgroundImage: `url(${upcoming})` }}
        >
          <div className="p-6 text-center bg-gradient-to-t from-white to-transparent h-full flex flex-col justify-end">
            <p className="text-[#7A89C2] font-bold text-lg sm:text-xl">
              MEET & GREET
            </p>
            <p className="text-[#7A89C2] text-sm sm:text-base mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p className="text-[#7A89C2] font-bold text-md sm:text-lg mt-4">
              5 PM - 7 PM
            </p>
            <button className="mt-6 bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white py-2 px-4 rounded-md w-full">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Event Card 2 */}
    <div className="relative max-w-xs bg-white shadow-md w-full">
      {/* Date Section for Card 2 */}
      <div className="absolute top-[-40px] left-1/3 transform -translate-x-1/2 flex items-center z-10">
        <div className="bg-[#7A89C2] text-white rounded-full w-[70px] h-[70px] flex items-center justify-center text-2xl font-bold">
          14
        </div>
        <div className="bg-[#F7F7F7] text-[#7A89C2] py-2 px-4 rounded-[15px] text-[20px] font-normal text-center whitespace-nowrap">
          October 2024
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden h-auto">
        <div
          className="bg-cover bg-center h-[300px] sm:h-[350px] md:h-[400px]"
          style={{ backgroundImage: `url(${upcoming})` }}
        >
          <div className="p-6 text-center bg-gradient-to-t from-white to-transparent h-full flex flex-col justify-end">
            <p className="text-[#7A89C2] font-bold text-lg sm:text-xl">
              NETWORKING EVENT
            </p>
            <p className="text-[#7A89C2] text-sm sm:text-base mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p className="text-[#7A89C2] font-bold text-md sm:text-lg mt-4">
              3 PM - 5 PM
            </p>
            <button className="mt-6 bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white py-2 px-4 rounded-md w-full">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Event Card 3 */}
    <div className="relative max-w-xs bg-white shadow-md w-full">
      {/* Date Section for Card 3 */}
      <div className="absolute top-[-40px] left-1/3 transform -translate-x-1/2 flex items-center z-10">
        <div className="bg-[#7A89C2] text-white rounded-full w-[70px] h-[70px] flex items-center justify-center text-2xl font-bold">
          21
        </div>
        <div className="bg-[#F7F7F7] text-[#7A89C2] py-2 px-4 rounded-[15px] text-[20px] font-normal text-center whitespace-nowrap">
          October 2024
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden h-auto">
        <div
          className="bg-cover bg-center h-[300px] sm:h-[350px] md:h-[400px]"
          style={{ backgroundImage: `url(${upcoming})` }}
        >
          <div className="p-6 text-center bg-gradient-to-t from-white to-transparent h-full flex flex-col justify-end">
            <p className="text-[#7A89C2] font-bold text-lg sm:text-xl">
              WORKSHOP
            </p>
            <p className="text-[#7A89C2] text-sm sm:text-base mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p className="text-[#7A89C2] font-bold text-md sm:text-lg mt-4">
              10 AM - 12 PM
            </p>
            <button className="mt-6 bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white py-2 px-4 rounded-md w-full">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
