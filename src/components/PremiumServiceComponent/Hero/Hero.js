import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoupleVideo from "../../../Assets/couplevideo.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col lg={2}></Col>
        <Col lg={8} className="d-flex">
          <div className={`text-center ${styles.video_container}`}>
            <div
              className={`bg-white rounded-3 mx-auto mt-4 ${styles.alert_layout}`}>
              <p
                className={`text-black font-family-Poppins m-0 px-3 py-2 ${styles.alert_text}`}>
                The Empyrean couple
              </p>
            </div>
            <div className="mt-4">
              <img
                src={CoupleVideo}
                alt="couplevideo"
                className={styles.couple_video}
              />
            </div>
            <div className=""></div>
          </div>
          <div className={styles.consultation_layout}>
            <span className="text-black fs-4 fw-medium font-family-Poppins m-0 px-3  text-uppercase">
              book a consultation
            </span>
            <span>
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
  );
};

export default Hero;
