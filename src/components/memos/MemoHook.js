import React, { useState, useMemo }from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../useEffect/effects.css';
import {ProcesoPesado} from '../../Helpers/procesoPesado'
export const MemoHook = () => {

    const {counter, increment} = useCounter(10);
    console.log( counter );

    const ProcesoPesadoMemo = useMemo(() => ProcesoPesado(counter), [counter]);


    const [show, setshow] = useState(true);

  return (
    <div>
        <h1> MemoHook </h1>
        <h1>Counter:<small>  { counter } </small>  </h1>

        <hr />

        <h3>{ ProcesoPesadoMemo }</h3>
 

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
