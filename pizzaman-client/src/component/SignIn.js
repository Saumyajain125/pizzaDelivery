import React from 'react'

function SignIn() {
  return (
    <div className='login-signin'>
            <h2>
                Sign In
            </h2>
            <form className='sign-in-container'>
                Email
                <br />
                <input placeholder='Enter Email Here' />
                Password
                <br />
                <input placeholder='Enter Your Password' />
                Confirm Password
                <br />
                <input placeholder='Retype Your Password' />
                <button className='button-style' onClick={() => { }}>Eat In</button>
            </form>
        </div>
  )
}

export default SignIn