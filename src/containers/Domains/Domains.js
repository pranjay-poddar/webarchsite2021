import "./Domains.css";

import web from "../../files/domains/webDomain.png";
import app from "../../files/domains/app.png";
import rnd from "../../files/domains/rnd.png";
import hr from "../../files/domains/hr.png";
import graphic from "../../files/domains/graphic.png";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Domains = ({alt}) => {
    return (
        <div className={alt ? "Domains alt" : "Domains"}>
            <div className="container">
             
                {/* <h1 className="text-center domain-title "> domains</h1> */}
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4  col-lg-4 col-sm-6 col-xs-3  d-flex justify-content-center">
                        <div className="main-card">
                            <div className="domain">
                                <div className="domain-logo">
                                    <img src={web}  alt="web-dev logo"></img>
                                </div>
                                <h4 >Web Dev</h4>
                                <p>Design and develop eye-catching websites</p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-3 d-flex justify-content-center">
                    <div className="main-card">
                            <div className="domain">
                                <div className="domain-logo">
                                    <img src={app}  alt="app-dev logo"></img>
                                </div>
                                <h4 >App Dev</h4>
                                <p>Create cross-platform mobile applications</p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6 d-flex justify-content-center">
                    <div className="main-card">
                            <div className="domain">
                                <div className="domain-logo">
                                    <img src={rnd}  alt="rnd logo"></img>
                                </div>
                                <h4 className="opaque">R&D</h4>
                                <p>Dive into the world of machine learning and automation</p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </div>
            
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6 d-flex justify-content-center">
                    <div className="main-card">
                            <div className="domain">
                                <div className="domain-logo">
                                    <img src={graphic}  alt="graphic-design logo"></img>
                                </div>
                                <h4 className="opaque">Graphics</h4>
                                <p>Unleash your creativity by designing digital content</p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6 d-flex justify-content-center">
                    <div className="main-card">
                            <div className="domain">
                                <div className="domain-logo">
                                    <img src={hr}  alt="HR logo"></img>
                                </div>
                                <h4 className="opaque">HR</h4>
                                <p>Showcase your resource management skills and strategies</p>
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

export default Domains;