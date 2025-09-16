import React from "react";

function Statistics() {
  return (
    <div className="mt-12 mb-12 px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-4">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-[#999999] font-bold text-[28px] md:text-[22px] font-Noto">CARGA HORÁRIA</h2>
          <span className="text-[48px] md:text-[36px] font-Noto text-[#000000] font-light">1.500 horas</span>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-[#999999] font-bold text-[28px] md:text-[22px]">CONTEÚDO</h2>
          <div className="flex items-center gap-2">
            <span className="text-[48px] md:text-[36px] font-Noto text-[#000000] font-light">7 módulos</span>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-[#999999] font-bold text-[28px] md:text-[22px]">PERÍODO DE ACESSO</h2>
          <span className="text-[48px] md:text-[36px] font-Noto text-[#000000] font-light">15 meses</span>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-[#999999] font-bold text-[28px] md:text-[22px]">MODALIDADE</h2>
          <span className="text-[48px] md:text-[36px] font-Noto text-[#000000] font-light">EAD</span>
        </div>
      </div>
    </div>
  );
}

export default Statistics;