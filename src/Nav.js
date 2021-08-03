import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import NumberFormat from 'react-number-format';

function Nav() {

  const Style={
    textDecoration: 'none',
    color: 'wheat'
  };

  var balance = 100000;

  return (
    <nav>
        <h1>Logo</h1>
        <ul className="links">
            <Link style={Style} to='/'>
              <li>Home</li>
            </Link>
        </ul>
        <div className="wallet">
          <div>Rp.</div>
          <div id="value">{balance}</div>
        </div>
    </nav>
  );
}

export default Nav;
