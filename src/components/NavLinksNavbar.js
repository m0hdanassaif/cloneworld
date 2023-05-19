import React from 'react';

import { Link } from 'react-router-dom';

const NavLinksNavbar = () => {
  return (
    <nav className="nav-links-navbar">
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/cloneworld">Clones</Link></li>
        {/* <li><Link to="/demo">Demo</Link></li> */}
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/apis">APIs</Link></li>
        <li><Link to="/contact">Found me!</Link></li>
      </ul>
    </nav>
  );
};

export default NavLinksNavbar;
