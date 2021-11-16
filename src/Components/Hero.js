import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Hero.css'

function Hero() {
    return (
        <div className="hero-container">
            <img src={require('../Images/nav-bg.jpg').default} className="nav-bg" />
            <div className="greet">
                <span className="greeting-title">Welcome To Melbourne Zoo </span><br /><br /><br /><br />
            </div>
            <div className="about-btn-div">
                <Button buttonStyle='btn-outline' buttonSize='btn-large'>Learn More</Button>
            </div>
            <div className="open-hrs-wrapper">
                <i className="far fa-clock"><span className="open-hrs-title">    Opening Hours:</span></i><br /><br />
                <span className="business-hours">9:00 AM - 5:00 PM (Last Entry At 4:00 PM)</span>
                <Button buttonStyle='btn-outline' buttonSize='btn-large'>Kids Free Visit<i className="fas fa-ticket-alt"></i></Button>
            </div>

        </div>
        
    )
}

export default Hero

