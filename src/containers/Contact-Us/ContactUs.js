import React from "react";

import { GrInstagram } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import './ContactUs.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {

    return (
        <div className="contact-us d-flex flex-row align-items-center">
            <div className="contact w-100 row m-0 justify-content-center align-items-center">
                <div className="c-info c-height col-10 col-md-6 m-0 p-0 d-flex flex-row justify-content-center align-items-center order-2 order-md-1">
                    <div className="vertical"></div>
                    <div className="contact-details-container">
                        <div className="contact-address">
                            <div className="contact-address-title">
                                Webarch
                            </div>
                            <div>
                                <p>Architects of the Web<br />
                                    SRMIST - KTR<br />
                                    Chennai - 603203
                                </p>
                            </div>
                        </div>
                        <div className="contact-details">
                            <div className="contact-details-title">
                                Contact
                            </div>
                            <br />
                            <div>
                                <div className="contact-detail-effect">
                                    <a href="tel:+91-956-076-8621">
                                        <span>
                                            <FaPhoneAlt />
                                        </span>
                                        +91 9560768621 <br />
                                    </a>
                                </div>
                                <br />
                                <div className="contact-detail-effect">
                                    <a href="mailto:contactwebarch@gmail.com">
                                        <span>
                                            <GrMail />
                                        </span>
                                        contactwebarch<br />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon-styles">
                            <a href="https://www.instagram.com/webarchclub/" target="_blank">
                                <GrInstagram />
                            </a>
                        </div>
                        <div className="icon-styles">
                            <a href="https://github.com/WebarchClub" target="_blank">
                                <GrGithub />
                            </a>
                        </div>
                        <div className="icon-styles">
                            <a href="https://www.linkedin.com/company/webarchclub/mycompany/" target="_blank">
                                <GrLinkedin />
                            </a>
                        </div>
                        <div className="icon-styles">
                            <a href="https://www.facebook.com/webarchclub/" target="_blank">
                                <GrFacebook />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="form-layout c-height-1 col-10 col-md-6 m-0 p-0 d-flex flex-row justify-content-center align-items-center order-1 order-md-2">
                    <div className="form-border d-flex justify-content-center" id="form-border-style">
                        <div className="corner-borders corner-borders--left"></div>
                        <div className="corner-borders corner-borders--right"></div>
                        <div className="form-container">
                            <div className="form-title">
                                <span>Ping Us</span>
                            </div>
                            <div className="form-content">
                                <form>
                                    <label htmlFor="name">NAME</label>
                                    <input type="text" className="no-outline" id="name"></input>
                                    <label htmlFor="email">EMAIL</label>
                                    <input type="email" id="email"></input>
                                    <label htmlFor="message">MESSAGE</label>
                                    <input type="text" id="message"></input>
                                    <button type="submit" id="submit-btn">SEND MESSAGE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;