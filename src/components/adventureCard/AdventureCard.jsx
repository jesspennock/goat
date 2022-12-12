import React from "react";
import blakeRopeSwing from "../../images/blakeRopeSwing.jpg"
import "./adventureCard.css"

const AdventureCard = () =>{
    return(
        <div className="adventure-card">
            <img src ={blakeRopeSwing} className="ac-photo"/>
            <div className="card-content">
            <h2>Rope Swing at Mona Ponds</h2>
            <p>Spend the day paddleboarding, fishing, picnicking and ropeswinging at this beautiful pond that's not too far off the beaten path.</p>
            <button>Check it out</button>
            </div>
        </div>
    )
};

export default AdventureCard;