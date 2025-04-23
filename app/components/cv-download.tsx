"use client";
import { useState, useRef, useEffect } from 'react';
import { FaFileDownload, FaChevronDown } from "react-icons/fa";
import { useTheme } from 'next-themes';

export const CVDownload = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  // Dropdown dışına tıklandığında menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const buttonBaseClass = theme === 'dark' 
    ? "border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black" 
    : "border-black text-black hover:bg-black hover:text-white";

  const dropdownMenuClass = theme === 'dark'
    ? "border-[#00FF41] bg-black bg-opacity-95"
    : "border-black bg-white bg-opacity-95";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg border-2 ${buttonBaseClass} transition-all duration-300`}
      >
        <span className="flex items-center">
          <FaFileDownload className="mr-2" />
          Download CV
        </span>
        <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className={`absolute w-full mt-2 overflow-hidden rounded-md border-2 shadow-lg dropdown-menu z-10 ${dropdownMenuClass}`}>
          <a 
            href="/path-to-english-cv.pdf" 
            download 
            className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ${buttonBaseClass}`}
            onClick={() => setIsOpen(false)}
          >
            <FaFileDownload /> English
          </a>
          <a 
            href="/path-to-turkish-cv.pdf" 
            download 
            className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ${buttonBaseClass}`}
            onClick={() => setIsOpen(false)}
          >
            <FaFileDownload /> Türkçe
          </a>
        </div>
      )}
    </div>
  );
}; 