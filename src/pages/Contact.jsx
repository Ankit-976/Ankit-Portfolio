import React from "react";
import shieldLogo from "../assets/shield.png";
import codeLogo from "../assets/code.png";
import instaLogo from "../assets/instagram.png";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // submit api
    alert("submitted");
  };
  return (
    <div className='text-white flex flex-col gap-5 lg:gap-10 px-7 md:px-20 lg:px-25 pt-10 min-h-screen font-["Space_Grotesk"]'>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 px-1">
          <span className="block h-[0.05rem] w-7 md:w-12 bg-[#e9c349] opacity-60"></span>
          <span className="block text-[#e9c349] text-[0.7rem] opacity-60">
            MISSION CONTROL
          </span>
        </div>
        <h1 className="text-4xl lg:text-[7rem]/25 tracking-tighter">
          ESTABLISH
        </h1>
      </div>
      <div>
        <h1 className="text-4xl/10 lg:text-[7rem]/25 tracking-tighter text-[#e9c349]">
          SECURE
        </h1>
        <h1 className="text-4xl/10 lg:text-[7rem]/25 tracking-tighter">
          CONNECTION
        </h1>
      </div>
      <div className="flex  font-['Space_Grotesk'] flex-col lg:flex-row gap-15 lg:gap-0">
        <div className="lg:p-13 flex flex-col gap-20">
          <div className="flex flex-col gap-10">
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
                ankitbasa113@gmail.com
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
                  className="outline-none"
                >
                  <div className="flex justify-between p-5 max-w-90 bg-[#171717a9]">
                    <span className="text-[0.9rem]">GITHUB</span>
                    <img src={codeLogo} className="h-6" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/ankitbasa976?igsh=YXliYm9lMGZxdnlm"
                  target="_blank"
                  className="outline-none"
                >
                  <div className="flex justify-between p-5 max-w-90 bg-[#171717a9]">
                    <span className="text-[0.9rem]">INSTAGRAM</span>
                    <img src={instaLogo} className="h-6" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="text-[#e5e5e5]  bg-[#171717] flex flex-col justify-center md:gap-3 font-['Space_Grotesk'] px-3 py-3 pr-15 lg:min-w-45 xl:w-80  lg:pr-0  md:py-5 xl:py-3 border-l-2 border-[#e9c349]">
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
        <div className=" lg:w-270 lg:p-10 flex flex-col gap-10">
          <div className="bg-[#141414] p-5 py-8 lg:py-15">
            <form className="flex flex-col  gap-8 lg:gap-10">
              <div className="flex justify-between flex-wrap gap-5">
                <div className="flex flex-col w-70 gap-3 ">
                  <label
                    htmlFor="nameInput"
                    className="text-[0.95rem] tracking-widest"
                  >
                    IDENTIFICATION
                  </label>
                  <input
                    type="text"
                    className="nameInput w-[90%] h-10 border-b border-[#6a6969] text-[0.9rem] outline-none"
                    placeholder="OPERATIVE NAME"
                  />
                </div>
                <div className="flex flex-col w-70 gap-3">
                  <label
                    htmlFor="communicationNode"
                    className="text-[0.95rem] tracking-widest"
                  >
                    COMMUNICATION NODE
                  </label>
                  <input
                    type="text"
                    className="communicationNode h-10 w-[90%] border-b border-[#6a6969] text-[0.9rem] outline-none"
                    placeholder="EMAIL ADDRESS"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="communicationNode"
                    className="text-[0.95rem] tracking-widest"
                  >
                    SUBJECT DIRECTIVE
                  </label>
                  <input
                    type="text"
                    className="communicationNode h-10 border-b border-[#6a6969] text-[0.9rem] outline-none"
                    placeholder="PROJECT CODENAME / INQUIRE TYPE"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="communicationNode"
                    className="text-[0.95rem] tracking-widest"
                  >
                    INTELLIGENCE DETAIL
                  </label>
                  <textarea
                    className=" communicationNode h-25 lg:h-32 w-full border-b border-[#6a6969] text-[0.9rem] outline-none pt-4 resize-none"
                    placeholder="MESSAGE BODY..."
                  />
                </div>
              </div>
              <span
                type="submit"
                className="flex h-13 max-w-65 bg-[#ffce2c] justify-center items-center text-[0.85rem] cursor-pointer text-black"
                onClick={handleSubmit}
              >
                INFILTRATE MY INBOX
              </span>
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
