import React, { Component, Fragment } from 'react';
import Banner from './banner/Banner';
import Countdown from './countdown/Countdown';
import Intro from './intro/Intro';

class Home extends Component {
    render() {
        return (
            <>
                <Banner />
                <Intro />
                <Countdown />
            </>
        );
    }
}

export default Home;