import React, { useState } from 'react'
import axios from 'axios'

function Register() {
    // Functions
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Axios request
    //const addUser = () => {
    async function addUser() {
        axios.post("http://localhost:3001/register", 
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password
        })
        //what it does with successfull POST
        .then(function (response) {
            console.log(response);
            console.log("user created successfully");
            alert('User created');
            document.location.href="/login";
        })
        .catch((error) => {
            alert('other error')
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              alert('response error')
            } 
            else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
              alert('request error')
            } 
            else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
    }



  return (
    <div className="container">
      <h1> School DB Register</h1>

      <form action="">  
        
        <label htmlFor="">First Name</label>
        <input type="text" name="" id="" onChange={(event) => {setFirstName(event.target.value)}} />
        
          
        
        <label htmlFor="" >Last Name</label>
        <input type="text" name="" id="" onChange={(event) => {setLastName(event.target.value)}} />
        

        
        <label htmlFor="" >Email</label>
        <input type="email" name="" id="" onChange={(event) => {setEmail(event.target.value)}} />
        

        
        <label htmlFor="" >Password</label>
        <input type="password" name="" id=""onChange={(event) => {setPassword(event.target.value)}} />
        

        
        <button onClick={addUser}>Submit</button>
       

      </form>

    </div>
  )
}

export default Register