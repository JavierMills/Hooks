import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../counter.css'


export const CounterWithCoustomHook = () => {

    const {state, increment, decrement, reset } = useCounter();    

  return (
    <div>
       <h1>Counter with Hook { state } </h1>
       <hr />

       <button className='btn btn-warning'
       onClick={ increment }>Incrementar</button>
       
       <button className='btn btn-danger'
       onClick={ decrement }>Decrementar</button>

       <button className='btn btn-info'
       onClick={ reset }>Resetear</button>

    </div>
  )
}
