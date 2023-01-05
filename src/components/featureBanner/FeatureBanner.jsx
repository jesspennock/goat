import React, {useContext} from "react";
import "./featureBanner.css"
import AuthContext from "../../store/authContext";
import { Link } from "react-router-dom";

const FeatureBanner = () =>{
    const authCtx = useContext(AuthContext)
    return(
        <div className="banner-container">
           
           {!authCtx.token &&  <div className="get-started">
                 
                <h1>GOAT- Start Tracking Your Adventures</h1>
                <Link to = "/login">
                <button className="banner-btn">Click Here to Get Started</button>
                </Link>
            </div>}
            <h1 className="quote">"Life is either a daring adventure, or nothing at all." <br/>-Helen Keller</h1>
        </div>
    )
};

export default FeatureBanner;