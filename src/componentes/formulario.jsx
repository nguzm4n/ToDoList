import React, { useState } from 'react'


const Formulario = ({sendInput}) => {

const [input, setInput] = useState("")

const createTask = e => {
    const newTask = e.target.value
    setInput(newTask)
    console.log(newTask)
}

const sendTask = e => {
    e.preventDefault()
}

  return (
    <form className='form-task'
    onSubmit={sendTask}>
        <input className='form-control input-task'
        onKeyDown={createTask}/>
    </form>
  )
}

export default Formulario