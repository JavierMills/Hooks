import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../useEffect/effects.css';

export const FullCustomHooks = () => {

  const {counter, decrement, increment, reset }=useCounter(1);

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

  const { author, quote} = !!data && data[0];

  console.log( author, quote );
  return (
    <div>
        <h1>Breaking Bad</h1>
        <hr />

      {

        //
        loading 
        ?
            (    
                <div className='alert alert-warning text-center'>
                Loading...
                </div>
            )

        :

            (
                <blockquote className='blockquote text-left'>
                <p className='mb-0'>{author}</p>
                <br />
                <footer className='blockquote-footer'>{ quote }</footer>
                </blockquote>
            )


      }

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
