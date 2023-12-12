import React from "react";
import styles from "./Testimonials.module.css";
import { Container, Row, Col } from "react-bootstrap";
import testImage from "../../../Assets/Rectangle 17.png";
import leftArrow from "../../../Assets/left arrow key.png";
import rightArrow from "../../../Assets/right arrow key.png";
const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <Container fluid className="py-3">
        <div className="bg-white p-5 p-md-4">
          <p className="text-center text-black fs-5 fw-bold font-family-Poppins text-capitalize m-0 px-3 py-2 mb-5">
            Testimonials
          </p>
          <Row className={`px-3 px-md-5 ${styles.testimonial_container}`}>
            <Col xs={12} md={6} className={styles.first_div}>
              <div className={styles.intro_layout}>
                <p
                  className={`text-black fs-2 fw-semibold font-family-Inter m-0 px-3 py-2 ${styles.intro}`}>
                  What people say about our amazing platform.
                </p>
              </div>
              <div className={`${styles.intro_div}`}>
                <p
                  className={`text-black fs-6 fw-normal font-family-Poppins text-capitalize m-0 px-3 py-2 ${styles.intro_text}`}>
                  Over 1000+ purchases, 100 videos watched, 3000 subscribers and
                  50 stories shared.
                </p>
              </div>
              <Col
                xs={12}
                md={8}
                className="px-1 py-1 my-3 bg-white rounded-3 shadow">
                <p className="text-black fs-6 fw-medium font-family-Poppins text-capitalize col-12 m-0 px-3 py-1">
                  Read the success stories
                </p>
              </Col>
            </Col>

            {/* Place the middle_div here */}
            <Col lg={1} sm={1} className={styles.middle_div}>
              <p className={`${styles.middle_div}`}>
                <div
                  style={{
                    backgroundColor: "#734e3c",
                    height: "30px",
                    width: "10px",
                  }}></div>
                <div
                  style={{
                    backgroundColor: "#c9ab96",
                    height: "30px",
                    width: "10px",
                  }}></div>
                <div
                  style={{
                    backgroundColor: "#7acbce",
                    height: "30px",
                    width: "10px",
                  }}></div>
              </p>
            </Col>

            <Col className={styles.second_div}>
              <Row className="flex-column flex-md-row">
                <Col xs={12} md={3} className="mb-3 mb-md-0">
                  <img src={testImage} rounded className="w-100 mb-3" alt="" />
                </Col>
                <div xs={12} md={9}>
                  <div
                    className=" text-dark bg-opacity-75 rounded-3 p-3"
                    style={{ backgroundColor: "#dbc7b9" }}>
                    {/* ... (rest of the code) */}
                    <p className="text-black fs-6 fw-normal font-family-Poppins text-lowercase">
                      Using this platform has inspired my faith, built my
                      spirituality and changed my love life. It was indeed the
                      best decision I made this year.
                    </p>
                    <p className="text-black fs-6 fw-bold font-family-Poppins text-capitalize">
                      Zoe Brendan
                    </p>
                    <p className="text-secondary fs-6 fw-medium font-family-Poppins text-capitalize">
                      Canada
                    </p>

                    <div className="position-relative">
                      <div className="position-absolute mt-3 end-0  border-success-subtle border-opacity-75 d-flex">
                        <img src={leftArrow} alt="" className="me-3" />
                        <img src={rightArrow} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
