import React, {useState, useEffect} from "react";
import FeatureBanner from "../../components/featureBanner/FeatureBanner";
import Searchbar from "../../components/searchbar/Searchbar";
import CardContainer from "../../components/cardContainer/CardContainer";
import axios from 'axios';

const HomePage = () => {
    const [allAdventureCards, setAllAdventureCards] = useState([])
    const [filteredAdventures, setFilteredAdventures] = useState([])
    const [categorizations, setCategorizatons] = useState([])

    const getAllAdventureCards= () => {
        axios
        .get('/api/getAllAdventures')
        .then((res) => {
            console.log(res.data)
            setAllAdventureCards(res.data)
            setFilteredAdventures(res.data) // initialize filteredAdventures as allAdventureCards
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getCategorizations = () => {
        axios
        .get('/api/getCategorizations')
        .then((res) => {
            console.log(res.data)
            setCategorizatons(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const findMatchingAdventures = ({keywordQuery, selectedCategories}) => {
        if(!keywordQuery && selectedCategories.length === 0) {
            setFilteredAdventures(allAdventureCards)    
        }
        else {
            let matchingAdventures = allAdventureCards.filter ((adventure) => {
                let title = adventure.title.toLowerCase()
                return title.includes(keywordQuery.toLowerCase())
            })

            if (selectedCategories.length > 0) {
                const matchingCategorizations = categorizations.filter((categorization) => {
                    return selectedCategories.includes(categorization.categoryId.toString())
                })
                const matchingAdventuresByCategory = matchingCategorizations.map((categorization) => categorization.adventureId)
                matchingAdventures = matchingAdventures.filter ((adventure) => {
                    return matchingAdventuresByCategory.includes(adventure.id)
                })
                // console.info('selectedCategories', selectedCategories)
                // console.info('matchingAdventuresByCategory', matchingAdventuresByCategory)
            }
            setFilteredAdventures(matchingAdventures)
        }
    }

    useEffect(()=> {  
        getAllAdventureCards()
        getCategorizations()
    }, [])

    return(
        <div>
            <FeatureBanner/>
            <Searchbar filterFunc={findMatchingAdventures}/>
            <CardContainer adventures={filteredAdventures} count={allAdventureCards.length}/>
        </div>
    )
}

export default HomePage;