import React, { useContext, useState } from 'react';
import { createTokenContext } from '../serice/context';
import './SignUp.css';
import {useNavigate} from 'react-router-dom';
const qs = require('qs');
const axios = require('axios');
function SignUp() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const {token,setToken} = useContext(createTokenContext)
    const [loggedIn,setLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    var logIn = (e) => {
        e.preventDefault();
        var object = {
            "username": email,
            "password": password
        };
        axios.post('http://localhost:3000/api/auth/login', qs.stringify(object)).then((response) => {
            setToken(response.data.token)
            setLoggedIn(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='login-signin'>
            <h2>
                Log In
            </h2>
            <form className='sign-in-container'>
                Email
                <br />
                <input placeholder='Enter Email Here' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                Password
                <br />
                <input placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                {loggedIn?navigate('/'):<button className='button-style' onClick={logIn}>Eat In</button>}
            </form>
        </div>
    )
}

export default SignUp