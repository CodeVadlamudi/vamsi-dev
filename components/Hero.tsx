import React from "react";
import Header from "./Header";
import Banner from "./Banner";

function Hero() {
  return (
    <section className="relative h-screen w-full">
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />
      <div className="h-screen grid place-items-center">
        <div className="container text-white text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Front-End Developer
          </h2>
          <p className="text-lg md:text-xl">
            I am Vamsi Vadlamudi. A passionate React Front-End Developer
            <br className="hidden sm:block" /> based in Vijayawada, AP, India.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
