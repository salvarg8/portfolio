import React from 'react'
import blancoYnegro from '../assets/blancoYNegro.jpg'

const Hero = () => {
  return (
    <section >
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='p-10 md:p-15 lg:p-30 xl:p36 flex items-center justify-center' >
          <img src={blancoYnegro} alt="Imagen de perfil" className='max-w-xs md:max-w-sm lg:max-w-md rounded-lg' />
        </div>
        <div className='p-10 md:p-15 lg:p-30 xl:p36'>
          <h1 className='text-3xl font-bold pt-4'>Salvador Rodriguez Garraza | Fullstack Developer</h1>
          <h2 className='text-2xl pt-4'>Especialista en Java, Spring Boot & React.</h2>
          <p className='text-xl pt-4'>
            Desarrollador Fullstack con una sólida base arquitectónica en el backend y capacidad para construir interfaces de usuario dinámicas. Actualmente cursando la carrera de Ingeniería en Software en la Universidad Siglo 21, me apasiona el ciclo de vida completo del desarrollo: desde el diseño de bases de datos relacionales y la creación de APIs seguras, hasta la implementación de experiencias interactivas en el cliente. Busco crear soluciones escalables y de alta calidad.</p>
          <div className='p-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4'>
            <a className='bg-[#527987] py-2 px-8 sm:px-12 rounded-3xl hover:bg-[#3a5a6b] transition-colors duration-300 cursor-pointer text-center w-full sm:w-auto'
            href='/#projects'>Ver Proyectos</a>
            <a className='bg-[#527987] py-2 px-8 sm:px-12 rounded-3xl hover:bg-[#3a5a6b] transition-colors duration-300 cursor-pointer text-center w-full sm:w-auto' href='/#contacto'>Contactar</a>
            <a className='bg-[#527987] py-2 px-8 sm:px-12 rounded-3xl hover:bg-[#3a5a6b] transition-colors duration-300 cursor-pointer text-center w-full sm:w-auto' href='/#cv'>Descargar CV</a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero
