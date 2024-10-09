import React from "react";
import Navbar from "../components/home/navbar"; // Assuming you have a separate component for the Navbar
import Footer from "../components/home/footer";
import image1 from "../assets/image1.png";
import Frame21 from "../assets/Frame21.png";
import image5 from "../assets/image5.png";
import image4 from "../assets/image4.png";
import image24 from "../assets/image24.png";
import during from "../assets/During.png";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      {/* Hero Section */}
      <div
        className="flex-grow bg-cover bg-center h-[633px] w-full"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="flex items-center justify-center h-full">
{/* Page Control */}
<div className="absolute w-[170.73px] h-[75.12px] top-[630px] left-[700px] p-[17.51px_5.49px_16.63px_1.34px]  ">

  {/* Frame */}
  <div className="w-auto h-auto p-[13.66px_20.49px] flex gap-[13.66px] rounded-[85.36px] backdrop-blur-[68.29px] bg-[#7A89C2]">

    {/* Platter */}
    <div className="w-[163.9px] h-[40.97px] flex items-center justify-between rounded-[170.73px] ">

      {/* Dots */}
     {/* Dots */}
{[...Array(5)].map((_, index) => (
  <div
    key={index}
    className={`w-[13.66px] h-[13.66px] rounded-[85.36px] bg-black ${index === 0 ? 'opacity-100' : 'opacity-[0.3]'}`}
  ></div>
))}


    </div>
  </div>
