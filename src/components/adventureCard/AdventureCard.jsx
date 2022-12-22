import React from "react";
import { Link } from "react-router-dom";
import "./adventureCard.css"

const AdventureCard = ({adventure}) => {
    const adventureCardStyle = {
        backgroundImage: `url(${adventure.imageUrl})`
    };
    return(
        <div className="adventure-card">
            <div className='ac-photo' style={adventureCardStyle}></div>
            <div className="card-content">
                <h2>{adventure.title}</h2>
                <p>{adventure.summary}</p>
                <Link to={`/adventure/${adventure.id}`}>
                    <button>Check it out</button>
                </Link>
            </div>
        </div>
    )
};

export default AdventureCard;