import { useState } from "react";
import Header from "./components/Header";
import Start from "./components/Start";
import Services from "./components/Services";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [view, setView] = useState("claro");
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <div
      className={`${view === "claro" ? "bg-slate-100" : "bg-slate-950 text-white"} w-screen h-full transition duration-200 ease-in`}
    >
      <Header
        view={view}
        setView={setView}
        navBarOpen={navBarOpen}
        setNavBarOpen={setNavBarOpen}
      />
      <Start view={view} />
      <Services view={view} />
      <Features view={view} />
      <Contact view={view} />
      <Footer view={view} />
    </div>
  );
}
