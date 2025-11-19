import { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
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

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
    }
  }, [theme])

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-screen h-16 flex flex-col justify-center">
      <nav className="flex items-center lg:justify-evenly md:pl-10 md:pr-10 justify-between">
        <h1 className="text-sm ml-5 md:ml-0 font-bold font-mono text-[var(--main-color-font)] hover:bg-[var(--color-background-dev)] transition-colors cursor-pointer px-2 py-1 rounded-md lg:text-xl">
          {'<Dario Klein />'}
        </h1>
        <ul className="lg:gap-8 hidden md:flex gap-4">
          {navLinks.map(link => {
            return (
              <li key={link.id}>
                <a
                  className="text-sm font-medium text-[var(--main-color-font)] hover:text-[var(--subtitle-color-font)] transition-colors"
                  href={`#${link.id}`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="flex lg:gap-2 gap-4 md:gap-1 mr-5 md:mr-0">
          <a href="" className="p-2.5 hover:bg-[var(--color-background-button)] rounded-md hidden md:inline-flex">
            <SiGithub className="text-[var(--white-black-color-font)]" />
          </a>
          <a href="" className="p-2.5 hover:bg-[var(--color-background-button)] rounded-md hidden md:inline-flex">
            <SiLinkedin className="text-[var(--white-black-color-font)]" />
          </a>
          <a href="" className="p-2.5 hover:bg-[var(--color-background-button)] rounded-md hidden md:inline-flex">
            <SiInstagram className="text-[var(--white-black-color-font)]" />
          </a>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 hover:bg-[var(--color-background-button)] rounded-md cursor-pointer"
          >
            {theme === 'light' ? (
              <BiSun className="text-xl md:text-lg text-[var(--white-black-color-font)]"></BiSun>
            ) : (
              <BiMoon className="text-xl md:text-lg text-[var(--white-black-color-font)]"></BiMoon>
            )}
          </button>
          <button className="md:hidden flex items-center text-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CgClose className="text-[var(--white-black-color-font)]" />
            ) : (
              <FiMenu className="text-[var(--white-black-color-font)]" />
            )}
          </button>
        </div>
        <div
          className={`fixed transition duration-300 ease-in-out flex w-screen md:hidden bg-[var(--color-background-navbar-mobile)] mt-87 px-10 py-4 flex-col gap-5 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className="flex h-full flex-col justify-center gap-3 mt-3">
            {navLinks.map(link => {
              return (
                <li key={link.id}>
                  <a
                    className="text-lg font-medium text-[var(--subtitle-color-font)] hover:text-[var(--main-color-font)] transition-colors"
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
              className="w-full text-[var(--white-black-color-font)] flex justify-center items-center gap-4 h-10 border border-[var(--color-button-outline)] rounded"
            >
              <SiGithub className="text-[var(--white-black-color-font)]" />
              GitHub
            </a>
            <a
              href=""
              className="w-full text-[var(--white-black-color-font)] flex justify-center items-center gap-4 h-10 border border-[var(--color-button-outline)] rounded"
            >
              <SiLinkedin className="text-[var(--white-black-color-font)]" />
              LinkedIn
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
