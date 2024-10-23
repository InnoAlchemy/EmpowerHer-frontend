// src/components/membership/MembershipCard.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const MembershipCard = () => {
  // Initialize memberships as null to handle object structure
  const [memberships, setMemberships] = useState(null);
  const [showMembershipOptions, setShowMembershipOptions] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState("Individual");
  
  const backgroundColors = ["#7A89C2", "#4C6ADB", "#3751B4"]; // Array of background colors for variety

  useEffect(() => {
    const fetchMembershipData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/combined_api_data_for_pages/get-involved"
        );
       
        setMemberships(response.data.memberships);
      } catch (error) {
        console.error("Error fetching membership data:", error);
      }
    };

    fetchMembershipData();
  }, []);

  // Show loading state while data is being fetched
  if (!memberships || !memberships.individual || !memberships.corporate) {
    return <div>Loading Memberships...</div>;
  }

  // Determine which memberships to display based on selection
  const displayedMemberships =
    selectedMembership === "Individual"
      ? memberships.individual
      : memberships.corporate;

  return (
    <>
      {/* Membership Selection Section */}
      <section className="w-full h-auto mt-6 mb-8 pl-6 sm:pl-12 max-w-[1400px] mx-auto">
        <div className="w-full max-w-[383px] h-auto gap-8">
          <div
            className="w-full max-w-[486px] flex items-center cursor-pointer"
            onClick={() => setShowMembershipOptions(!showMembershipOptions)}
          >
            <p className="text-[#7A89C2] font-cabin text-[35px] font-bold leading-[42.53px] whitespace-nowrap">
              Choose Your Membership
            </p>
            <div
              className={`w-0 h-0 ml-6 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent ${
                showMembershipOptions
                  ? "border-t-[25px] border-t-[#7A89C2] rotate-180"
                  : "border-b-[25px] border-b-[#7A89C2] rotate-0"
              } transform transition-transform duration-300`}
            ></div>
          </div>

          {/* Conditionally render membership type options */}
          {showMembershipOptions && (
            <div className="mt-4 flex gap-4">
              <p
                className={`text-lg font-cabin cursor-pointer ${
                  selectedMembership === "Individual"
                    ? "text-[#7A89C2] font-bold"
                    : "text-black"
                }`}
                onClick={() => setSelectedMembership("Individual")}
              >
                Individual
              </p>
              <p>|</p>
              <p
                className={`text-lg font-cabin cursor-pointer ${
                  selectedMembership === "Corporate"
                    ? "text-[#7A89C2] font-bold"
                    : "text-black"
                }`}
                onClick={() => setSelectedMembership("Corporate")}
              >
                Corporate
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Cards Section */}
      {showMembershipOptions && (
        <section className="flex flex-wrap justify-center gap-20 mt-4 px-4 mb-20"> 
          {displayedMemberships.map((membership, index) => {
            // Parse the description into an array of benefits
            const descriptionArray = membership.description.startsWith("Benefits:")
              ? membership.description
                  .replace("Benefits:", "")
                  .split(".")
                  .map(item => item.trim())
                  .filter(item => item)
              : [membership.description];

            return (
              <div
                key={index} // Ideally, use a unique identifier if available
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
                  className="w-full mt-4 py-2 rounded-[15px] border border-solid border-white bg-white text-[#7A89C2] font-cabin font-semibold text-[15px] whitespace-nowrap hover:bg-[#f0f0f0] transition-colors duration-300"
                >
                  Subscribe Now for ${membership.price}
                </button>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

export default MembershipCard;
