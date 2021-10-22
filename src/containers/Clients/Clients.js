import { Row, Col } from "react-grid-system";
import "./Clients.css";
import aarush from "../../files/clients/aarush.png";
import ep from "../../files/clients/ep.png";
import in20 from "../../files/clients/in20.png";
import ita from "../../files/clients/ita.png";
import milan from "../../files/clients/milan.png";
import rudra from "../../files/clients/rudra.png";
import siic from "../../files/clients/siic.png";
import srm from "../../files/clients/srm.png";
import tft from "../../files/clients/tft.png";

const Clients = ({ alt }) => {
  return (
    <div className={alt ? "clients alt" : "clients"}>
      <Row justify="center" align="center">
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={srm} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={ep} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={siic} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={ita} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={rudra} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={in20} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={aarush} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={milan} alt="logo" />
        </Col>
        <Col
          xs={5}
          sm={3}
          className="client-box"
          style={{ height: "130px", width: "140px", margin: "1.2rem" }}
        >
          <img src={tft} alt="logo" />
        </Col>
      </Row>
    </div>
  );
};
export default Clients;
