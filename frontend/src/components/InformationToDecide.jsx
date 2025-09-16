import React, { useState, useRef } from "react";

function InformationToDecide() {
 
  const [openIndex, setOpenIndex] = useState(null);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordions = [
    {
      title: "Competências que você vai desenvolver",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      title: "Pra quem se destina",
      content: [
        "Esse curso é para você, que já concluiu ou está concluindo o ensino médio e quer se capacitar para entrar no mercado de trabalho. É gestor escolar e quer ampliar os seus conhecimentos a respeito dos processos realizados na secretaria escolar. Que deseja ter uma formação técnica para estar preparado(a) para realizar concurso público e atuar em escolas públicas ou privadas.",
      ],
    },
    {
      title: "Quando será o pagamento da primeira mensalidade e a data de início do curso?",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      title: "Quais são as condições de pagamento e quais os descontos oferecidos?",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-8 py-6 relative">
        <h2 className="text-[32px] md:text-[28px] sm:text-[24px] max-[470px]:text-[22px] max-[375px]:text-[20px]  max-[320px]:text-[18px] font-bold mb-6 font-Noto">
           ↕️ Informações para decidir
        </h2>

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
                  isOpen ? "text-black font-bold text-[18px]" : "text-[#1F6482] font-bold text-[18px]"
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
                <ul className="p-4 pl-5 space-y-2 font-Noto text-[16px] text-[#1E1E1E] font-light">
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


export default InformationToDecide;