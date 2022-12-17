import React from "react";
import { Link } from "react-router-dom";
import blakeRopeSwing from "../../images/blakeRopeSwing.jpg"
import "./adventureCard.css"

const adventureCardStyle = {
    backgroundImage: 'url(' + blakeRopeSwing + ')',
};

const AdventureCard = () =>{
    return(
        <div className="adventure-card">
            {/* <img src ={blakeRopeSwing} className="ac-photo"/> */}
            <div className='ac-photo' style={adventureCardStyle}></div>
            <div className="card-content">
                <h2>Rope Swing at Mona Ponds</h2>
                <p>Spend the day paddleboarding, fishing, picnicking and ropeswinging at this beautiful pond that's not too far off the beaten path.</p>
                <Link to="/adventure">
                <button>Check it out</button>
                </Link>
            </div>
        </div>
    )
};

export default AdventureCard;