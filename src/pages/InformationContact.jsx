import React, { useEffect, useState } from "react";
import Navbar from '../components/home/navbar';
import Footer from '../components/home/footer';
import axios from "axios";
import phonecall from "../assets/phone-call.png";
import smallphone from "../assets/small-phone.png";
import email2 from "../assets/email2.png";
import smallemail from "../assets/small-email.png";
import location from "../assets/location.png";
import ContactForm from './forms/contactUsForm'; 
import NominationForm from './forms/nominationForm';
import PartnershipForm from './forms/partnershipForm';

const InformationContacts = () => {
  const [contactUsData, setContactUsData] = useState(null);
  const [selectedForm, setSelectedForm] = useState("Contact Us");

  useEffect(() => {
    const fetchContactUsPageData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/combined_api_data_for_pages/contact-us"
        );
        setContactUsData(response.data);
      } catch (error) {
        console.error("Error fetching contact us data:", error);
      }
    };

    fetchContactUsPageData();
  }, []);

  if (!contactUsData) {
    return <div>Loading...</div>;
  }

  const contactData = contactUsData.staticPages.find(
    (page) => page.key === "Contact Us"
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      {/* Hero Section */}
      <section
        className="flex-grow bg-cover bg-center h-[500px] w-full"
        style={{ backgroundImage: `url(${contactData.image})` }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="relative flex flex-col items-center justify-center w-full max-w-[1198px] h-auto p-4">
            <div className="flex flex-col items-center gap-8 w-full">
              <h1 className="font-cabin text-[50px] font-medium text-[#7A89C2] text-center">
                {contactData.title}
              </h1>
              <p className="text-lg font-cabin text-[40px] font-medium text-[#7A89C2] text-center">
                {contactData.description.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <button
                className="mb-10 w-full max-w-[200px] h-[45px] flex items-center justify-center border border-[#7A89C2] bg-[#7A89C2] rounded-lg text-lg text-white font-semibold"
                onClick={() => (window.location.href = contactData.button_link)}
              >
                {contactData.button_text}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="flex flex-col md:flex-row justify-center gap-4 mt-[-100px] mb-10 relative z-10 p-4">
        {/* Contact Us Cards */}
        <div className="w-full md:w-[600px] rounded-[25px] bg-white shadow-lg flex flex-col items-center p-6">
          <img src={phonecall} alt="phone" className="w-[98px] h-[98px] mt-4" />
          <h1 className="font-cabin text-2xl font-bold text-black mt-2 text-center">Talk to Our Team</h1>
          <p className="w-full font-cabin text-[18px] text-center text-black mt-4">
            Want to learn more about joining EmpowerHer.Energy? Call us today to speak with our team and discover how you can make an impact.
          </p>
          <div className="flex items-center mt-4">
            <img src={smallphone} alt="phone" className="w-[24px] h-[24px] mr-2 rotate-180" />
            <span className="font-cabin text-[20px] text-[#7A89C2]">+961 123 456</span>
          </div>
        </div>

        <div className="w-full md:w-[600px] rounded-[25px] bg-white shadow-lg flex flex-col items-center p-6"> {/* Adjusted padding */}
          <img src={email2} alt="email" className="w-[98px] h-[98px] mt-4" />
          <h1 className="font-cabin text-2xl font-bold text-center text-black mt-2">Contact Customer Support</h1>
          <p className="w-full font-cabin text-[18px] text-center text-black mt-4">
            Have a question or need assistance? Reach out to us via email or visit our office. We’re here to support you every step of the way.
          </p>
          <div className="flex items-center mt-4">
            <img src={smallemail} alt="email" className="w-[24px] h-[24px] mr-2" />
            <span className="font-cabin text-[20px] text-[#7A89C2]">hello@empowerher.energy</span>
          </div>
          <div className="flex items-center mt-4">
            <img src={location} alt="location" className="w-[24px] h-[24px] mr-2" />
            <span className="font-cabin text-[20px] text-[#7A89C2]">Beirut, Lebanon</span>
          </div>
        </div>
      </section>

      {/* Conditional Rendering of Contact Form */}
      <div className="flex flex-col mt-14 px-4">
        <div className="flex items-center gap-2 ml-0 md:ml-16">
          {["Contact Us", "Nomination Form", "Partnership Form"].map((form, index) => (
            <React.Fragment key={form}>
              <p
                className={`text-xl md:text-2xl lg:text-3xl font-cabin cursor-pointer ml-2 ${selectedForm === form ? 'text-[#7A89C2]' : 'text-black'}`}
                onClick={() => setSelectedForm(form)}
              >
                {form}
              </p>
              {index < 2 && <span className="text-xl md:text-2xl lg:text-3xl font-cabin">|</span>} {/* Add separator */}
            </React.Fragment>
          ))}
        </div>

        {/* Render selected form */}
        {selectedForm === "Contact Us" && <ContactForm handleSubmit={handleSubmit} />}
        {selectedForm === "Nomination Form" && <NominationForm handleSubmit={handleSubmit} />}
        {selectedForm === "Partnership Form" && <PartnershipForm handleSubmit={handleSubmit} />}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InformationContacts;
