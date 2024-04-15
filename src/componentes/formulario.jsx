import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
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
      id: uuidv4(),
      text: input,
    }
    sendInput(task)
    

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