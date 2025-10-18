// Componente pai
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsExample from './components/PropsExample';

function App() {

  return (
    <>
      <h1>Hello World React!</h1>
      {/* Componente importado */}
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample name="André" age={23} />
    </>
  )
}

export default App;
