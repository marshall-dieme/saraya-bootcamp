import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal'

import './contact.css'

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

const validation = ({ error, ...rest }) => {
    let checkValidation = false;

    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};

Modal.setAppElement('#root')

class Contact extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name : "",
            email : "",
            phone : "",
            subject : "",
            message : "",
            modal : {
                isOpen : false,
                head : "",
                body : ""
            }
        }
    }

    clearForm = () => {
        this.setState({
            name : "",
            email : "",
            phone : "",
            subject : "",
            message : "",
            error: {
                name : "",
                email : "",
                phone : "",
                subject : "",
                message: ""
            }
        })
    }

    formSubmit = (event) => {
        event.preventDefault()

        axios.post("http://sarayabootcamp-env.eba-rsvun2xm.us-east-2.elasticbeanstalk.com/api/contact/sendEmail", {
            name : this.state.name,
            email : this.state.email,
            phone : this.state.phone,
            subject : this.state.subject,
            message : this.state.message
        }).then(resp => {
            this.setState({
                modal : {
                    isOpen : true,
                    head : "Success",
                    body : "Your message has been successfully sent"
                }
            })
            this.clearForm()
        })
        .catch(err => {
            this.setState({
                modal : {
                    isOpen : true,
                    head : "Error",
                    body : "An error occur while sending message"
                }
            })
        })
    }
    
    formObject = event => {

        event.preventDefault();

        const { name, value } = event.target;
        let error = { ...this.state.error };

        switch (name) {
            case "name":
                error.name = value.length < 10 ? "Name field must contain at least 10 characters!" : "";
                break;
            case "email":
                error.email = regularExpression.test(value)
                    ? ""
                    : "Your email is invalid";
                break;
            case "phone":
                error.phone = value.length < 13 ? "Phone field must contain between 13 and 20 characters" : "";
                break;
            case "subject":
                error.subject =
                    value.length < 5 ? "Subject field must contain at least 5 characters!" : "";
                break;
            case "message":
                error.message =
                value.length > 300 ? "Message field should be 300 characters long!" : "";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value
        })
    };

    render() {
        return (
            <section className="contact-section">
                <Modal isOpen={this.state.modal.isOpen} style={{
                    overlay : {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        zIndex : 1000000
                        
                    },
                    content : {
                        position: 'relative',
                        top: '35%',
                        left: '30%',
                        right: '40px',  
                        bottom: '40px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '5px',
                        outline: 'none',
                        padding: '20px',
                        height : '200px',
                        width : '500px',
                        textAlign : 'center'
                    }
                }}>
                    <h1>{this.state.modal.head}</h1>
                    <p>
                        <br />
                        {this.state.modal.body}
                        <br />
                    </p>
                    <button onClick={() => this.setState({modal : {isOpen : false}})}
                        style={{
                            'padding' : '10px 30px',
                            'marginTop' : '30px',
                            'background' : '#57606f',
                            'border' : 'none',
                            'color' : '#fff',
                            'fontSize' : '1.1em'
                        }}
                    >Close</button>
                </Modal>
                <div className="box">
                    <div className="contact-box form">
                        <h3>Send a message</h3>
                        <form onSubmit={this.formSubmit}>
                            <div className="formBx">
                                <div className="row50">
                                    <div className="inputBx">
                                        <span>Name</span>
                                        <input type="text" name="name" id="" onChange={this.formObject} value={this.state.name} />
                                    </div>
                                    <div className="inputBx">
                                        <span>Email</span>
                                        <input type="text" name="email" id="" onChange={this.formObject} value={this.state.email} />
                                    </div>
                                </div>
                                <div className="row50">
                                    <div className="inputBx">
                                        <span>Phone</span>
                                        <input type="text" name="phone" id="" onChange={this.formObject} value={this.state.phone} />
                                    </div>
                                    <div className="inputBx">
                                        <span>Subject</span>
                                        <input type="text" name="subject" id="" onChange={this.formObject} value={this.state.subject} />
                                    </div>
                                </div>
                                <div className="row100">
                                    <div className="inputBx">
                                        <span>Message</span>
                                        <textarea name="message" id="" onChange={this.formObject} value={this.state.message}></textarea>
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
                                <div style={{"flexDirection" : "column"}}>
                                    <a href="tel:+16148040625">+1 614 804 0625</a> 
                                    <a href="tel:+221776411195">+221 776 411 195</a>
                                </div>
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