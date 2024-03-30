import React from "react";

function Banner() {
  return (
    <section className="flex flex-col items-center justify-center h-screen relative w-full">
      <div className="container text-white text-center space-y-2 ab">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Front-End Developer
        </h2>
        <p className="text-lg md:text-xl">
          I am Vamsi Vadlamudi. A passionate React Front-End Developer
          <br className="hidden sm:block" /> based in Vijayawada, AP, India.
        </p>
      </div>
    </section>
  );
}

export default Banner;
