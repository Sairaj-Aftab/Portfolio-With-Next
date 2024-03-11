import Image from "next/image";
import React from "react";
import Link from "next/link";

type props = {
  banner: any;
  title: string;
  tools: string[];
  liveLink: string;
};

function ProjectCard({ banner, title, tools, liveLink }: props) {
  return (
    <div>
      <div className="bg_card rounded-xl">
        <Image
          src={banner}
          alt="Project"
          sizes="100vw"
          className="rounded-t-lg h-[455px] object-cover object-top"
        />
        <div className="p-2">
          <h1 className="text-lg font-semibold text-white">{title}</h1>
          <div className="flex gap-1 flex-wrap my-2">
            {tools &&
              tools.map((data, index) => (
                <span
                  key={index}
                  className="bg-slate-800 py-1 px-2 rounded-md inline-block"
                >
                  {data}
                </span>
              ))}
          </div>
          <a
            href={liveLink}
            target="_blank"
            className="bg-[var(--primary-color)] rounded-md py-1 px-2 text-sm font-semibold text-white"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
