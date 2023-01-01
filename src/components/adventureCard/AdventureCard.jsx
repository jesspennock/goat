import React from "react";
import { Link } from "react-router-dom";
import "./adventureCard.css"

const AdventureCard = ({adventure, deleteAdventure}) => {
    const adventureCardStyle = {
        backgroundImage: `url(${adventure.imageUrl})`
    };
    return(
        <div className="adventure-card">
            {adventure.private && <div onClick={() => deleteAdventure(adventure.id)}>x</div>}
            <div className='ac-photo' style={adventureCardStyle}></div>
            <div className="card-content">
                <h2>{adventure.title}</h2>
                <h4>{adventure.locDetails}</h4>
                <p>{adventure.summary}</p>
                <Link to={`/adventure/${adventure.id}`}>
                    <button>Check it out</button>
                </Link>
                <button className="bucketList-btn">Add to My Bucket List</button>
            </div>
        </div>
    )
};

export default AdventureCard;