</div>


          {/* Frame 297 */}
          <div className="relative w-[1198px] h-[400px] flex justify-between top-[1px] left-[1px] ">
            {/* Frame 35 */}
            <div className="w-[319px] h-auto flex flex-col gap-[30px] ">
              {/* Text Block */}
              <div className="w-[325px] h-auto text-left">
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

            {/* Frame 31 */}
            <div className="w-[407px] h-[287px] flex flex-col justify-between gap-[30px] ">
              {/* Text: Global Launch in */}
              <h1 className="text-center text-[#7A89C2] font-cabin text-[35px] font-medium leading-[42.53px]">
                Global Launch in
              </h1>

              {/* Group 15 */}
              <div className="w-[407px] h-[214px] rounded-tl-[7px] ">
                {/* Group 12 */}
                <div className="absolute w-[109px] h-[96px] mx-auto rounded-tl-[7px] ">
                  <div className="absolute w-[73px] h-[24px] top-[233px] left-[167px] rounded-tl-[7px] ">
                    <p className=" top-[72px] left-[35px] text-[#7A89C2] font-cabin text-[20px] font-medium leading-[24.3px]">
                      Seconds
                    </p>
                  </div>

                  {/* Group 8 */}
                  <div className="absolute w-[47px] h-[62px] top-[191px] left-[149px] rounded-tl-[7px] ">
                    {/* Stacked Frames */}
                    <div className="relative">
                      {/* Frame 20 */}
                      <div className="w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>

                      {/* Frame 19 on top of Frame 20 */}
                      <div className="absolute top-[-31.21px] w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>
                    </div>
                    {/* Text: 2 inside Group 8 */}
                    <span className="absolute top-[-25px] left-[12px] text-white font-bowlby-one text-[40px] leading-[46.99px]">
                      2
                    </span>
                  </div>
                  {/* Group 9 */}
                  <div className="absolute w-[47px] h-[62px] top-[191px] left-[211px] rounded-tl-[7px] ">
                    {/* Stacked Frames */}
                    <div className="relative">
                      {/* Frame 20 */}
                      <div className="w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>

                      {/* Frame 19 on top of Frame 20 */}
                      <div className="absolute top-[-31.21px] w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>
                    </div>
                    {/* Text: 9 inside Group 9 */}
                    <span className="absolute top-[-25px] left-[12px] text-white font-bowlby-one text-[40px] leading-[46.99px]">
                      9
                    </span>
                  </div>
                </div>
                {/* Group 14 */}
                <div className="absolute w-[407px] h-[96px] top-[73px] rounded-[7px] ">
                  {/* Group 11 */}
                  <div className="absolute w-[109px] h-[96px] top-[110px] left-[320px] rounded-tl-[7px] ">
                    <p className=" top-[145px] left-[318px] text-[#7A89C2] font-cabin text-[20px] font-medium leading-[24.3px]">
                      Minutes
                    </p>
                  </div>
                  {/* Group 8 */}
                  <div className="absolute w-[47px] h-[62px] top-[73px] left-[298px] rounded-tl-[7px] ">
                    {/* Stacked Frames */}
                    <div className="relative">
                      {/* Frame 20 */}
                      <div className="w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>

                      {/* Frame 19 on top of Frame 20 */}
                      <div className="absolute top-[-31.21px] w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>
                    </div>
                    {/* Text: 2 inside Group 8 */}
                    <span className="absolute top-[-25px] left-[12px] text-white font-bowlby-one text-[40px] leading-[46.99px]">
                      3
                    </span>
                  </div>
                  {/* Group 9 */}
                  <div className="absolute w-[47px] h-[62px] top-[73px] left-[360px] rounded-tl-[7px] ">
                    {/* Stacked Frames */}
                    <div className="relative">
                      {/* Frame 20 */}
                      <div className="w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>

                      {/* Frame 19 on top of Frame 20 */}
                      <div className="absolute top-[-31.21px] w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>
                    </div>
                    {/* Text: 9 inside Group 9 */}
                    <span className="absolute top-[-25px] left-[12px] text-white font-bowlby-one text-[40px] leading-[46.99px]">
                      0
                    </span>
                  </div>

                  {/* Group 10 */}
                  <div className="absolute w-[109px] h-[96px] top-[110px] left-[178px] rounded-tl-[7px] ">
                    <p className=" top-[145px] left-[178px] text-[#7A89C2] font-cabin text-[20px] font-medium leading-[24.3px]">
                      Hours
                    </p>
                  </div>
                  {/* Group 8 */}
                  <div className="absolute w-[47px] h-[62px] top-[73px] left-[149px] rounded-tl-[7px] ">
                    {/* Stacked Frames */}
                    <div className="relative">
                      {/* Frame 20 */}
                      <div className="w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>

                      {/* Frame 19 on top of Frame 20 */}
                      <div className="absolute top-[-31.21px] w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>
                    </div>
                    {/* Text: 1 inside Group 8 */}
                    <span className="absolute top-[-25px] left-[12px] text-white font-bowlby-one text-[40px] leading-[46.99px]">
                      1
                    </span>
                  </div>
                  {/* Group 9 */}
                  <div className="absolute w-[47px] h-[62px] top-[73px] left-[211px] rounded-tl-[7px] ">
                    {/* Stacked Frames */}
                    <div className="relative">
                      {/* Frame 20 */}
                      <div className="w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>

                      {/* Frame 19 on top of Frame 20 */}
                      <div className="absolute top-[-31.21px] w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>
                    </div>
                    {/* Text: 6 inside Group 9 */}
                    <span className="absolute top-[-25px] left-[12px] text-white font-bowlby-one text-[40px] leading-[46.99px]">
                      6
                    </span>
                  </div>

                  {/* Group 13 */}
                  <div className="absolute w-[109px] h-[96px] top-[110px] left-[46px] rounded-tl-[7px] ">
                    <p className=" top-[145px] left-[178px] text-[#7A89C2] font-cabin text-[20px] font-medium leading-[24.3px]">
                      Days
                    </p>
                  </div>
                  {/* Group 8 */}
                  <div className="absolute w-[47px] h-[62px] top-[73px] left-[68px] rounded-tl-[7px] ">
                    {/* Stacked Frames */}
                    <div className="relative">
                      {/* Frame 20 */}
                      <div className="w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>

                      {/* Frame 19 on top of Frame 20 */}
                      <div className="absolute top-[-31.21px] w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>
                    </div>
                    {/* Text: 8 inside Group 8 */}
                    <span className="absolute top-[-25px] left-[12px] text-white font-bowlby-one text-[40px] leading-[46.99px]">
                      8
                    </span>
                  </div>
                  {/* Group 9 */}
                  <div className="absolute w-[47px] h-[62px] top-[73px] left-[5px] rounded-tl-[7px] ">
                    {/* Stacked Frames */}
                    <div className="relative">
                      {/* Frame 20 */}
                      <div className="w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>

                      {/* Frame 19 on top of Frame 20 */}
                      <div className="absolute top-[-31.21px] w-[47px] h-[31.21px] bg-[#7A89C2] rounded-[7px]"></div>
                    </div>
                    {/* Text: 5 inside Group 9 */}
                    <span className="absolute top-[-25px] left-[12px] text-white font-bowlby-one text-[40px] leading-[46.99px]">
                      5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section*/}
      <div className="w-[auto] h-[2287.07px]">
      <section className="py-20 px-5 sm:px-10 h-[600px] flex flex-col md:flex-row">
  {/* Left Side - Image and Button */}
  <div className="flex-none w-full md:w-[457px] h-auto gap-3 opacity-100 mb-6 md:mb-0">
    <div className="w-full md:w-[500px] h-[590px] bg-white rounded-lg opacity-100 p-3 flex flex-col items-center">
      <img src={Frame21} alt="Team member" className="w-[320px] h-[645px] mt-4" />
      
      <button className="mt-6 w-[281px] h-[55px] flex items-center justify-center border border-[#7A89C2] bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] rounded-lg opacity-100">
        <span className="text-lg text-white font-semibold">Find Out More</span>
      </button>
    </div>
  </div>

  {/* Right Side - About Us Text */}
  <div className="flex-1 max-w-[953px] h-auto gap-10 opacity-100">
    <h2 className="text-4xl sm:text-6xl md:text-9xl text-left text-[#7A89C2] font-brice mb-8">ABOUT US</h2>
    
    <div className="flex flex-col gap-4">
      <h3 className="text-xl sm:text-2xl font-semibold text-left text-[#7A89C2]">
        Get to Know Us: Our Story and Team
      </h3>
      <p className="text-base sm:text-lg text-left text-black">
        Welcome to EmpowerHer.Energy, where we are dedicated to unlocking the power and potential of women across industries. Our platform is committed to supporting women in sectors where they are traditionally underrepresented compared to men, including STEM, leadership and executive positions, finance and investment banking, construction, and skilled trades.
      </p>
      <p className="text-base sm:text-lg text-left text-black">
        Born from a passionate desire to foster growth, empowerment, and advancement for women, EmpowerHer.Energy is a beacon of inspiration and support for women professionals, entrepreneurs, and enthusiasts alike.
      </p>
      <h3 className="text-xl sm:text-2xl font-medium text-left text-[#7A89C2]">What to expect?</h3>
      <p className="text-base sm:text-lg text-left text-black">
        With a rallying cry to redefine possibilities and shatter barriers, EmpowerHer.Energy embarks on a mission to illuminate these sectors with the brilliance and resilience of empowered women. This isn't just a platform; it is a movement—a journey of transformation where each empowered woman becomes a catalyst for a brighter, more inclusive energy future and where we teach men to live with empowered women.
      </p>
    </div>
  </div>
