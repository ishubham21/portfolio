import myImg from './../../assets/imgs/faceimg.jpg'
import insta from './../../assets/icons/logo-instagram.svg'
import linkedin from './../../assets/icons/logo-linkedin.svg'
import call from './../../assets/icons/call-outline.svg'
import github from './../../assets/icons/logo-github.svg'
import mail from './../../assets/icons/logo-mail.svg'

const ImgContainer = () => {
    return (
        <div className="ImgContainer">
            <div className="img-container">
                <img src={myImg} alt="My Face" />
            </div>
            <div className="name-container">
                <h2>Shubham <br></br> Gautam</h2>
            </div>
            <p className="break-line"></p>
            <div className="name-designation">
                Software Developer
            </div>
            <div className="social-medias">
                <a href="https://linkedin.com/in/ishubham21" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sg2199203@gmail.com" target="_blank" rel="noreferrer">
                    <img src={mail} alt="mail" />
                </a>
                <a href="https://github.com/ishubham21" target="_blank" rel="noreferrer">
                    <img src={github} alt="GitHub" />
                </a>
                <a href="tel:+919950746862" target="_blank" rel="noreferrer">
                    <img src={call} alt="Phone" />
                </a>
                <a href="https://instagram.com/ishubham21" target="_blank" rel="noreferrer">
                    <img src={insta} alt="Instagram" />
                </a>
            </div>
        </div>
    );
}

export default ImgContainer;