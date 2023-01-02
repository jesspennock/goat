import React from "react";
import AdventureCard from "../adventureCard/AdventureCard";
import "./cardContainer.css"

const CardContainer = ({adventures, count}) =>{

    const displayAdventureCards = adventures.map((adventure)=> {
        return(
            <AdventureCard key={`adventure-${adventure.id}`} adventure={adventure}/>
        )
    })

    return(
        <div>
            <div className ="adventure-counter">
                Adventures and Counting: {count}
            </div>
            <div className="card-container">
                {displayAdventureCards}
            </div>
        </div>
    )
};

export default CardContainer;