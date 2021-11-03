import { useState } from 'react';
import { Row, Col } from 'react-grid-system';
import './Clients.css';
import aarush from "../../files/clients/aarush.webp";
import ep from "../../files/clients/ep.webp";
import in20 from "../../files/clients/in20.webp";
import ita from "../../files/clients/ita.webp";
import milan from "../../files/clients/milan.webp";
import rudra from "../../files/clients/rudra.webp";
import siic from "../../files/clients/siic.webp";
import srm from "../../files/clients/srm.webp";
import tft from "../../files/clients/tft.webp";


const Clients = ({alt}) => {

  const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<div className={alt ? "clients alt" : "clients"}>
      <Row justify="center" align="center">
        <Col xs={5} sm={3} className="client-box smooth-img-wrapper" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img 
          src={srm} 
          alt="logo"
          className={`smooth-img img-${imageLoaded ? 'visible' : 'hidden'}`}
          onLoad={()=> setImageLoaded(true)} 
           />
           {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="smooth-loader"></span>
                </div>
            )}
        </Col>
        <Col xs={5} sm={3} className="client-box smooth-img-wrapper" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img 
          src={ep} 
          alt="logo"
          className={`smooth-img img-${imageLoaded ? 'visible' : 'hidden'}`}
          onLoad={()=> setImageLoaded(true)} />
          {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="smooth-loader"></span>
                </div>
            )}
        </Col>
        <Col xs={5} sm={3} className="client-box smooth-img-wrapper" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img 
          src={siic} 
          alt="logo"
          className={`smooth-img img-${imageLoaded ? 'visible' : 'hidden'}`}
          onLoad={()=> setImageLoaded(true)} />
          {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="smooth-loader"></span>
                </div>
            )}
        </Col>
        <Col xs={5} sm={3} className="client-box smooth-img-wrapper" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img 
          src={ita} 
          alt="logo"
          className={`smooth-img img-${imageLoaded ? 'visible' : 'hidden'}`}
          onLoad={()=> setImageLoaded(true)} />
          {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="smooth-loader"></span>
                </div>
            )}
        </Col>
        <Col xs={5} sm={3} className="client-box smooth-img-wrapper" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img 
          src={rudra} 
          alt="logo"
          className={`smooth-img img-${imageLoaded ? 'visible' : 'hidden'}`}
          onLoad={()=> setImageLoaded(true)} />
          {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="smooth-loader"></span>
                </div>
            )}
        </Col>
        <Col xs={5} sm={3} className="client-box smooth-img-wrapper" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img 
          src={in20} 
          alt="logo"
          className={`smooth-img img-${imageLoaded ? 'visible' : 'hidden'}`}
          onLoad={()=> setImageLoaded(true)} />
          {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="smooth-loader"></span>
                </div>
            )}
        </Col>
        <Col xs={5} sm={3} className="client-box smooth-img-wrapper" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img 
          src={aarush} 
          alt="logo"
          className={`smooth-img img-${imageLoaded ? 'visible' : 'hidden'}`}
          onLoad={()=> setImageLoaded(true)} />
          {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="smooth-loader"></span>
                </div>
            )}
        </Col>
        <Col xs={5} sm={3} className="client-box smooth-img-wrapper" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img 
          src={milan} 
          alt="logo"
          className={`smooth-img img-${imageLoaded ? 'visible' : 'hidden'}`}
          onLoad={()=> setImageLoaded(true)} />
          {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="smooth-loader"></span>
                </div>
            )}
        </Col>
        <Col xs={5} sm={3} className="client-box smooth-img-wrapper" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img 
          src={tft} 
          alt="logo"
          className={`smooth-img img-${imageLoaded ? 'visible' : 'hidden'}`}
          onLoad={()=> setImageLoaded(true)} />
          {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="smooth-loader"></span>
                </div>
            )}
        </Col>
      </Row>
    </div>
	);
};
export default Clients;
