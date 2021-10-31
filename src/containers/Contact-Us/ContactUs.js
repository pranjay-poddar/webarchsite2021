import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Button, TextField, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState, forwardRef } from 'react';
import $ from 'jquery';


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
    },
    dialogButton: {
        backgroundColor: '#00e8ff',
        color: '#00e8ff !important',
        '&:hover': {
            backgroundColor: '#026ba3',
            color: '#fff',
        },
        fontSize: '1.3rem !important'
    },
    dialogTitle: {
        backgroundColor: '#00e8ff',
        color: '#161625 !important',
        fontSize: '2.2rem !important',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    dialog: {
        backgroundColor: '#161625',
        color: '#fff !important',
    },
    dialogContentText: {
        backgroundColor: '#161625',
        color: '#fff !important',
        fontSize: '2.2rem !important',
        textAlign: 'center',
        fontVariant: 'all-small-caps',
        paddingTop: '20px',
        height: 'auto'
    }
})

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ContactUs = ({ alt }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogTitleText, setDialogTitleText] = useState("");
    const [dialogMessage, setDialogMessage] = useState("");

    const handleOpen = () => setDialogOpen(true);
    const handleClose = () => {
        setDialogOpen(false);
        setDialogTitleText("");
        setDialogMessage("");
    };


    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (e) => {
        $(e.target).find("#btn").attr("disabled", true);
        $(e.target).find("#btn").text("Sending");
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    setDialogTitleText("Thank You For Contacting Webarch!");
                    setDialogMessage("Your message has been sent successfully");
                    handleOpen();
                }else{
                    setDialogTitleText("Oops! Something Went Wrong");
                    setDialogMessage("We encountered an error, Please try after some time");
                    handleOpen();
                }
                $(e.target).find("#btn").attr("disabled", false);
                $(e.target).find("#btn").text("Send");
            })
            .catch((error) => {
                console.log(error)
                setDialogTitleText("Oops! Something Went Wrong");
                setDialogMessage("We encountered an error. Please try after some time");
                handleOpen();
                $(e.target).find("#btn").attr("disabled", false);
                $(e.target).find("#btn").text("Send");
            });

        e.preventDefault();
    }

    const handleChange = (e) => {
        var inputName = $(e.target).attr('name');
        switch (inputName) {
            case 'name':
                setFormData({
                    ...formData,
                    name: e.target.value
                })
                break;
            case 'email':
                setFormData({
                    ...formData,
                    email: e.target.value
                })
                break;
            case 'message':
                setFormData({
                    ...formData,
                    message: e.target.value
                })
                break;

            default:
                break;
        }
    }

    const classes = useStyles()

    return (
        <div className={alt ? "contact-us d-flex flex-row align-items-center alt" : "contact-us d-flex flex-row align-items-center"}>
            <Dialog
                open={dialogOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle className={classes.dialogTitle}>
                    {dialogTitleText}
                </DialogTitle>
                <DialogContent className={classes.dialog}>
                    <DialogContentText className={classes.dialogContentText} id="alert-dialog-slide-description">
                        {dialogMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.dialog}>
                    <Button className={classes.dialogButton} onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
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
                                    <a href="mailto: webarchclub@gmail.com">
                                        <span>
                                            <GrMail />
                                        </span>
                                        webarchclub<br />
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
                                <span id="form-title">Ping Us</span>
                            </div>
                            <div className="contact-form-content">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1.2, width: '30ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    onSubmit={handleSubmit}
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
                                        margin="normal"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange} />
                                    <TextField
                                        style={{ width: '90%', borderBottom: '1px solid #c2c2c2' }}
                                        inputProps={{ style: { fontSize: 15, color: "#ffffff" } }}
                                        InputLabelProps={{ style: { fontSize: 15, color: "#c2c2c2", letterSpacing: '1px' } }}
                                        id="standard-basic"
                                        label="Email"
                                        variant="standard"
                                        margin="normal"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange} />
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
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
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