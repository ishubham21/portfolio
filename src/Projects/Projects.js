import './Projects.css'
import { useState, useEffect } from 'react'
import Card from './Card/Card'
import projectData from '../assets/portfolio-data/projects'

const Projects = () => {

    const [notLoaded, setLoaded] = useState(true)
    const [projects, setProjects] = useState(null)

    //checking if the projects are loaded or not
    useEffect(() => {
        fetch(projectData)
            .then(() => {
                setLoaded(false)
                setProjects(projectData)
            })
            .catch(err => console.log('An error occured - ' + err))
    }, [projects])  //dependency array - check for the changes in projects

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