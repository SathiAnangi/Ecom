import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

function Footer() {
  return (
   <>
       <div className="footer">
        <div className="container">
            <div className="row col-md-12">
                <div className="footer-logo col-md-3">
                    <img src={Logo}   alt=""/>
                </div>
                <div className="home col-md-3 ">
                    <ul className="list light">
                        <li> <Link to="/home">home</Link></li>
                        <li> <Link to="/about us"> about us</Link></li>
                        <li> <Link to="/our solutions">Our Solutions</Link></li>
                        <li> <Link to="/client stories">Client Stories</Link></li>
                    </ul>
                </div>
                <div className="insight col-md-3  ">
                    <ul className="list light">
                        <li><Link to="/insight"> Insight</Link> </li>
                        <li><Link to="/press releases">PressReleases</Link> </li>
                        <li><Link to="/contact us">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="social-Icons col-md-3">
                    <ul className="social-network social-circle">

                        <i className="fa-brands fa-facebook"></i>

                        <i className="fa-brands fa-twitter"></i>

                        <i className="fa-brands fa-instagram"></i>

                        <i className="fa-brands fa-youtube"></i>

                        <i className="fa-solid fa-envelope"></i>
                    </ul>
                </div>
            </div>
            <hr className="light"/>
        </div>
        <div className=" row col-md-12 light copyright">
            <p className="text-center"> © Copyright 2023 - MindFi. All rights reserved. </p>
        </div>
    </div>
   
   </>
  )
}

export default Footer