import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-sub-container">
                <div className="nav-title-container">
                    <div className="nav-blk"></div>
                    <h2 className="nav-name">
                        Shubham Gautam
                    </h2>
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
            </div>
        </nav>
    )
}

export default Navbar;