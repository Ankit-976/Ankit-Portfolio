import React, { useRef, useState } from "react";
import shieldLogo from "../assets/shield.png";
import codeLogo from "../assets/code.png";
import instaLogo from "../assets/instagram.png";
// import emailjs from "@emailjs/browser";
import axios from "axios";

const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  const SHEETS_URL = import.meta.env.VITE_SHEETS_URL;

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquireType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex =
      /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_'+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i;

    if (!regex.test(formData.email)) {
      alert("Invalid email");

      return;
    }

    // emailjs
    //   .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
    //     publicKey: PUBLIC_KEY,
    //   })
    //   .then(
    //     () => {
    //       setFormData({
    //         name: "",
    //         email: "",
    //         inquireType: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     },
    //   );


    fetch(SHEETS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        name: formData.name,
        email: formData.email,
        inquireType: formData.inquireType,
        message: formData.message,
      }),
    })
      .then((res) => res.text())
      .then(() => {
        setFormData({
          name: "",
          email: "",
          inquireType: "",
          message: "",
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      className='text-white data-section flex flex-col gap-2 sm:gap-4 lg:gap-10 px-7 md:px-20 lg:px-25 py-5 md:pt-20 min-h-screen font-["Space_Grotesk"]'
      id="contact"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 px-1">
          <span className="block h-[0.05rem] w-7 md:w-12 bg-[#e9c349] opacity-60"></span>
          <span className="block text-[#e9c349] text-[0.7rem] opacity-60">
            MISSION CONTROL
          </span>
        </div>
        <h1 className="text-4xl sm:text-7xl/20 lg:text-[7rem]/25 tracking-tighter">
          ESTABLISH
        </h1>
      </div>
      <div>
        <h1 className="text-4xl/10 sm:text-7xl/20 lg:text-[7rem]/25 tracking-tighter text-[#e9c349]">
          SECURE
        </h1>
        <h1 className="text-4xl/10 sm:text-7xl/15 lg:text-[7rem]/25 tracking-tighter">
          CONNECTION
        </h1>
      </div>
      <div className="flex font-['Space_Grotesk'] flex-col xl:flex-row gap-10 lg:gap-0 items-center">
        <div className="lg:p-13 flex flex-col gap-10 md:gap-20 xl:gap-20 lg:gap-10">
          <div className="flex flex-col gap-5 sm:gap-7 md:gap-10">
            <span className="text-[#9f9f9f] text-[0.9rem]">
              SYSTEM DIRECTIVES
            </span>
            <p className="font-['Inter'] text-[0.95rem] text-[#ffffffa8] w-full">
              Initiate correspondence for architectural inquiries, technical
              consultations, or classified project collaborations. Response
              latency is typically under 24 cycles.
            </p>
            <div className=" font-['Space_Grotesk'] flex flex-col gap-2">
              <span className="block text-[0.8rem] text-[#e9c349]">
                DIRECT CHANNEL
              </span>
              <span className="block text-[1rem] tracking-wider">
                ankitbasa976@gmail.com
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="block text-[0.8rem] text-[#9f9f9f] ">
                EXTERNAL PROTOCOLS
              </span>
              <div className="flex flex-col gap-5">
                <a
                  href="https://github.com/Ankit-976"
                  target="_blank"
                  className="outline-none max-w-90"
                >
                  <div className="flex justify-between p-5 max-w-90 bg-[#171717a9]">
                    <span className="text-[0.9rem]">GITHUB</span>
                    <img src={codeLogo} className="h-6" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/ankitbasa976?igsh=YXliYm9lMGZxdnlm"
                  target="_blank"
                  className="outline-none max-w-90"
                >
                  <div className="flex justify-between p-5 max-w-90 bg-[#171717a9]">
                    <span className="text-[0.9rem]">INSTAGRAM</span>
                    <img src={instaLogo} className="h-6" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="text-[#e5e5e5]  bg-[#171717] flex flex-col justify-center sm:w-70 md:w-100 md:gap-3 font-['Space_Grotesk'] px-3 py-3 pr-15 lg:min-w-45 xl:w-80  lg:pr-0  md:py-5 xl:py-3 border-l-2 border-[#e9c349]">
            <span className="block text-[0.8rem] md:text-[0.8rem]/1 font-semibold tracking-tight text-[#9f9f9f64]">
              <img src={shieldLogo} className="h-9" />
            </span>
            <span className="block  text-[#afafaf60]">
              <span className="block text-[0.85rem]">ENCRYPTION: AES-256</span>
              <span className="block text-[0.85rem]">
                STATUS: READY FOR UPLINK
              </span>
              <span className="block text-[0.85rem]">
                LOCATION: [CLASSIFIED]
              </span>
            </span>
          </div>
        </div>
        <div className=" max-w-160 lg:p-10 flex flex-col gap-10">
          <div className="bg-[#141414] p-5 py-8 lg:py-15">
            <form
              className="flex flex-col  gap-8 lg:gap-10"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <div className="flex justify-between flex-wrap sm:flex-nowrap gap-5">
                <div className="flex flex-col  w-70 gap-3 ">
                  <label
                    htmlFor="nameNode"
                    className="text-[0.95rem] tracking-widest"
                  >
                    IDENTIFICATION
                  </label>
                  <input
                    type="text"
                    className=" w-[90%] h-10 border-b border-[#6a6969] text-[0.9rem] outline-none"
                    placeholder="OPERATIVE NAME"
                    name="name"
                    autoComplete="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    id="nameNode"
                  />
                </div>
                <div className="flex flex-col w-70 gap-3">
                  <label
                    htmlFor="emailNode"
                    className="text-[0.95rem] tracking-widest"
                  >
                    COMMUNICATION NODE
                  </label>
                  <input
                    type="email"
                    className=" h-10 w-[90%] border-b border-[#6a6969] text-[0.9rem] outline-none"
                    placeholder="EMAIL ADDRESS"
                    name="email"
                    required
                    autoComplete="Email"
                    value={formData.email}
                    onChange={handleChange}
                    id="emailNode"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="inquiryNode"
                    className="text-[0.95rem] tracking-widest"
                  >
                    SUBJECT DIRECTIVE
                  </label>
                  <input
                    type="text"
                    className=" h-10 border-b border-[#6a6969] text-[0.9rem] outline-none"
                    placeholder="PROJECT CODENAME / INQUIRE TYPE"
                    name="inquireType"
                    required
                    value={formData.inquireType}
                    onChange={handleChange}
                    id="inquiryNode"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="messageNode"
                    className="text-[0.95rem] tracking-widest"
                  >
                    INTELLIGENCE DETAIL
                  </label>
                  <textarea
                    className="  h-25 lg:h-32 w-full border-b border-[#6a6969] text-[0.9rem] outline-none pt-4 resize-none"
                    placeholder="MESSAGE BODY..."
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    id="messageNode"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex h-13 max-w-65 bg-[#ffce2c] justify-center items-center text-[0.85rem] cursor-pointer text-black transition-all duration-150  active:scale-95"
              >
                INFILTRATE MY INBOX
              </button>
            </form>
          </div>
          <span className="text-[#9f9f9f] flex justify-end w-full  text-[0.8rem]">
            TRANSMISSION VERIFIED BY SECURE PROTOCOL V4.2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
