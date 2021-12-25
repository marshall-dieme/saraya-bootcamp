import React, { Component } from 'react';

import './intro.css'

import img1 from '../../../images/1.jpg'
import img2 from '../../../images/3.jpg'

class Intro extends Component {
    render() {
        return (
            <section className="intro-section">

                <div className="course-box">
                    <div className="imgBx">
                        <img src={img1} alt="" />
                    </div>
                    <div className="detailBx">
                        <h2>
                            full stack java training
                        </h2>
                        <p>
                        We offer professional full stack training and hire for our graduates. Our in depth training covers everything from standard software to complex systems.  Our ultimate goal is to get graduates the right job according to their fits.  
                        </p>
                    </div>
                </div>

                <div className="course-box">
                    <div className="imgBx">
                        <img src={img2} alt="" />
                    </div>
                    <div className="detailBx">
                        <h2>
                            become <span>an</span> IT professional
                        </h2>
                        <p>
                            If you're planning on acquiring tech skills for your professional growth or you are just curious about your own potentials, you are at the one right place. <br /> If you have the willingness, the time and the dedication to train  full time we will get you to your next career. 
                        </p>
                    </div>
                </div>


            </section>
        );
    }
}

export default Intro;