import React from 'react'
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
const Footer = () => {
    return (
        <React.Fragment>
            <div className="main-title">
                {/* took line out to get margin to be better */}
            </div>

            <div className="main-contact">
                <div className="contact">
                    <div className="contact-center">
                        <div className="contact-center-links">
                            <h3> Links</h3>
                            <div className="contact-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Education</Link></li>
                                <li><Link to="/">Projects</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </div>
                        </div>
                        <div className="contact-center-media">
                            <h3> Get to know me</h3>
                            <div className="contact-media">
                                <li><a href="https://www.linkedin.com/in/colby-stopyak-0ab384143/"><i className="fab fa-linkedin">LinkedIn</i></a></li>
                                <li><a href=""><i className="fab fa-github"></i>GitHub</a></li>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </React.Fragment>
    )
}

export default Footer;
