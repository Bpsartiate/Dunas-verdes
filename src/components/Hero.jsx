import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { TypingEffect } from "./TypingEffect";
import { cn } from "../cn";

const LettersPullUp = ({ text, className = "" }) => {
  const splittedText = text.split("");
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-wrap justify-center md:justify-start">
      {splittedText.map((current, i) => (
        <motion.span
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter ${className}`}
        >
          {current === " " ? "\u00A0" : current}
        </motion.span>
      ))}
    </div>
  );
};

const Hero = ({ language, t, onBookClick }) => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-white bg-opacity-80 font-['Playfair_Display']">
      <div className="container px-4 sm:px-6 md:pl-[50px] py-16 pt-24 md:pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-0">
          {/* Titles on the left */}
          <div className="flex-1 w-full text-center md:text-left mb-6 md:mb-0">
            <span className="text-3xl sm:text-4xl md:text-6xl  tracking-tighter">
              {t.hero_explore || "Explore live the experience,"}
            </span>
            <LettersPullUp text={t.hero_title || "Reserva Dunas Verdes"} className="font-bold md:text-7xl" />
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 mt-2">
              <span className="text-3xl sm:text-4xl md:text-6xl tracking-tighter">
                {t.hero_where || "Where the"}
              </span>
              <LettersPullUp text={t.hero_wild || " wild meets refined."} className="font-bold md:text-7xl" />
            </div>
          </div>
          {/* Social icons on the right */}
          {/* <ul className="social-list flex flex-row md:flex-col p-1 gap-4 md:mt-8 md:ml-8 justify-center">
            <li>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                <BsTwitterX />
              </a>
            </li>
          </ul> */}
        </div>
        {/* button and description */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-start mt-8 md:pt-10 pt-6 gap-4 md:gap-8 w-full">
          <div className="relative overflow-hidden rounded-full dark:bg-zinc-900 bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-0.5">
            <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />
            <button
              className={cn(
                "h-10 px-2 rounded-full font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900 flex items-center gap-2 transition-all duration-300",
                "hero-slide-btn"
              )}
              onClick={onBookClick}
            >
              <span className="hero-slide-icon">
                <FiArrowUpRight className="hero-slide-icon-rotate" />
              </span>
              <span className="hero-slide-text">{t.hero_book || "Book Your Stay"}</span>
            </button>
          </div>
          <TypingEffect text={t.hero_subtitle || "Between the dunes and turquoise waters of Mozambique, Dunas Verdes is a unique vision."} />
        </div>
      </div>
    </section>
  );
};

export default Hero;