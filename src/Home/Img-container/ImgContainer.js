import myImg from './../../assets/imgs/faceimg.jpg'
import insta from './../../assets/icons/logo-instagram.svg'
import linkedin from './../../assets/icons/logo-linkedin.svg'
import call from './../../assets/icons/call-outline.svg'
import github from './../../assets/icons/logo-github.svg'

const ImgContainer = () => {
    return (
        <div className="ImgContainer">
            <div className="img-container">
                <img src={myImg} alt="My Face" />
            </div>
            <div className="name-container">
                Shubham Gautam
            </div>
            <p className="break-line"></p>
            <div className="name-designation">
                Software Developer
            </div>
            <div className="social-medias">
                <img src={linkedin} alt="LinkedIn" />
                <img src={github} alt="GitHub" />
                <img src={call} alt="Phone" />
                <img src={insta} alt="Instagram" />
            </div>
        </div>
    );
}

export default ImgContainer;