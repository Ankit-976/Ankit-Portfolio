import {
  RiGithubFill,
  RiInstagramFill,
  RiFileCodeFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <div className="text-white bg-[#0e0e0e] font-['Space_Grotesk']  w-full">
      <div className="flex flex-col md:flex-row md:justify-around gap-3 items-center border-b border-[#393939da] py-10 md:py-5">
        <div className="flex font-['Inter'] gap-2 py-1  items-center">
          <span className="text-[#ababab] text-[1rem] block">©</span>
          <span className="text-[#ababab] flex text-[0.95rem] md:text-[0.65rem] lg:text-[0.95rem] flex-nowrap tracking-wider">
            2026 ANKIT BASA. ALL RIGHTS RESERVED.
          </span>
        </div>
        <div className=" justify-center hidden md:flex md:text-[0.8rem] lg:text-[1rem] items-center tracking-wider text-[#ababab] order-3 md:order-0">
          END OF TRANSMISSION.
        </div>
        <div className="flex md:hidden justify-center md:text-[0.8rem] lg:text-[1rem] items-center tracking-wider text-[#ababab] order-3 md:order-0">
          DO CHECK IN BIGGER SCREENS.
        </div>
        <div className="flex items-center order-2 md:order-0">
        <span className="text-[1.5rem] text-[#abababb5]">[</span>
          <a
            href="https://github.com/Ankit-976"
            target="_blank"
            className="w-fit"
          >
            <span className="px-3 hidden md:block py-1 border-r-[1.5px] text-[1rem] md:text-[0.9rem] lg:text-[1rem] font-semibold text-[#ababab] hover:text-[#e9c349] border-[#ababab6d]">
              GITHUB
            </span>
            <span className="px-3 md:hidden  block py-1 border-r-[1.5px] text-[1rem] font-semibold text-[#ababab] hover:text-[#e9c349] border-[#ababab6d]">
              <RiGithubFill />
            </span>
          </a>
          <a
            href="https://www.instagram.com/ankitbasa976?igsh=YXliYm9lMGZxdnlm"
            target="_blank"
            className="w-fit"
          >
            <span className="px-3 hidden md:block py-1 border-r-[1.5px] text-[1rem] md:text-[0.9rem] lg:text-[1rem]  font-semibold text-[#ababab] hover:text-[#e9c349] border-[#ababab6d]">
              INSTAGRAM
            </span>
            <span className="px-3 md:hidden  block py-1 border-r-[1.5px] text-[1rem] font-semibold text-[#ababab] hover:text-[#e9c349] border-[#ababab6d]">
              <RiInstagramFill />
            </span>
          </a>
          <a
            href="https://github.com/Ankit-976/Ankit-Portfolio"
            target="_blank"
            className="w-fit"
          >
            <span className="px-3 hidden md:block py-1 text-[1rem] font-semibold md:text-[0.9rem] lg:text-[1rem]  text-[#ababab] hover:text-[#e9c349] border-[#ababab6d]">
              SOURCE
            </span>
            <span className="px-3 md:hidden block py-1 text-[1rem] font-semibold text-[#ababab] hover:text-[#e9c349] border-[#ababab6d]">
              <RiFileCodeFill />
            </span>
          </a>
        <span className="text-[1.5rem] text-[#abababb5]">]</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
