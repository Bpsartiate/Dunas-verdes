import React, { useState, useEffect } from "react";
import { FaGlobe, FaChevronDown, FaChevronUp } from "react-icons/fa";
import fr from "../fr.json";
import en from "../en.json";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const translations = { EN: en,FR: fr };

const Navbar = ({ onBookClick, language, setLanguage, translations }) => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [villasDropdown, setVillasDropdown] = useState(false);
  const navItems = translations[language].navItems;

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-10 transition-colors duration-500 ease-in-out ${
      scroll ? "bg-white/80 shadow-md text-gray-900 backdrop-blur-md" : "bg-white/0 text-white"
    }`}>
      <div className="container mx-auto flex justify-between items-center max-w-7xl px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <button type="button" onClick={() => scrollToSection("hero")} className="py-2 pl-[50px] font-bold text-xl bg-transparent focus:outline-none cursor-pointer">
            {translations[language].dunasVerdes}
          </button>
        </div>

        {/* Menu centré */}
        <ul className="hidden md:flex space-x-6 justify-center flex-1">
          {navItems.map((item) => {
            
            return (
              <li key={item.id}>
                <button type="button" onClick={() => scrollToSection(item.id)} className="hover:text-gray-400 bg-transparent focus:outline-none cursor-pointer">
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Icône Globe pour changement de langue */}
       {/* Desktop-only Language and Contact buttons */}
<div className=" md:flex items-center space-x-2">
  <button
    type="button"
    onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
FR className="flex items-center space-x-2 px-2 py-2 hover:text-gray-400 transition focus:outline-none cursor-pointer"
  >
    <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-400">
      <FaGlobe className="text-xl" />
    </span>
    <span className="ml-2 select-none">{language}</span>
  </button>
  <button
    type="button"
    onClick={() => { scrollToSection("contact"); setMenuOpen(false); }}
    className="hidden md:flex px-4 bg-white-900 py-2 rounded-full border border-black text-black font-semibold  hover:bg-black/10 transition text-center"
  >
    {translations[language].contact}
  </button>
</div>
        {/* Menu Mobile */}
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden cursor-pointer">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white md:hidden flex flex-col items-center space-y-4 py-1">
          {navItems.map((item) => {
            if (item.label === translations[language].villas) {
              return (
                <div key={item.id} className="w-full flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setVillasDropdown((open) => !open)}
                    className="px-2 py-2 hover:text-gray-400 bg-transparent w-full text-center cursor-pointer"
                  >
                    {translations[language].villas}
                  </button>
                  {villasDropdown && (
                    <div className="flex flex-col w-full bg-gray-800 rounded-b">
                      <button type="button" onClick={() => { scrollToSection("FAQ"); setVillasDropdown(false); setMenuOpen(false); }} className="px-4 py-2 hover:bg-gray-700 text-left cursor-pointer">{translations[language].faq}</button>
                      <button type="button" onClick={() => { scrollToSection("Activities"); setVillasDropdown(false); setMenuOpen(false); }} className="px-4 py-2 hover:bg-gray-700 text-left cursor-pointer">{translations[language].galerie}</button>
                      <button type="button" onClick={() => { scrollToSection("Review"); setVillasDropdown(false); setMenuOpen(false); }} className="px-4 py-2 hover:bg-gray-700 text-left cursor-pointer">{translations[language].reviewer}</button>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => { scrollToSection(item.id); setMenuOpen(false); }}
                className="px-2 py-2 hover:text-gray-400 bg-transparent w-full text-center cursor-pointer"
              >
                {item.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setLanguage(language === "FR" ? "EN" : "FR")}
            className="flex items-center space-x-2 px-4 py-2 rounded-md hover:text-gray-400 transition cursor-pointer"
          >
            <FaGlobe className="text-xl" />
            <span>{language}</span>
          </button>
          <button
            type="button"
            onClick={() => { scrollToSection("contact"); setMenuOpen(false); }}
            className="w-full px-4 py-2 rounded-full border border-white text-white font-semibold bg-transparent hover:bg-white/10 transition text-center"
          >
            {translations[language].contact}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// Add this to your global CSS or Tailwind config for fadeIn animation:
// @keyframes fadeIn { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: none; } }
// .animate-fadeIn { animation: fadeIn 0.2s ease; }