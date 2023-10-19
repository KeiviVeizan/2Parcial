import { useState } from 'react'
import './App.css'
import Tarjeta from './componentes/Tarjeta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Tarjeta/>
    </>
  )
}

export default App
