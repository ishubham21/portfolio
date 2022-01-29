import React from 'react';
const AchivementsCard = ({achivement}) => {
    return (
        <div className="card">
            <div className="details">
                <h4 className="timeline">
                    {achivement.year}
                </h4>
                <p className="company-name">
                    {achivement.organization}
                </p>
            </div>
            <div className="description">
                <ul>
                    {achivement.for.map((elem, i) => (
                        <li key={i}>{elem}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AchivementsCard;