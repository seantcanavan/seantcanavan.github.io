import React, {useEffect, useState} from "react";
import axios from 'axios';
import * as Icon from "react-feather";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/Layout";

function Contact(){
  const [emailAddress, setEmailAddress] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) =>{
    event.preventDefault();
    if( !formData.name ){
      setError(true);
      setMessage('Name is required');
    } else if( !formData.email ){
      setError(true);
      setMessage('Email is required');
    } else if( !formData.subject ){
      setError(true);
      setMessage('Subject is required');
    } else if( !formData.message ){
      setError(true);
      setMessage('Message is required');
    } else{
      setError(false);
      setMessage('You message has been sent!!!');
    }
  }
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.currentTarget.name] : event.currentTarget.value
    })
  }

  const handleAlerts = () => {
    if(error && message){
      return (
        <div className="alert alert-danger mt-4">
          {message}
        </div>
      )
    } else if(!error && message){
      return (
        <div className="alert alert-success mt-4">
          {message}
        </div>
      )
    } else{
      return null;
    }
  }

  useEffect(() => {
    axios.get('/api/contact-info')
      .then(response =>{
        setEmailAddress(response.data.emailAddress);
      })
  }, [])

  return (
    <Layout>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Contact"/>
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Get in touch</h4>
                <form action="#" className="mi-form mi-contact-form" onSubmit={submitHandler}>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Enter your name*</label>
                    <input onChange={handleChange} type="text" name="name" id="contact-form-name" value={formData.name}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">Enter your email*</label>
                    <input onChange={handleChange} type="text" name="email" id="contact-form-email" value={formData.email}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">Enter your subject*</label>
                    <input onChange={handleChange} type="text" name="subject" id="contact-form-subject" value={formData.subject}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">Enter your Message*</label>
                    <textarea onChange={handleChange} name="message" id="contact-form-message" cols="30" rows="6" value={formData.message}/>
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit">Send Mail</button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                {!emailAddress ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Mail/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Email</h6>
                      <p key={emailAddress}><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
