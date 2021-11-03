import "./Services.css";

import web from "../../files/webDomain.png";
import app from "../../files/app.png";
import rnd from "../../files/rnd.png";
import hr from "../../files/hr.png";
import graphic from "../../files/graphic.png";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Services = () => {
    return (
        <div className="Services">
            <div className="container">
             
                {/* <h1 className="text-center service-title "> Services</h1> */}
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4  col-lg-4 col-sm-6 col-xs-3  d-flex justify-content-center">
                        <div className="main-card">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={web}  alt="web-dev logo"></img>
                                </div>
                                <h4 >Web Dev</h4>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                lorem lorem lorem lorem lorem 
                                </p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-3 d-flex justify-content-center">
                    <div className="main-card">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={app}  alt="app-dev logo"></img>
                                </div>
                                <h4 >App Dev</h4>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                lorem lorem lorem lorem lorem 
                                </p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6 d-flex justify-content-center">
                    <div className="main-card">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={rnd}  alt="rnd logo"></img>
                                </div>
                                <h4 className="opaque">R&D</h4>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                lorem lorem lorem lorem lorem 
                                </p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </div>
            
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6 d-flex justify-content-center">
                    <div className="main-card">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={graphic}  alt="graphic-design logo"></img>
                                </div>
                                <h4 className="opaque">Graphics</h4>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                lorem lorem lorem lorem lorem 
                                </p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6 d-flex justify-content-center">
                    <div className="main-card">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={hr}  alt="HR logo"></img>
                                </div>
                                <h4 className="opaque">HR</h4>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                lorem lorem lorem lorem lorem 
                                </p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    );
}

export default Services;