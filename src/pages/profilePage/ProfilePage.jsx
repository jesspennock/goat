import React from "react";
import { Link } from "react-router-dom";
import AdventureCard from "../../components/adventureCard/AdventureCard";
import AdventuresHad from "../../components/adventuresHad/AdventuresHad";
import AdventureBucketList from "../../components/adventureBucketList/AdventureBucketList"
import "./profilePage.css"

const ProfilePage = () => {
    return (
        <div>
            <div className="profile-banner">
            <h1>Hi! Welcome to your Adventure Tracker Profile</h1>
        </div>
        <div>
            <p></p>
        </div>
        <div>
            <h2>Ready to create a new adventure card? Get started here:</h2>
            <Link to="/create">
            <button className="create-adventure-btn">Create a New Adventure Card</button>
            </Link>
        </div>
        <div className="adventure-elements">
            <AdventuresHad/>
            {/* <AdventureBucketList/> */}
        </div>

        </div>
    )
}

export default ProfilePage