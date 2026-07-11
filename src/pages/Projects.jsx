import React from 'react';

const proyectos = [
    {
        id: 1,
        title: 'Sistema de Gestión de Consorcios',
        role: 'Fullstack Developer',
        summary: 'Plataforma multi-tenant para la administración integral de consorcios, usuarios, unidades funcionales, amenities y reservas.',
        desc: [
            'Desarrollo de API RESTful con Spring Boot y Spring Data JPA conectada a una base de datos MySQL.',
            'Implementación de autenticación y autorización segura utilizando JSON Web Tokens (JWT).',
            'Construcción de la interfaz de usuario en React, consumiendo la API y gestionando estados.',
            'Documentación interactiva de la API con Swagger/OpenAPI y aseguramiento de calidad con JUnit 5 y Mockito.'
        ],
        tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT', 'JUnit', 'Swagger'],
        links: [
            { name: 'Repo Backend', url: 'https://github.com/salvarg8/Consorcio' },
            { name: 'Repo Frontend', url: 'https://github.com/salvarg8/consorcioFront' }
        ]
    },
    {

        id: 2,
        title: 'Bacana - Sistema de Gestión Comercial',
        role: 'Fullstack / Desktop Developer',
        summary: 'Sistema integral de gestión orientado al rubro de la pastelería, abarcando desde el control de stock hasta la facturación.',
        desc: [
            'Diseño de arquitectura en capas con separación estricta entre Datos (patrón DAO), Negocio y Presentación.',
            'Desarrollo de módulos complejos para la administración de clientes, insumos, pasos de recetas, ventas y registro de percances.',
            'Generación de reportes dinámicos de facturación y productos utilizando archivos .rdlc (ReportViewer).'
        ],
        tech: ['C#', '.NET', 'Windows Forms', 'SQL Server'],
        links: [
            { name: 'Ver Repositorio', url: 'https://github.com/salvarg8/Bacana/tree/master' }
        ]
    },
    {
        id: 3,
        title: 'Sistema de Mediciones Industriales',
        role: 'Backend & Desktop Developer',
        summary: 'Aplicación de escritorio para el registro, monitoreo y validación de mediciones físicas en entornos de plantas industriales.',
        desc: [
            'Implementación de gráficos en tiempo real (RealTimeGraph) para la visualización y monitoreo continuo de datos.',
            'Automatización en la exportación de datos mediante la generación de reportes utilizando plantillas en formato Excel.',
            'Modelado de un dominio complejo con gestión de válvulas, fluidos, ubicaciones y calibración de sensores utilizando el patrón DAO para persistencia local en SQLite.'
        ],
        tech: ['Java', 'Java Swing', 'SQLite', 'Maven', 'Apache POI (Excel)'],
        links: [
            { name: 'Ver Repositorio', url: 'https://github.com/salvarg8/mediciones' }
        ]
    },
    {
        id: 4,
        title: 'Simulador de Torneos de Tenis',
        role: 'Desarrollador Java',
        summary: 'Simulador de partidos y torneos de tenis con cálculo automático de puntajes y progresión de sets.',
        desc: [
            'Construcción de una máquina de estados para manejar de forma precisa la lógica de puntuación y las reglas del deporte.',
            'Modelado fuertemente tipado aplicando conceptos avanzados de Programación Orientada a Objetos (Torneo, Set, Game, Jugador).',
            'Separación arquitectónica clara entre la interfaz gráfica (GUI) y los gestores de la simulación de los partidos.'
        ],
        tech: ['Java', 'Java Swing', 'POO', 'Máquina de Estados'],
        links: [
            { name: 'Ver Repositorio', url: 'https://github.com/salvarg8/simuladortenis' }
        ]
    }
    
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-20 px-4 md:px-12 bg-white text-gray-800" 
        >
            <div className="mb-12 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 border-b-4 border-[#527987] inline-block pb-2">
                    Proyectos Destacados
                </h1>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {proyectos.map((proyecto) => (
                    <div
                        key={proyecto.id}
                        className="bg-gray-50 p-8 rounded-xl shadow-md border-t-4 border-[#527987] hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                        <div className="mb-5">
                            <h2 className="text-2xl font-bold text-[#527987]">
                                {proyecto.title}
                            </h2>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">
                                {proyecto.role}
                            </h3>
                            <p className="mt-3 text-gray-600 leading-relaxed min-h-[80px]">
                                {proyecto.summary}
                            </p>
                        </div>

                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                            {proyecto.desc.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {proyecto.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Botones de Enlaces */}
                        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200">
                            {proyecto.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#527987] hover:bg-[#3d5a65] text-white text-sm font-medium py-2 px-4 rounded transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;