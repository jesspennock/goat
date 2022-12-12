import React from "react";
import blakeRopeSwing from "../../images/blakeRopeSwing.jpg"
import "./cardExpanded.css"

const CardExpanded = () =>{
    return(
        <div className="card-expanded">
                <img src ={blakeRopeSwing} className="ec-photo"/>
                <div className="expanded-content">
                <h2>Rope Swing at Mona Ponds</h2>
                <h3>Utah</h3>
                <p>
                    Spend the day paddleboarding, fishing, picnicking and rope-swinging at this beautiful pond that's not too far off the beaten path.
                </p>
                
                <p>Mona Rope Swing, 201 Burraston Rd, Mona, UT 84645</p>
                <p>Approximate Cost per Person: Free</p>
                <p>Cost Notes: This is a public pond, no parking or entrance fees required.</p>
                <p>Tips and Supplies: Bring fishing gear, bug spray, and your camera!</p>
                <p>Learn More: <a href="https://www.santaquin.org/community/page/mona-reservoir-and-burraston-ponds" target="_blank" rel="noreferrer">Mona River and Burraston Ponds</a></p>
            </div>

        </div>
    )
};

export default CardExpanded;