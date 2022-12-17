import React from "react";
import { Link } from "react-router-dom";
import "./faqPage.css"

const FaqPage = () => {

    return (
        <div className="faq">
            <h2>So How Does GOAT Work?</h2>
            <p>Browse the adventure cards any time without signing in to get ideas for your next big adventure. When you are ready to start tracking, make an account.  Signing in will allow you to keep track of the adventures you've been on, create a bucket-list of adventures to have, and create your own adventure cards. You can keep these cards private, so they will only be viewable on your profile, or add them to the public database of adventures to share your favorite finds and special spots with others.</p>
            <p></p>
            <p>Bear Grylls said, "Life is an adventure and that is best lived boldly." We hope you feel the same and that you will enjoy having a place to document, share, and plan your adventures with GOAT! </p>
            <div>
                <p>Ready to get started?</p> 
                <Link to = "/login">
                <button className="faq-btn">Click Here To Sign Up</button>
                </Link>

            </div>
        </div>
    )
};
export default FaqPage;