import React from 'react';

const experiencias = [
    {
        id: 1,
        title: 'Desarrollador Full Stack',
        company: 'MuniDigital',
        date: 'Agosto 2024 - Mayo 2026',
        summary:
            'Desarrollo de plataformas web empresariales utilizando Java, Spring Boot y React, participando en los equipos de Gestión, Turnero y Finanzas.',
        desc: [
            'Diseñé e implementé la lógica de negocio para turnos múltiples y turnos familiares, integrando nuevas funcionalidades en React sobre una arquitectura legacy.',
            'Implementé nuevas funcionalidades para la parametrización de servicios municipales, tasas de afectación específicas y automatización de cedulones.',
            'Optimicé APIs REST y desarrollé lógica backend con Spring Boot, mejorando el rendimiento y la mantenibilidad del sistema.',
            'Participé en el mantenimiento evolutivo, resolución de incidencias y actualización del sistema de reportes con JasperReports.',
            'Trabajé bajo metodología Scrum colaborando con equipos multidisciplinarios durante todo el ciclo de desarrollo.'
        ],
        tech: [
            'Java',
            'Spring Boot',
            'React',
            'REST API',
            'JPA/Hibernate',
            'PostgreSQL',
            'MySQL',
            'JUnit',
            'Mockito',
            'JasperReports',
            'Scrum'
        ]
    },
    {
        id: 2,
        title: 'Desarrollador de Software Junior',
        company: 'Instituto Zunino',
        date: 'Abril 2023 - Julio 2024',
        summary:
            'Desarrollo de sistemas internos para una institución de salud, incluyendo integración de hardware y nuevas funcionalidades.',
        desc: [
            'Desarrollé y optimicé módulos internos para inventario, gestión de envíos y administración de información.',
            'Implementé un sistema de llamado de pacientes para optimizar el flujo de atención en salas de espera.',
            'Desarrollé una solución IoT para monitorear tanques de agua y cisternas mediante sensores Arduino.',
            'Participé en el relevamiento de requerimientos, mantenimiento evolutivo y mejora continua de los sistemas.'
        ],
        tech: [
            'Java',
            'Java Swing',
            'MySQL',
            'Arduino',
            'IoT',
            'Integración de Hardware'
        ]
    },
    {
        id: 3,
        title: 'Desarrollador de Software (Pasantía)',
        company: 'Instituto Zunino',
        date: 'Abril 2022 - Abril 2023',
        summary:
            'Primer contacto profesional desarrollando aplicaciones de escritorio y brindando soporte a sistemas para el sector salud.',
        desc: [
            'Desarrollé interfaces de escritorio utilizando Java Swing conectadas a bases de datos MySQL.',
            'Participé en el mantenimiento de sistemas de historias clínicas, turneros y gestión de pacientes.',
            'Brindé soporte técnico a usuarios finales y resolví incidencias relacionadas con el software interno.',
            'Colaboré en la mejora continua de herramientas utilizadas por el personal de la institución.'
        ],
        tech: [
            'Java Swing',
            'MySQL',
            'Soporte Técnico',
            'Sistemas de Salud'
        ]
    }
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-20 px-4 md:px-12 bg-gray-50 text-gray-800"
        >
            <div className="mb-12 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 border-b-4 border-[#527987] inline-block pb-2">
                    Experiencia Laboral
                </h1>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
                {experiencias.map((exp) => (
                    <div
                        key={exp.id}
                        className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#527987] hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                            <div>
                                <h2 className="text-2xl font-bold text-[#527987]">
                                    {exp.title}
                                </h2>

                                <h3 className="text-lg font-semibold text-gray-700">
                                    {exp.company}
                                </h3>

                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    {exp.summary}
                                </p>
                            </div>

                            <span className="text-sm font-medium text-gray-500 bg-gray-100 py-2 px-4 rounded-full whitespace-nowrap">
                                {exp.date}
                            </span>
                        </div>

                        <ul className="list-disc list-inside space-y-3 text-gray-600 leading-relaxed mb-6">
                            {exp.desc.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-[#527987] text-white text-sm font-medium px-3 py-1 rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;