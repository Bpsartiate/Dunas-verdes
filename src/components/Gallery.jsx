import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Gallery = ({ t }) => {
  return (
    <section id="gallery" className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950 py-16">
      <h2 className="relative z-0 text-[10vw] font-black text-neutral-800 md:text-[120px] mb-8">
        {t.gallery_title}
        <span className="text-indigo-500">.</span>
      </h2>
      <Cards t={t} />
    </section>
  );
};

const Cards = ({ t }) => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/imgs/IMG_4632.JPG"
        alt={t.gallery_alt_dune_ocean}
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/IMG_4633.JPG"
        alt={t.gallery_alt_lever_soleil}
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/IMG_4634.JPG"
        alt={t.gallery_alt_sentier_sauvage}
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/IMG_4635.JPG"
        alt={t.gallery_alt_faune_locale}
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/IMG_4636.JPG"
        alt={t.gallery_alt_plage_preservee}
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="/imgs/IMG_4637.JPG"
        alt={t.gallery_alt_coucher_soleil}
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;
    els.forEach((el) => {
      let zIndex = parseInt(window.getComputedStyle(el).getPropertyValue("z-index"));
      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });
    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{ top, left, rotate, zIndex }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4 rounded-xl shadow-xl cursor-grab",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

export default Gallery;
