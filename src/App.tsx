import { useEffect } from 'react'
import './App.css'

export default function App() {
  useEffect(() => {
    document.title = 'Flux IDE - Home';
  }, []);

  return (
    <>
      <h1>Flux IDE Home</h1>
    </>
  )
}

