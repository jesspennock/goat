import React from "react";
import AdventureCard from "../adventureCard/AdventureCard";
import "./adventuresHad.css"

const AdventuresHad = () =>{
    return(
        <div className="adventures-had">
            <h2>Adventures I've Been On:</h2>
            <div className="adventures-had-cards">
            <AdventureCard/>
            <AdventureCard/>
            <AdventureCard/>
            <AdventureCard/>
            </div>
        </div>
    )
};

export default AdventuresHad;