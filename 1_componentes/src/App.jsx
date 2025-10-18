// Componente pai
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'

function App() {

  return (
    <>
      <h1>Hello World React!</h1>
      {/* Componente importado */}
      <FunctionalComponent />
    </>
  )
}

export default App;
