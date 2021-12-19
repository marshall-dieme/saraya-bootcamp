import React, { createRef } from 'react'

import './countdown.css'

class Countdown extends React.Component {
    

    constructor(props) {
        super(props)
    
        this.interval = createRef()
        this.state = {
            days : '00',
            hours : '00',
            minutes : '00',
            seconds : '00'
        }
    }
    
    calculateLeftTime = () => {
        let diff = new Date(2022, 0, 15).getTime() - new Date().getTime()
        if(diff > 0) {
            this.setState({
                days : Math.floor((diff / (1000 * 60 * 60 * 24))).toString().length === 1 ? "0"+Math.floor((diff / (1000 * 60 * 60 * 24))) : Math.floor((diff / (1000 * 60 * 60 * 24))),
                hours : Math.floor((diff / (1000 * 60 * 60) % 24)).toString().length === 1 ? "0"+Math.floor((diff / (1000 * 60 * 60) % 24)) : Math.floor((diff / (1000 * 60 * 60) % 24)),
                minutes : Math.floor((diff / 1000 * 60) % 60).toString().length === 1 ? "0"+Math.floor((diff / 1000 * 60) % 60) : Math.floor((diff / 1000 * 60) % 60),
                seconds : Math.floor((diff / 1000) % 60).toString().length === 1 ? "0"+Math.floor((diff / 1000) % 60) : Math.floor((diff / 1000) % 60)
            })
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.calculateLeftTime()
        }, 1000);
    }

    render() {
        return (
            <section className="counter">
                <div className="timer-title">
                    <h1>Next Training will start in :</h1>
                </div>
                <div className="timer">
                    <div className="days">
                        <span className="time">{this.state.days}</span>
                        <span className="text">Days</span>
                    </div>
                    <div className="hours">
                        <span className="time">{this.state.hours}</span>
                        <span className="text">hours</span>
                    </div>
                    <div className="minutes">
                        <span className="time">{this.state.minutes}</span>
                        <span className="text">Minutes</span>
                    </div>
                    <div className="seconds">
                        <span className="time">{this.state.seconds}</span>
                        <span className="text">Seconds</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default Countdown
