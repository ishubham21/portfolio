import { Link } from 'react-router-dom'

const DescContainer = () => {
    return (
        <div className="DescContainer">
            <div className="headline-1">
                Hello
            </div>
            <div className="headline-2">
                Here's who I am & what I do
            </div>
            <div className="btn-container">
                <Link to='/resume'>
                    <button className="resume-btn">Resume</button>
                </Link>
                <Link to='/Projects'>
                    <button className="project-btn">Projects</button>
                </Link>
            </div>
            <div className="bio-paragraph">
                I'm an engineering undergrad and a programmer. I work as a Full-Stack Web Developer with experience in handling JavaScript, Node, React and Angular coding, designs and extensions.
            </div>
            <div className="bio-paragraph">
                I've been an MLH Fellow (Summer' 21) and I love developing software solutions and tackling challenges using new technologies. I'm currently an SDE Intern at Warmspace. Oh also, I love commuities! I Have been a Lead at Google DSC, Postman Student Community, and an MLSA :)
            </div>
        </div>
    )
}

export default DescContainer;
