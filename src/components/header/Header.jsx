import React, {useContext} from "react";
import {NavLink, Link, useNavigate} from 'react-router-dom';
import AuthContext from "../../store/authContext";
import MtnGoat from "../../images/mtnGoat.png"
import "./header.css"
import BurgerMenu from "../burgerMenu/BurgerMenu";

const Header = () => {
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()

    const logoutAlert = (e) => {
        e.preventDefault()
        authCtx.logout()
        alert("Successfully logged out!")
        navigate("/")
    }

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/">
                    <img src ={MtnGoat} className="goat-logo"/>
                </Link>
                <h3 className="goat-name">Going On Adventures Tracker</h3>
            </div>
            {/* <BurgerMenu /> */}
            <div className="nav-right">
                <NavLink to ="/">
                    Home
                </NavLink>
                <NavLink to="/faq">
                    FAQs
                </NavLink>
          
                {authCtx.token &&
                    <>
                        <NavLink to="/profile">
                            Profile
                        </NavLink>
                        <Link onClick={logoutAlert}>
                            Log Out
                        </Link>
                    </>
                }
                {!authCtx.token && <NavLink to ="/login">
                    Sign Up/Login
                </NavLink>}
            </div>
        </nav>
    )
};

export default Header;