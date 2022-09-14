import React from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css';

function NavBar() {
  return (
    <div class="navbar">
      <nav>
        <ul class="left">
          <li><Link to='/login'>Logout</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
          
        <ul class="right">
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