</section>


      {/* Team Section */}
      <section className="py-40 px-5 sm:px-10 md:px-20 lg:px-40 h-[600px] ">
  <div className="h-auto gap-[60px] flex flex-col items-center">
    {/* Title */}
    <h2 className="text-center text-[#7A89C2] font-brice text-5xl mb-14 font-bold">
      Meet Our Team
    </h2>

    {/* Team Members */}
    <div className="flex flex-wrap justify-center gap-10">
      {/* Team Member 1 */}
      <div className="flex flex-col items-center w-[316px] h-[320px] rounded-[15px] bg-[#00000008] shadow-[0px_6px_6px_-2px_rgba(0,0,0,0.25)]">
        <img 
          src={image24} 
          alt="Alex Smith" 
          className="w-40 h-40 rounded-full border-3 border-[#7A89C2] mb-4 mt-6" 
        />
        <p className="text-[#7A89C2] font-cabin text-lg font-semibold mb-4">
          Alex Smith
        </p>
        <p className="text-[#7A89C2] font-cabin text-base font-medium mb-4">
          Creative Leader
        </p>
      </div>

      {/* Team Member 2 */}
      <div className="flex flex-col items-center w-[316px] h-[320px] rounded-[15px] bg-[#00000008] shadow-[0px_6px_6px_-2px_rgba(0,0,0,0.25)]">
        <img 
          src={image4} 
          alt="May Brown" 
          className="w-40 h-40 rounded-full border-3 border-[#7A89C2] mb-4 mt-6" 
        />
        <p className="text-[#7A89C2] font-cabin text-lg font-semibold mb-4">
          May Brown
        </p>
        <p className="text-[#7A89C2] font-cabin text-base font-medium mb-4">
          Creative Leader
        </p>
      </div>

      {/* Team Member 3 */}
      <div className="flex flex-col items-center w-[316px] h-[320px] rounded-[15px] bg-[#00000008] shadow-[0px_6px_6px_-2px_rgba(0,0,0,0.25)]">
        <img 
          src={image5}
          alt="Roxie Swanson" 
          className="w-40 h-40 rounded-full border-3 border-[#7A89C2] mb-4 mt-6" 
        />
        <p className="text-[#7A89C2] font-cabin text-lg font-semibold mb-4">
          Roxie Swanson
        </p>
        <p className="text-[#7A89C2] font-cabin text-base font-medium mb-4">
          Creative Leader
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Trending Articles Section*/}

