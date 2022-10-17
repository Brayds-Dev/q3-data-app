import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    axios
      .post(
        "http://localhost:3001/login",
        {
          email: email,
          password: password,
        },
        { timeout: 1000 }
      )
      .then((response) => {
        console.log("Is this working??");
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        alert("User Loged In");
        document.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <h1> School DB Login</h1>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label>Password</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        {/* <input className="submit" type="submit" value="Submit" /> */}
      </form>
    </div>
  );
}

export default Login;
