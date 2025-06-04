import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import galleryData from "./gallery.json";

const Gallery = ({ t }) => {
  const [visible, setVisible] = useState(true);

  // Hide images when user scrolls past the gallery section
  React.useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("gallery");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // Hide images if the section is scrolled out of view (bottom above viewport)
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="gallery" className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950 py-16">
      <h2 className="relative z-0 text-[10vw] font-black text-neutral-800 md:text-[120px] mb-8">
        {t.gallery_title}
        <span className="text-indigo-500">.</span>
      </h2>
      <Cards t={t} visible={visible} />
    </section>
  );
};

const Cards = ({ t, visible }) => {
  const containerRef = useRef(null);
  return (
    <div
      className="absolute inset-0 z-10 pointer-events-none"
      ref={containerRef}
      style={{ height: '100%', minHeight: 0 }}
    >
      {visible && galleryData.map((img, idx) => (
        <Card
          key={img.src + idx}
          containerRef={containerRef}
          src={img.src}
          alt={t[img.altKey]}
          rotate={img.rotate}
          top={img.top}
          left={img.left}
          className={img.className + ' pointer-events-auto !m-0'}
        />
      ))}
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
