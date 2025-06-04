import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../cn";
import carouselData from "./carouselData.json";
import { useWindowSize } from "./useWindowSize";

const Reserve = ({ t }) => {
  const [idx, setIdx] = useState(0);
  const { width } = useWindowSize ? useWindowSize() : { width: 1200 };
  const isMobile = width <= 768;
  const next = () => setIdx((i) => (i + 1) % carouselData.length);
  const prev = () => setIdx((i) => (i - 1 + carouselData.length) % carouselData.length);
  const tData = carouselData[idx];

  return (
    <motion.section
      id="reserve"
      className="relative grid min-h-screen text-center w-full bg-neutral-950 !m-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 pt-15 lg:flex lg:items-center">
          <div className="lg:w-1/2 lg:mx-6 w-full flex justify-center items-center relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={tData.img}
                className="object-cover object-center w-full h-96 rounded-lg lg:h-[30rem] lg:w-full"
                src={tData.img}
                alt={tData.title || tData.quote || "carousel image"}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
            {isMobile && (
              <>
                <div className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg p-4 z-10">
                  <motion.h1
                    key={tData.titre || tData.title || tData.quote}
                    className="text-lg font-semibold text-white mb-2 drop-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {t[tData.titre] || tData.titre || tData.title || tData.quote}
                  </motion.h1>
                  <motion.p
                    key={tData.desc || tData.text}
                    className="text-sm text-white mb-2 drop-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {t[tData.desc] || tData.desc || tData.text}
                  </motion.p>
                </div>
                <button
                  title="left arrow"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-800 transition-colors duration-300 border rounded-full bg-white/5 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  title="right arrow"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-800 transition-colors duration-300 border rounded-full bg-white/10 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
          {!isMobile && (
            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 flex flex-col items-center lg:items-start">
              <p className="text-5xl font-semibold text-blue-500 ">“</p>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={tData.titre || tData.title || tData.quote}
                  className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {t[tData.titre] || tData.titre || tData.title || tData.quote}
                </motion.h1>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={tData.desc || tData.text}
                  className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 "
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  “ {t[tData.desc] || tData.desc || tData.text} ”
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={tData.author || tData.title}
                  className="mt-6 text-lg font-medium text-blue-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {tData.author || ""}
                </motion.h3>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={tData.role || tData.title}
                  className="text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {tData.role || ""}
                </motion.p>
              </AnimatePresence>
              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button
                  title="left arrow"
                  onClick={prev}
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  title="right arrow"
                  onClick={next}
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Reserve;
