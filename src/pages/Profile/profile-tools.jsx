import React, { useEffect, useState } from "react";
import { useUser } from "../../Helper-Functions/UserContext";
import axios from "axios";

const ProfileTools = () => {
  const { user } = useUser();
  const [userTools, setUserTools] = useState([]);

  useEffect(() => {
    const fetchUserTools = async () => {
      if (!user.id) return;

      try {
        const response = await axios.get(`http://localhost:8080/api/user-tools/byuser/${user.id}`);
        setUserTools(response.data);
        console.log("Fetched user tools:", response.data);
      } catch (error) {
        console.error("Error fetching user tools:", error);
      }
    };

    fetchUserTools();
  }, [user.id]);

  return (
    <div className="flex flex-col space-y-6 p-6 max-w-screen-xl mx-auto w-full">
      <h1 className="font-cabin font-semibold text-[#7A89C2] text-left" style={{ fontSize: "40px", lineHeight: "48.6px" }}>
        Tools
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {userTools.map((tool, index) => (
          <div key={index} className="bg-white shadow-md w-full h-[450px] overflow-hidden">
            <img
              src={tool.discover_her_content.header_file}
              alt="Tool"
              className="w-full h-[200px] rounded-t-lg object-cover"
            />
            <div className="w-full h-full pt-2 pb-4 pl-5 pr-4 rounded-b-lg bg-[#EADFE280]">
              <h3 className="mb-2 text-left text-[#7A89C2] font-inter text-[18px] font-semibold leading-tight">
                {tool.discover_her_content.title}
              </h3>
              <p className="text-left text-black font-inter text-[14px] font-medium mb-2">
                {new Date(tool.discover_her_content.date).toLocaleDateString()}
              </p>
              <p className="text-left text-black font-inter text-[14px] font-semibold leading-snug">
                {tool.discover_her_content.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="w-full sm:w-[133px] lg:w-[200px] h-[50px] rounded-[15px] border-t border-[#7A89C2] bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] flex items-center justify-center">
          <span className="text-white font-cabin text-[20px] font-semibold leading-[24.3px]">View All</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileTools;
