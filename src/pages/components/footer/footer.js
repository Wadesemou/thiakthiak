import React from 'react';
// import logo from '../logo.svg';
import {Link}  from "react-router-dom";
// import '../../App.css';
import './footer.css';

function Footer() {
  return(
    <footer id="block_bottom">
      <div id="block_bottom_top" > 
        <div id="block_bottom_right" >
          <h2 id="title">About us</h2>
          <ul>
          <li><Link to=""><span className="fab fa-facebook-f"></span>facebook</Link></li>
          <li><Link to=""><span className="fab fa-linkedin"></span>Linked In</Link></li>          
          <li><Link to=""><span className="fab fa-instagram-square"></span>Istagram</Link></li>
          <li><Link to=""><span className="fab fa-whatsapp-square"></span>Whatsapp</Link></li>
          <li><Link to=""><span className="fab fa-twitter-square"></span>Twiter</Link></li>
          </ul>
        </div>
        <div id="block_bottom_left" >
          <h2 id="title">News</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis qui quis veritatis? Labore quasi nihil sint maiores suscipit? Ipsam fugiat sint praesentium laboriosam tempora. Impedit harum excepturi nesciunt maxime!                
          </p>
        </div>
        <div id="block_bottom_center" >
          <h2 id="title ">Go in Touch</h2>
          <div id="div"> 
          <label >Email</label>
          <input type="email" placeholder="give your mail address"/>
          <label >Message</label>
          <textarea name="message" id="" cols="45" rows="5" placeholder="give your comment about what you think or advice !!"></textarea>
          <button type="submit" ><h1>Send</h1></button>
          </div>
        </div>                
      </div>
      <div id="block_bottom_bottom" >
                <h1 id="copyright" >&copy; Copyright 2021, <Link to="/"> Powered by WeCode !</Link></h1>
      </div>
    </footer> 
  );
}

export default Footer;

