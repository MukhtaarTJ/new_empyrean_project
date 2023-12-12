import React from "react";
import styles from "./OurChannels.module.css";
import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from "../../Assets/Social Icons-face.png";
import InstaIcon from "../../Assets/Social Icons-insta.png";
import TikIcon from "../../Assets/Social Icons-tik.png";
import YoutubeIcon from "../../Assets/Social Icons-you.png";
import ThreadIcon from "../../Assets/Social Icons-thread.png";
import linkdnIcon from "../../Assets/Social Icons-link.png";
import SnapIcon from "../../Assets/Social Icons-snap.png";
import WhatsappIcon from "../../Assets/Social Icons-what.png";
import MessageIcon from "../../Assets/Social Icons-mess.png";

const OurChannels = () => {
  const iconStyle = {
    width: "45px",
    height: "45px",
    marginTop: "18px", 
    marginRight:"45px"
  };

  return (
    <Container fluid className="pt-4">
      <Row>
        <Col xs={12} sm={1} lg={1}></Col>
        <Col xs={12} sm={10} lg={10}>
          <Row>
            <h1 className="text-center">our channels</h1>
            <Col className="d-flex justify-content-center align-items-center flex-wrap">
              <img src={FacebookIcon} alt="" style={iconStyle}  />
              <img src={InstaIcon} alt="" style={iconStyle} />
              <img src={TikIcon} alt="" style={iconStyle} />
              <img src={YoutubeIcon} alt="" style={iconStyle} />
              <img src={ThreadIcon} alt="" style={iconStyle} />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center align-items-center flex-wrap">
              <img src={TikIcon} alt="" style={iconStyle} />
              <img src={linkdnIcon} alt="" style={iconStyle} />
              <img src={SnapIcon} alt="" style={iconStyle} />
              <img src={WhatsappIcon} alt="" style={iconStyle} />
              <img src={MessageIcon} alt="" style={iconStyle} />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={1} lg={1}></Col>
      </Row>
      <Row className="mx-3">
        <Col className="px-3 mx-3">
          <h1
            className={`text-center ${styles.paragraph_text}`}
            style={{}}>
            Alternatively, you can search any of these platforms, using the
            keyword “ the Empyrean Couple”
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default OurChannels;
