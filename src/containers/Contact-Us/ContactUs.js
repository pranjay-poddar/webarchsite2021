import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';


import { GrInstagram } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import './ContactUs.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({

    button: {
        backgroundColor: '#00e8ff',
        color: '#000',
        '&:hover': {
            backgroundColor: '#026ba3',
            color: '#fff',
        },
    }
})

const ContactUs = ({ alt }) => {

    const classes = useStyles()

    return (
        <div className={alt ? "contact-us d-flex flex-row align-items-center alt" : "contact-us d-flex flex-row align-items-center"}>
            <div className="contact w-100 row m-0 justify-content-center align-items-center">
                <div className="contact-info contact-height col-10 col-md-6 m-0 p-0 d-flex flex-row justify-content-center align-items-center order-1">
                    <div className="contact-vertical"></div>
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
                                    <a href="tel:+91-954-995-4599">
                                        <span>
                                            <FaPhoneAlt />
                                        </span>
                                        +91 9549954599 <br />
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
                    <div className="contact-icons">
                        <div className="contact-icon-styles">
                            <a href="https://www.instagram.com/webarchclub/" target="_blank" rel='noopener noreferrer'>
                                <GrInstagram />
                            </a>
                        </div>
                        <div className="contact-icon-styles">
                            <a href="https://github.com/WebarchClub" target="_blank" rel='noopener noreferrer'>
                                <GrGithub />
                            </a>
                        </div>
                        <div className="contact-icon-styles">
                            <a href="https://www.linkedin.com/company/webarchclub/mycompany/" target="_blank" rel='noopener noreferrer'>
                                <GrLinkedin />
                            </a>
                        </div>
                        <div className="contact-icon-styles">
                            <a href="https://www.facebook.com/webarchclub/" target="_blank" rel='noopener noreferrer'>
                                <GrFacebook />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-form-layout contact-height-1 col-10 col-md-6 m-0 p-0 d-flex flex-row justify-content-center align-items-center order-2">
                    <div className="contact-form-border d-flex justify-content-center">
                        <div className="contact-corner-borders contact-corner-borders--left"></div>
                        <div className="contact-corner-borders contact-corner-borders--right"></div>
                        <div className="contact-form-container">
                            <div className="contact-form-title">
                                <span>Ping Us</span>
                            </div>
                            <div className="contact-form-content">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1.2, width: '30ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        sx={{
                                            '&:focus': { backgroundColor: 'red' },
                                        }}
                                        style={{ width: '90%', borderBottom: '1px solid #c2c2c2' }}
                                        inputProps={{ style: { fontSize: 15, color: "#ffffff" } }}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: 15, color: "#c2c2c2", letterSpacing: '1px'
                                            }
                                        }}
                                        id="standard-basic"
                                        label="Name"
                                        variant="standard"
                                        margin="normal" />
                                    <TextField
                                        style={{ width: '90%', borderBottom: '1px solid #c2c2c2' }}
                                        inputProps={{ style: { fontSize: 15, color: "#ffffff" } }}
                                        InputLabelProps={{ style: { fontSize: 15, color: "#c2c2c2", letterSpacing: '1px' } }}
                                        id="standard-basic"
                                        label="Email"
                                        variant="standard"
                                        margin="normal" />
                                    <TextField
                                        style={{ width: '90%', borderBottom: '1px solid #c2c2c2' }}
                                        id="standard-textarea"
                                        label="Tell Us Something"
                                        multiline
                                        variant="standard"
                                        maxRows={2}
                                        margin="normal"
                                        inputProps={{ style: { fontSize: 15, color: "#ffffff", lineHeight: '20px' } }}
                                        InputLabelProps={{ style: { fontSize: 15, color: "#c2c2c2", letterSpacing: '1px' } }}
                                    />
                                    <Button id="btn" className={classes.button}
                                        style={{
                                            width: '90%',
                                            height: '35px',
                                            fontSize: '15px',
                                            marginTop: '30px'
                                        }}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >SEND
                                    </Button>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default ContactUs;