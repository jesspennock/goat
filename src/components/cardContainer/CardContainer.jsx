import React from "react";
import AdventureCard from "../adventureCard/AdventureCard";
import "./cardContainer.css"

const CardContainer = () =>{
    return(
        <div className="card-container">
            <AdventureCard/>
            <AdventureCard/>
            <AdventureCard/>
            <AdventureCard/>
            <AdventureCard/>
            <AdventureCard/>
            <AdventureCard/>
            <AdventureCard/>
            <AdventureCard/>
        </div>
    )
};

export default CardContainer;