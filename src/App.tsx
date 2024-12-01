import { Button } from "./components/Button";

export function App() {
  return (
    <Button text="Click me" variant="secondary" onClick={() => alert("clicked")} />
  )
}
