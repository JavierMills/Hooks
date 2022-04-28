import React, { useContext } from 'react'
import { UserContext } from './UserContex';

const About = () => {

const {user, setUser} = useContext(UserContext);

const handleClick = () => {

  setUser({})

}

  return (
    <div>
        <h1>AboutScreem</h1>
        <hr />
    <pre>
      {
        JSON.stringify(user, null,3)
      }
      </pre>
        <button className='btn btn-warning' onClick={handleClick}>Borrar</button>
    </div>
  )
}

export default About