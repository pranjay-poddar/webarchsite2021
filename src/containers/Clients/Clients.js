import { Row, Col } from 'react-grid-system';
import './Clients.css';
import web from "../../files/webDomain.png";
import app from "../../files/app.png";

const Clients = ({alt}) => {
	return (
		<div className={alt ? "clients alt" : "clients"}>
      <Row justify="center" align="center">
        <Col xs={5} sm={3} className="client-box" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img src={web} alt="logo" />
        </Col>
        <Col xs={5} sm={3} className="client-box" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img src={app} alt="logo" />
        </Col>
        <Col xs={5} sm={3} className="client-box" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img src={app} alt="logo" />
        </Col>
        <Col xs={5} sm={3} className="client-box" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img src={app} alt="logo" />
        </Col>
        <Col xs={5} sm={3} className="client-box" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img src={app} alt="logo" />
        </Col>
        <Col xs={5} sm={3} className="client-box" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img src={app} alt="logo" />
        </Col>
        <Col xs={5} sm={3} className="client-box" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img src={app} alt="logo" />
        </Col>
        <Col xs={5} sm={3} className="client-box" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img src={app} alt="logo" />
        </Col>
        <Col xs={5} sm={3} className="client-box" style={{ height: '130px', width: '140px', margin: '1.2rem' }}>
          <img src={app} alt="logo" />
        </Col>
      </Row>
    </div>
	);
};
export default Clients;
