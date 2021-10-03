import './Projects.css'
import { useState, useEffect } from 'react'
import Card from './Card/Card'

const Projects = () => {

    const [projects, setProjects] = useState(null)
    const [notLoaded, setLoaded] = useState(true)

    //fetching the projects
    useEffect(() => {
        fetch('/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoaded(false)
            })
            .catch(err => console.error('An error occured' + err))
    }, [])

    return (
        <div className="project-container">
            <div className="project-sub-container">
                <div className="heading">
                    <div className="project-blk"></div>
                    <h2 className="project-head">Projects</h2>
                </div>
                <div className="position-section">

                    {notLoaded && <div className="loading-blk">Loading...</div>}

                    {projects && projects.map((project) => (
                        <Card project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;