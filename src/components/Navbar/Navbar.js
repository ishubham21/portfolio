import React from 'react';
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    
    //state to toggle menu
    const [menuOpen, setMenu] = useState(false)
    
    //function to change menuOpen state 
    const toggleMenu = (e) => {
        if(menuOpen)
            setMenu(false)
        else
            setMenu(true)
    }
     
    return (
        <nav className="navbar">
            <div className="nav-sub-container">
                <div className="nav-blk"></div>
                <div className="nav-title-container">
                    <Link to="/">
                        <h2 className="nav-name">
                            Shubham Gautam
                        </h2>
                    </Link>
                    <p className="slash">
                        /
                    </p>
                    <p className="nav-designation">
                        Software Developer
                    </p>
                </div>

                <div className="nav-link-container">
                    <NavLink exact to='/' className="nav-links" activeClassName="link-active">About Me</NavLink>
                    <NavLink to='/resume' className="nav-links" activeClassName="link-active">Resume</NavLink>
                    <NavLink to='/projects' className="nav-links" activeClassName="link-active">Projects</NavLink>
                    <NavLink to='/contact' className="nav-links" activeClassName="link-active">Contact</NavLink>
                </div>

                <div className={`mobile-nav ${menuOpen ? 'animate-ham': ''}`}>
                    <div className={`nav-ham`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="mobile-link-container">
                        <NavLink exact to='/' className="mobile-nav-links" activeClassName="link-active-mb" onClick={toggleMenu}>About Me</NavLink>
                        <NavLink to='/resume' className="mobile-nav-links" activeClassName="link-active-mb" onClick={toggleMenu}>Resume</NavLink>
                        <NavLink to='/projects' className="mobile-nav-links" activeClassName="link-active-mb" onClick={toggleMenu}>Projects</NavLink>
                        <NavLink to='/contact' className="mobile-nav-links" activeClassName="link-active-mb" onClick={toggleMenu}>Contact</NavLink>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar;