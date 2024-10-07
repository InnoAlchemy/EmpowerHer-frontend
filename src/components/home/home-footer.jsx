import React from 'react';
import footerImage from '../../assets/EmpowerHer-Footer.png'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="relative w-[1280px] h-[334px] bg-gradient-to-r from-[#2C3F87] to-[#7A89C2] shadow-lg">
      {/* Line1 */}
      <div className="absolute top-[266px] left-[41px] w-[1211px] border-t border-white/50"></div>

      {/* Group341 */}
      <div className="absolute top-[28px] left-[452px] w-[790px] h-[219px] flex justify-between items-start gap-2">
        {/* Group26 */}
        <div className="w-[182px] h-[219px] bg-white"></div>

        {/* Group27 */}
        <div className="w-[133px] h-[141px] top-[28px] left-[684px] ">
        <div className="w-[95px] h-[24px] top-[28px] left-[684px] font-[Cabin] text-[20px] font-bold leading-[24.3px] mb-[20px] text-white whitespace-nowrap">
    Contact Us
  </div>
  {/* Group25 */}
  <div className="w-[133px] h-[102px] top-[67px] left-[684px] mb-[15px] ">
  <div className="w-[126px] h-[24px] top-[67px] left-[684px] mb-[15px] ">
  <div className="w-[81px] h-[24px] text-white font-[Cabin] text-[20px] font-normal leading-[24.3px] text-left  whitespace-nowrap">+961 71 123456 </div>
  
</div>
<div className="w-[133px] h-[24px] top-[67px] left-[684px] mb-[15px]"> 
<div className="w-[81px] h-[24px] text-white font-[Cabin] text-[20px] font-normal leading-[24.3px] text-left  whitespace-nowrap">+961 70 123456</div>
</div>
<div className="w-[81px] h-[24px] top-[67px] left-[684px] mb-[15px] ">
<div className="w-[81px] h-[24px] text-white font-[Cabin] text-[20px] font-normal leading-[24.3px] text-left  whitespace-nowrap"> Locations</div>
 
</div>

  </div>
        </div>

     {/* Group28 */}
<div className="w-[112px] h-[141px] top-[28px] left-[867px]">
  <div className="font-[Cabin] text-[20px] font-bold leading-[24.3px] text-left text-white whitespace-nowrap">
    Follow us On
  </div>

  {/* Group25 */}
  <div className="top-[67px] left-[867px] w-[85px] h-[102px] mt-[20px]">
    {/* Frame 330 */}
    <div className="w-[85px] h-[auto] opacity-85 gap-[15px] flex flex-col">
      {/* Facebook */}
      <div className="w-[81px] h-[24px] text-white font-[Cabin] text-[20px] font-normal leading-[24.3px] text-left mb-[15px]">
        Facebook
      </div>
      {/* Twitter */}
      <div className="w-[58px] h-[24px] text-white font-[Cabin] text-[20px] font-normal leading-[24.3px] text-left mb-[15px]">
        Twitter
      </div>
      {/* Instagram */}
      <div className="w-[85px] h-[24px] text-white font-[Cabin] text-[20px] font-normal leading-[24.3px] text-left">
        Instagram
      </div>
    </div>
  </div>
</div>


        {/* Frame 331 */}
        <div className="w-[213px] h-[117px]">
          {/* Group 30 */}
          <div className="w-[213px] h-[71px] rounded-[15px] border border-[#7A89C2]">
            {/* Group 29 */}
            <div className="w-[85px] h-[24px] font-[Cabin] text-[20px] font-bold leading-[24.3px] text-left text-white whitespace-nowrap">Subscribe</div>

            {/* Frame 17 */}
            <div className="w-[213px] h-[38px] mt-3 p-[10px_16px] rounded-[15px] border border-[#7A89C2] bg-[#FFFFFFB2] flex items-center">
              <span className="text-center text-gray-500">Enter Email</span>
            </div>
          </div>

          {/* Frame 18 */}
          <div className="w-[120px] h-[38px] mt-2 p-[10px_29px] rounded-[15px] border-t-0 border-l-0 border border-[#7A89C2] bg-[#000000B2] flex items-center">
            <span className="w-[62px] h-[18px] text-left text-white opacity-85 font-[Cabin] text-[15px] leading-[18.23px]">Subscribe</span>
          </div>
        </div>
      </div>

      {/* Footer Logo Image */}
      <div className="absolute top-[28px] left-[41px] w-[335px] h-[87.42px]">
        <img src={footerImage} alt="EmpowerHer Footer" className="w-full h-full object-cover" />
      </div>

      {/* This website is property of The Exclusive */}
      <p className="absolute top-[167px] left-[41px] w-[342px] text-white font-[Cabin] text-[20px] leading-[24.3px]">
        This website is property of <span className="opacity-80">The Exclusive</span>.
      </p>

      {/* ©2024 Innovation Alchemy, All rights reserved */}
      <p className="absolute top-[285px] left-[444px] w-[392px] text-white font-[Cabin] text-[20px] leading-[24.3px]">
        ©2024 Innovation Alchemy, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
