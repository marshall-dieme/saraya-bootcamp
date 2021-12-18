import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


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

class Contact extends Component {

   constructor(props) {
       super(props)

        this.state = {
             name: '',
             email: '',
             phone: '',
             subject: '',
             message: '',
             error: {
                  name: '',
                  email: '',
                  phone: '',
                  subject: '',
                  message: ''
             }
        }
   }

    formObject = event => {

           event.preventDefault();

           const { name, value } = event.target;
           let error = { ...this.state.error };

           switch (name) {
               case "name":
                   error.name = value.length < 2 ? "This field must contain between 2 and 100 characters" : "";
                   break;
               case "email":
                   error.email = regularExpression.test(value)
                       ? ""
                       : "Email is not valid";
                   break;
               case "phone":
                   error.phone = value.length < 8 ? "This field must contain between 8 and 20 characters" : "";
                   break;
               case "subject":
                   error.subject =
                        value.length < 5 ? "This field should be 5 characters long" : "";
                   break;
               case "message":
                    error.message =
                    value.length > 300 ? "This field should be 300 characters long" : "";
                   break;
               default:
                   break;
           }

           this.setState({
               error,
               [name]: value
           })
    };

     onFormSubmit = event => {
           event.preventDefault();

           axios({
               method: "POST",
               url:"http://localhost:8001/api/contact/sendEmail",
               data:  this.state
           }).then((response)=>{
               if (response.data.status === 'success') {
                     //alert("Message Sent Success.");
                } else if (response.data.status === 'fail') {
                     alert("Message failed to send.")
                }
           })

          if (validation(this.state)) {
                   console.log(this.state)
                   alert("Message Sent Success.");
          } else {
                console.log("Error occurred");
          }
     };


    render() {
         const { error } = this.state;
        return (
           <div className="container mt-5">
                 <p></p>
                 <p></p>
                 <div className="row">
                      <div className="col-md-7">
                        <div className="mt-5">
                          <div className="logo-div">
                            <Link to="/" className="logo"><ion-icon name="desktop-outline"></ion-icon> <span>Saraya Bootcamp</span></Link>
                          </div>

                        </div>
                      </div>
                      <div className="col-md-5">
                           <h4 className="mt-5"> Contact Us by Sending a Message</h4>
                           <div className="card mt-3">
                               <form className="card-body" onSubmit={this.onFormSubmit}>
                                   <div className="form-group mb-3">
                                       <label className="mb-2"><strong>Your Name(*)</strong></label>
                                       <input required type="text" name="name" onChange={this.formObject} className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}/>
                                       {error.name.length > 0 && (<span className="invalid-feedback">{error.name}</span>)}
                                   </div>
                                   <div className="form-group mb-3">
                                       <label className="mb-2"><strong>Your Email(*)</strong></label>
                                       <input required type="email" name="email" onChange={this.formObject} className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}/>
                                       {error.email.length > 0 && (<span className="invalid-feedback">{error.email}</span>)}
                                   </div>
                                   <div className="form-group mb-3">
                                       <label className="mb-2"><strong>Your Phone Number(*)</strong></label>
                                       <input required  type="text" name="phone" onChange={this.formObject} className={error.phone.length > 0 ? "is-invalid form-control" : "form-control"} />
                                       {error.phone.length > 0 && (<span className="invalid-feedback">{error.phone}</span>)}
                                   </div>
                                   <div className="form-group mb-3">
                                         <label className="mb-2"><strong>Your Subject</strong></label>
                                         <input required type="text" name="subject" className={error.subject.length > 0 ? "is-invalid form-control" : "form-control"} onChange={this.formObject}/>
                                         {error.subject.length > 0 && ( <span className="invalid-feedback">{error.subject}</span>)}
                                   </div>
                                    <div className="form-group mb-3">
                                         <label className="mb-2"><strong>Your Message(*)</strong></label>
                                         <textarea required row="" cols="4" name="message" className={error.message.length > 0 ? "is-invalid form-control" : "form-control"} onChange={this.formObject}></textarea>
                                         {error.message.length > 0 && ( <span className="invalid-feedback">{error.message}</span>)}
                                    </div>

                                   <div className="d-grid mt-3">
                                       <button type="submit" disabled={!this.state.name || !this.state.email || !this.state.phone || !this.state.subject || !this.state.message} className="btn btn-block btn-primary">SEND MESSAGE</button>
                                   </div>
                               </form>
                           </div>
                       </div>
                      </div>
                 </div>
        );
    }

}

export default Contact;