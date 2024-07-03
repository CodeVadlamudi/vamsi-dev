import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="bg-zinc-800 py-5">
      <div className="container flex items-center justify-between flex-col md:flex-row">
        <div className="text-white text-lg text-center flex flex-col md:flex-row items-center space-x-2">
          <p>&copy; Copyright 2024.</p>
          <span>Developed by Vamsi Vadlamudi</span>
        </div>
        <div>
          <SocialIcon
            url="https://github.com/CodeVadlamudi"
            bgColor="transparent"
            fgColor="white"
            target="_blank"
          />
          <SocialIcon
            url="https://www.youtube.com/@vadlamudivamsi2923"
            bgColor="transparent"
            fgColor="white"
            target="_blank"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
