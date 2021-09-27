import './Resume.css'

const Resume = () => {
    return (
        <div className="resume-container">
            <div className="resume-sub-container">
                <div className="resume-blk"></div>
                <h2 className="resume-head">Resume</h2>
                <div className="position-section">
                    <div className="section-divider">
                        <h3>Experience</h3>
                        <a href="http://google.com" target="_blank" rel="noreferrer">
                            <button>
                                DOWNLOAD CV
                            </button>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;