export default function NavBar() {
  return (
    <nav className="w-screen py-4 flex flex-col text-left">
      <a href="#start" className="w-full p-2 focus:bg-slate-500">
        Início
      </a>
      <a href="#services" className="w-full p-2 focus:bg-slate-500">
        Serviços
      </a>
      <a href="#features" className="w-full p-2 focus:bg-slate-500">
        Recursos
      </a>
      <a href="#contact" className="w-full p-2 focus:bg-slate-500">
        Contato
      </a>
    </nav>
  );
}
