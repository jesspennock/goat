import React, {useRef, useEffect, useState, useContext} from "react";
import "./createAdventureCard.css"
import axios from "axios"
import AuthContext from "../../store/authContext";
import { useNavigate } from "react-router-dom";

const CreateAdventureCard = () => {
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()

    const adventureTitle = useRef()
    const adventureSummary = useRef()
    const costPerPerson = useRef()
    const costNotes= useRef()
    const tipsAndSupplies = useRef()
    const generalLocation = useRef()
    const googleMapsPin = useRef()
    const adventureLink= useRef()
    const adventurePhotoLink = useRef()
    const privateStatus = useRef()

    const [categories, setCategories] = useState([])
    const [userCategories, setUserCategories] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        let adventureData = {
            userId: authCtx.userId,
            title: adventureTitle.current.value,
            summary: adventureSummary.current.value,
            cost: parseInt(costPerPerson.current.value) * 100,
            costNotes: costNotes.current.value,
            extras: tipsAndSupplies.current.value,
            locDetails: generalLocation.current.value,
            locPin: googleMapsPin.current.value,
            link: adventureLink.current.value,
            imageUrl:adventurePhotoLink.current.value,
            private: privateStatus.current.checked,
            categories: userCategories
        }

        axios
        .post('/api/createAdventureCard', adventureData)
        .then ((res) => {
            console.log(res.data)
            alert(res.data.title + " adventure was successfully created!")
            navigate("/profile")
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getData = () => {
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
        if(userCategories.includes(e.target.value)){
            let newState = userCategories.filter((category) => category!==e.target.value)
            setUserCategories(newState)  
        } else {
            setUserCategories([...userCategories, e.target.value])
        }
    }


    const displayCategories = categories.map((category) => {
        return(
            <div className="category-checkbox" key={`category-item-${category.id}`}>
                <input type="checkbox" name="category" id={`category-${category.id}`} value={category.id} onChange={categoryChangeHandler}/>
                <label htmlFor={`category-${category.id}`}>{category.name}</label>
            </div>
        )
    })

    useEffect(() => {
        getData()
    }, [])

    return(
        <div>
            <form className="new-adventure-card" onSubmit={submitHandler}>
                <h2>Create your own adventure card to save and share!</h2>
                <label className="new-adventure-input">Adventure Title:
                    <input type="text" ref={adventureTitle}></input>
                </label>
                <label className="new-adventure-input">Adventure Summary:
                    <textarea type="textarea" rows={8} placeholder="Tell us about this adventure in 1-3 sentences." ref={adventureSummary}></textarea>
                </label>
                <h4>What type of adventure was this?</h4>
                <p>Select all relevant categories <br/>
                This way, other users can narrow down their search for an adventure by the type of experience.</p>
                <div className="categories-container">
                    {displayCategories}
                </div>
                <label className="new-adventure-input">Cost per person (just give us a rough estimate!):
                    <input type="number" placeholder="$" ref={costPerPerson}></input>
                </label>
                <label className="new-adventure-input">Notes about cost:
                    <input type="text" placeholder="Tell us what adventure goers can expect as for as cost. Entrance fees? Permits? etc." ref={costNotes}></input>
                </label>
                <label className="new-adventure-input">Tips and Supplies:
                    <input type="text" placeholder="What did you need to bring to make this outing a success?" ref={tipsAndSupplies}></input>
                </label>
                <label className="new-adventure-input">Location (Just give us the city and state or city and country here. We will grab a google pin in the next step.)
                    <input type="text" ref={generalLocation}></input>
                </label>
                <label className="new-adventure-input">Google Pin (This helps us make adventures searchable by location!)
                    <input type="text" ref={googleMapsPin}></input>
                    <h4>
                        Need help finding a Google Pin to your adventure location? <a href="https://support.google.com/maps/answer/144361?hl=en&co=GENIE.Platform%3DDesktop">Click Here</a>
                    </h4>
                </label>
                <label className="new-adventure-input">Link to More Info:
                    <input type="text" placeholder="Copy and paste a link to the Venue, Park, Travel Blog page, etc. here" ref={adventureLink}></input>
                </label>
                <label className="new-adventure-input">Upload an Image:
                    <h4>Upload a photo here or copy and paste a link to a photo below</h4>
                    <input type="text" placeholder="IMAGE URL" ref={adventurePhotoLink}></input>
                </label>

                <div className="public-private">
                    <div>Uploading your adventure card will add it to the database and share your adventures. Check the "private" box to upload adventures only you can see on your profile page.</div>
                    <input type="checkbox" id ="private" name="private" ref={privateStatus}/>
                    <label htmlFor="exploring">Private</label>
                </div>
                                
                <button type="submit">Submit to build your Adventure Card</button>
            </form>
        </div>
    )
};

export default CreateAdventureCard;