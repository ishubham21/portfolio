import React from 'react';
import './Projects.css'
import { useState, useEffect } from 'react'
import Card from './Card/Card'

const Projects = () => {

    const [notLoaded, setLoaded] = useState(true)
    const [projects, setProjects] = useState(null)

    useEffect(() => {
        setProjects(require('./../../assets/portfolio-data/projects.json'))
        setLoaded(false)
    }, [projects])

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