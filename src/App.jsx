import { useState } from 'react'
import './App.css'
import Formulario from './componentes/formulario'

function App() {


  return (
   <div className='App container-fluid d-flex flex-column justify-content-center '>
    <div className='contenedor-principal mt-5'>
      <h1>Tasks!</h1>
      <Formulario />
    </div>
   </div>
  )
}

export default App
