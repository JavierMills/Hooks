import React, { useContext } from 'react';
import { UserContext } from './UserContex';
// import '../counter.css';


const Home = () => {

  const {user} = useContext(UserContext);
  console.log(user);
  return (
    <div>
        <h1>HomeScreeam</h1>
        <hr />
        <pre className='container'>
          {JSON.stringify( user, null, 3)}
        </pre>
    </div>
  )
}

export default Home