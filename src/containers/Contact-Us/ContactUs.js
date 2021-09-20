import React from "react";

import { GrInstagram } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import './ContactUs.css'

const ContactUs = () => {

    return (
        <div className="contact">
            <h1>Contact Us<span>.</span></h1>
            <div className="vertical"></div>
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
                <div>

                    <p>
                        <div className="contact-detail-effect">
                            <span>
                                <FaPhoneAlt />
                            </span>
                            +91 9560768621 <br /><br />
                        </div>
                        <br />
                        <div className="contact-detail-effect">
                            <span>
                                <GrMail />
                            </span>
                            contactwebarch<br />
                        </div>
                    </p>
                </div>
            </div>
            <div className="icons">
                <div className="icon-styles">
                    <GrInstagram />
                </div>
                <div className="icon-styles">
                    <GrGithub />
                </div>
                <div className="icon-styles">
                    <GrLinkedin />
                </div>
                <div className="icon-styles">
                    <GrFacebook />
                </div>
            </div>
            <div className="form">
                <div className="form-title">
                    <span>Ping Us</span>
                </div>
                <div className="form-content">
                    <form>
                        <label>NAME</label>
                        <input type="text" className="no-outline"></input>
                        <label>EMAIL</label>
                        <input type="email"></input>
                        <label>MESSAGE</label>
                        <input type="text"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;