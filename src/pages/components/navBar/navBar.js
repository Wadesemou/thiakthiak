import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import Popup from 'reactjs-popup';

function Navbar() {


return ( 
  <header id="nav"> 
    <nav>
      <Link to="/" id="logo">Thiak Thiak</Link>
      <div className="nav-links">
        <Link to="/" className="link active">Accueil</Link>
        <Link to="/contact" className="link">Contact</Link>
        <Link to="/about" className="link">About</Link>
      </div>
      <div className="actions">
        <Link to='/signin' className="btn">Sign In</Link>
        <Link to="/signup" className="link">Sign Up</Link>
      </div>
    </nav>
  </header>
 ) 
}

export default Navbar;