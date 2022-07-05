import './Footer.css'
import github from './../../assets/icons/logo-github.svg'
import linkedin from './../../assets/icons/logo-linkedin.svg'
import instagram from './../../assets/icons/logo-instagram.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="sub-container">

                <div className="license-container">
                    <p>By <strong> Shubham Gautam </strong></p>
                    <p>No © copyright issues :)</p>
                </div>

                <div className="social-container">
                    <div className="sub-box">
                        <p className="text-bold">Write</p>
                        <p className="content">ishubham2101@gmail.com</p>
                    </div>
                    <div className="sub-box">
                        <p className="text-bold">Follow</p>
                        <div className="social-icons">
                            <a href="https://linkedin.com/in/ishubham21" target="_blank" rel="noreferrer">
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/ishubham21" target="_blank" rel="noreferrer">
                                <img src={github} alt="GitHub" />
                            </a>
                            <a href="https://instagram.com/ishubham21" target="_blank" rel="noreferrer">
                                <img src={instagram} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
