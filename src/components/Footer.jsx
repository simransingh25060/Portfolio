import React from "react";
import Button from "./Button";
import { socialMedia } from "../constants";
import { profilePic } from "../assets";
import { layout } from "../style";
import { AiOutlineFilePdf } from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
      <div
        className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4`}
      >
        {/* Left Section */}
        <div className={layout.sectionInfo}>
          <h2 className="text-xl font-bold text-white font-poppins hover:text-gray-300">
            Let's Connect
          </h2>

          {/* Social Media Links */}
          <div className="flex flex-row mt-4">
            {socialMedia.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={social.id}
                className="text-white mr-5 text-[25px] hover:text-teal-200"
              >
                {React.createElement(social.icon)}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="grid grid-cols-2">
            <a
              href="/Simran_Res.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                styles="mt-10 mr-3 inline-flex items-center justify-center"
                text="Resume"
                icon={AiOutlineFilePdf}
              />
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="md:ml-auto mt-10 md:mt-0">
          <img
            src={profilePic}
            alt="Simran Singh"
            className="w-[200px] h-[200px] border-2 border-teal-200 relative z-[5] rounded-full"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
        <p>Simran Singh © 2026</p>
      </div>
    </footer>
  );
};

export default Footer;