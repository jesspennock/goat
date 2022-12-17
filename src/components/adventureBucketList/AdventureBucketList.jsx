import React from "react";
import AdventureCard from "../adventureCard/AdventureCard";
import "./adventureBucketList.css"

const AdventureBucketList = () =>{
    return(
        <div className="adventure-bucket-list">
            <h2>My adventure bucket list:</h2>
            <div className="bl-adventure-cards">
            <AdventureCard/>
            <AdventureCard/>
            <AdventureCard/>
            <AdventureCard/>
            </div>
        </div>
    )
};

export default AdventureBucketList;