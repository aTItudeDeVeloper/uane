import React, { useState, useRef } from "react";

function WhatYouWillLearn() {
  const [openIndex, setOpenIndex] = useState(null);
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null),  useRef(null),  useRef(null),  useRef(null)];
  
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const accordions = [
      {
        title: "Módulo 1 - Secretaria escolar",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
      },
      {
        title: "Módulo 2 - Redação oficial e informática",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
      },
      {
        title: "Módulo 3 - Estatística básica e indicadores educacionais",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
      },
      {
        title: "Módulo 4 - Planejamento, gestão e legislação educacional",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
      },
      {
        title: "Módulo 5 - Funcionamento e organização da secretaria escolar",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
      },
      {
        title: "Módulo 6 - Legislação educacional",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
      },
      {
        title: "Módulo 7 - Estágio supervisionado",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
      },
    ];
  
    return (
      <div className="container mx-auto px-6 md:px-8 py-6 relative">
        <h2 className="text-[32px] md:text-[28px] sm:text-[24px] max-[470px]:text-[22px] max-[375px]:text-[20px]  max-[320px]:text-[18px] font-bold mb-6 font-Noto">O que você vai aprender</h2>
  
        {accordions.map((accordion, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border border-gray-300 rounded-md mb-4 overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 font-bold text-left bg-gray-100 hover:bg-gray-200 transition"
              >
                <span
                className={`font-Noto ${
                  isOpen ? "text-black" : "text-[#1F6482]"
                }`}
              >
                {accordion.title}
              </span>
                <span
                  className={`transform transition-transform duration-300 bg-white text-[#138E98] shadow rounded-full p-3 hover:bg-gray-100 flex items-center justify-center ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ⬇️
                </span>
              </button>
  
              <div
                ref={refs[index]}
                style={{
                  maxHeight: isOpen ? `${refs[index].current.scrollHeight}px` : "0px",
                }}
                className="transition-max-height duration-300 ease-in-out overflow-hidden"
              >
                <ul className="p-4 text-gray-700 list-disc pl-5 space-y-2">
                  {accordion.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

export default WhatYouWillLearn;