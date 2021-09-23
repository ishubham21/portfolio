import './Home.css'
import ImgContainer from './Img-container/ImgContainer';
import DescContainer from './Desc-container/DescContainer';

const Home = () => {
    return ( 
        <div className="home-container">
            <div className="home-wrapper">
                <ImgContainer />
                <DescContainer />
            </div>
        </div>
     );
}
 
export default Home;