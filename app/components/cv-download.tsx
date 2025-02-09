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
    : "border-[#FF0080] text-[#FF0080] hover:bg-[#FF0080] hover:text-white";

  return (
    <div className="relative w-40 mx-auto" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg border-2 ${buttonBaseClass} transition-all duration-300`}
      >
        <span className="flex items-center gap-2">
          <FaFileDownload />
          CV
        </span>
        <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white dark:bg-black rounded-lg shadow-lg border-2 border-inherit">
          <a
            href="/cv/cv-en.pdf"
            download
            className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ${buttonBaseClass}`}
            onClick={() => setIsOpen(false)}
          >
            <FaFileDownload />
            English
          </a>
          <a
            href="/cv/cv-tr.pdf"
            download
            className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ${buttonBaseClass}`}
            onClick={() => setIsOpen(false)}
          >
            <FaFileDownload />
            Türkçe
          </a>
        </div>
      )}
    </div>
  );
}; 