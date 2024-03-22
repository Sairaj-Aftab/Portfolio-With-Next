"use client";
import React from "react";
import Image from "next/image";
import personal from "../../public/sairaj2.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import deploy from "../../public/animation/deploy.json";
import ButtonEle from "./HelperCom/Button";
import { TypeAnimation } from "react-type-animation";
import { Element, Link } from "react-scroll";
import linkedin from "../../public/linkedin.png";
import github from "../../public/github.png";
import twitter from "../../public/twitter.png";
import facebook from "../../public/facebook.png";
import { motion, useScroll, useTransform } from "framer-motion";

type props = {
  firstTitle?: string;
  title?: string;
  desTitle?: string;
};

function SliderSection({ firstTitle, title, desTitle }: props) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [0, 1]);

  return (
    <div
      id="Home"
      className="lg:h-[100vh] h-[100vh] flex flex-col justify-center"
    >
      <div className="flex flex-col-reverse gap-6 sm:gap-10 md:flex-row justify-center md:items-center slide">
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
                "Hey!I'm a Full-Stack Developer",
                500,
              ]}
              speed={30}
              deletionSpeed={50}
              // style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </h1>
          <p
            style={{
              textShadow:
                "3px 0px 7px rgba(81,67,21,0.8), -3px 0px 7px rgba(81,67,21,0.8), 0px 4px 7px rgba(81,67,21,0.8)",
            }}
            className="lg:text-lg text-sm text-center font-semibold text-white italic px-2 lg:px-0"
          >
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
            src={personal ? personal : ""}
            alt="Sairaj Aftab"
            className="rounded-b-[42px] sm:rounded-b-[110px] slide_img w-[95%] h-auto sm:w-[80%] mx-auto"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <motion.ul
          className="flex gap-5"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {[0].map((index) => (
            <>
              {/* <motion.li key={index} className="item" variants={item} /> */}
              <motion.li
                key={index}
                variants={item}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -360,
                }}
              >
                <a href="https://github.com/Sairaj-Aftab" target="_blank">
                  <Image src={github} alt="" className="w-10" />
                </a>
              </motion.li>
              <motion.li
                key={index}
                variants={item}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -360,
                }}
              >
                <a
                  href="https://www.linkedin.com/in/sairaj-aftab-8808ba1b5/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="" className="w-10" />
                </a>
              </motion.li>
              <motion.li
                key={index}
                variants={item}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -360,
                }}
              >
                <a href="https://twitter.com/SairajAftab" target="_blank">
                  <Image src={twitter} alt="" className="w-10" />
                </a>
              </motion.li>
              <motion.li
                key={index}
                variants={item}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -360,
                }}
              >
                <a
                  href="https://web.facebook.com/sjsairaj.sairaj"
                  target="_blank"
                >
                  <Image src={facebook} alt="" className="w-10" />
                </a>
              </motion.li>
            </>
          ))}
        </motion.ul>
      </div>
      <motion.div
        className="top-0 bottom-0 left-0 right-0 -z-20 fixed hidden sm:flex flex-col items-center justify-center"
        style={{
          scale,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.9,
        }}
      >
        <Player
          autoplay
          loop
          speed={2}
          src={deploy}
          // style={{ width: "100%", height: "100%" }}
          className="scale-125 md:scale-100 w-full h-full"
          background="#011627"
        ></Player>
      </motion.div>
    </div>
  );
}

export default SliderSection;
