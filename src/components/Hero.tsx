export function Hero() {
  return (
    <div className="w-screen flex justify-center h-[calc(100vh-4rem)] items-center flex-col">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight flex flex-col items-center">
        Desenvolvedor
        <br />
        <span className="">Full Stack</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Criando experiências digitais modernas com React, Node.js, TypeScript, Java Spring Boot e tecnologias de ponta
      </p>
      <div>
        <a href="">Ver Projetos</a>
        <button>Baixar CV</button>
      </div>
      <div className="mt-4">
        <code className="font-mono text-sm text-muted-foreground">
          <span className="text-chart-3">const</span> <span className="text-foreground">developer</span> ={' '}
          <span className="text-primary">"passionate"</span>;
        </code>
      </div>
    </div>
  )
}
