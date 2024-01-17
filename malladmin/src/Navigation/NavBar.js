import React from "react";
import { Link } from "react-router-dom";
function NavBar(){
const NavBar=()=>{
    return(
        <nav className='nav'>
         <ul className='navbar-list'>
            <li className='navbar-item'>
                <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className='navbar-item'>
                <Link to="/about" className='nav-link'>About</Link>
            </li>
            <li className='navbar-item'>
                <Link to="/contact" className='nav-link'>Contact</Link>
            </li>

         </ul>
         </nav>
    );
}
}
export default NavBar;