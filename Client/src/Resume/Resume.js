import './Resume.css'
import { useState, useEffect } from 'react'
import Card from './Card/Card'

const Resume = () => {

    const [experiences, setExperience] = useState(null);
    const [volunteering, setVolunteering] = useState(null);

    //show loading section, if not loaded
    const [notLoaded, setLoaded] = useState(true)

    useEffect(() => {

        //fetching the experiences
        fetch('/experience')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setExperience(data)
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
                        <h3>Volunteering</h3>
                    </div>

                    {notLoaded && <div className="loading-blk">Loading...</div>}

                    {volunteering && volunteering.map((volunteer) => (
                        <Card experience={volunteer} key={volunteer.id} />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Resume;