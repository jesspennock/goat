import React, {useContext} from "react";
import AdventureCard from "../adventureCard/AdventureCard";
import "./cardContainer.css"
import AuthContext from "../../store/authContext";

const CardContainer = ({adventures, count, bucketList, addToBucketListHandler}) => {
    const authCtx = useContext(AuthContext) 

    const displayAdventureCards = adventures.map((adventure)=> {
        const inBucketList = bucketList.includes(adventure.id)
        const isOwner = adventure.userId == authCtx.userId
        const showBucketListBtn = authCtx.token && !inBucketList && !isOwner
        return(
            <AdventureCard
                key={`adventure-${adventure.id}`}
                adventure={adventure}
                addToBucketListHandler={showBucketListBtn && addToBucketListHandler}
            />
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