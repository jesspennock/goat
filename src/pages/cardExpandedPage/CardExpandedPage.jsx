import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./cardExpandedPage.css"

const CardExpanded = () =>{
    
    const {adventureId} = useParams()

    const [adventureDetails, setAdventureDetails] = useState()

    const getAdventureDetails = () => {
        axios
        .post('/api/getAdventureById', {adventureId: adventureId})
        .then((res) => {
            console.log(res.data)
            setAdventureDetails(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(()=> {
        getAdventureDetails()
    }, [])


    return(
        <div className="card-expanded">
            {adventureDetails && 
            <>
            <img src={adventureDetails.imageUrl} className="ec-photo"/>
            <div className="expanded-content">
                <h2>{adventureDetails.title}</h2>
                <h3>{adventureDetails.locDetails}</h3>
                <p>{adventureDetails.summary}</p>
                <p>{adventureDetails.locPin}</p>
                <p>Approximate cost per person: ${adventureDetails.cost/100}</p>
                <p>{adventureDetails.costNotes}</p>
                <p>{adventureDetails.extras}</p>
                <p>Learn More: <a href={adventureDetails.link} target="_blank" rel="noreferrer">{adventureDetails.title}</a></p>
                <p>Adventure Submitted by: {adventureDetails.user.username}</p>
            </div> 
            </>
            } 
        </div>
    )
};

export default CardExpanded;