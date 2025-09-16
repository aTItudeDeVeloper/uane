import React, { useState } from 'react';
import { PiUserCircleFill } from "react-icons/pi";
import logo from '../assets/logo-UANE.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#1F6482] text-white relative">
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center h-16">
      
        <div className="flex items-center">
          <img src={logo} alt="UANE Cursos" className="w-[75px] h-[24px]" />
        </div>

        <ul className="hidden lg:flex gap-4 items-center">
          <li><a href="#" className="text-[12px] font-bold text-white font-Noto">CURSOS</a></li>
          <li><a href="#" className="text-[12px] font-bold text-white font-Noto">PROFESSORES</a></li>
          <li><a href="#" className="text-[12px] font-bold text-white font-Noto">SOBRE A UANE</a></li>
          <li><a href="#" className="text-[12px] font-bold text-white font-Noto">PARCERIAS</a></li>
          <li>
             <a href="#" className="flex items-center gap-1 text-[12px] font-bold font-Noto">
               <PiUserCircleFill className="text-xl" />
               PORTAL DO ALUNO
             </a>
           </li>
        </ul>

        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white hover:text-gray-200 transition-colors p-2"
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

   
      <div className={`lg:hidden absolute top-16 left-0 right-0 bg-[#1F6482] border-t border-[#2a7a9a] transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="container mx-auto px-6">
          <ul className="py-4 space-y-4">
            <li>
              <a 
                href="#" 
                onClick={closeMenu}
                className="block text-[14px] font-bold font-Noto hover:text-gray-200 transition-colors py-2"
              >
                CURSOS
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={closeMenu}
                className="block text-[14px] font-bold font-Noto hover:text-gray-200 transition-colors py-2"
              >
                PROFESSORES
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={closeMenu}
                className="block text-[14px] font-bold font-Noto hover:text-gray-200 transition-colors py-2"
              >
                SOBRE A UANE
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={closeMenu}
                className="block text-[14px] font-bold font-Noto hover:text-gray-200 transition-colors py-2"
              >
                PARCERIAS
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#" className="flex items-center gap-1 text-[12px] font-bold font-Noto">
               <PiUserCircleFill className="text-xl" />
               PORTAL DO ALUNO
             </a>
            </li>
          </ul>
        </div>
      </div>

      
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[-1]"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;