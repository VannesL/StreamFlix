import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {

  const Style={
    textDecoration: 'none',
    color: 'wheat'
  };

  return (
    <nav>
        <h1>Logo</h1>
        <ul className="links">
            <Link style={Style} to='/'>
              <li>Home</li>
            </Link>
        </ul>
        <div className="wallet">Rp. 100.000</div>
    </nav>
  );
}

export default Nav;
