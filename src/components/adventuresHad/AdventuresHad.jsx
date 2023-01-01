import React, {useState, useEffect, useContext} from "react";
import axios from "axios"
import AuthContext from "../../store/authContext";
import AdventureCard from "../adventureCard/AdventureCard";
import "./adventuresHad.css"

const AdventuresHad = () =>{

    const authCtx = useContext(AuthContext)

    const [userAdventures, setUserAdventures] = useState([])

    const getAdventuresHad = () => {
        axios
        .post('/api/getCurrentUserAdventures', {userId: authCtx.userId})
        .then((res) => {
            console.log(res.data)
            setUserAdventures(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const deleteAdventure = (id) => {
        axios
        .delete(`/api/deleteAdventureCard/${id}`)
        .then((res) => {
            console.log(res.data)
            getAdventuresHad()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const displayAdventuresHad = userAdventures.map((adventure) => {
        return(
            <AdventureCard key={`adventure-${adventure.id}`} adventure={adventure} deleteAdventure={deleteAdventure}/>
        )
    })
    useEffect(() => {
        getAdventuresHad()
    }, [])

    return(
        <div className="adventures-had">
            <h2>Adventures I've Been On:</h2>
            <div className="adventures-had-cards">
                {displayAdventuresHad}
            </div>
        </div>
        )
};

export default AdventuresHad;