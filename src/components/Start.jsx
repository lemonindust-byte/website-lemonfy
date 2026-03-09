export default function Start({ view }) {
  return (
    <div className="py-35 px-4 text-center flex flex-col gap-4" id="start">
      <span className="w-full flex flex-col flex-wrap justify-center items-center gap-4">
        <h1 className="font-extrabold text-3xl">
          Transformando o
          <span
            className={`${view === "claro" ? "text-green-600" : "text-green-300"}`}
          >
            {" "}
            digital
          </span>{" "}
          em algo <span>refrescante</span>.
        </h1>
        <p
          className={`${view === "claro" ? "text-slate-500" : "text-slate-300"}`}
        >
          Na Lemonfy, criamos experiências digitais únicas. Do desenvolvimento
          web impecável a softwares robustos que impulsionam seu negócio.
        </p>
      </span>

      <div
        className={`flex flex-col gap-2 ${view === "claro" ? "text-slate-400" : "text-slate-600"}`}
      >
        <p>
          <i className="bi bi-laptop"></i>Desenvolvimento Web
        </p>
        <p>
          <i className="bi bi-code-slash">Desenvolvimento de Software</i>
        </p>
        <p>
          <i className="bi bi-window-fullscreen">UI/UX Design</i>
        </p>
      </div>
    </div>
  );
}
