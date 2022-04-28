import React, {useEffect, useReducer} from 'react'
import { useForm } from '../../hooks/useForm'
import './styles.css'
import TodoAdd from './TodoAdd'
import { TodoList } from './TodoList'
import {reducer} from './TodoReducer'

//valor inicila de la tarea

const init = () => {

//le damos la instruccion de que traiga del local storage el item todos, si no estan en lugar que traiga un NULL le decimos con el operasor or que traiga un array vacio
    return JSON.parse(localStorage.getItem("todos")) || [];
//   return  [{
//         id: new Date().getTime(),
//         desc: "Todo",
//         done: false,
//     }]
}

//Creamos el Functional Component
const AppReducer = () => {
//Creamos el hook use Reducer, en donde reducer es un componente aparte 
    const [todos, dispatch] = useReducer(reducer, [], init);

//cada vez que se cambe un todo se guardara en el loal storage
useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])


const handleDelete =( todoId ) => {

    const action = {
        type:"delete",
        payload: todoId,

    };

    dispatch(action);

}

const handleToggle = (todoId) =>{

    dispatch({
        type: "toggle",
        payload: todoId
    })

}

const handleAddTodo = (newtodo) => {

    dispatch({
        type:"add",
        payload: newtodo,
    });
}

// console.log(todos);

  return (
     <div>
       
        <h1 className='fer'>Reducer({todos.length})</h1>
       <br/>
            
        <div className='row mt-4'>

            <div className='col-7'>
                <h2>Tareas</h2>

                    < TodoList 
                        todos={todos}
                        handleDelete= {handleDelete}
                        handleToggle = {handleToggle}
                    />
            </div>

            <div className='col-5'>
               
               <TodoAdd 
                handleAddTodo={handleAddTodo}
               
               />

            </div>

        </div>
      
    </div>
  )
}

export default AppReducer;
