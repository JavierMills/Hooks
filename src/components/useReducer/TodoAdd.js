import React from 'react'
import { useForm } from '../../hooks/useForm';

const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: "",
    });

    const handlesubmit = (e) => {
        e.preventDefault();
        
          //cuando la tarea tengamas de un valor se agregara si tiene menos de un valor no se va agregar nada
    if(description.trim().length <= 1){
        return;
        }

        //creamos un nuevo objeto donde tendra el actual todo
    const newtodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
    };

        handleAddTodo(newtodo);
    reset();

    }

  return (
    <div>
    <h2>Agregar Task</h2>


         <form onSubmit={handlesubmit}>

            <input 
                type="text"
                name="description"
                className='form-control'
                placeholder='Agregar'
                autoComplete='off'
                value={ description }
                onChange={ handleInputChange }
            />

            <div className="d-grid gap-2 d-md-block">
                <button type="submit" className='btn btn-outline-success mt-3'>Agregar Nueva Tarea</button>
            </div>

        </form>
</div>
  )
}

export default TodoAdd