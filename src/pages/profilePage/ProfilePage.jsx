import React from "react";
import AdventureCard from "../../components/adventureCard/AdventureCard";
import AdventuresHad from "../../components/adventuresHad/AdventuresHad";
import AdventureBucketList from "../../components/adventureBucketList/AdventureBucketList"

const ProfilePage = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <AdventureCard/>
            <AdventuresHad/>
            <AdventureBucketList/>


        </div>
    )
}

export default ProfilePage