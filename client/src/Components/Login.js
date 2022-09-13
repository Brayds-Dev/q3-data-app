import React from 'react'
import './Login.css'

function Login() {
  return (
    <div class="container">
      <h1> School DB Login</h1>

      <form action="">  
        <field>
          <label htmlFor="">User</label>
          <input type="text" name="" id="" />
        </field>
          
        <field>
          <label htmlFor="" >Password</label>
          <input type="password" name="" id="" />
        </field>

        <field class="submit">
          <button>Submit</button>
        </field>

      </form>

    </div>
  )
}

export default Login