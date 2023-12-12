import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./Memorirs.module.css";

const Memories = () => {
  return (
    <Container>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10} className="p-5">
          <div className={styles.title}>
            <h1 className={styles.title_text}>
              <span style={{ color: "#734e3c" }}>share</span> your amazing
              <br /> <span style={{ color: "#99d7d9" }}>couple</span> journey
              with us. <br />
              <span style={{ color: "#ff8b02" }}>Memories</span> can inspire
              others
            </h1>
          </div>
          <div className={styles.feedback}>
            <Form>
              <Form.Group className={styles.form_group}>
                <div className={styles.form_label}>Firstname:</div>
                <Form.Control className={styles.form_control} />{" "}
              </Form.Group>
              <Form.Group className={styles.form_group}>
                <div className={styles.form_label}>Lastname:</div>
                <Form.Control className={styles.form_control} />{" "}
              </Form.Group>
              <Form.Group className={styles.form_group}>
                <div className={styles.form_label}>Email:</div>
                <Form.Control className={styles.form_control} />{" "}
              </Form.Group>
              <Form.Group className={styles.form_group}>
                <div className={styles.form_label}>Country:</div>
                <Form.Control className={styles.form_control} />{" "}
              </Form.Group>

              <Form.Group className={styles.form_group}>
                <div className={styles.form_label_textarea}>Your Story:</div>
                <Form.Control
                  className={styles.form_control_textarea}
                  rows={7}
                  // cols={3}
                  as="textarea"
                />{" "}
              </Form.Group>
            </Form>
            <Row className="px-1 py-1 ">
              <Col className="d-flex justify-content-end align-items-end">
                <Button
                  size="sm"
                  className="text-black fs-5 fw-medium font-family-Poppins m-0 px-3 py-2" style={{backgroundColor:"#c9ab96",border:"none"}}>
                  SEND
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
};

export default Memories;
