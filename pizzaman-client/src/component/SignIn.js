import React, { useState } from 'react'
const axios = require('axios');
function SignIn() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  var signIn = (e) => {
    e.preventDefault();
    var object = {
      "Name": name,
      "Email": email,
      "Password": password
    };
    console.log(object);
    axios.post('http://localhost:3000/api/auth/signup', object).then((response) => console.log(response))
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className='login-signin'>
      <h2>
        Sign In
      </h2>
      <form className='sign-in-container'>
        Name
        <br />
        <input placeholder='Enter Name Here' value={name} onChange={(e) => { setName(e.target.value) }} />
        Email
        <br />
        <input placeholder='Enter Email Here' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        Password
        <br />
        <input placeholder='Enter Your Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <button className='button-style' onClick={signIn}>Eat In</button>
      </form>
    </div>
  )
}

export default SignIn