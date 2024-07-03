import { Lobster } from "next/font/google";
import React from "react";
import Image from "next/image";
import { projectCard } from "@/data";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

function page() {
  return (
    <section className="flow-root">
      <div className="container my-24">
        <h2
          className={`text-4xl text-orange-500 border-b w-1/2 mx-auto text-center pb-5 border-orange-500/30 ${lobster.className}`}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5">
          {projectCard.map((card) => (
            <div
              key={card.id}
              className="border rounded overflow-hidden shadow-md cursor-pointer hover:shadow-xl duration-200"
            >
              <div className="relative h-60 sm:h-72 md:h-60 w-full">
                <Image
                  src={card.pImg}
                  alt={card.pAlt}
                  fill={true}
                  className="w-full h-full"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{card.pTitle}</h3>
                <p>{card.pCode}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
