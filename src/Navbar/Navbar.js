import React from 'react';
import { Link } from 'react-router-dom';

function  Navbar ({title, icon}) {

  return (
    <div className="bg-primary text-light navbar">
      <h1 className='p-3'>
        <i className={icon}></i>
        {title}
      </h1>
      <ul className='navbar-item'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
 
}

Navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
}

export default Navbar
