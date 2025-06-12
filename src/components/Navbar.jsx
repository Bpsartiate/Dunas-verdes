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
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
        {/* Sidebar Open Button (left) */}
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="flex items-center justify-center w-10 h-10 rounded-full  hover:bg-gray-100 transition md:mr-4"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Logo (center) */}
        <div className="flex-1 flex justify-center items-center">
          <button type="button" onClick={() => scrollToSection("hero")} className="font-bold text-xl bg-transparent focus:outline-none cursor-pointer">
            {translations[language].dunasVerdes}
          </button>
        </div>
        {/* Language Button (right) */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
            className="flex items-center space-x-2 px-2 py-2 hover:text-gray-400 transition focus:outline-none cursor-pointer"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-400">
              <FaGlobe className="text-xl" />
            </span>
            <span className="ml-2 select-none">{language}</span>
          </button>
        </div>
      </div>
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Sidebar background overlay */}
          <div className="fixed inset-0 bg-transparent bg-opacity-10" onClick={() => setSidebarOpen(false)} />
          {/* Sidebar content */}
          <div className="relative w-80 max-w-full h-full bg-white 500 shadow-lg z-50 flex flex-col p-6">
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl"
              aria-label="Close sidebar"
            >
              &times;
            </button>
            {/* Navigation Items */}
            <ul className="flex flex-col space-y-4 mt-10">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => { scrollToSection(item.id); setSidebarOpen(false); }}
                    className="w-full text-black text-left px-2 py-2 hover:text-indigo-500 bg-transparent focus:outline-none cursor-pointer text-lg"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            {/* Contact Button */}
            <button
              type="button"
              onClick={() => { scrollToSection("contact"); setSidebarOpen(false); }}
              className="mt-8 w-full px-4 py-2 rounded-full border border-indigo-500 text-indigo-500 font-semibold bg-transparent hover:bg-indigo-50 transition text-center"
            >
              {translations[language].contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// Add this to your global CSS or Tailwind config for fadeIn animation:
// @keyframes fadeIn { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: none; } }
// .animate-fadeIn { animation: fadeIn 0.2s ease; }