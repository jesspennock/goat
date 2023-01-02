import React, {useState, useEffect} from "react";
import axios from 'axios';
import AdventureCard from "../adventureCard/AdventureCard";
import "./cardContainer.css"

const CardContainer = () =>{
    const [allAdventureCards, setAllAdventureCards] = useState([])


    const getAllAdventureCards= () => {
        axios
        .get('/api/getAllAdventures')
        .then((res) => {
            console.log(res.data)
            setAllAdventureCards(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const displayAdventureCards = allAdventureCards.map((adventure)=> {
        return(
            <AdventureCard key={`adventure-${adventure.id}`} adventure={adventure}/>
        )
    })

    useEffect(()=> {  
        getAllAdventureCards()
    }, [])

    return(
        <div>
            <div className ="adventure-counter">Adventures and Counting: {allAdventureCards.length}</div>
            <div className="card-container">
                {displayAdventureCards}
            </div>
        </div>
    )
};

export default CardContainer;