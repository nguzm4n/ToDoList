import React, { useState, useEffect } from 'react'
import Formulario from './formulario'
import Task from './task'
import '../styles/taskList.css'
import { FaTrashAlt } from "react-icons/fa";

const TaskList = () => {

  const [tareas, setTareas] = useState([]);
  const [user, setUser] = useState('')

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
    getUser()
    getTasks()
  }, [])

  const getUser = () => {
    const url = 'https://playground.4geeks.com/todo/users/nicolas'
    const options = {
      method: "GET",
      headers: { 'Accept': 'application/json' } 
    }

    fetch(url, options)
      .then(response => response.json())
      .then(datos => setUser(datos.name))
      .catch(error => console.log(error.message))
  }
  

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

  
  const deletUser = () => {
    
    const url = "https://playground.4geeks.com/todo/users/nicolas";
    const options = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(url, options)
      .then(response => {
        if (response.status === 204) {
          console.log('Usuario eliminado');
        }
      })
      .catch(error => console.error('Error al eliminar tarea:', error));
      
  }

  const deletall = () => {
    deletUser()
    getTasks()
  }


  return (
    <>
      <Formulario
        sendInput={agregarTarea}
      />
      <div className='task-list-container'>
        {tareas ? tareas.map(task => (
          <Task
            key={task.id}
            id={task.id}
            text={task.label}
            deleteTask={borrarTarea}
          />
        )) : <h3></h3>} { tareas ? <h2>{`You Have ${tareas?.length } Pending Tasks`}</h2> :<h2>You Have 0 Pending Tasks</h2> }


        <div className='container d-flex justify-content-center'>
          <div className='row '>
          
          <h3 className=''>Delete all tasks  <FaTrashAlt 
        onClick={deletall}
        /></h3> 
       
        </div>
        </div>
        
      </div>
    </>
  )
}

export default TaskList


