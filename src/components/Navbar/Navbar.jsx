import React, { useState } from 'react'

const navbarLinks = [
    {
        id: 1,
        text:   'Inicio',
        url:    '/'
    },
    {
        id: 2,
        text:   'Experiencia',
        url:    '/#experience'
    },
    {
        id: 3,
        text:   'Proyectos',
        url:    '/#projects'
    },
    {
        id: 4,
        text:   'Curriculum Vitae',
        url:    '/#cv'
    },
    {
        id: 5,
        text:   'Contacto',
        url:    '/#contacto'
    }
]   

const navbarRedes = [
   {
    id: 1,
    text:   'LinkedIn',
    url:    'https://www.linkedin.com/in/salvador-rodriguez-garraza-0b45b3177/',
    icon:   'bi bi-linkedin'
   },
   {
    id: 2,
    text:   'GitHub',
    url:    'https://github.com/salvarg8',
    icon:   'bi bi-github'
   },
   {
    id: 3,
    text:   'WhatsApp',
    url:    'https://wa.me/5493584013809',
    icon:   'bi bi-whatsapp'
   },
   {
    id: 4,
    text:   'Email',
    url:    'mailto:salvadorrodriguezgarraza@gmail.com',
    icon:   'bi bi-envelope'
   }
   
]



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className="border-b">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        <div className="text-2xl font-bold">
            <h1>Salvador Rodriguez Garraza</h1>
        </div>

        <button 
        onClick={toggleMenu}
        className="text-white md:hidden focus:outline-none flex items-center ">
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
                {isOpen ? (<path 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />) : (<path 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />)}
                

            </svg>
        </button>

        <div className="hidden md:block">
            <ul className="flex sm:space-x-8 space-x-4">
                {navbarLinks.map((link) => (
                    <li key={link.id}>
                        <a className="sm:text-lg text-sm hover:text-sky-100 transition-transform hover:scale-110 duration-300 inline-block"
                            href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="hidden md:block">
            <ul className="flex sm:space-x-8 space-x-4">
                {navbarRedes.map((link) => (
                    <li key={link.id}>
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transition-transform hover:scale-125 transform duration-300"
                        href={link.url}>
                            <i className={`${link.icon} sm:text-2xl text-lg hover:text-sky-100 transition-colors duration-300`}></i>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-[#527987] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col px-4 py-2">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a 
                className="hover:text-sky-100 transition-colors duration-300"
                href={link.url}
                onClick={() => setIsOpen(false)}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-4 px-4 py-2 border-t border-[#CAD2C5] justify-center">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-110 duration-300"
                href={link.url}
                onClick={() => setIsOpen(false)}>
                <i className={`${link.icon} text-lg text-white`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
