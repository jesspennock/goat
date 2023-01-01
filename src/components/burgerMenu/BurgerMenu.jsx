import React, {useState} from "react";
import "./burgerMenu.css"

const BurgerMenu = () => {

    const [open, setOpen] = useState(false)
    return(
        <div className="burger-menu" open ={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default BurgerMenu;