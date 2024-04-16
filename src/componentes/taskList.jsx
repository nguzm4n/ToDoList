import React, { useState, useEffect } from 'react'
import Formulario from './formulario'
import Task from './task'
import '../styles/taskList.css'

const TaskList = () => {

  const [tareas, setTareas] = useState([]);

  const getTasks = () => {
    const url = 'https://playground.4geeks.com/todo/users/nicolas'
    const options = {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(url, options)
      .then(response => response.json())
      .then(datos => setTareas(datos.todos))
      .catch(error => console.log(error.message))
  }

  useEffect(() => {
    getTasks()
  }, [])


  const agregarTarea = (task) => {
    const url = 'https://playground.4geeks.com/todo/todos/nicolas';
    const options = {
      method: "POST",
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        label: task.text,
        is_done: false
      })
    };

    fetch(url, options)
      .then(response => response.json())
      .then(datos => {
        console.log('Tarea agregada:', datos);
        setTareas([...tareas, datos]);
      })
      .catch(error => console.error('Error al agregar tarea:', error));

  };


  const borrarTarea = (id) => {
    const url = `https://playground.4geeks.com/todo/todos/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(url, options)
      .then(response => {
        if (response.status === 204) {
          console.log('Tarea eliminada:', id);
          const updatedTasks = tareas.filter(task => task.id !== id);
          setTareas(updatedTasks);
        }
      })

      .catch(error => console.error('Error al eliminar tarea:', error));
  };


  return (
    <>
      <Formulario
        sendInput={agregarTarea}
      />
      <div className='task-list-container'>
        {tareas.map(task => (
          <Task
            key={task.id}
            id={task.id}
            text={task.label}
            deleteTask={borrarTarea}
          />
        ))}
      </div>
    </>
  )
}

export default TaskList