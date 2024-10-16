import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../components/home/navbar'; 
import Footer from '../components/home/footer';
import image from '../assets/icon-list.png';

const GetInvolved = () => {
  const [getInvolvedData, setInvolvedDataData] = useState(null);

  useEffect(() => {
    const fetchGetInvolvedPageData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/combined_api_data_for_pages/get-involved"
        );
        console.log("API Response:", response.data);
        setInvolvedDataData(response.data);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      }
    };

    fetchGetInvolvedPageData();
  }, []);

  if (!getInvolvedData) {
    return <div>Loading...</div>;
  }

  const getInvolvedHeaderData = getInvolvedData.staticPages.find(
    (page) => page.key === "Get Involved"
  );

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="flex-grow bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${getInvolvedHeaderData.image})` }}
      >
        <div className="flex items-start justify-start h-full p-4 sm:p-8 md:p-16">
          <div className="relative flex flex-col items-start justify-center w-full max-w-6xl">
            
            <div className="flex flex-col items-start gap-6 w-full">
              {/* Text Block */}
              <div className="text-left">
                <h1 className="font-cabin text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-[#7A89C2] mb-6">
                  {getInvolvedHeaderData.title.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h1>
                
                {/* Description */}
                {getInvolvedHeaderData.description && (
                  <p className="font-cabin text-base sm:text-lg md:text-xl text-[#7A89C2] mb-6 
                                 w-full md:w-1/2">
                    {getInvolvedHeaderData.description}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                className="bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] 
                           text-white text-lg sm:text-xl font-semibold 
                           py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg border-t border-solid border-[#7A89C2] 
                           hover:opacity-90 transition duration-300"
                onClick={() =>
                  (window.location.href = getInvolvedHeaderData
                    ? getInvolvedHeaderData.button_link
                    : "#")
                }
              >
                {getInvolvedHeaderData.button_text}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
     
      {/* Title */}
      <h2 className="font-cabin text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-[#7A89C2] text-left mb-14 ml-6 sm:ml-12 mt-10">
        Programs and Initiatives to Support Women's Empowerment
      </h2>
        
      {/* Frame 293 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 px-4 sm:px-8 lg:px-16 min-h-auto pb-16">
        {/* Repeated Diamond Box - First row */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="w-full max-w-[268px] h-[432px] mx-auto relative">
            {/* Icon Image */}
            <img
              src={image}
              alt="icon"
              className="w-[93px] h-[101px] mx-auto mb-4"  // Centers the icon and adds margin
            />

            <div className="w-full h-[331px] relative">
              {/* Diamond Shape */}
              <div className="w-[55px] h-[55px] absolute top-[-30px] left-[50%] transform -translate-x-1/2 rotate-45 bg-[#FFFFFF] flex items-center justify-center">
                <div className="w-[15px] h-[15px] rotate-90 bg-[#7A89C2]"></div>
              </div>

              {/* Card Body */}
              <div className="w-full h-[292px] rounded-lg bg-[#7A89C2] shadow-lg p-6 mt-12">
                <div className="text-white">
                  {/* Title */}
                  <h1 className="font-cabin text-[20px] font-bold leading-[24.3px] text-center mb-4 mt-8">
                    Membership
                  </h1>

                  {/* Description */}
                  <p className="text-sm font-cabin text-center leading-relaxed">
                    Joining the EmpowerHer.Energy community as a member provides access to exclusive resources, events, and networking opportunities tailored to empower women in the energy, finance, leadership, real estate, and construction sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
       {/* Centered Button */}
  <div className="col-span-full flex justify-center mt-8">
    <button
      className="bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] 
                 text-white text-lg sm:text-xl font-semibold 
                 py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg border-t border-solid border-[#7A89C2] 
                 hover:opacity-90 transition duration-300"
      onClick={() =>
        (window.location.href = "/programs-initiatives")
      }
    >
      Get Started
    </button>
  </div>
      </div>

      <Footer />
    </div>
  );
};

export default GetInvolved;
