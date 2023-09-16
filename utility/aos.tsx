"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust this value
      easing: "ease-in-sine", // Experiment with different easing functions
    });
  }, []);

  return null;
};
