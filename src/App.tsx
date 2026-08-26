import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Hello } from "./components/Hello";
import { Featured } from "./components/Featured";
import { Works } from "./components/Works";
import { Stack } from "./components/Stack";
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
        {/* On small screens the pitch and the projects come first; the
            business card is the last thing anyone needs to see. */}
        <main className="mx-auto mt-10 flex max-w-7xl flex-col items-center gap-12 pb-16 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <div className="order-3 w-full max-w-sm lg:order-none lg:w-auto">
            <Card/>
          </div>
          <div className="order-1 w-full lg:order-none">
            <Hello/>
          </div>
          <div className="order-2 w-full max-w-sm lg:order-none lg:w-auto">
            <Featured/>
          </div>
        </main>
      </div>
    </div>
    <Works/>
    <Stack/>
    <Footer/>
    <BackToTop/>
    </>
  )
}
