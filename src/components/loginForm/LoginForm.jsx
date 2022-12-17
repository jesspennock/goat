import React from "react";
import "./loginForm.css"

const LoginForm = () =>{
    return(
       
        <form className="login-form">
               <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit" className="login-button">SUBMIT</button> 
               
        </form>
        
    )
};
    export default LoginForm;