import { Lobster } from "next/font/google";
import React from "react";
import Link from "next/link";
import { ArrowRightToLineIcon, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { projectCard } from "@/data";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

function Projects() {
  return (
    <section id="projects" className="my-28">
      <div className="container space-y-10">
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
                <div className="flex items-center justify-between">
                  <p>{card.pCode}</p>
                  <Link href={card.pLink} target="_blank">
                    <SquareArrowOutUpRight
                      size={20}
                      className="text-orange-500"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href={"/projects"}
          className="flex items-center justify-center border-2 border-orange-500 w-60 h-14 text-lg hover:bg-orange-500 hover:text-white duration-200 rounded mx-auto"
        >
          More
          <ArrowRightToLineIcon className="w-5 ml-4" />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
