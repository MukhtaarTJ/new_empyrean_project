import React from "react";
import { Container, Col } from "react-bootstrap";
import styles from "./Display.module.css";

const Display = () => {
  return (
    <Container
      fluid
      className={`d-flex flex-column align-items-center justify-content-start mt-5 p-4 ${styles.container}`}>
      <Col className={styles.text_layout}>
        <p
          className={`text-uppercase mb-5 text-center ${styles.container_text}`}
          >
          Our story is made up of our shared lifestyle, beliefs, love & faith.
          which we seek to share through:
        </p>
      </Col>
    </Container>
  );
};

export default Display;
