import React from "react";
import FeatureBanner from "../../components/featureBanner/FeatureBanner";
import Searchbar from "../../components/searchbar/Searchbar";
import CardContainer from "../../components/cardContainer/CardContainer";
import AdventureCard from "../../components/adventureCard/AdventureCard";
import CardExpanded from "../../components/cardExpanded/CardExpanded";

const HomePage = () => {
    return(
        <div>
            <FeatureBanner/>
            <Searchbar/>
            <CardContainer/>
            <CardExpanded/>
        </div>
    )
}

export default HomePage;