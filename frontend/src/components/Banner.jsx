import React from 'react';
import marca from '../assets/marcas.png';
import fotoCurso from '../assets/foto-curso.png';

function Banner() {
  return (
    <section className="bg-[#17254D] text-white">
      <div className="container mx-auto px-6 md:px-8 py-12 lg:py-16 justify-space-between">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
         
          <div className="flex-1 lg:max-w-2xl">
            
            <div className="flex gap-3 mb-6">
              <span className="border border-white text-blue-100 px-3 py-1 rounded text-sm font-medium">
                TÉCNICO
              </span>
              <span className="border border-white text-blue-100 px-3 py-1 rounded text-sm font-medium">
                TECNOLOGIA E PROFISSÃO
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Secretaria Escolar
            </h1>

        
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
              O(a) profissional em Secretaria Escolar é peça-chave para a gestão 
              eficiente da escola, garantindo o funcionamento legal e organizado 
              da instituição. Responsável por gerenciar a documentação dos 
              estudantes, atuar permanentemente para o alinhamento do 
              currículo escolar com as necessidades reais dos alunos. Seja 
              essencial para o sucesso da escola e para a formação de um 
              ambiente educacional estruturado. Invista na sua capacitação e 
              faça a diferença na gestão escolar!
            </p>

           
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <img src={marca} alt="Barra de marcas" className="w-[235px] h-[57px]" />
                </div>
              </div>

              <button className="bg-[#138E98] hover:bg-[#138E98] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                Faça sua matrícula
              </button>
            </div>
          </div>

          <div className="flex-1 lg:max-w-lg xl:max-w-xl flex justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-full">
              <img 
                src={fotoCurso} 
                alt="Profissional de Secretaria Escolar sorrindo em ambiente educacional" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;