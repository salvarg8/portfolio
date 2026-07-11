import React from 'react';

const Curriculum = () => {
    return (
        <section 
            id="cv" 
            className="py-20 px-4 md:px-12 bg-gray-50 flex justify-center items-center"
        >
            <div className="max-w-3xl w-full bg-white p-10 md:p-14 rounded-2xl shadow-lg border-t-4 border-[#527987] text-center transform transition-all duration-300 hover:shadow-xl">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#527987]">
                    Curriculum Vitae
                </h2>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                    Para conocer más detalles sobre mi trayectoria laboral, mis estudios en Ingeniería en Software y mi stack tecnológico completo, podés descargar mi currículum actualizado en formato PDF.
                </p>
                
                {/* Botón de Descarga */}
                <a
                    href="/Fullstack java React-Rodriguez Garraza Salvador.pdf"
                    download="Fullstack java React-Rodriguez Garraza Salvador.pdf"
                    className="inline-flex items-center justify-center gap-3 bg-[#527987] hover:bg-[#3d5a65] text-white font-semibold text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                    {/* Ícono de descarga en formato SVG */}
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                    </svg>
                    Descargar CV
                </a>
                
            </div>
        </section>
    );
};

export default Curriculum;