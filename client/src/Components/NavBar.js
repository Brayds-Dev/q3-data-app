/**
 * Date: September 2022
 * Team: Wise Wellingtonians - Whitecliffe IT6037 Group Project
 * 
 * This is the nav bar component.  Levereages the 'Link' library
 * from react to call different components.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const logOut = () => {
      window.localStorage.clear();
  } 
  return (
    
    <div className="navbar">
      <nav>

        {/**All components aligned to the left of the screen */}
        <ul className="left">
          <li><Link to='/register'>Register</Link></li>
          <li onClick={logOut}><Link to='/login'>Logout</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>

        {/**All components aligned to the right of the screen */}  
        <ul className="right">
          <li><Link to='/arts'>Arts</Link></li>
          <li><Link to='/mathematics'>Mathematics</Link></li>
          <li><Link to='/technology'>Technology</Link></li>
          <li><Link to='/create'>Create</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar