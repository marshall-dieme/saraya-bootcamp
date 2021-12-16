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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
                                    <span>KM 1 Avenue Cheikh Anta Diop<br/>Dakar, Sénégal</span>
                                </li>
                                <li>
                                    <span><ion-icon name="call-outline"></ion-icon></span>
                                    <span>
                                        <a href="tel:+1234567890">+1 234 567 890</a><br/>
                                        <a href="tel:+987654321">+0 987 654 321</a>
                                    </span>
                                </li>
                                <li>
                                    <span><ion-icon name="mail-outline"></ion-icon></span>
                                    <span>
                                        <a href="mailto:exemple@exemple.com">exemple@exemple.com</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="copyright">Copyright &copy;  Tous droits réservés</div>
            </div>
        );
    }
}

export default Footer;