{/* Trending Articles Section */}
<section className="py-40 px-5 sm:px-10 md:px-20 lg:px-40  w-full h-[664px] gap-[50px]">
  <h2 className="font-brice text-[40px] font-normal leading-[55.96px] text-center text-[#7A89C2] mb-8 h-[56px]">
    Trending Articles
  </h2>

  <div className="flex flex-col sm:flex-row justify-center gap-10 h-[352px]">
    {/* First Article */}
    <div className="max-w-xs bg-white shadow-md w-full sm:w-[332px] h-full">
      <img
        src={during}
        alt="Article"
        className="w-full h-[179px] rounded-t-lg object-cover"
      />
      <div className="w-full h-[173px] pt-2 pb-4 pl-5 pr-4 rounded-b-lg bg-[#EADFE280]">
        {/* Title */}
        <h3 className="w-full mb-2 text-left text-[#7A89C2] font-inter text-[15px] font-semibold leading-[18.15px]">
          Leading the Charge: Adiba El Masri’s Journey in Sustainable Architecture and Energy Innovation
        </h3>
        {/* Date */}
        <p className="w-full text-center text-black font-inter text-[12px] font-medium leading-[14.52px] mb-2">
          04 September 2024
        </p>
        {/* Description */}
        <p className="w-full text-left text-black font-inter text-[12px] font-semibold leading-[14.52px]">
          Adiba El Masri is an accomplished architect and sustainability advocate with a strong focus on energy efficiency in the built environment. Her journey in the energy sector was inspired...
        </p>
      </div>
    </div>

    {/* Second Article */}
    <div className="max-w-xs bg-white shadow-md w-full sm:w-[332px] h-full">
      <img
        src={during} // Replace with the actual image source
        alt="Article"
        className="w-full h-[179px] rounded-t-lg object-cover"
      />
      <div className="w-full h-[173px] pt-2 pb-4 pl-5 pr-4 rounded-b-lg bg-[#EADFE280]">
        {/* Title */}
        <h3 className="w-full mb-2 text-left text-[#7A89C2] font-inter text-[15px] font-semibold leading-[18.15px]">
          Title for Second Article
        </h3>
        {/* Date */}
        <p className="w-full text-center text-black font-inter text-[12px] font-medium leading-[14.52px] mb-2">
          04 September 2024
        </p>
        {/* Description */}
        <p className="w-full text-left text-black font-inter text-[12px] font-semibold leading-[14.52px]">
          Description for the second article goes here...
        </p>
      </div>
    </div>

    {/* Third Article */}
    <div className="max-w-xs bg-white shadow-md w-full sm:w-[332px] h-full">
      <img
        src={during} // Replace with the actual image source
        alt="Article"
        className="w-full h-[179px] rounded-t-lg object-cover"
      />
      <div className="w-full h-[173px] pt-2 pb-4 pl-5 pr-4 rounded-b-lg bg-[#EADFE280]">
        {/* Title */}
        <h3 className="w-full mb-2 text-left text-[#7A89C2] font-inter text-[15px] font-semibold leading-[18.15px]">
          Title for Third Article
        </h3>
        {/* Date */}
        <p className="w-full text-center text-black font-inter text-[12px] font-medium leading-[14.52px] mb-2">
          04 September 2024
        </p>
        {/* Description */}
        <p className="w-full text-left text-black font-inter text-[12px] font-semibold leading-[14.52px]">
          Description for the third article goes here...
        </p>
      </div>
    </div>
  </div>

  <div className="flex justify-center mt-8">
    <button className="w-full sm:w-[133px] h-[36px] py-[6px] px-[32px] gap-[10px] rounded-[15px] border-t border-[#7A89C2] bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2]">
      <span className="text-left text-white font-cabin text-[20px] font-semibold leading-[24.3px] w-full sm:w-[69px] h-[24px] whitespace-nowrap">
        View All
      </span>
    </button>
  </div>
</section>



      {/* Events Section */}
       <section className="py-20 bg-gray-100 px-10 mt-16">
        <h2 className="text-4xl text-center text-gray-600 font-semibold mb-8">Our upcoming events and activities</h2>
        <div className="flex justify-center gap-10">
          <div className="max-w-xs bg-white shadow-md p-4">
            <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">15</div>
            <p className="mt-2 text-lg font-semibold">December 2024</p>
            <p className="text-gray-600 mt-2">MEET & GREET</p>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Register Now</button>
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
