import React, { useState } from 'react'
import Axios from 'axios';
import './Login.css'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password
    })
    .then((response) => response.json())
    .then((response)=> {
      console.log("Is this working??");
      console.log(response.data);

      // attempt to set token to local browser storage
      // const token = data.token;
      // localStorage.setItem('token', token);

      // setAuthToken(token);

      alert('User created')
      document.location.href="/";
    })
    .catch((error)=>{
      console.log(error);
    })
  };

  return (
    <div className="container">
      <h1> School DB Login</h1>

      <form onSubmit={handleSubmit}>  
        
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" onChange={(event) => {setEmail(event.target.value)}}/>
        
          
        
          <label htmlFor="" >Password</label>
          <input type="password" name="" id="" onChange={(event) => {setPassword(event.target.value)}} />
        

          {/* <button onClick={handleSubmit}>Submit</button> */}
          <input className="submit" type="submit" value="Submit" />
      

      </form>

    </div>
  )
}

export default Login