import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StyleSheet.module.css';

// Import image files
import logoImage from '../assets/logo192.png';
import facebookImage from '../assets/facebook-logo.png';
import twitterImage from '../assets/twitter-logo.png';
import instagramImage from '../assets/instagram-logo.png';

function Navbar() {
  return (
    <div className={styles.navbar}>
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
          <li>
            <img src={logoImage} alt="Logo" className="navbar-logo" />
          </li>
          <li>
            <input type="text" placeholder="Search" className="navbar-search" />
          </li>
        </ul>
        <a href="https://www.linkedin.com/in/kyreeherron" target="_blank" rel="noopener noreferrer">
          <img src={facebookImage} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterImage} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramImage} alt="Instagram" />
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
