import React from 'react'
import { TodolistItem } from './TodolistItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
  return (
    <ul className='list-group list-group-flush' >
                    {
                        todos.map( (todo , i) => (
                           <TodolistItem 
                                key={todo.id}
                                todo={todo}
                                i={i}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                           />
                    ))
                        
                        
                    }

                    </ul>
  )
}
