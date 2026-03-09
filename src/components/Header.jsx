import NavBar from "./NavBar";
import image from "../assets/Black_and_Beige_Minimalist_Aesthetic_Modern_Simple_Typography_Agency_Logo-removebg-preview.png";

export default function Header({ view, setView, navBarOpen, setNavBarOpen }) {
  return (
    <div className="fixed backdrop-blur-lg bg-white/10 border-b border-white/20">
      <header className="w-screen py-4 px-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={image} alt="" className="h-6" />
          <h1 className="text-xl font-bold">
            Lemon
            <span
              className={`${view === "claro" ? "text-green-600" : "text-green-400"}`}
            >
              fy
            </span>
          </h1>
        </div>

        <nav className="hidden md:flex gap-6">
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

        <div className="flex gap-4 text-xl">
          <button
            onClick={() =>
              setView((prev) => (prev === "claro" ? "escuro" : "claro"))
            }
          >
            <i
              className={`bi ${view === "claro" ? "bi-moon text-green-800" : "bi-brightness-high text-green-300"}`}
            ></i>
          </button>
          <button onClick={() => setNavBarOpen((prev) => !prev)}>
            <i
              className={`bi ${!navBarOpen ? "bi-list" : "bi-x-lg"} md:hidden`}
            ></i>
          </button>
        </div>
      </header>

      <div className="md:hidden">{navBarOpen && <NavBar />}</div>
    </div>
  );
}
