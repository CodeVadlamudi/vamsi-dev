"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCard } from "./SkillCard";
import Image from "next/image";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

function Skills() {
  return (
    <section
      id="skill"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('https://imgur.com/erdEgmx.png')",
        height: "100vh",
      }}
      className="bg-no-repeat bg-center bg-cover bg-fixed flex items-center justify-center w-full"
    >
      <div className="container space-y-10">
        <h2
          className={`text-4xl text-white text-center border-b w-1/2 mx-auto pb-5 border-white/30 ${lobster.className}`}
        >
          Skills
        </h2>
        <div className="flex items-center w-full gap-3 flex-wrap justify-center px-2">
          {skillCard.map((card, i) => (
            <motion.div
              initial={{
                opacity: 0,
                translateX: -50,
                translateY: -50,
              }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                translateY: 0,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
              }}
              viewport={{
                once: true,
              }}
              key={card.id}
              className={card.color}
            >
              <div className="relative w-full h-full rounded overflow-hidden">
                <Image
                  src={card.skillLink}
                  alt={card.skillAlt}
                  fill={true}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
