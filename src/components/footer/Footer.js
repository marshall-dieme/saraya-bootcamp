import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './footer.css'
class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <footer>
                    <div className="footer-container">
                        <div className="sec aboutus">
                            <h2>About us</h2>
                            <p>
                                Learn coding in <code>few weeks</code><br />
                                Our Development bootcamp teaches you all the stack. You will learn the core concepts of object-oriented programming in Java, and structure your software following design patterns like MVC. In addition to mastering back-end programming language (Java, SQL), you will develop your front-end skills using recent techniques like flexbox, CSS grid and learn ES6, the latest version of JavaScript.                              
                            </p>
                            <ul className="socials">
                                <li><a href="/"><ion-icon name="logo-facebook"></ion-icon></a></li>
                                <li><a href="/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                                <li><a href="/"><ion-icon name="logo-twitter"></ion-icon></a></li>
                                <li><a href="/"><ion-icon name="logo-linkedin"></ion-icon>  </a></li>
                            </ul>
                        </div>
                        <div className="sec quicklinks">
                            <h2>Quick links</h2>
                            <ul>
                                <li><Link to="/training">Training</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                        <div className="sec contact">
                            <h2>Contact</h2>
                            <ul className="infos">
                                <li>
                                    <span><ion-icon name="location-outline"></ion-icon></span>
                                    <span>SICAP Liberté 4<br/>Dakar, Sénégal</span>
                                </li>
                                <li>
                                    <span><ion-icon name="call-outline"></ion-icon></span>
                                    <span>
                                        <a href="tel:+16148040625">+1 614 804 0625</a><br/>
                                        <a href="tel:+221776411195">+221 776 411 195</a>
                                    </span>
                                </li>
                                <li>
                                    <span><ion-icon name="mail-outline"></ion-icon></span>
                                    <span>
                                        <a href="mailto:vsoumare@yahoo.com">vsoumare@yahoo.com</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="copyright">Copyright &copy; 2022  All rights reserved</div>
            </div>
        );
    }
}

export default Footer;