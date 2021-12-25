import React, { Component } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './banner.css'

import img1 from '../../../images/1.jpg'
import img2 from '../../../images/3.jpg'

class Banner extends Component {
    render() {
        var settings = {
            dots : false,
            infinite : true,
            speed : 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
            autoplaySpeed: 5000,
            centerMode : true,
            fade : true,
            pauseOnHover : false
        }
        return (
            <div className="banner-div">
                <Slider {...settings}>
                    <section className="banner">
                        <img src={img1} alt="" className="cover" />
                        <div className="banner-text">
                            <div className="banner-info">
                                <div className="banner-content">
                                    <h2>Title 1</h2>
                                    
                                    <p>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="banner">
                        <img src={img2} alt="" className="cover" />
                        <div className="banner-text">
                            <div className="banner-info">
                                <div className="banner-content">
                                    <h2>Title 2 </h2>
                                    
                                    <p>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Slider>
            </div>
        );
    }
}

export default Banner;