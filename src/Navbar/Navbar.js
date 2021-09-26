import { useState } from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to='/about' className="nav-links">About Me</Link>
                    <Link to='/resume' className="nav-links">Resume</Link>
                    <Link to='/projects' className="nav-links">Projects</Link>
                    <Link to='/contact' className="nav-links">Contact</Link>
                </div>

                <div className={`mobile-nav ${menuOpen ? 'animate-ham': ''}`}>
                    <div className={`nav-ham`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="mobile-link-container">
                        <Link to='/about' className="mobile-nav-links" onClick={toggleMenu}>About Me</Link>
                        <Link to='/resume' className="mobile-nav-links" onClick={toggleMenu}>Resume</Link>
                        <Link to='/projects' className="mobile-nav-links" onClick={toggleMenu}>Projects</Link>
                        <Link to='/contact' className="mobile-nav-links" onClick={toggleMenu}>Contact</Link>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar;