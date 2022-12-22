import React, {useState, useContext} from "react";
import axios from "axios"
import AuthContext from "../../store/authContext";
import {useNavigate} from "react-router-dom";
import "./loginForm.css"

const LoginForm = () =>{
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()
    
    const [username, setUserame] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState(true)


    const enterUsername = (e) => {
        setUserame(e.target.value)
    }

    const enterPassword = (e) => {
        setPassword(e.target.value)
    }

    const changeRegisterState = (e) => {
        setRegister(!register)
    }

    const submitHandler = e => {
        e.preventDefault()
        

        const body = {
            username: username,
            password: password
        }

        let url = register ? '/api/register' : 'api/login'

        axios.post(url, body)
        .then ((res) => {
            console.log(res.data)
            authCtx.login(res.data.token, res.data.exp, res.data.userId)
            navigate("/profile")
        }) 
        .catch ((err) => {
            setUserame("")
            setPassword("")
            console.error(err)
        })

    }

    return(
       <div>
            <form className="login-form" onSubmit={submitHandler}>
                <h2>{register ? 'Create a new Account' : 'Sign in to your Account'}</h2>
                <input type="text" className="form-input" placeholder="type username"  name="username" value={username} onChange={enterUsername}/>

                <input type="password" className="form-input" name="password" placeholder="enter password" value={password} onChange={enterPassword}/>
                    
                <button type="submit" className="login-button">SUBMIT</button> 
                
            </form>
            <button className="form-button" onClick={changeRegisterState}>{register ? 'Already Have an Account? Click Here to Sign In' : 'Sign Up for an Account'}</button>

        </div>
        
    )
};
    export default LoginForm;