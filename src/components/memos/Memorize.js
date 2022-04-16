import React, { useState }from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../useEffect/effects.css';
import { Small } from './Small';
export const Memorize = () => {

    const {counter, increment} = useCounter(0);
    console.log( counter );
    
    const [show, setshow] = useState(true);

  return (
    <div>
        <h1>Memorize: <Small value={ counter } /> </h1>

        <button className='btn btn-info'
        onClick={ increment }
        >Incrementar</button>

    <button className='btn btn-outline-warning ml-3'
            onClick={ () => {
                setshow( !show );
            }}
    >Show/Hide { JSON.stringify( show )}</button>


    </div>
  )
}
