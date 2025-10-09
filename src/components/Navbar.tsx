import { useState } from 'react'
import { BiSun } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

export function Navbar() {
  const navLinks = [
    { label: 'Início', id: 'top' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Sobre', id: 'about' },
    { label: 'Contato', id: 'contact' },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-screen h-16 flex flex-col justify-center">
      <nav className="flex items-center lg:justify-evenly md:pl-10 md:pr-10 justify-between">
        <h1 className="text-sm ml-5 md:ml-0 font-bold font-mono text-[var(--foreground)] hover:bg-[var(--elevate-1)] transition-colors cursor-pointer px-2 py-1 rounded-md lg:text-xl">
          {'<Dario Klein />'}
        </h1>
        <ul className="lg:gap-8 hidden md:flex gap-4">
          {navLinks.map(link => {
            return (
              <li key={link.id}>
                <a
                  className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  href={`#${link.id}`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="flex lg:gap-2 gap-4 md:gap-1 mr-5 md:mr-0">
          <a href="" className="p-2.5 hover:bg-[var(--elevate-1)] rounded-md hidden md:inline-flex">
            <SiGithub />
          </a>
          <a href="" className="p-2.5 hover:bg-[var(--elevate-1)] rounded-md hidden md:inline-flex">
            <SiLinkedin />
          </a>
          <a href="" className="p-2.5 hover:bg-[var(--elevate-1)] rounded-md hidden md:inline-flex">
            <SiInstagram />
          </a>
          <button className="p-2.5 hover:bg-[var(--elevate-1)] rounded-md cursor-pointer">
            <BiSun className="text-xl md:text-lg"></BiSun>
          </button>
          <button className="md:hidden flex items-center text-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CgClose /> : <FiMenu />}
          </button>
        </div>
        <div
          className={`fixed w-screen md:hidden bg-[#111317fd] mt-87 px-10 py-4 flex-col gap-5 ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className="flex h-full flex-col justify-center gap-3 mt-3">
            {navLinks.map(link => {
              return (
                <li key={link.id}>
                  <a
                    className="text-lg font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    href={`#${link.id}`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="flex gap-2">
            <a
              href=""
              className="w-full flex justify-center items-center gap-4 h-10 border border-[var(--button-outline)] rounded"
            >
              <SiGithub />
              GitHub
            </a>
            <a
              href=""
              className="w-full flex justify-center items-center gap-4 h-10 border border-[var(--button-outline)] rounded"
            >
              <SiLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
