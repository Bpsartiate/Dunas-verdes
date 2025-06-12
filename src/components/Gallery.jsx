import React, { useEffect, useRef, useState } from "react";
  import { motion } from "framer-motion";
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
      <section id="gallery" className="w-full px-8 py-30 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
            {t.gallery_subtitle || "Better every day"}
          </span>
          <h3 className="text-4xl md:text-6xl font-semibold">
            {t.gallery_title || "Let's change it up a bit"}
          </h3>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
            {t.gallery_desc ||
              "Discover the beauty of our reserve through a dynamic gallery of moments and landscapes."}
          </p>
          {/* Optional: Add a button or call-to-action here if needed */}
        </div>
        <ShuffleGrid t={t} visible={visible} />
      </section>
    );
  };

  const shuffle = (array) => {
    let arr = array.slice();
    let currentIndex = arr.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  };

  const ShuffleGrid = ({ t, visible }) => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState([]);

    // Use galleryData for images
    const generateSquares = () => {
      return galleryData.slice(0, 16).map((img, idx) => (
        <motion.div
          key={img.src + idx}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full rounded-lg shadow overflow-hidden"
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label={t[img.altKey] || img.altKey}
        />
      ));
    };

    useEffect(() => {
      if (!visible) return;
      const shuffleSquares = () => {
        setSquares(generateSquares());
        timeoutRef.current = setTimeout(shuffleSquares, 3000);
      };
      shuffleSquares();
      return () => clearTimeout(timeoutRef.current);
    }, [visible]);

    return (
      <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
        {visible && squares.map((sq) => sq)}
      </div>
    );
  };

  export default Gallery;
