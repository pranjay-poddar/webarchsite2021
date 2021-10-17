<<<<<<< HEAD
import { Row, Col } from "react-grid-system";
import "./Clients.css";
import web from "../../files/webDomain.png";
import app from "../../files/app.png";

const Clients = ({ alt }) => {
  return (
    <div className={alt ? "clients alt" : "clients"} id="Clients">
      <Row justify="center" align="center">
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={web} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={app} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={app} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={app} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={app} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={app} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={app} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={app} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
=======
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
>>>>>>> 91376f0da12a948945eaae131e382c711be82556
          <img src={app} alt="logo" />
        </Col>
      </Row>
    </div>
<<<<<<< HEAD
  );
=======
	);
>>>>>>> 91376f0da12a948945eaae131e382c711be82556
};
export default Clients;
