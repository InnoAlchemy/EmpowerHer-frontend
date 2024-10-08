import React, { useState, useEffect } from "react";
import axios from "axios";
import footerImage from "../../assets/EmpowerHer-Footer.png"; // Adjust the path as needed

const Footer = () => {
  // State to manage the email input
  const [email, setEmail] = useState("");
  // State to manage the information contacts
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/information_contacts");
        setContacts(response.data); // Store the data in the contacts state
      } catch (error) {
        console.error("Error fetching contact information:", error);
      }
    };

    fetchContacts(); // Call the function to fetch data on component mount
  }, []);

  // Filter contacts by type
  const socialLinks = contacts.filter(contact => contact.type === "social_link");
  const phoneNumbers = contacts.filter(contact => contact.type === "phone_number");

  // Function to handle subscribe button click
  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribed with email:", email);
      // Add more subscription logic here (e.g., API call)
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="relative w-full h-auto bg-gradient-to-r from-[#2C3F87] to-[#7A89C2] shadow-lg py-8">
      {/* Footer Content */}
      <div className="max-w-[1420px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-4">
        
        {/* Footer Logo Image and Property Text */}
        <div className="flex flex-col items-center w-full md:w-[335px] mb-5 md:mb-0">
          <img
            src={footerImage}
            alt="EmpowerHer Footer"
            className="w-full h-auto object-cover"
          />
          <p className="mt-12 text-white font-[Cabin] text-[20px] leading-[24.3px] text-center whitespace-nowrap">
            This website is property of{" "}
            <span className="opacity-80">The Exclusive</span>.
          </p>
        </div>

        {/* Group26 - Quick Access */}
        <div className="w-full md:w-[182px]">
          <div className="font-[Cabin] text-[20px] font-bold leading-[24.3px] mb-[20px] text-white whitespace-nowrap">
            Quick Access
          </div>
          <div className="flex flex-col gap-[15px]">
            <a href="/" className="text-white text-[16px] leading-[24px]">Home</a>
            <a href="/programs-initiatives" className="text-white text-[16px] leading-[24px]">Programs & Initiatives</a>
            <a href="/get-involved" className="text-white text-[16px] leading-[24px]">Get Involved</a>
            <a href="/discover-her" className="text-white text-[16px] leading-[24px]">Discover Her</a>
            <a href="/contact-us" className="text-white text-[16px] leading-[24px]">Contact Us</a>
          </div>
        </div>

        {/* Group27 - Contact Us */}
        <div className="w-full md:w-[133px]">
          <div className="font-[Cabin] text-[20px] font-bold leading-[24.3px] mb-[20px] text-white whitespace-nowrap">
            Contact Us
          </div>
          <div className="flex flex-col gap-[15px]">
            {phoneNumbers.map((phone) => (
              <div key={phone.id} className="text-white font-[Cabin] text-[16px] leading-[24.3px]">
                {phone.value}
              </div>
            ))}
            <div className="text-white font-[Cabin] text-[16px] leading-[24.3px]">Locations</div>
          </div>
        </div>

        {/* Group28 - Follow Us On */}
        <div className="w-full md:w-[112px]">
          <div className="font-[Cabin] text-[20px] font-bold leading-[24.3px] text-left text-white whitespace-nowrap">
            Follow us On
          </div>
          <div className="flex flex-col gap-[15px] mt-[20px]">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.value}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-[Cabin] text-[16px] leading-[24.3px]"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* Group - Subscribe */}
        <div className="w-full md:w-[213px]">
          <div className="font-[Cabin] text-[20px] font-bold leading-[24.3px] text-left text-white whitespace-nowrap">
            Subscribe
          </div>
          <div className="mt-3">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-[10px_16px] rounded-[15px] border border-[#7A89C2] bg-[#FFFFFFB2] w-full placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>
          <div className="mt-2">
            <button
              onClick={handleSubscribe} // Handle click event
              className="w-full p-[10px_29px] rounded-[15px] bg-[#000000B2] text-white font-[Cabin] text-[15px]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Line Above Copyright */}
      <div className="border-t border-white/50 my-5 mx-4"></div>

      {/* ©2024 Innovation Alchemy, All rights reserved */}
      <p className="text-white font-[Cabin] text-[20px] leading-[24.3px] text-center">
        ©2024 Innovation Alchemy, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
