import React, { Component } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './banner.css'

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
                        <img src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29kZSUyMGJvb3RjYW1wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="cover" />
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
                        <img src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29kZSUyMGJvb3RjYW1wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="cover" />
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