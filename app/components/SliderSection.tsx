"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import personal from "../../public/sairaj2.png";

type props = {
  firstTitle?: string;
  title?: string;
  desTitle?: string;
};

function SliderSection({ firstTitle, title, desTitle }: props) {
  return (
    <div>
      <div className="lg:h-[100vh] sm:flex sm:flex-row flex flex-col-reverse justify-around items-center slide">
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -600 }}
          transition={{
            // duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
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
        </motion.div>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 600 }}
          transition={{
            // duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="flex-1 flex flex-col items-center justify-center text-center sm:block mt-5 sm:mt-0"
        >
          <Image
            src={personal}
            alt="Sairaj Aftab"
            className="rounded-b-[42px] sm:rounded-b-[110px] slide_img  w-[80%] mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default SliderSection;
