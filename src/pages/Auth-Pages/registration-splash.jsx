import React from "react";
import logo from "../../assets/empowerherEnergy.png";
import womanImage from "../../assets/woman.png";
import building from "../../assets/building1.png";
import agreement from "../../assets/shakinghands.png";
import reactimage from "../../assets/react.png";
import leadership from "../../assets/3persons.png";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
import vector3 from "../../assets/vector2.png";
import lamp from "../../assets/SVGRepo_iconCarrier.png";
import threeHands from "../../assets/Group.png";
import leave1 from "../../assets/Group1.png";
import leave2 from "../../assets/Group2.png";
import vector from "../../assets/Vector.png";

const RegistrationPage = () => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="relative w-full md:w-1/2 h-full flex flex-col justify-center items-center overflow-hidden">
        {/* Lamp at Top Center */}
        <img
          src={lamp}
          alt="Lamp Icon"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 z-20"
        />

        {/* Three Hands */}
        <img
          src={threeHands}
          alt="Hands Icon"
          className="absolute top-1/2 left-[8%] transform -translate-x-1/2 w-[80px] h-[80px] md:w-[120px] md:h-[120px] z-20"
        />

        {/* Leave1 */}
        <img
          src={leave1}
          alt="Leave Icon"
          className="absolute top-[30%] left-[88%] transform -translate-x-1/2 w-[80px] h-[80px] md:w-[120px] md:h-[120px] z-20"
        />

        {/* Leave2 */}
        <img
          src={leave2}
          alt="Leave Icon"
          className="absolute top-[82%] left-[25%] transform -translate-x-1/2 w-[80px] h-[80px] md:w-[120px] md:h-[120px] z-20"
        />

        {/* Vector Box Hand */}
        <img
          src={vector}
          alt="Vector Icon"
          className="absolute top-[75%] left-[72%] transform -translate-x-1/2 w-[80px] h-[80px] md:w-[120px] md:h-[120px] z-20"
        />

        {/* First Vector Element */}
        <img
          src={vector1}
          alt="First Vector"
          className="absolute top-[-80px] left-0 w-full h-auto opacity-99 z-10"
        />

        {/* Second Vector Image */}
        <img
          src={vector3}
          alt="Second Vector"
          className="absolute top-[-100px] left-1 md:left-5 w-full h-auto"
        />

        {/* Third Vector Image */}
        <img
          src={vector2}
          alt="Third Vector"
          className="absolute top-[-80px] left-0 w-full h-auto"
        />

        {/* Logo */}
        <img
          src={logo}
          alt="Empower Her Logo"
          className="absolute top-8 left-8 w-32 md:w-44 h-auto z-10"
        />

        <div className="text-white text-center z-10 mt-24 md:mt-0">
          <h1 className="font-amsterdam text-4xl md:text-5xl mb-4 md:mb-6">
            Welcome Back
          </h1>
          <p className="font-cabin text-base md:text-lg mb-6 md:mb-10">
            To keep connected with us <br />
            please login with your personal info
          </p>
          <button
            className="w-36 md:w-44 h-12 md:h-16 bg-transparent border border-white rounded-full 
                text-white font-medium hover:bg-white hover:text-[#7A89C2] transition duration-300"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-full relative">
        {/* Upper Half (White Background) */}
        <div className="h-1/2 bg-white relative">
          <img
            src={building}
            alt="Building 1"
            className="absolute w-[100px] md:w-[180px] h-[120px] md:h-[200px] top-[150px] md:top-[150px] left-[50px] md:left-[100px]"
          />
          <img
            src={building}
            alt="Building 2"
            className="absolute w-[80px] md:w-[140px] h-[180px] md:h-[300px] top-[50px] md:top-[50px] left-[150px] md:left-[300px]"
          />
          <img
            src={building}
            alt="Building 3"
            className="absolute w-[120px] md:w-[220px] h-[100px] md:h-[150px] top-[200px] md:top-[200px] left-[240px] md:left-[480px]"
          />

          <img
            src={womanImage}
            alt="Woman"
            className="absolute w-[100px] md:w-[180px] h-[230px] md:h-[460px] top-[210px] md:top-[30px] left-[140px] md:left-[280px] z-10"
          />
        </div>

        {/* Lower Half */}
        <div className="h-1/2 bg-[#7A89C233] relative">
          <img
            src={agreement}
            alt="Handshake"
            className="absolute w-[50px] md:w-[100px] h-[50px] md:h-[100px] bottom-[100px] md:bottom-[100px] left-[60px] md:left-[120px]"
          />

          <img
            src={leadership}
            alt="Leadership"
            className="absolute w-[50px] md:w-[100px] h-[50px] md:h-[100px] bottom-[240px] md:bottom-[240px] left-[290px] md:left-[580px]"
          />

          <img
            src={reactimage}
            alt="React Logo"
            className="absolute w-[50px] md:w-[100px] h-[50px] md:h-[100px] bottom-[50px] md:bottom-[50px] left-[240px] md:left-[480px]"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
