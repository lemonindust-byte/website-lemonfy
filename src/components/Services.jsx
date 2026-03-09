export default function Services({ view }) {
  return (
    <div
      className="w-screen pb-35 px-4 flex flex-col justify-center items-center text-center gap-6"
      id="services"
    >
      <span className="flex flex-col gap-2">
        <h3
          className={`font-bold text-base ${view === "claro" ? "text-green-600" : "text-green-300"}`}
        >
          NOSSOS SERVIÇOS
        </h3>
        <h1 className="text-3xl font-extrabold">O que fazemos de melhor</h1>
        <p
          className={`${view === "claro" ? "text-slate-500" : "text-slate-300"}`}
        >
          Combinamos técnica, design e estratégia para entregar resultados
          reais. Nossa equipe é apaixonada por código e viciada em inovação.
        </p>
      </span>

      <div className="flex flex-col gap-6">
        <div
          className={`${view === "claro" ? "bg-slate-200" : "bg-black"} p-6 rounded-3xl flex flex-col gap-6 text-left`}
        >
          <header className="w-full flex justify-start">
            <i
              className={`bi bi-globe ${view === "claro" ? "bg-green-200 text-green-600" : "bg-green-950 text-green-400"} p-2 rounded-2xl text-3xl`}
            ></i>
          </header>
          <h2 className="font-bold text-2xl">Desenvolvimento Web</h2>
          <p>
            Websites rápidos, acessíveis e otimizados para conversão. Utilizamos
            as tecnologias mais modernas como React, Tailwind e Laravel.
          </p>
        </div>

        <div
          className={`${view === "claro" ? "bg-slate-200" : "bg-black"} p-6 rounded-3xl flex flex-col gap-6 text-left`}
        >
          <header className="w-full flex justify-start">
            <i
              className={`bi bi-code-slash ${view === "claro" ? "bg-green-200 text-green-600" : "bg-green-950 text-green-400"} p-2 rounded-2xl text-3xl`}
            ></i>
          </header>
          <h2 className="font-bold text-2xl">Software de Gestão</h2>
          <p>
            Soluções personalizadas para o seu negócio. Criamos sistemas que
            resolvem problemas reais e aumentam a produtividade.
          </p>
        </div>

        <div
          className={`${view === "claro" ? "bg-slate-200" : "bg-black"} p-6 rounded-3xl flex flex-col gap-6 text-left`}
        >
          <header className="w-full flex justify-start">
            <i
              className={`bi bi-window-fullscreen ${view === "claro" ? "bg-green-200 text-green-600" : "bg-green-950 text-green-400"} p-2 rounded-2xl text-3xl`}
            ></i>
          </header>
          <h2 className="font-bold text-2xl">Consultoria UI/UX</h2>
          <p>
            Design que encanta e funciona. Focamos na experiência do usuário
            para garantir que seu produto seja amado pelos clientes.
          </p>
        </div>

        <div
          className={`${view === "claro" ? "bg-slate-200" : "bg-black"} p-6 rounded-3xl flex flex-col gap-6 text-left`}
        >
          <header className="w-full flex justify-start">
            <i
              className={`bi bi-phone ${view === "claro" ? "bg-green-200 text-green-600" : "bg-green-950 text-green-400"} p-2 rounded-2xl text-3xl`}
            ></i>
          </header>
          <h2 className="font-bold text-2xl">Aplicativos Mobile</h2>
          <p>
            Presença digital em todos os lugares. Desenvolvemos apps iOS e
            Android nativos ou cross-platform de alta performance.
          </p>
        </div>

        <div
          className={`${view === "claro" ? "bg-slate-200" : "bg-black"} p-6 rounded-3xl flex flex-col gap-6 text-left`}
        >
          <header className="w-full flex justify-start">
            <i
              className={`bi bi-database ${view === "claro" ? "bg-green-200 text-green-600" : "bg-green-950 text-green-400"} p-2 rounded-2xl text-3xl`}
            ></i>
          </header>
          <h2 className="font-bold text-2xl">Infraestrutura Cloud</h2>
          <p>
            Escalabilidade e segurança. Configuramos e gerenciamos sua
            infraestrutura na nuvem para suportar o crescimento do seu negócio.
          </p>
        </div>

        <div
          className={`${view === "claro" ? "bg-slate-200" : "bg-black"} p-6 rounded-3xl flex flex-col gap-6 text-left`}
        >
          <header className="w-full flex justify-start">
            <i
              className={`bi bi-router ${view === "claro" ? "bg-green-200 text-green-600" : "bg-green-950 text-green-400"} p-2 rounded-2xl text-3xl`}
            ></i>
          </header>
          <h2 className="font-bold text-2xl">Otimização e Performance</h2>
          <p>
            Seu site não pode esperar. Analisamos e otimizamos cada milissegundo
            para garantir a melhor experiência possível.
          </p>
        </div>
      </div>
    </div>
  );
}
