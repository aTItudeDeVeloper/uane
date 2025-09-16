import React from 'react';
import marca from '../assets/marcas.png';
import fotoCurso from '../assets/foto-curso.png';

function Banner() {
  return (
    <section className="bg-[#17254D] text-white">
      <div className="container mx-auto px-6 md:px-8 py-12 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 justify-between">
          <div className="flex-1 lg:max-w-2xl">
            <div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar">
              <span className="whitespace-nowrap border border-white text-blue-100 text-[14px] px-3 py-1 rounded text-sm font-medium">
                TÉCNICO
              </span>
              <span className="whitespace-nowrap border border-white text-blue-100 text-[14px] px-3 py-1 rounded text-sm font-medium">
                TECNOLOGIA E PROFISSÃO
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Secretaria Escolar
            </h1>

            <p className="text-white text-[20px] font-extralight mb-8 font-Noto">
              O(a) profissional em Secretaria Escolar é peça-chave para a gestão 
              eficiente da escola, garantindo o funcionamento legal e organizado 
              da instituição. Responsável por gerenciar a documentação dos 
              estudantes, atuar permanentemente para o alinhamento do 
              currículo escolar com as necessidades reais dos alunos. Seja 
              essencial para o sucesso da escola e para a formação de um 
              ambiente educacional estruturado. Invista na sua capacitação e 
              faça a diferença na gestão escolar!
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <img 
                  src={marca} 
                  alt="Barra de marcas" 
                  className="w-[200px] md:w-[235px] h-auto" 
                />
              </div>

              <button className="bg-[#138E98] hover:bg-[#0f7a84] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                Faça sua matrícula
              </button>
            </div>
          </div>

       
          <div className="flex-1 lg:max-w-lg xl:max-w-xl flex justify-center lg:justify-end">
            <div 
              className="
                relative w-full 
                max-w-[95%]  
                sm:max-w-[90%] 
                md:max-w-[100%] 
                lg:max-w-full
              "
            >
              <img 
                src={fotoCurso} 
                alt="Profissional de Secretaria Escolar sorrindo em ambiente educacional" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
