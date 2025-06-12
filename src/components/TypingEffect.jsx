"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export function TypingEffect({ text = "Typing Effect" }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <p
      ref={ref}
      className="max-w-xl text-center md:text-left text-white text-base md:text-xl ml-0 md:mt-0 mt-0"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.04 }}
        >
          {letter}
        </motion.span>
      ))}
    </p>
  );
}
