import React from 'react'
import { shallow} from 'enzyme'
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Prueba en UseCounter', () => {
    
    test('Debe de mostrar valores correctamente', () => { 
//render hook renderiza el hook
        const {result} = renderHook(() => useCounter());
        // console.log(result.current);



        expect( result.current.counter).toBe(0);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

     })

     test('Debe de mostrar counter el 100', () => { 
        //render hook renderiza el hook
                const {result} = renderHook(() => useCounter(100));
                // console.log(result.current);
        
        
        
             expect( result.current.counter).toBe(100);
                
        
             })

test('Debe de incrementar correctamente', () => { 
   //render hook renderiza el hook
   const {result} = renderHook(() => useCounter(100));
    console.log('result',result)
   const {increment}= result.current;
//sirve para renderizar funcioner dentro del counter
 act(() =>{

    increment();

 })

//extraemos el valor del counter para determinr si incremento el vaor del counter 
 const {counter} = result.current;
 expect(counter).toBe(101);

})
       

test('Debe de decrementar correctamente', () => { 
    //render hook renderiza el hook
    const {result} = renderHook(() => useCounter(100));

    const {decrement}= result.current;
 //sirve para renderizar funcioner dentro del counter
  act(() =>{
 
     decrement();
 
  })
 
 //extraemos el valor del counter para determinr si incremento el vaor del counter 
  const {counter} = result.current;
  expect(counter).toBe(99);
 
 })


 test('Debe de resetear correctamente', () => { 
    //render hook renderiza el hook
    const {result} = renderHook(() => useCounter(100));

    const {reset, decrement}= result.current;
 //sirve para renderizar funcioner dentro del counter
  act(() =>{
 
    decrement();
    reset();
  })
 
 //extraemos el valor del counter para determinr si incremento el vaor del counter 
  const {counter} = result.current;
  expect(counter).toBe(100);
 
 })


});
