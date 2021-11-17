import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="melbourne-zoo">
                    <div className="zoo-title">
                        <h1>Melbourne Zoo</h1>
                    </div>
                    <div className="opening-hrs">
                        <h2>Opening Hours:</h2>
                        <span className="open-hours">9:00 AM - 5:00 PM <br />(Last Entry At 4:00 PM) <br /></span>
                        <span className="closing">Open every day except Christmas</span>
                    </div>
                    <div className="list support">
                        <ul className="support-header">SUPPORT
                            <li className="footer-content">Ticket</li>
                            <li className="footer-content">Events</li>
                        </ul>
                    </div>
                    <div className="list">
                        <ul className="support-header">ABOUT THE ZOO
                            <li className="footer-content">About Us</li>
                            <li className="footer-content">Get In Touch</li>
                            <li className="footer-content">Animals</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
