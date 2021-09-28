const Card = ({ experience }) => {
    return (
        <div className="card">
            <div className="details">
                <h4 className="timeline">
                    {experience.from} - {experience.to}
                </h4>
                <p className="job-title">
                    {experience.position}
                </p>
            </div>
            <div className="description">
                <ul>
                    {experience.experience.map((elem) => (
                        <li>{elem}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Card;