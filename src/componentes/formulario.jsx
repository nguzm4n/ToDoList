import React, { useState } from 'react'
import '../styles/formulario.css'

const Formulario = ({ sendInput }) => {

  const [input, setInput] = useState("")

  const createTask = e => {
    if (e.key == 'Enter') {
      const newTask = e.target.value
      setInput(newTask)
    }
  }

  const sendTask = e => {
    e.preventDefault()

    const task = {
      text: input,
    }
    sendInput(task)
    setInput("")
    

  }

  return (
    <form className='form-task'
      onSubmit={sendTask}>
      <input className='form-control input-task'
        onKeyDown={createTask}
        placeholder='Type your Task'
        type='text'
        name='text'
      
        />
    </form>
  )
}

export default Formulario