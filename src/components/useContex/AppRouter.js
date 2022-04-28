import React from 'react'
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

import About from './About'; 
import Home from './Home'; 
import Login from './Login'; 
import { NavBar } from './NavBar';





export const AppRouter = () => {
  return (
    <Router>
        <div>
           
        <NavBar />

        <div className='container'>
        <Routes>
            
            <Route exact path="/" element={<Home />} />

                <Route exact path="/about" element={<About />} />
                <Route exact path="/login" element={<Login />} />
                {/* <Redirect to="./" /> */}

          </Routes>
        </div>


           
        </div>
    </Router>
  )
}

