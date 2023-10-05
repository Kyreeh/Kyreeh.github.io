import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StyleSheet.module.css';



function Navbar() {
  return (
    <div  className={styles.navbar}>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Me</Link>
        </li>
        <li><img 
        src="logo192.png" alt="Logo" className="navbar-logo"  />
        </li>
        <li>
         <input type="text" placeholder="Search" className="navbar-search" />
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
