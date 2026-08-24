import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Hello } from "./components/Hello";
import { Over } from "./components/Over";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

export function App() {
  return (
    <>
    <div className="relative px-6 bg-bg1 overflow-hidden" id="top">
      {/* Ambient background: subtle grid + brand glows */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand1/10 blur-3xl animate-glow" />
      <div className="pointer-events-none absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-brand2/10 blur-3xl" />

      <div className="relative">
        <Header/>
        <main className="mt-10 flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center gap-16 pb-20">
          <Card/>
          <Hello/>
          <Over/>
        </main>
      </div>
    </div>
    <About/>
    <Skills/>
    <Works/>
    <Footer/>
    <BackToTop/>
    </>
  )
}
