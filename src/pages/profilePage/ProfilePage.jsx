import React from "react";
import AdventureCard from "../../components/adventureCard/AdventureCard";
import AdventuresHad from "../../components/adventuresHad/AdventuresHad";
import AdventureBucketList from "../../components/adventureBucketList/AdventureBucketList"
import "./profilePage.css"

const ProfilePage = () => {
    return (
        <div>
            <div className="profile-banner">
            <h1>Hey Jess! Welcome to your Adventure Tracker Profile</h1>
        </div>
        <div>
            <p></p>
        </div>
        <div className="adventure-elements">
            <AdventuresHad/>
            <AdventureBucketList/>
        </div>

        </div>
    )
}

export default ProfilePage