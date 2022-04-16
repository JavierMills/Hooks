import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';


export const SimpleForm = () => {

    //useEfect nos permite ejucar un efecto secundario cuando algo suceda en nustros componetes

    const [ fromState , setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = fromState;
    
    
    useEffect(() => {
        // console.log('Holaa');
    },[]);

    useEffect(() => {
        // console.log('fromState cambio');
    },[fromState]);

    useEffect(() => {
        // console.log('Email cambio');
    },[email]);




    const handleInputChange = ({ target }) => {
     
        setFormState({
            ...fromState,
            [ target.name ] : target.value
        })

    }


  return (
    <div>
        <h2> useEffect </h2>
        <hr />
        <div className='form-group'>
            <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value= { name } 
                onChange = { handleInputChange }
            />
        </div>     
       <br />
       
        <div className='form-group'>
            <input
                type='text'
                name='email'
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value= { email } 
                onChange = { handleInputChange }
            />
        </div> 

         { (name ==='123') && <Message />}

    </div>
  )
}

