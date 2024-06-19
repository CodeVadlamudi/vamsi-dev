import React from "react";
import Header from "./Header";
import Banner from "./Banner";

function Hero() {
  return (
    <div className="relative h-[100dvb] w-full">
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />
      <Header />
      <Banner />
    </div>
  );
}

export default Hero;
