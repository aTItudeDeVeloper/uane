import React from 'react';
import OpMais from '../assets/op-mais.png';

function Investment() {
  return (
    <section
      className="container mt-6 mx-auto px-4 sm:px-6 md:px-8 py-8 relative"
      id="courses"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-Noto text-center lg:text-left">
        💰 Investimento
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card Lote */}
        <div className="bg-[#04254E] text-white rounded-xl p-6 sm:p-8 flex items-center justify-center">
          <div className="text-center w-full">
            <p className="mb-2 font-Noto font-normal text-lg sm:text-xl md:text-2xl lg:text-[28px]">
              3º lote: Total de R$ 2.835,35
            </p>
            <p className="font-Noto font-normal text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-6">
              + Matrícula de R$ 70
            </p>

            <h3 className="mb-8 font-bold font-Noto text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
              Até 15X de R$ 189,02
            </h3>

            <button className="bg-[#138E98] hover:bg-[#0f7a84] text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg">
              Faça sua matrícula
            </button>
          </div>
        </div>

        {/* Card OPOVO+ */}
        <div className="bg-[#DFDFDF] rounded-xl p-6 sm:p-8 flex items-center justify-center">
          <div className="w-full text-center">
            <div className="mb-6 flex items-center justify-center">
              <img
                src={OpMais}
                alt="Op +"
                className="w-24 sm:w-28 md:w-32 lg:w-36"
              />
            </div>

            <h4 className="font-bold text-[#1E1E1E] text-lg sm:text-xl md:text-2xl lg:text-[24px] mb-4">
              Ganhe acesso grátis por 90 dias.
            </h4>

            <div className="text-[#1E1E1E] font-Noto text-sm sm:text-base md:text-lg lg:text-[16px] space-y-1 mb-6">
              <p>Reportagens & Colunistas;</p>
              <p>Filmes & Séries;</p>
              <p>Podcasts & Web Stories.</p>
            </div>

            <a
              className="text-[#1F6482] font-Noto font-semibold hover:underline transition-colors text-sm sm:text-base md:text-lg"
              href="#"
            >
              Conheça o OPOVO+
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Investment;