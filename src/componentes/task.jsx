import React from 'react'
import { FiDelete } from "react-icons/fi";
import '../styles/task.css'

const Task = ({ id, text, deleteTask }) => {
  return (
    <div className='task-container'>
      <div className='task-text'>
        {text}
      </div>
      <div className='icon-container'>
        <FiDelete 
        className='delete-icon'
        onClick={() => deleteTask(id)}/>
      </div>

    </div>
  )
}

export default Task