import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle ={
        color: "white"
    };
    const logoStyle ={
        color: "red"
    };
  return (
    <nav>
        <Link style={navStyle} to="/">
            <h3>Reaction<span style={logoStyle}>21</span></h3>
        </Link>        
        <ul className="nav-links">          
        <Link style={navStyle} to="/exercises">
           <li>Add Exercise</li>
        </Link>
        <Link style={navStyle} to="/showexercises">
           <li>Manage Exercises</li>
        </Link>
        <Link style={navStyle} to="/createworkout">
           <li>Enter Workout</li>
        </Link>    
        <Link style={navStyle} to="/showworkouts">
           <li>Show Workouts</li>
        </Link>   
        {/* add register and login */}
        <Link style={navStyle} to="/register">
           <li>Register</li>
        </Link>   
        <Link style={navStyle} to="/login">
           <li>Login</li>
        </Link>     
        </ul>
    </nav>
  );
}

export default Nav;
