'use client'

import { FaEquals, FaXmark } from 'react-icons/fa6'
import Button from './ui/Button'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activePage, setActivePage] = useState<string>('')
  const [activeModal, setActiveModal] = useState(false)

  const navItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '/contato' },
  ]

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePage(window.location.pathname)
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = () => setActivePage(window.location.pathname)
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  return (
    <header
      className={`mx-auto rounded-2xl border-gray-200 ${
        isScrolled
          ? 'w-[80%] lg:w-[60%] fixed z-50 border left-0 right-0 top-0 mt-6'
          : 'w-full relative z-50'
      } transition-all duration-400`}
    >
      <div
        className={`mx-auto bg-white/80 backdrop-blur-sm rounded-2xl py-6 ${
          isScrolled ? 'px-8' : 'px-12'
        } transition-all duration-400`}
      >
        <div className="flex justify-between items-center mx-auto w-full max-w-[1400px] h-auto transition-all duration-400">
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/images/logo/gf-icon.png"
              alt="Logo GF-Consulting"
              className="w-10 h-auto object-contain"
            />
            <img
              src="/images/logo/gf-texto.png"
              alt="Logo GF-Consulting"
              className="w-40 h-auto object-contain"
            />
          </a>

          <div className="md:hidden">
            <button
              aria-label={activeModal ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={activeModal}
              onClick={() => setActiveModal((s) => !s)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-dourado-escuro"
            >
              {activeModal ? <FaXmark className="size-6" /> : <FaEquals className="size-6" />}
            </button>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-8 font-medium text-base">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    className={`navlink text-cinza-chumbo hover:text-dourado-claro transition-colors ${
                      activePage === item.href ? 'activeNavLink text-dourado-claro' : ''
                    }`}
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="hidden md:block text-white bg-dourado-escuro hover:scale-105 hover:contrast-125">
            Agendar Reunião
          </Button>
        </div>
      </div>

      {activeModal && (
        <div className={`md:hidden absolute w-full top-full z-50 ${isScrolled ? 'mt-3' : ''}`}>
          <div
            className={`border-gray-200 bg-white/80 backdrop-blur-sm rounded-2xl  py-4 px-4 ${
              isScrolled ? 'border' : 'shadow-lg'
            }`}
          >
            <ul className="flex flex-col gap-3 font-medium text-base">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    onClick={() => setActiveModal(false)}
                    className={`block navlink text-cinza-chumbo hover:text-dourado-claro transition-colors py-2 px-3 rounded-md ${
                      activePage === item.href ? 'activeNavLink text-dourado-claro' : ''
                    }`}
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <Button className="w-full text-white bg-dourado-escuro hover:scale-105 hover:contrast-125">
                  Agendar Reunião
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
