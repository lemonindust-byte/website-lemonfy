export default function Features({ view }) {
  return (
    <div
      className="w-screen pb-35 px-4 md:px-120 flex flex-col gap-10 md:justify-center md:text-center"
      id="features"
    >
      <div className="flex flex-col gap-2">
        <span>
          <h3
            className={`font-bold text-base ${view === "claro" ? "text-green-600" : "text-green-300"}`}
          >
            POR QUE NÓS?
          </h3>
          <h1 className="text-3xl font-extrabold">
            O toque Lemon que seu projeto precisa
          </h1>
        </span>
        <p
          className={`${view === "claro" ? "text-slate-500" : "text-slate-300"}`}
        >
          Somos uma startup que nasceu com o propósito de descomplicar o
          digital. Para nós, desenvolver software é mais do que apenas escrever
          código; é sobre entregar valor e transformar visões em realidade com
          um toque de frescor e inovação.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:px-50">
        <header>
          <i
            className={`bi bi-beaker ${view === "claro" ? "bg-green-200 text-green-600" : "bg-green-950 text-green-400"} p-2 rounded-full text-xl`}
          ></i>
        </header>
        <h1 className="font-bold text-2xl">Experiência Refrescante</h1>
        <p>
          Criamos interfaces limpas e intuitivas que proporcionam uma jornada de
          usuário leve e sem fricções.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:px-50">
        <header>
          <i
            className={`bi bi-shield-check ${view === "claro" ? "bg-green-200 text-green-600" : "bg-green-950 text-green-400"} p-2 rounded-full text-xl`}
          ></i>
        </header>
        <h1 className="font-bold text-2xl">Segurança de Ferro</h1>
        <p>
          Nossos sistemas são robustos e construídos com as melhores práticas de
          segurança da indústria.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:px-50">
        <header>
          <i
            className={`bi bi-heart ${view === "claro" ? "bg-green-200 text-green-600" : "bg-green-950 text-green-400"} p-2 rounded-full text-xl`}
          ></i>
        </header>
        <h1 className="font-bold text-2xl">Amor pelo Código</h1>
        <p>
          Código bem escrito é arte. Nossos desenvolvedores cuidam de cada
          detalhe para um sistema impecável.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:px-50">
        <header>
          <i
            className={`bi bi-stars ${view === "claro" ? "bg-green-200 text-green-600" : "bg-green-950 text-green-400"} p-2 rounded-full text-xl`}
          ></i>
        </header>
        <h1 className="font-bold text-2xl">Inovação Cítrica</h1>
        <p>
          Damos um toque de inovação em cada projeto, trazendo soluções
          criativas para problemas complexos.
        </p>
      </div>
    </div>
  );
}
