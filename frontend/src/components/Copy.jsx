import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

function ExpedienteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openButtonRef = useRef(null);
  const modalRef = useRef(null);

  const staff = [
    { role: "Gerente Pedagógica", name: "Jôsy Braga Cavalcante" },
    { role: "Coordenadora de Cursos", name: "Marisa Ferreira" },
    { role: "Secretária Escolar", name: "Márcia Maria Doudement" },
    { role: "Desenvolvedora Front-End", name: "Isabela Marques" },
    { role: "Assistente Educacional", name: "Alisson Aragão" },
    { role: "Assistente Educacional", name: "Ana Lívia Cavalcante" },
    { role: "Estagiário(a)", name: "Bianka Sousa" },
    { role: "DIGITAL - Head de Estratégia Digital", name: "Filipe Dummar" },
    { role: "Gerente de Inovação / UX", name: "Brenda Câmara" },
    { role: "UX/UI Designer", name: "Juliana Amaral Oliveira" },
    { role: "Front-End", name: "Antônia Michele" },
    { role: "Back-End", name: "Milton Paiva" },
  ];

  // Foco inicial e trap de tabulação
  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (firstElement) firstElement.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Retornar foco ao botão de abrir modal
  useEffect(() => {
    if (!isOpen && openButtonRef.current) {
      openButtonRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <div className="bg-[#1F6482] text-white py-6 flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        <h5 className="text-sm text-center md:text-left text-white font-Noto font-light text-[16px]">
          Av. Aguanambi, 282 A - Joaquim Távora, Fortaleza - CE, 60055-402
        </h5>

        <button
          ref={openButtonRef}
          onClick={() => setIsOpen(true)}
          className="cursor-pointer text-sm text-center mt-4 md:mt-0 text-white font-semibold text-[20px] border border-white px-3 py-1 hover:bg-white hover:text-[#1F6482] transition-colors duration-200"
        >
          EXPEDIENTE
        </button>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 p-4"
        >
          <div
            ref={modalRef}
            className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 bg-white rounded-t-xl p-6 pb-4 border-b border-gray-100 flex justify-between items-center">
              <h2 id="modalTitle" className="text-2xl font-bold text-gray-800">
                Expediente
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Fechar modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 pt-4">
              <div className="space-y-4 text-gray-700">
                {staff.map((member, index) => (
                  <div key={index} className="border-l-4 border-teal-500 pl-4 py-2">
                    <p className="font-semibold text-gray-800 text-sm mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ExpedienteModal;
