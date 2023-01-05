import { useState, useEffect } from "react";
import React from "react";
import "./searchbar.css";
import axios from "axios";

const Searchbar = ({filterFunc}) =>{
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [keywordQuery, setKeywordQuery] = useState("")

    const getCategories = () => {
        axios
        .get('/api/getCategories')
        .then((res) => {
            // console.log(res.data)
            setCategories(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const categoryChangeHandler = (e) => {
        if(selectedCategories.includes(e.target.value)){
            let newState = selectedCategories.filter((category) => category!==e.target.value)
            setSelectedCategories(newState)
        } else {
            setSelectedCategories([...selectedCategories, e.target.value])
        }
    }
    const keywordChangeHandler = (e) => {
        setKeywordQuery(e.target.value)
    }
    const searchSubmitHandler = (e) => {
        e.preventDefault()
        const searchQueryData = {
            keywordQuery: keywordQuery,
            selectedCategories: selectedCategories
        }
        filterFunc(searchQueryData)
    }
    const displayCategories = categories.map((category) => {
        return(
            <div className="category-checkbox" key={`category-${category.id}`}>
                <input type="checkbox" name="category" id={`cateogry-`+ category.id} value={category.id} onChange={categoryChangeHandler}/>
                <label htmlFor={`category-`+ category.id}>{category.name}</label>
            </div>
        )
    })

    useEffect(()=> {
        getCategories()
    }, [])

    return(
        <div className="search">
            <form onSubmit={searchSubmitHandler}>
                <input type="search" className="searchbar" placeholder="Search by keyword" onChange={keywordChangeHandler}/>
                <h3>Search By Adventure Type:</h3>
                <div className="categories-container-searchbar">
                    {displayCategories}
                </div>
                <button type="submit" className = "search-submit-btn">Search</button>
            </form>
        </div>
    )
};

export default Searchbar;