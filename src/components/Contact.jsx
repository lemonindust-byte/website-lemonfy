export default function Contact({ view }) {
  return (
    <div
      className="w-full flex justify-center items-center px-4 pb-35 md:px-150"
      id="contact"
    >
      <div className="p-6 rounded-2xl bg-green-400 flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">
          Pronto para dar um toque <span className="text-green-700">Lemon</span>{" "}
          ao seu projeto?
        </h1>
        <p>
          Estamos ansiosos para ouvir sobre sua ideia. Entre em contato hoje
          mesmo e vamos construir algo refrescante juntos!
        </p>
        <a
          href="https://www.instagram.com/lemonfy.studio?igsh=ZTN2cGQ4Nzlpbjhh"
          target="_blank"
          className={`p-4 bg-green-700 rounded-full text-center ${view === "claro" ? "text-white" : ""} hover:bg-green-900 transition duration-150 ease-in`}
        >
          Fale conosco <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
