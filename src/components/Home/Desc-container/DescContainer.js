import React from 'react';
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
                I'm an engineering undergrad and a programmer. I work as a Web Developer with experience in handling JavaScript, Node, React and Angular coding, designs and extensions.
            </div>
            <div className="bio-paragraph">
                I've been an MLH Fellow (Summer' 21) and I'm also a content writer with a versatile style of writing, working as a Technical Content Writer at InterviewBit.
            </div>
        </div>
    )
}

export default DescContainer;