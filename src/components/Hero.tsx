import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { useEffect, useMemo, useState } from 'react'

export function Hero() {
  const codeParts = useMemo(
    () => [
      { text: 'const', className: 'text-[var(--color-font-const)]' },
      { text: ' ', className: '' },
      { text: 'developer', className: 'text-[var(--main-color-font)]' },
      { text: ' = ', className: '' },
      { text: '"Dario Klein"', className: 'text-[var(--color-font-passione)]' },
      { text: ';', className: '' },
    ],
    []
  )

  const [typedIndex, setTypedIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const renderedCode = codeParts.map((part, idx) => {
    if (idx < typedIndex) {
      return (
        <span key={idx} className={part.className}>
          {part.text}
        </span>
      )
    }
    if (idx === typedIndex) {
      return (
        <span key={idx} className={part.className}>
          {part.text.slice(0, charIndex)}
        </span>
      )
    }
    return null
  })

  useEffect(() => {
    let timeout: number
    if (!isDeleting) {
      if (typedIndex < codeParts.length) {
        if (charIndex < codeParts[typedIndex].text.length) {
          timeout = setTimeout(() => setCharIndex(charIndex + 1), 120)
        } else {
          timeout = setTimeout(() => {
            setTypedIndex(typedIndex + 1)
            setCharIndex(0)
          }, 300)
        }
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1200)
      }
    } else {
      if (typedIndex > 0 || charIndex > 0) {
        if (charIndex > 0) {
          timeout = setTimeout(() => setCharIndex(charIndex - 1), 60)
        } else {
          timeout = setTimeout(() => {
            setTypedIndex(typedIndex - 1)
            setCharIndex(codeParts[typedIndex - 1].text.length)
          }, 60)
        }
      } else {
        timeout = setTimeout(() => setIsDeleting(false), 600)
      }
    }
    return () => clearTimeout(timeout)
  }, [typedIndex, charIndex, isDeleting, codeParts])
  return (
    <div className="w-screen flex justify-center h-screen items-center flex-col gap-4">
      <h1 className="text-5xl sm:text-6xl md:text-8xl text-[var(--main-color-font)] font-bold tracking-tight flex flex-col items-center">
        Desenvolvedor
        <span className="bg-gradient-to-r from-[var(--color-font-title-fulltack-01)] to-[var(--color-font-title-fulltack-02)] bg-clip-text text-transparent">
          Full-Stack
        </span>
      </h1>
      <p className="md:text-xl text-[var(--subtitle-color-font)] max-w-[45rem] w-full text-center text-sm sm:text-lg">
        Criando experiências digitais modernas com React, Node.js, TypeScript, Java Spring Boot e tecnologias de ponta.
      </p>
      <div className="flex sm:gap-5 mt-4 gap-3">
        <a
          href=""
          className="sm:w-45 sm:h-10 w-44 h-9 bg-[var(--color-button-hero-01)] flex items-center justify-center rounded text-sm font-medium text-[var(--white-color-font)] gap-3 border border-[var(--color-button-outline)] hover:bg-[var(--white-color-font)] hover:text-[var(--color-button-hero-01)] hover:border-[var(--color-button-hero-01)] transition-colors group"
        >
          Ver Projetos
          <FiArrowRight className="transition-transform group-hover:translate-x-2" />
        </a>
        <button className="sm:w-45 sm:h-10 w-44 h-9 bg-[var(--color-button-hero-02)] flex items-center justify-center rounded text-sm font-medium text-[var(--white-black-color-font)] border border-[var(--color-button-outline)] hover:bg-[var(--color-button-hero-02-hover)] transition-colors gap-3 cursor-pointer">
          <FiDownload />
          Baixar CV
        </button>
      </div>
      <div className="mt-8 bg-[var(--color-background-dev)] px-4 py-2 rounded border border-[var(--color-button-outline)]">
        <div className="w-full">
          <code className="font-mono text-sm text-[var(--white-black-color-font)]">
            {renderedCode}
            <span className="opacity-70 animate-pulse">
              <span className="pointer-effect">|</span>
            </span>
          </code>
        </div>
      </div>
    </div>
  )
}
