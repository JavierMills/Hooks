import React, { useCallback, useState } from 'react'
import '../useEffect/effects.css';
import { ShowIncremente } from './ShowIncremente';

export const CallBackHook = () => {

    const [counter, setCounter] = useState( 1 );

    // const incremet = () =>{
    //     setCounter( counter + 1 );
    // }
    const incremet = useCallback ((num) => {
            setCounter( c => c + num )
    }, [setCounter])


  return (
    <div>
        <h1>CallBackHook: { counter } </h1>
        <hr />
        <ShowIncremente increment={ incremet }/>
    </div>
  )
}
