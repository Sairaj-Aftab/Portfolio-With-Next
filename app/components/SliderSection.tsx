"use client";
import React from "react";
import Image from "next/image";
import personal from "../../public/sairaj2.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import deploy from "../../public/animation/deploy.json";

type props = {
  firstTitle?: string;
  title?: string;
  desTitle?: string;
};

function SliderSection({ firstTitle, title, desTitle }: props) {
  return (
    <div>
      <div className="lg:h-[100vh] sm:flex sm:flex-row flex flex-col-reverse justify-around items-center slide">
        <div
          data-aos="fade-right"
          className="flex-1 flex flex-col items-center gap-3 py-5 sm:py-0"
        >
          <h1 className="shadow_text lg:text-2xl text-xl font-semibold text-white">
            {firstTitle}
          </h1>
          <h1 className="slide_head">{title}</h1>
          <p className="lg:text-lg text-sm text-center font-semibold text-white italic px-2 lg:px-0">
            {desTitle}
          </p>
          <button className="btn text-lg font-semibold flex gap-1">
            <span>Get in touch</span>
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="flex-1 flex flex-col items-center justify-center text-center sm:block mt-5 sm:mt-0"
        >
          <Image
            src={personal}
            alt="Sairaj Aftab"
            className="rounded-b-[42px] sm:rounded-b-[110px] slide_img w-[95%] sm:w-[80%] mx-auto"
          />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="top-0 bottom-0 left-0 right-0 -z-20 fixed flex flex-col items-center justify-center"
      >
        <Player
          autoplay
          loop
          speed={2}
          src={deploy}
          // style={{ width: "100%", height: "100%" }}
          className="scale-125 md:scale-100 lg:w-full lg:h-full"
          background="#011627"
        ></Player>
      </div>
    </div>
  );
}

export default SliderSection;
