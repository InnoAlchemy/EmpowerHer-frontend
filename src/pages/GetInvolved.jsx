import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../components/home/navbar'; 
import Footer from '../components/home/footer';

const GetInvolved = () => {
  const [getInvolvedData, setInvolvedDataData] = useState(null);
  const [showMembershipOptions, setShowMembershipOptions] = useState(false); // State to toggle membership options
  const [selectedMembership, setSelectedMembership] = useState('Individual'); // State to track selected membership
  const backgroundColors = ["#7A89C2", "#4C6ADB", "#3751B4"]; // Array of background colors for variety

  useEffect(() => {
    const fetchGetInvolvedPageData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/combined_api_data_for_pages/get-involved"
        );
        console.log("API Response:", response.data);
        setInvolvedDataData(response.data);
      } catch (error) {
        console.error("Error fetching get involved page data:", error);
      }
    };

    fetchGetInvolvedPageData();
  }, []);

  if (!getInvolvedData) {
    return <div>Loading...</div>;
  }

  const getInvolvedHeaderData = getInvolvedData.staticPages.find(
    (page) => page.key.toLowerCase() === "get involved"
  );

  // Determine which memberships to display based on selection
  const displayedMemberships = selectedMembership === 'Individual' 
    ? getInvolvedData.memberships.individual 
    : getInvolvedData.memberships.corporate;

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
        
      {/* Programs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 px-4 sm:px-8 lg:px-16 pb-16 items-stretch">
        {getInvolvedData.programsInitiatives
          .filter(program => program.is_active)
          .map((program, index) => (
            <div 
              key={index} 
              className="w-full max-w-[268px] mx-auto relative flex flex-col h-full"
            >
              {/* Icon Image */}
              <img
                src={program.icon}
                alt={program.title}
                className="w-[93px] h-[101px] mx-auto mb-4"  // Centers the icon and adds margin
              />

              {/* Diamond Shape */}
              <div className="w-[55px] h-[55px] absolute top-[130px] left-[50%] transform -translate-x-1/2 rotate-45 bg-[#FFFFFF] flex items-center justify-center">
                  <div className="w-[15px] h-[15px] rotate-90 bg-[#7A89C2]"></div>
                </div>

              {/* Card Body */}
              <div className="w-full rounded-lg bg-[#7A89C2] shadow-lg p-6 mt-12 flex flex-col flex-grow">
                <div className="text-white flex-grow">
                  {/* Title */}
                  <h1 className="font-cabin text-[20px] font-bold leading-[24.3px] text-center mb-4 mt-8">
                    {program.title}
                  </h1>

                  {/* Description */}
                  <p className="text-sm font-cabin text-center leading-relaxed">
                    {program.description}
                  </p>
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

      {/* New Section under "Get Started" Button */}
      <section className="w-full h-auto mt-12 pl-6 sm:pl-12">
        <div className="w-full max-w-[383px] h-[103px] gap-8">
          <div className="w-full max-w-[486px] flex items-center cursor-pointer" onClick={() => setShowMembershipOptions(!showMembershipOptions)}>
            <p className="text-[#7A89C2] font-cabin text-[35px] font-bold leading-[42.53px] whitespace-nowrap">
              Choose Your Membership
            </p>
            <div
              className={`w-0 h-0 ml-6 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent ${
                showMembershipOptions
                  ? "border-t-[25px] border-t-[#7A89C2]"
                  : "border-b-[25px] border-b-[#7A89C2]"
              } transform rotate-360`}
            ></div>
          </div>

          {/* Conditionally render membership options */}
          {showMembershipOptions && (
            <div className="mt-4 flex gap-4">
              <p
                className={`text-lg font-cabin cursor-pointer ${
                  selectedMembership === 'Individual' ? 'text-[#7A89C2]' : 'text-black'
                }`}
                onClick={() => setSelectedMembership('Individual')}
              >
                Individual
              </p>
              <p>|</p>
              <p
                className={`text-lg font-cabin cursor-pointer ${
                  selectedMembership === 'Corporate' ? 'text-[#7A89C2]' : 'text-black'
                }`}
                onClick={() => setSelectedMembership('Corporate')}
              >
                Corporate
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Cards Section */}
      {showMembershipOptions && ( // Conditionally render the cards
        <section className="flex flex-wrap justify-center gap-20 mt-12 px-4 mb-20"> 
          {displayedMemberships.map((membership, index) => {
            // Parse the description into an array of benefits
            const descriptionArray = membership.description.startsWith('Benefits:')
              ? membership.description.replace('Benefits:', '').split('.').map(item => item.trim()).filter(item => item)
              : [membership.description];

            return (
              <div
                key={index} // Changed from membership.id to index to match data structure
                className="relative w-[90%] sm:w-[382px] p-6 mb-10 flex flex-col justify-between" 
                style={{
                  borderRadius: "40px",
                  backgroundColor: backgroundColors[index % backgroundColors.length], 
                }}
              >
                <div>
                  <h1 className="font-cabin text-[30px] font-bold leading-[36.45px] text-white mb-4">
                    {membership.title}
                  </h1>
                  <h2 className="font-cabin text-[20px] font-bold leading-[24.3px] text-white mb-4">
                    Benefits:
                  </h2>
                  <ul className="font-cabin text-[20px] font-medium leading-[24.3px] text-white mb-4 list-disc pl-4">
                    {descriptionArray.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* Subscribe Button */}
                <button
                  className="w-full mt-4 py-2 rounded-[15px] border border-solid border-white bg-white text-[#7A89C2] font-cabin font-semibold text-[15px] whitespace-nowrap"
                >
                  Subscribe Now for ${membership.price}
                </button>
              </div>
            );
          })}
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default GetInvolved;
