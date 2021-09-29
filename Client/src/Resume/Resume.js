import './Resume.css'
import { useState, useEffect } from 'react'
import Card from './Card/Card'
import AchivementsCard from './AchivementCard/AchivementsCard';

const Resume = () => {

    const [experiences, setExperience] = useState(null);
    const [communities, setCommunity] = useState(null);
    const [achivements, setAchivement] = useState(null);
    const [volunteerings, setVolunteering] = useState(null);

    //show loading section, if not loaded
    const [notLoaded, setLoaded] = useState(true)

    useEffect(() => {

        //fetching the experiences - using endpoint since we already have a proxy set up in package.json
        fetch('/experience')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setExperience(data)
                setLoaded(false)
            })
            .catch(err => console.error('Error encountered while fetching the data ' + err))

        //fetching the achivements
        fetch('/achivements')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAchivement(data)
                setLoaded(false)
            })
            .catch(err => console.error('Error encountered while fetching the data ' + err))

        //fetching the community
        fetch('/community')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCommunity(data)
                setLoaded(false)
            })
            .catch(err => console.error('Error encountered while fetching the data ' + err))

        //fetching the volunteering
        fetch('/volunteering')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVolunteering(data)
                setLoaded(false)
            })
            .catch(err => console.error('Error encountered while fetching the data ' + err))

    }, [])

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
                        <a href="http://google.com" target="_blank" rel="noreferrer">
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