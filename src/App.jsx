import { useState } from 'react'
import './App.css'
import TaskList from './componentes/taskList'



function App() {


  return (
    <div className='App container-fluid d-flex flex-column justify-content-center '>
      <div className='contenedor-principal mt-5'>
        <h1>To Do List!</h1>
        <TaskList />
      </div>
    </div>
  )
}

export default App
