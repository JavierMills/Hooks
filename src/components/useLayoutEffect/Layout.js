import React,{ useLayoutEffect, useRef, useState} from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './Layout.css';

export const Layout = () => {

  const {counter, decrement, increment, reset }=useCounter(1);

  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

  const [boxsize, setBoxSize] = useState({});

  const { quote} = !!data && data[0];
  
  useLayoutEffect(() => {

        setBoxSize(pTag.current.getBoundingClientRect())

  }, [quote])

  const pTag = useRef();

  return (
    <div>
        <h1>LayoutEffect</h1>
        <hr />
                <blockquote className='blockquote text-right'>
                <p className='mb-0'
                ref={ pTag }
                >{quote}</p>
                <br />
                </blockquote>

                <pre>{JSON.stringify( boxsize, null, 10)}</pre>

     <button className='btn btn-warning'
     onClick={ increment }
     >Cambiar Frase</button>
     <br />
       <button className='btn btn-info'
     onClick={ decrement }
     >Volver a la Frase Anterior</button>
    <br />
    <button className='btn btn-danger'
     onClick={ reset }
     >Frase Incial</button>


      
    </div>
  )
}
