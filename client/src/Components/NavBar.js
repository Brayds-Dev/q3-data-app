import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav>
        <h4><Link to='/'>Home</Link></h4>
        <h4><Link to='/login'>Login</Link></h4>
    </nav>
  )
}

export default NavBar