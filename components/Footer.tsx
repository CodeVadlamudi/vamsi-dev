import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="bg-zinc-800 py-5">
      <div className="container flex items-center justify-between flex-col sm:flex-row">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 overflow-hidden rounded">
            <Image
              src="https://imgur.com/wCDfO5O.png"
              alt="Avatar Image"
              fill={true}
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-white text-lg">Created by Vamsi Vadlamudi</p>
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
