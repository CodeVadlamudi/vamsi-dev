"use client";

import { motion } from "framer-motion";
import { Lobster } from "next/font/google";
import Image from "next/image";
import React from "react";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center h-screen w-full"
    >
      <div className="container ">
        <div className="grid grid-cols-1 md:w-4/5 md:mx-auto lg:w-auto lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
            className="relative h-96 sm:h-[500px] w-full lg:w-full rounded overflow-hidden shadow-lg"
          >
            <Image
              src={"https://imgur.com/o01M34B.png"}
              alt="About Image"
              fill={true}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
            className="space-y-4"
          >
            <h2 className={`text-4xl text-orange-500 ${lobster.className}`}>
              About
            </h2>
            <p className="text-base sm:text-lg">
              Greetings, I am Vamsi Vadlamudi and a Junior Front-End Developer
              deeply committed to the art of creating captivating and highly
              responsive web experiences. My relentless motivation propels me to
              achieve excellence in my work. I embrace daily challenges as
              opportunities for growth, perpetually expanding my skill set to
              enhance the quality of my contributions. For instance, my
              exploration of React has enabled me to elevate our web pages, thus
              advancing my proficiency in development.
            </p>
            <p className="text-base sm:text-lg">
              I have been learning Angular, TypeScript, etc., which I use for my
              work. Hence, I am challenged to study a new course that will
              improve my skills and contribute to the growth of our company and
              its people.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
