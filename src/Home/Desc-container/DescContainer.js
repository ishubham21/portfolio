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
            <div className="btn-conatiner">
                <Link to='/resume'>
                    <button>Resume</button>
                </Link>
                <Link to='/Projects'>
                    <button>Projects</button>
                </Link>
            </div>

        </div>
    )
}

export default DescContainer;