import React from "react";

import Image from "next/image";
import skills from "@/data/skills";

type props = {
  head_title: string;
};
function AboutSection({ head_title }: props) {
  return (
    <div id="About" className="py-5 relative bg-[#011627]">
      <div className="flex flex-col px-5">
        <div className="head_text_parent">
          <h1 className="head_text text-center">{head_title}</h1>
          <h1 className="head_text text-center">{head_title}</h1>
        </div>
        <div className="sm:flex gap-5 justify-between">
          <div className="flex-1">
            <div className="bg_card px-5 pt-5 text-justify h-full">
              <p className="text-justify text-slate-200 text-lg font-extralight leading-6">
                <p>
                  Hello! This is Sairaj Aftab, a passionate full stack web
                  developer with a flair for crafting seamless, user-centric
                  digital experiences. With a strong foundation in both
                  front-end and back-end technologies, I specialize in bringing
                  ideas to life through clean, efficient code.
                </p>
                <h5 className="my-2 text-lg font-semibold text-white">
                  My Approach
                </h5>
                <p>
                  I believe in the power of collaboration and continuous
                  learning. Every project I undertake is a chance to innovate,
                  learn, and grow. I thrive on understanding the unique goals of
                  each project and tailoring solutions that exceed expectations.
                </p>
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg_card px-5 pt-5 text-justify h-full">
              <p className="text-justify text-slate-200 text-lg font-extralight leading-6">
                <h5 className="text-lg font-semibold text-white">
                  What I Bring to the Table
                </h5>
                <p>
                  <span className="font-medium">Expertise:</span> Proficient in
                  a wide range of technologies and frameworks, ensuring
                  versatile and dynamic solutions. <br /> <br />
                  <span className="font-medium">Attention to Detail:</span>{" "}
                  Meticulous in crafting pixel-perfect designs and optimizing
                  code for top-notch performance. <br /> <br />
                  <span className="font-medium">Problem Solver:</span> Thrive on
                  tackling complex challenges and finding elegant, efficient
                  solutions. <br /> <br />
                  <span className="font-medium">Adaptability:</span> Stay
                  updated with the latest industry trends and technologies to
                  deliver cutting-edge solutions.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="bg_card pb-2">
          <h1 className="text-center text-2xl font-bold text-[#03a9f4] py-2">
            Skills
          </h1>
          <div className="flex gap-2 items-center justify-center flex-wrap">
            {skills.map((data, index) => (
              <div
                key={index}
                className="w-[90px] h-[90px] flex flex-col items-center justify-center border rounded-lg"
              >
                <Image src={data.img} alt={data.title} width={60} height={60} />
                <p className="text-base font-semibold">{data.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
