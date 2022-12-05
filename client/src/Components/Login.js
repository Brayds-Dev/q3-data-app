import React, { useState } from 'react'
import axios from 'axios';
import './Login.css'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    axios.post("http://localhost:3001/login", {
      email: email,
      password: password
    },
    // {timeout: 1000}
    )
    // .then((response) => response.json())
    .then((response)=> {
      console.log("Is this working??");
      console.log(response.data);

      // attempt to set token to local browser storage
      window.localStorage.setItem('token', response.data.token);
      alert('User logged in')
      document.location.href="/";
    })
    .catch((error)=>{
      console.log(error);
    })
  };

  return (
    <div className="container">
      <h1> School DB Login</h1>

      <form>  
        
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" onChange={(event) => {setEmail(event.target.value)}}/>
        
          
        
          <label htmlFor="" >Password</label>
          <input type="password" name="" id="" onChange={(event) => {setPassword(event.target.value)}} />
        

          <button onClick={handleSubmit} type="button">Submit</button>
          {/* <input className="submit" type="submit" value="Submit" /> */}
      

      </form>

    </div>
  )
}

export default Login