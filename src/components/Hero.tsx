import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { useEffect, useMemo, useState } from 'react'

export function Hero() {
  const codeParts = useMemo(
    () => [
      { text: 'const', className: 'text-[var(--chart-3)]' },
      { text: ' ', className: '' },
      { text: 'developer', className: 'text-foreground' },
      { text: ' = ', className: '' },
      { text: '"Dario Klein"', className: 'text-[var(--primary)]' },
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
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight flex flex-col items-center">
        Desenvolvedor
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Full-Stack</span>
      </h1>
      <p className="md:text-xl text-[var(--muted-foreground)] max-w-[45rem] w-full text-center text-sm sm:text-lg">
        Criando experiências digitais modernas com React, Node.js, TypeScript, Java Spring Boot e tecnologias de ponta
      </p>
      <div className="flex sm:gap-5 mt-4 gap-3">
        <a
          href=""
          className="sm:w-45 sm:h-10 w-44 h-9 bg-[var(--primary)] flex items-center justify-center rounded text-sm font-medium text-[var(--primary-foreground)] gap-3 border border-[var(--button-outline)] hover:bg-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors group"
        >
          Ver Projetos
          <FiArrowRight className="transition-transform group-hover:translate-x-2" />
        </a>
        <button className="sm:w-45 sm:h-10 w-44 h-9 bg-[#11131780] flex items-center justify-center rounded text-sm font-medium text-[var(--primary-foreground)] border border-[var(--button-outline)] hover:bg-[#4b49492a] transition-colors gap-3 cursor-pointer">
          <FiDownload />
          Baixar CV
        </button>
      </div>
      <div className="mt-8 bg-[#1b1d2280] px-4 py-2 rounded border border-[var(--button-outline)]">
        <div className="w-full">
          <code className="font-mono text-sm">
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
