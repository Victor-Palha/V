import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Hello } from "./components/Hello";
import { Over } from "./components/Over";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";


export function App() {
  return (
    <>
    <div className="px-6 bg-bg1">  
      <Header/>
      <main className="mt-10 flex flex-col gap-16 pb-14">
        <Card/>
        <Hello/>
        <Over/>
      </main>
    </div>
    <About/>
    <Skills/>
    <Works/>
    </>
  )
}
