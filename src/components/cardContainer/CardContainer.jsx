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

    const displayAdventureCard = allAdventureCards.map((adventure)=> {
        return(
            <AdventureCard adventure={adventure}/>
        )
    })

    useEffect(()=> {  
    getAllAdventureCards()
    }, [])

    return(
        <div className="card-container">
            {displayAdventureCard}
            
        </div>
    )
};

export default CardContainer;