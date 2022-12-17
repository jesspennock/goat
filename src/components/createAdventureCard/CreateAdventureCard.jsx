import React, {useRef} from "react";
import "./createAdventureCard.css"

const CreateAdventureCard = () =>{
    const adventureTitle = useRef()
    const adventureSummary = useRef()
    const costPerPerson = useRef()
    const costNotes= useRef()
    const tipsAndSupplies = useRef()
    const generalLocation = useRef()
    const googleMapsPin = useRef()
    const adventureLink= useRef()
    const adventurePhotoLink = useRef()

    return(
        <div>
            <form className="new-adventure-card">
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
                <label className="new-adventure-input">Cost per person (just give us a rough estimate!):
                <input type="integer" placeholder="Number value only here" ref= {costPerPerson}></input>
                </label>
                <label className="new-adventure-input">Notes about cost:
                <input type="integer" placeholder="Tell us what adventure goers can expect as for as cost. Entrance fees? Permits? etc." ref={costNotes}></input>
                </label>
                <label className="new-adventure-input">Tips and Supplies:
                <input type="text" placeholder="What did you need to bring to make this outing a success?" ref= {tipsAndSupplies}></input>
                </label>
                <label className="new-adventure-input">Location (Just give us the state, or country if it's outside the US, here. We will grab a google pin in the next step.)
                <input type="text" ref={generalLocation}></input>
                </label>
                <label className="new-adventure-input">Google Pin (This helps us make adventures searchable by location!)
                <input type="text" for={googleMapsPin}></input>
                <h4>Need help finding a Google Pin to your adventure location? <a href="https://support.google.com/maps/answer/144361?hl=en&co=GENIE.Platform%3DDesktop">Click Here</a></h4>
                    
                </label>
                <label className="new-adventure-input">Link to More Info:
                <input type="text" placeholder="Copy and paste a link to the Venue, Park, Travel Blog page, etc. here" ref={adventureLink}></input>
                </label>
                <label className="new-adventure-input">Upload an Image:
                    <h4>Upload a photo here or copy and paste a link to a photo below</h4>
                <input type="text" placeholder="IMAGE URL" ref={adventurePhotoLink}></input>
                </label>

                <div className="public-private">
                    <div>Set your adventure card to public to add it to the database and share your adventures. Set it to private to keep track of adventures only you can see on your profile page.</div>
                    <input type="radio" id ="public" name="public"/>
                    <label htmlFor="public">Public</label>
                    <input type="radio" id ="private" name="private"/>
                    <label htmlFor="exploring">Private</label>
                </div>
                    
                                
                <button type="submit">Submit to build your Adventure Card</button>
            </form>
        </div>
    )
};

export default CreateAdventureCard;