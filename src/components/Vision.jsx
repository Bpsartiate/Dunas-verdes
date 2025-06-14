import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import VisionButton from './VisionButton';

const StyledWrapper = ({ children }) => (
  <div className="mt-6">{children}</div>
);

const Vision = () => {
  return (
 <motion.section
      id="reserve"
      className="relative grid min-h-screen text-center w-full !m-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-full  max-w-1xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Card with image */}
        <div className="flex justify-start">
          <div className="bg-white shadow-lg overflow-hidden w-full max-w-xl">
            <img
              src="/imgs/dom3.JPG"
              alt="Vision Dunas Verdes"
              className="w-full h-130 object-cover"
            />
          </div>
        </div>
        {/* Text column */}
        <div className="flex p-20   flex-col justify-start items-start">
        <p className="text-bold-900 text-gray-600 pb-3 " >Reserva Dunas verdes visions & valeurs</p>
          <h2 className="text-2xl  font-['Playfair_Display'] md:text-3xl font-semibold mb-4 text-left">
            Préserver & Inspirer
          </h2>
          <p className="text-lg  font-['Playfair_Display'] md:text-xl mb-2 text-left">
            Dunas Verdes s'engage à préserver la beauté naturelle de la région
            tout en offrant une expérience unique et durable à ses visiteurs.
          </p>
          <p className="text-base  font-['Playfair_Display']     md:text-lg text-gray-600 text-left">
            Notre vision est de créer un équilibre harmonieux entre la nature, la
            communauté locale et le confort moderne, pour inspirer les générations
            futures à protéger ce patrimoine exceptionnel.
          </p>
          <StyledWrapper>
            <VisionButton />
          </StyledWrapper>
        </div>
      </div>
    </motion.section>
    );
};

export default Vision;
