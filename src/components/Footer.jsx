import image from "../assets/Black_and_Beige_Minimalist_Aesthetic_Modern_Simple_Typography_Agency_Logo-removebg-preview.png";

export default function Footer({ view }) {
  return (
    <div className="px-4 flex flex-col gap-6 pb-6 md:text-center">
      <div className="flex flex-col gap-2">
        <span className="flex gap-2 items-center md:justify-center">
          <img src={image} alt="" className="h-8" />
          <h1 className="font-bold text-2xl">
            Lemon
            <span
              className={`${view === "claro" ? "text-green-600" : "text-green-400"}`}
            >
              fy
            </span>
          </h1>
        </span>

        <p
          className={`${view === "claro" ? "text-slate-500" : "text-slate-300"}`}
        >
          Transformando ideias ácidas em soluções doces para o seu negócio.
          Especialistas em desenvolvimento web e de software com um toque
          cítrico.
        </p>
      </div>

      <div className="flex gap-4 text-base md:justify-center">
        <a
          href="https://github.com/lemonindust-byte"
          target="_blank"
          className="hover:text-green-600 transition duration-150 ease-in"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.instagram.com/lemonfy.studio?igsh=ZTN2cGQ4Nzlpbjhh"
          target="_blank"
          className="hover:text-green-600 transition duration-150 ease-in"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://gmail.com"
          target="_blank"
          className="hover:text-green-600 hover:underline transition duration-150 ease-in"
        >
          lemon.indust@gmail.com
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">MENU</h3>

        <nav className="flex flex-col gap-2">
          <a
            href="#start"
            className="hover:text-green-700 transition duration-150 ease-in"
          >
            Início
          </a>
          <a
            href="#services"
            className="hover:text-green-700 transition duration-150 ease-in"
          >
            Serviços
          </a>
          <a
            href="#features"
            className="hover:text-green-700 transition duration-150 ease-in"
          >
            Recursos
          </a>
          <a
            href="#contact"
            className="hover:text-green-700 transition duration-150 ease-in"
          >
            Contato
          </a>
        </nav>
      </div>

      <hr className="text-slate-700" />

      <p>&copy;2026 Lemonfy - Desenvolvimento de Software</p>
    </div>
  );
}
