import React from "react";
import {NavLink, Link} from 'react-router-dom';
import MtnGoat from "../../images/mtnGoat.png"
import "./header.css"

const Header = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/">
                    <img src ={MtnGoat} className="goat-logo"/>
                </Link>
                <h3>Going On Adventures Tracker</h3>
            </div>
            <div className="nav-right">
                <NavLink to="/login">
                    Login
                </NavLink>
                <NavLink to="/logout">
                    Logout
                </NavLink>
                <NavLink to="/faq">
                    FAQs
                </NavLink>
                <NavLink to="/adventure-quotes">Get Inspired
                </NavLink>
            </div>
        </nav>
    )
};

export default Header;