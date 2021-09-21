import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="nav-title-container">
                <div className="nav-blk"></div>
                <p className="nav-name">
                    Shubham Gautam  
                </p>
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
        </nav>
    )
}

export default Navbar;