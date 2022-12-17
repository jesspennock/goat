import { useState, useRef } from "react";
import React from "react";
import "./searchbar.css";

const Searchbar = () =>{
    const searchRef=useRef()


    return(
        <div >
            <input type="search" className="searchbar" placeholder="Search for an Adventure!" ref={searchRef}/>
            <h3>Sort By Adventure type:</h3>
            <div className="categories-container">
                    <input type="radio" id ="exploring" name="exploring"/>
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
                    <label htmlFor="free">No or low cost</label>

                    
                </div>
        </div>
    )
};

export default Searchbar;