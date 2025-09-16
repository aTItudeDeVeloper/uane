import React from 'react';
import uaneLogo from '../assets/uane-logo.png';
import { Facebook, Instagram, Youtube } from "lucide-react";

import whatsapp from '../assets/whatsapp.png';

function Footer() {
  return (
    <footer className="bg-[#DFDFDF] text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Logo */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 justify-center md:justify-start">
            <img src={uaneLogo} alt="Universidade Aberta do Nordeste" className="h-[60px] sm:h-[65px] md:h-[75px]" />
          </div>

          {/* Informações */}
          <div>
            <h5 className="font-semibold mb-4 text-[18px] sm:text-[20px] md:text-[20px] font-Noto text-[#555555]">Informações</h5>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="https://fdr.org.br/uane/perguntas-frequentes/"
                target='_blank'
                className="block text-[#138E98] font-Noto font-normal text-[14px] sm:text-[16px]"
              >
                Perguntas Frequentes
              </a>
              <a
                href="https://fdr.org.br/uane/politica-de-privacidade/"
                target='_blank'
                className="block text-[#138E98] font-Noto font-normal text-[14px] sm:text-[16px]"
              >
                Política de Privacidade
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-semibold mb-4 text-[18px] sm:text-[20px] font-Noto text-[#555555]">Fale conosco</h5>
            <a
              href="https://wa.me/558591231327"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center md:justify-start"
            >
              <img src={whatsapp} alt="WhatsApp" aria-label="WhatsApp" className="w-5 h-5" />
              <span className="text-[#138E98] font-Noto font-bold text-[16px] sm:text-[20px]">
                (85) 91231-327
              </span>
            </a>
          </div>

          {/* Redes sociais */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-semibold mb-4 text-[18px] sm:text-[20px] font-Noto text-[#555555]">Nos acompanhe nas redes sociais</h5>
            <div className="flex justify-center md:justify-start gap-3">
              <a href="https://www.facebook.com/fundacaodemocritorocha/" aria-label="Facebook" target='_blank' className="bg-[#138E98] w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Facebook size={16} className="text-white" />
              </a>
              <a href="https://www.instagram.com/fundacaodemocritorocha/" aria-label="Instagram" target='_blank' className="bg-[#138E98] w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Instagram size={16} className="text-white" />
              </a>
              <a href="https://www.youtube.com/@CanalFDR-oficial" aria-label="Youtube" target='_blank' className="bg-[#138E98] w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Youtube size={16} className="text-white" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
