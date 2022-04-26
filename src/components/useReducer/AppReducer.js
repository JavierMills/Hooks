import React, {useReducer} from 'react'
import './styles.css'
import {reducer} from './TodoReducer'


const initialstate = [{
    id: new Date().getTime(),
    description: "todo",
    done: false,
}]


const AppReducer = () => {

    const [todos] = useReducer(reducer, initialstate);
    // const reducer1 = reducer;
    // console.log(todos);
console.log(todos);

  return (
     <div>
       
        <h1 className='fer'>Reducer({todos.length})</h1>
        <p className='p'></p>
            <br />
        <div className='row'>

            <div className='col-7'>
                
                    <ul className='list-group list-group-flush' >
                    {
                        todos.map( (todo , i) => (
                            <li 
                            key={todo.id} 
                            className="list-group-item">

                            <p className='text-center complete'> {i + 1}.  {todo.description}</p>
                            
                                <button class="btn btn-outline-warning" type="button">Agregar</button>
                                
                            </li>
                    ))
                        
                        
                    }

                    </ul>
            </div>

            <div className='col-5'>
                <h4>Agregar Task</h4>

                <form>

                    <input 
                    type="text"
                    name="description"
                    className='form-control'
                    placeholder='Agregar'
                    autoComplete='off'
                    />

                 <div class="d-grid gap-2 d-md-block">
                <button className='btn btn-outline-info'>Agregar Nueva Tarea</button>
                    
                    </div>

                </form>
            </div>

        </div>
      
    </div>
  )
}
export default AppReducer;


















{/* <nav className='navbar'>
            <ul className='list'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul> */}
        {/* </nav> */}