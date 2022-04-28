import React, { useContext } from 'react'
import { UserContext } from './UserContex';



const Login = () => {

  const {setUser} = useContext(UserContext);
  // console.log(user);


  const handleClick = () => (
    setUser({
      id: 1234566,
      name:"Ramiro"
    })
  )


  return (
    <div>
      <h1>LoginScreem</h1>
      <hr />
      <button className='btn btn-success' onClick={handleClick}>Agregar</button>
    </div>
  )
}

export default Login