import React from "react";
import "./featureBanner.css"
import FallTrail from "../../images/fallTrail.jpg"

const FeatureBanner = () =>{
    return(
        <div className="banner-container">
            <div className="get-started">
                {/* <img src= {FallTrail} className="banner-photo"/> */}
                <h1>GOAT- Start Tracking Your Adventures</h1>
                <button className="banner-btn">Click Here to Get Started</button>
            </div>
            {/* <h1 className="quote">"Adventure is worthwhile." -Aristotle</h1> */}
            <h1 className="quote">"Life is either a daring adventure, or nothing at all." <br/>-Helen Keller</h1>
        </div>
    )
};

export default FeatureBanner;