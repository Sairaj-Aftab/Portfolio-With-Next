"use client";
import React from "react";
import Image from "next/image";
import personal from "../../public/sairaj2.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import deploy from "../../public/animation/deploy.json";
import ButtonEle from "./HelperCom/Button";
import { TypeAnimation } from "react-type-animation";
import { Element, Link } from "react-scroll";

type props = {
  firstTitle?: string;
  title?: string;
  desTitle?: string;
};

function SliderSection({ firstTitle, title, desTitle }: props) {
  return (
    <div id="Home">
      <div className="lg:h-[100vh] h-[100vh] flex flex-col-reverse gap-10 md:flex-row justify-center md:items-center slide">
        <div className="md:flex-1 flex flex-col items-center gap-3 py-5 sm:py-0">
          <h1 className="shadow_text lg:text-2xl text-xl font-semibold text-white">
            {firstTitle}
          </h1>
          <div className="text-black text-start"></div>
          {/* <h1 className="slide_head">{title}</h1> */}
          <h1 className="slide_head">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Hey!I'm", // initially rendered starting point
                1000,
                "Hey!I'm Sairaj Aftab",
                1000,
                "Hey!I'm a Developer",
                500,
              ]}
              speed={30}
              deletionSpeed={50}
              // style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </h1>
          <p className="lg:text-lg text-sm text-center font-semibold text-white italic px-2 lg:px-0">
            {desTitle}
          </p>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <ButtonEle text="Get in touch" />
          </Link>
        </div>
        <div className="md:flex-1 flex flex-col items-center justify-center text-center sm:block mt-5 sm:mt-0">
          <Image
            src={personal}
            alt="Sairaj Aftab"
            className="rounded-b-[42px] sm:rounded-b-[110px] slide_img w-[95%] h-auto sm:w-[80%] mx-auto"
          />
        </div>
      </div>
      <div className="top-0 bottom-0 left-0 right-0 -z-20 fixed flex flex-col items-center justify-center">
        <Player
          autoplay
          loop
          speed={2}
          src={deploy}
          // style={{ width: "100%", height: "100%" }}
          className="scale-125 md:scale-100 w-full h-full"
          background="#011627"
        ></Player>
      </div>
    </div>
  );
}

export default SliderSection;
