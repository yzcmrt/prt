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

  // Koyu tema için sınıflar
  const darkButtonClass = "border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black";
  
  // Açık tema için sınıflar
  const lightButtonClass = "border-black text-black hover:bg-black hover:text-white !important";

  // Tema değişimi için dinamik sınıflar
  const buttonBaseClass = theme === 'dark' ? darkButtonClass : lightButtonClass;
  
  // Dropdown menü sınıfları
  const dropdownMenuClass = theme === 'dark'
    ? "border-[#00FF41] bg-black bg-opacity-95"
    : "border-black bg-white bg-opacity-95";

  return (
    <div className="relative cv-download-container" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg border-2 ${buttonBaseClass} transition-all duration-300`}
        style={{ 
          '--hover-bg': theme === 'dark' ? '#00FF41' : '#000000',
          '--hover-text': theme === 'dark' ? '#000000' : '#FFFFFF'
        } as React.CSSProperties}
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
            href="/cv/cv-en.pdf" 
            download 
            className={`flex items-center gap-2 px-4 py-2 w-full transition-colors duration-200 ${
              theme === 'dark' ? 'text-[#00FF41]' : 'text-black'
            } ${
              theme === 'dark' 
                ? 'hover:bg-[#003B00] hover:text-white' 
                : 'hover:bg-black hover:text-white !important'
            }`}
            onClick={() => setIsOpen(false)}
            style={{ 
              '--hover-bg': theme === 'dark' ? '#003B00' : '#000000',
              '--hover-text': '#FFFFFF'
            } as React.CSSProperties}
          >
            <FaFileDownload /> English
          </a>
          <a 
            href="/cv/cv-tr.pdf" 
            download 
            className={`flex items-center gap-2 px-4 py-2 w-full transition-colors duration-200 ${
              theme === 'dark' ? 'text-[#00FF41]' : 'text-black'
            } ${
              theme === 'dark' 
                ? 'hover:bg-[#003B00] hover:text-white' 
                : 'hover:bg-black hover:text-white !important'
            }`}
            onClick={() => setIsOpen(false)}
            style={{ 
              '--hover-bg': theme === 'dark' ? '#003B00' : '#000000',
              '--hover-text': '#FFFFFF'
            } as React.CSSProperties}
          >
            <FaFileDownload /> Türkçe
          </a>
        </div>
      )}
    </div>
  );
}; 