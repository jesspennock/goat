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
            <AdventureCard adventure={adventure}/>
        )
    })

    useEffect(()=> {  
        getAllAdventureCards()
    }, [])

    return(
        <div className="card-container">
            <div>Adventure Count: {allAdventureCards.length}</div>
            {displayAdventureCards}
        </div>
    )
};

export default CardContainer;