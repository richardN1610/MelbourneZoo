import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    // Declaring the state
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)    //if click then set click to true, switching between the states
    const closeMobileMenu = () => setClick(false)
    const [button, setBtn] = useState(true);

    const showBtn = () => {
        if (window.innerWidth <= 960) {
            setBtn(false);
        } else {
            setBtn(true);
        }
    }

    window.addEventListener('resize', showBtn);

    return (
        <>
            {/* creating fragments */}
            <nav className="navbar">
                <div className="nav-container">
                    {/* using react router dom */}
                    <div className="zoo-logo-title">
                        <div className="page-title">
                            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>{/*link is similar to a tag in html */}
                                <h2>Melbourne Zoo</h2>
                            </Link>
                        </div>
                        <div className="random">
                            <h3>Wildlife</h3>
                            <h3>Conservation</h3>
                            <h3>Science <span className="i-curved">at work</span></h3>
                        </div>
                        {/* <div className="menu" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i> {/*Creating a toggle button for the menu. changes class if clicked */}
                        {/*</div> */}
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="about-us" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="about-us" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="about-us" onClick={closeMobileMenu}>
                                Experiences
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="about-us" onClick={closeMobileMenu}>
                                Animals
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="about-us" onClick={closeMobileMenu}>
                                Tickets
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="about-us" onClick={closeMobileMenu}>
                                News
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
