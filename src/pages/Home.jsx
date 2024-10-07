import React from 'react';
import HomeNavbar from '../components/home/home-navbar'; // Assuming you have a separate component for the Navbar
import HomeFooter from '../components/home/home-footer';

const Home = () => {
  return (
    <div className="page-container bg-white">
      <HomeNavbar />

      {/* Hero Section
      
       <section className="flex justify-between items-center bg-gradient-to-r from-orange-200 to-yellow-300 px-10 py-20">
        <div className="text-4xl font-bold text-gray-700">
          <p>Be Part of the Movement to Empower Women Worldwide!</p>
          <button className="mt-6 bg-gray-700 text-white py-2 px-4 rounded">Become a Member!</button>
        </div>
        <div>
          <div className="text-center text-lg text-gray-600">Global Launch in</div>
          <div className="flex gap-2 justify-center mt-4">
            <div className="bg-blue-500 text-white p-2 rounded">58<br/>Days</div>
            <div className="bg-blue-500 text-white p-2 rounded">16<br/>Hours</div>
            <div className="bg-blue-500 text-white p-2 rounded">30<br/>Minutes</div>
            <div className="bg-blue-500 text-white p-2 rounded">29<br/>Seconds</div>
          </div>
        </div>
      </section>*/}
     

      {/* About Us Section
      
       <section className="py-20 px-10">
        <h2 className="text-5xl text-center text-gray-600 font-semibold mb-8">ABOUT US</h2>
        <div className="text-lg text-center mb-8">
          <p>Welcome to EmpowerHer.Energy, where we are dedicated to unlocking the power and potential of women...</p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded">Find Out More</button>
        </div>
        <div className="flex justify-center mt-8">
          <img src="/path/to/team-member.jpg" alt="Team member" className="w-48 h-48 rounded-full"/>
        </div>
      </section>*/}
     

      {/* Team Section 
           <section className="py-20 bg-gray-100">
        <h2 className="text-4xl text-center text-gray-600 font-semibold mb-12">Meet Our Team</h2>
        <div className="flex justify-center gap-10">
          <div className="text-center">
            <img src="/path/to/alex-smith.jpg" alt="Alex Smith" className="w-40 h-40 rounded-full mx-auto"/>
            <p className="mt-4 text-lg font-semibold">Alex Smith</p>
            <p>Creative Leader</p>
          </div>
          <div className="text-center">
            <img src="/path/to/may-brown.jpg" alt="May Brown" className="w-40 h-40 rounded-full mx-auto"/>
            <p className="mt-4 text-lg font-semibold">May Brown</p>
            <p>Creative Leader</p>
          </div>
          <div className="text-center">
            <img src="/path/to/roxie-swanson.jpg" alt="Roxie Swanson" className="w-40 h-40 rounded-full mx-auto"/>
            <p className="mt-4 text-lg font-semibold">Roxie Swanson</p>
            <p>Creative Leader</p>
          </div>
        </div>
      </section>*/}
 

      {/* Trending Articles Section
      <section className="py-20 px-10">
        <h2 className="text-4xl text-center text-gray-600 font-semibold mb-8">Trending Articles</h2>
        <div className="flex justify-center gap-10">
          <div className="max-w-xs bg-white shadow-md p-4">
            <img src="/path/to/article-image.jpg" alt="Article" className="w-full h-48 object-cover"/>
            <h3 className="mt-4 font-semibold">Leading the Charge: Adiba El Masri's Journey...</h3>
            <p className="text-gray-600">04 September 2024</p>
            <p className="mt-2 text-gray-700">Adiba El Masri is an accomplished architect and sustainability advocate...</p>
          </div>
          
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-gray-700 text-white py-2 px-6 rounded">View All</button>
        </div>
      </section> */}
      

      {/* Events Section
       <section className="py-20 bg-gray-100 px-10">
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
      </section> */}
     

      {/* Footer */}
      <HomeFooter />
    </div>
  );
};

export default Home;
