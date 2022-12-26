import { useState, useRef, useEffect } from "react";
import React from "react";
import "./searchbar.css";
import axios from "axios";

const Searchbar = () =>{
    const searchRef=useRef()

    const [categories, setCategories] = useState([])
    const [searchByCategory, setSearchByCategory] = useState([])

    const getCategories = () => {
        axios
        .get('/api/getCategories')
        .then((res) => {
            console.log(res.data)
            setCategories(res.data.categories)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const [allAdventureCards, setAllAdventureCards] = useState([])
    const [searchAdventureCards, setSearchAdventureCards] = useState([])


    const getAllAdventureCards= () => {
        axios
        .get('/api/getAllAdventures')
        .then((res) => {
            console.log(res.data)
            setAllAdventureCards(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const displayAdventureCard = allAdventureCards.map((adventure)=> {
        return(
            <AdventureCard adventure={adventure}/>
        )
    })

    useEffect(()=> {  
    getAllAdventureCards()
    }, [])
//TODO: COMBINE BOTH OF THESE FUNCTIONS INTO A SINGLE MATCHINGADVENTURES
    const findMatchingAdventures = () => {
        const matchingAdventures = allAdventureCards.filter ((adventure) => {
          let title=adventure.title.toLowerCase()
          let searchParams=searchAdventureCards.toLowerCase()
          //TODO: CHECK FOR SEARCHBYCATEGORY ITEMS, CROSS REFERENCE THEM WITH CATEGORIZATION JUNCTION TABLE
          return title.includes(searchParams)
        })
        return matchingAdventures.map((adventure) => {
          return <AdventureCard adventure={adventure}/>
        })
      }

    const findAdventureByCategory => {
        const matchedAdventures = allAdventureCards.filter ((adventure) => {
            if(adventure.id = searchByCategory.id)
            return adventure
        })
    } 
  
    const categoryChangeHandler = (e) => {
        if(searchByCategory.includes(e.target.value)){
            let newState = searchByCategory.filter((category) => category!==e.target.value)
            setSearchByCategory(newState)
            
        } else {
            setSearchByCategory([...searchByCategory, e.target.value])
    
        }
    }


    const displayCategories = categories.map((category) => {
        return(
            <div className="category-checkbox">
                <input type="checkbox" name="category" id={`cateogry-`+ category.id} value={category.id} onChange={categoryChangeHandler}/>
                <label htmlFor={`category-`+ category.id}>{category.name}</label>
            </div>
        )
    })


    useEffect(()=> {
        getCategories()
    }, [])

    useEffect(()=> {
        console.log(searchByCategory)
    }, [searchByCategory])

    return(
        <div >
            <input type="search" className="searchbar" placeholder="Search for an Adventure!" ref={searchRef}/>
            <h3>Sort By Adventure type:</h3>
            <div className="categories-container">
                {displayCategories}
                {/* <input type="radio" id ="exploring" name="exploring"/>
                <label htmlFor="exploring">Exploring</label>
                
                <input type="radio"id = "hiking" name="hiking"/>
                <label htmlFor="hiking">Hiking</label>

                <input type="radio" id = "biking" name="biking"/>
                <label htmlFor="bikinb">Biking</label>

                <input type="radio" id = "water" name="water"/>
                <label htmlFor="water">Water</label>
                
                <input type="radio" id = "beach" name="beach"/>
                <label htmlFor="beach">Beach</label>

                <input type="radio" id = "rockhounding" name="rockhounding"/>
                <label htmlFor="rockhounding">Rockhounding</label>

                <input type="radio" id = "family-friendly" name="family-friendly"/>
                <label htmlFor="family-friendly">Family-Friendly</label>

                <input type="radio" id = "pet-friendly" name="pet-friendly"/>
                <label htmlFor="pet-friendly">Pet-Friendly</label>

                <input type="radio" id = "free" name="free"/>
                <label htmlFor="free">No or low cost</label>   */}
            </div>
        </div>
    )
};

export default Searchbar;