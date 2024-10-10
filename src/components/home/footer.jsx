import React, { useState, useEffect } from "react";
import axios from "axios";
import footerImage from "../../assets/EmpowerHer-Footer.png"; // Adjust the path as needed

const Footer = () => {
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/information_contacts");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contact information:", error);
      }
    };

    fetchContacts();
  }, []);

  // Filter contacts by type
  const socialLinks = contacts.filter(contact => contact.type === "social_link");
  const phoneNumbers = contacts.filter(contact => contact.type === "phone_number");

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribed with email:", email);
      // Add more subscription logic here (e.g., API call)
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="relative w-full bg-gradient-to-r from-[#2C3F87] to-[#7A89C2] shadow-lg py-8">
      <div className="max-w-[1420px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          
          {/* Footer Logo and Property Text */}
          <div className="flex flex-col items-center w-full md:w-[335px] mb-5 md:mb-0">
            <img
              src={footerImage}
              alt="EmpowerHer Footer"
              className="w-1/2 h-auto object-cover md:w-full"
            />
            <p className="mt-12 text-white font-[Cabin] text-[20px] leading-[24.3px] text-center">
              This website is property of <span className="opacity-80">The Exclusive</span>.
            </p>
          </div>

          {/* Quick Access */}
          <div className="flex flex-col items-start w-full md:w-[182px]">
            <h4 className="font-[Cabin] text-[20px] font-bold leading-[24.3px] mb-[20px] text-white">Quick Access</h4>
            <div className="flex flex-col gap-[15px]">
              <a href="/" className="text-white text-[16px] leading-[24px]">Home</a>
              <a href="/programs-initiatives" className="text-white text-[16px] leading-[24px]">Programs & Initiatives</a>
              <a href="/get-involved" className="text-white text-[16px] leading-[24px]">Get Involved</a>
              <a href="/discover-her" className="text-white text-[16px] leading-[24px]">Discover Her</a>
              <a href="/contact-us" className="text-white text-[16px] leading-[24px]">Contact Us</a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-start w-full md:w-[133px]">
            <h4 className="font-[Cabin] text-[20px] font-bold leading-[24.3px] mb-[20px] text-white">Contact Us</h4>
            <div className="flex flex-col gap-[15px]">
              {phoneNumbers.map((phone) => (
                <div key={phone.id} className="text-white font-[Cabin] text-[16px] leading-[24.3px]">{phone.value}</div>
              ))}
              <div className="text-white font-[Cabin] text-[16px] leading-[24.3px]">Locations</div>
            </div>
          </div>

          {/* Follow Us On */}
          <div className="flex flex-col items-start w-full md:w-[112px]">
            <h4 className="font-[Cabin] text-[20px] font-bold leading-[24.3px] text-white whitespace-nowrap">Follow Us On</h4>
            <div className="flex flex-col gap-[15px] mt-[20px]">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.value} target="_blank" rel="noopener noreferrer" className="text-white font-[Cabin] text-[16px] leading-[24.3px]">
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col items-start w-full md:w-[213px]">
            <h4 className="font-[Cabin] text-[20px] font-bold leading-[24.3px] text-white">Subscribe</h4>
            <div className="mt-3">
              <input
                type="email"
                placeholder="Enter Email"
                className="p-[10px_16px] rounded-[15px] border border-[#7A89C2] bg-[#FFFFFFB2] w-full placeholder-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <button
                onClick={handleSubscribe}
                className="w-full p-[10px_29px] rounded-[15px] bg-[#000000B2] text-white font-[Cabin] text-[15px]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Line Above Copyright */}
      <div className="border-t border-white/50 my-5 mx-4" />

      {/* Copyright Text */}
      <p className="text-white font-[Cabin] text-[20px] leading-[24.3px] text-center">
        ©2024 Innovation Alchemy, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
