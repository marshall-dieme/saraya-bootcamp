import React, { Component } from 'react';
import axios from 'axios';

import './contact.css'
class Contact extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            fName : "",
            lName : "",
            email : "",
            phone : "",
            message : ""
        }
    }

    clearForm = () => {
        this.setState({
            fName : "",
            lName : "",
            email : "",
            phone : "",
            message : ""
        })
    }

    formSubmit = () => {
        axios.post("https://localhost:8080/api/contact/send-email", {
            first_name : this.state.fName,
            last_name : this.state.lName,
            email : this.state.email,
            phone : this.state.phone,
            message : this.state.message
        }).then(resp => {
            alert("your message has been sent successfully")
            this.clearForm()
        })
        .catch(err => alert("Error while sending message try again later"))
    }
    
    firstNameChange = (event) => {
        this.setState({first_name : event.target.value})
    }

    lastNameChange = (event) => {
        this.setState({last_name : event.target.value})
    }

    emailChange = (event) => {
        this.setState({email : event.target.value})
    }

    phoneChange = (event) => {
        this.setState({phone : event.target.value})
    }

    messageChange = (event) => {
        this.setState({message : event.target.value})
    }

    render() {
        return (
            <section className="contact-section">
                <div className="box">
                    <div className="contact-box form">
                        <h3>Send a message</h3>
                        <form onSubmit={this.formSubmit()}>
                            <div className="formBx">
                                <div className="row50">
                                    <div className="inputBx">
                                        <span>First Name</span>
                                        <input type="text" name="fName" id="" onChange={this.firstNameChange} value={this.state.fName} />
                                    </div>
                                    <div className="inputBx">
                                        <span>Last Name</span>
                                        <input type="text" name="lName" id="" onChange={this.lastNameChange} value={this.state.lName} />
                                    </div>
                                </div>
                                <div className="row50">
                                    <div className="inputBx">
                                        <span>Email</span>
                                        <input type="text" name="email" id="" onChange={this.emailChange} value={this.state.email} />
                                    </div>
                                    <div className="inputBx">
                                        <span>Phone</span>
                                        <input type="text" name="phone" id="" onChange={this.phoneChange} value={this.state.phone} />
                                    </div>
                                </div>
                                <div className="row100">
                                    <div className="inputBx">
                                        <span>Message</span>
                                        <textarea name="message" id="" onChange={this.messageChange} value={this.state.message}></textarea>
                                    </div>
                                </div>
                                <div className="row100">
                                    <div className="inputBx">
                                        <input type="submit" value="Send" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="contact-box info">
                        <h3>Contact infos</h3>
                        <div className="infoBx">
                            <div>
                                <span><ion-icon name="location"></ion-icon></span>
                                <p>Liberte 4, Dakar <br /> Senegal</p>
                            </div>
                            <div>
                                <span><ion-icon name="mail"></ion-icon></span>
                                <a href="mailto:vsoumare@yahoo.com">vsoumare@yahoo.com</a>
                            </div>
                            <div>
                                <span><ion-icon name="call"></ion-icon></span>
                                <a href="tel:+16148040625">+1 614 804 0625</a> &nbsp; - &nbsp;
                                <a href="tel:+221776411195">+221 776 411 195</a>
                            </div>
                            <ul className="social-links">
                                <li><a href="/#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                                <li><a href="/#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                                <li><a href="/#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                                <li><a href="/#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-box map">
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8674834528792!2d-17.461396685844946!3d14.720083139726485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172b70230af43%3A0x93f6526035c55473!2sS.I.C.A.P.%20Liberte%204%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1639929521785!5m2!1sfr!2ssn"  allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        );
    }

}

export default Contact;