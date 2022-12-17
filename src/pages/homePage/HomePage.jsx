import React from "react";
import FeatureBanner from "../../components/featureBanner/FeatureBanner";
import Searchbar from "../../components/searchbar/Searchbar";
import CardContainer from "../../components/cardContainer/CardContainer";
import AdventureCard from "../../components/adventureCard/AdventureCard";
import CardExpanded from "../cardExpandedPage/CardExpandedPage";

const HomePage = () => {
    return(
        <div>
            <FeatureBanner/>
            <Searchbar/>
            <CardContainer/>
        </div>
    )
}

export default HomePage;