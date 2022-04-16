import React, { useRef } from 'react'
import '../useEffect/effects.css'
export const FocusScreem = () => {

    const inpuRef = useRef();

    const handleClick = ()=>{
       inpuRef.current.select();
    }

  return (
        <div>
              <h1>FocusScreem</h1>
              <input 
              ref = { inpuRef }
              className='form-control'
              placeholder='Agrega nombre'
              />

              <button 
              onClick={ handleClick }
              className='btn btn-outline-warning'> Agregar </button>
            
        </div>
  )
}
