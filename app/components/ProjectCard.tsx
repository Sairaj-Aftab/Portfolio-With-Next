import Image from "next/image";
import React from "react";
import img from "@/public/project.png";
import Link from "next/link";

function ProjectCard() {
  return (
    <div>
      <div className="bg_card rounded-xl">
        <Image src={img} alt="Project" className="rounded-t-lg" />
        <div className="p-2">
          <h1 className="text-lg font-semibold text-white">
            Video uploadiing full-stack YouTube clone
          </h1>
          <div className="flex gap-1 flex-wrap my-2">
            <span className="bg-slate-800 py-1 px-2 rounded-md inline-block">
              react js
            </span>
            <span className="bg-slate-800 py-1 px-2 rounded-md inline-block">
              react js
            </span>
            <span className="bg-slate-800 py-1 px-2 rounded-md inline-block">
              react js
            </span>
            <span className="bg-slate-800 py-1 px-2 rounded-md inline-block">
              react js
            </span>
            <span className="bg-slate-800 py-1 px-2 rounded-md inline-block">
              react js
            </span>
            <span className="bg-slate-800 py-1 px-2 rounded-md inline-block">
              react js
            </span>
            <span className="bg-slate-800 py-1 px-2 rounded-md inline-block">
              react js
            </span>
          </div>
          <Link
            href="/"
            className="bg-[var(--primary-color)] rounded-md py-1 px-2 text-sm font-semibold text-white"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
