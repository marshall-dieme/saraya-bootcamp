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
    

    setTimer = () => {
        const countdownDate = new Date(2022, 0, 15, 8, 0, 0).getTime()

        this.interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance > 0) {
                let netSeconds
                if(seconds.toString().length === 1){
                    netSeconds = "0"+seconds
                }else {
                    netSeconds = seconds
                }
                let netMinutes
                if(minutes.toString().length === 1){
                    netMinutes = "0"+minutes
                }else {
                    netSeconds = minutes
                }
                let netHours
                if(hours.toString().length === 1){
                    netHours = "0"+hours
                }else {
                    netHours = hours
                }
                let netDays
                if(days.toString().length === 1){
                    netDays = "0"+days
                }else {
                    netDays = days
                }
                    
                this.setState({
                    days : netDays,
                    hours : netHours,
                    minutes : netMinutes,
                    seconds : netSeconds
                })
            } else {
                clearInterval(this.interval.current)
            }

        }, 1000);
    }

    componentDidMount(){
        this.setTimer()
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
