import React from 'react';
import './SignUp.css';
function SignUp() {
    return (
        <div className='login-signin'>
            <h2>
                Log In
            </h2>
            <form className='sign-in-container'>
                Email
                <br />
                <input placeholder='Enter Email Here' />
                Password
                <br />
                <input placeholder='Enter Your Password' />
                <button className='button-style' onClick={() => { }}>Eat In</button>
            </form>
        </div>
    )
}

export default SignUp