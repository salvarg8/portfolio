import React from 'react';

const Contacto = () => {
    return (
        <section 
            id="contacto" 
            className="py-20 px-4 md:px-12 bg-white text-gray-800"
        >
            <div className="max-w-5xl mx-auto">
                
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 inline-block border-b-4 border-[#527987] pb-2">
                        Contacto
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                        ¿Estás buscando un desarrollador fullstack para sumar a tu equipo o querés charlar sobre un proyecto? Siempre estoy abierto a nuevas oportunidades. ¡Hablemos!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
                    
                    {/* Tarjeta de Email */}
                    <a 
                        href="mailto:salvadorrodriguezgarraza@gmail.com" 
                        className="flex items-center p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#527987] transition-all duration-300 group"
                    >
                        <div className="bg-[#527987] p-4 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <div className="ml-5">
                            <h3 className="text-lg font-bold text-gray-800">Email</h3>
                            <p className="text-gray-600 break-all">salvadorrodriguezgarraza@gmail.com</p>
                        </div>
                    </a>

                    {/* Tarjeta de LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/salvador-rodriguez-garraza-0b45b3177" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#527987] transition-all duration-300 group"
                    >
                        <div className="bg-[#527987] p-4 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </div>
                        <div className="ml-5">
                            <h3 className="text-lg font-bold text-gray-800">LinkedIn</h3>
                            <p className="text-gray-600">Salvador Rodriguez Garraza</p>
                        </div>
                    </a>

                    {/* Tarjeta de GitHub */}
                    <a 
                        href="https://github.com/salvarg8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#527987] transition-all duration-300 group"
                    >
                        <div className="bg-[#527987] p-4 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </div>
                        <div className="ml-5">
                            <h3 className="text-lg font-bold text-gray-800">GitHub</h3>
                            <p className="text-gray-600">github.com/salvarg8</p>
                        </div>
                    </a>

                    {/* Tarjeta de Teléfono / WhatsApp */}
                    <a 
                        href="https://wa.me/5493584013809" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#527987] transition-all duration-300 group"
                    >
                        <div className="bg-[#527987] p-4 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <div className="ml-5">
                            <h3 className="text-lg font-bold text-gray-800">Teléfono</h3>
                            <p className="text-gray-600">+54 9 358 401-3809</p>
                        </div>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Contacto;