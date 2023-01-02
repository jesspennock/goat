import React from "react";
import "./footer.css"
import { Link } from "react-router-dom";
import KaydCrawdad from "../../images/kaydCrawdad.jpg"

const Footer = () => {
    return (
        <footer className="footer">
                  <Link to="/adventure-quotes">
                    Get Inspired
                </Link>
            {/* <div>
                <img src= {KaydCrawdad} className="footer-photo"/>
            </div> */}
            <p className="dedication">Dedicated to Kayd, whose life was one big adventure.</p>
        </footer>
    )
};

export default Footer;