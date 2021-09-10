import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

const Menu = () =>{
    return(
        <nav className="Navbar">
            <div className="Menu">
                <h1>Options</h1>
                <Link to='/'><h2><i class="fas fa-user-alt"></i>Account</h2></Link>
                <h2><i class="fas fa-cog"></i>Settings</h2>
                <h2> <i class="fas fa-adjust"></i>DarkMode</h2>
                <h1>Workspace</h1>
                <Link to='project'><h2>Project 0</h2></Link>
            </div> 
            <div className="div-button">
                 <button> <i class="fas fa-plus"></i>New Project </button> 
            </div> 
            
        </nav>
    );
}

export default Menu