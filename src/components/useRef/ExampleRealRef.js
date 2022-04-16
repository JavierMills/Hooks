import React, { useState }from 'react';
import '../useEffect/effects.css';
import { FullCustomHooks } from '../examples/FullCustomHooks';

export const ExampleRealRef = () => {

  const [ show, setShow] = useState( false );

  return (
    <div>
        <h1>ExampleRealRef </h1>
        <hr />

        { show && <FullCustomHooks /> }
       
        <button
           className='btn btn-success mt-5'
           onClick= { () => {

            setShow( !show );

           }}
           
        > Show/Hide </button>
    </div>
  )
}
