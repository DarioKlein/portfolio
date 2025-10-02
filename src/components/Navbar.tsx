import { BiSun } from 'react-icons/bi'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

export function Navbar() {
  const navLinks = [
    { label: 'Início', id: 'top' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Sobre', id: 'about' },
    { label: 'Contato', id: 'contact' },
  ]

  return (
    <header className="w-screen h-16 flex flex-col justify-center">
      <nav className="flex items-center justify-evenly pl-10 pr-10">
        <h1 className="text-xl font-bold font-mono text-[var(--foreground)] hover:bg-[var(--elevate-1)] transition-colors cursor-pointer px-2 py-1 rounded-md">
          {'<Dev />'}
        </h1>
        <ul className="flex gap-8">
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
        <div className="flex gap-2">
          <a href="" className="p-2.5 hover:bg-[var(--elevate-1)] rounded-md">
            <SiGithub />
          </a>
          <a href="" className="p-2.5 hover:bg-[var(--elevate-1)] rounded-md">
            <SiLinkedin />
          </a>
          <a href="" className="p-2.5 hover:bg-[var(--elevate-1)] rounded-md">
            <SiInstagram />
          </a>
          <button className="p-2.5 hover:bg-[var(--elevate-1)] rounded-md cursor-pointer">
            <BiSun></BiSun>
          </button>
        </div>
      </nav>
    </header>
  )
}
