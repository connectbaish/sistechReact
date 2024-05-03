import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div id='one'>
        <Link to='/'> 
        <li> home </li>
        </Link>
        <Link  to='/about'>  
        <li> About </li>
        </Link>

    </div>
  )
}

export default Navbar


