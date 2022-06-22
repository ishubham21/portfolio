import './Resume.css'
import { useState, useEffect } from 'react'
import Card from './Card/Card'
import AchivementsCard from './AchivementCard/AchivementsCard'

const Resume = () => {

    const [experiences, setExperience] = useState(null);
    const [communities, setCommunity] = useState(null);
    const [achivements, setAchivement] = useState(null);
    const [volunteerings, setVolunteering] = useState(null);

    //show loading section, if not loaded
    const [notLoaded, setLoaded] = useState(true)

    const resumeLink = 'https://resume.meshubham.live';

    useEffect(() => {

        //setting experience, communities, achivements, volunterring
        setExperience(require('./../../assets/portfolio-data/experience.json'))
        setCommunity(require('./../../assets/portfolio-data/community.json'))
        setAchivement(require('./../../assets/portfolio-data/achivements.json'))
        setVolunteering(require('./../../assets/portfolio-data/volunteering.json'))

        //setting it to false - for slow networks
        setLoaded(false)
    }, [experiences, communities, achivements, volunteerings])

    return (
        <div className="resume-container">
            <div className="resume-sub-container">
                <div className="heading">
                    <div className="resume-blk"></div>
                    <h2 className="resume-head">Resume</h2>
                </div>
                <div className="position-section">

                    <div className="section-divider">
                        <h3>Experience</h3>
                        <a href={resumeLink} target="_blank" rel="noreferrer">
                            <button className="btn-blue">
                                <span>DOWNLOAD CV</span>
                            </button>
                        </a>
                    </div>

                    {notLoaded && <div className="loading-blk">Loading...</div>}

                    {experiences && experiences.map((experience) => (
                        <Card experience={experience} key={experience.id} />
                    ))}

                    <div className="section-divider">
                        <h3>Communities</h3>
                    </div>

                    {notLoaded && <div className="loading-blk">Loading...</div>}

                    {communities && communities.map((community) => (
                        <Card experience={community} key={community.id} />
                    ))}

                    <div className="section-divider">
                        <h3>Achivements</h3>
                    </div>

                    {notLoaded && <div className="loading-blk">Loading...</div>}

                    {achivements && achivements.map((achivement) => (
                        <AchivementsCard achivement={achivement} key={achivement.id} />
                    ))}

                    <div className="section-divider">
                        <h3>Volunteering</h3>
                    </div>

                    {notLoaded && <div className="loading-blk">Loading...</div>}

                    {volunteerings && volunteerings.map((volunteering) => (
                        <Card experience={volunteering} key={volunteering.id} />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Resume;
