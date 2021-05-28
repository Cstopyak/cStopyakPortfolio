import React, { useState, useEffect } from 'react';
import "../css/Contact.css";
import axios from 'axios';
import Loading from '../images/Loading.gif';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [banner, setBanner] = useState('');
    const [bool, setBool] = useState('');


    //handle functionalities
    const handleNameChange = (e) => {
        setName(e.target.value);
        // console.log(name);

    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // console.log(email)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        // console.log(message)
    }

    //onSubmit
    const formSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: name,
            email: email,
            message: message
        }

        setBool(true);

        axios.post(`/contact`, data)
            .then(res => {
                setBanner(res.data.msg);
                setBool(false);
                setTimeout(() => {
                    setBanner('');

                }, 2000)

                setName('');
                setEmail('');
                setMessage('');

            }).catch(err => console.log(err))

    }




    return (
        <div className="main-container">
            <div className="contactForm">
                <h2 className="title"> Contact</h2>
                <div className="contactForm-center">
                    <div className="contact_form">
                        <form onSubmit={formSubmit}>
                            <p>Lets get in touch!</p>
                            <p>{banner}</p>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="import name..." required
                                value={name} onChange={handleNameChange} />


                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="import email..." required
                                value={email} onChange={handleEmailChange} />


                            <label htmlFor="message">Message</label>
                            <textarea type='text' name="message" id="" placeholder='import contact reason...'
                                value={message} onChange={handleMessageChange} />

                            <div className="send-btn">
                            <button type="submit" >Send Email{bool? <b className="load" ><img src={Loading} alt=""/></b>:''}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;
