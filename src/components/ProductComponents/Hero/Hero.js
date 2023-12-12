import React from "react";
import styles from "./Hero.module.css";
import { Col, Container, Row } from "react-bootstrap";
// import HeroImage from "../../../Assets/Product-Hero-Image.png";
import HeroImage from "../../../Assets/hero image for product page2.png"
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <Container className="my-5">
      <Row className="pt-5 flex-column-reverse flex-md-row">
        <Col md={6} className="pt-md-5">
          <h1 className="text-black fs-1 fw-medium font-family-Poppins text-capitalize m-0 px-3 ">
            Welcome to the
            <br />
            Empyrean store.
          </h1>
          <h1 className="text-black fs-1 fw-medium font-family-Poppins text-capitalize m-0 px-3 ">
            Shop from our vast collections of premium wears.
          </h1>
          <p className="m-0 px-3 py-2">
            <span className="text-black fs-6 fw-light font-family-Poppins">
              Celebrate love in all its forms with beautiful customized
              clothing's both for individuals and couples. With over
            </span>
            <span className="text-black fs-6 fw-bold font-family-Poppins">
              {" "}
              2000{" "}
            </span>
            <span className="text-black fs-6 fw-light font-family-Poppins">
              {" "}
              purchases on our{" "}
            </span>
            <span className="text-black fs-6 fw-bold font-family-Poppins">
              {" "}
              Online Store{" "}
            </span>
            <span className="text-black fs-6 fw-light font-family-Poppins">
              {" "}
              , we offer options to customize your choice
              inscriptions/words/images.{" "}
            </span>
          </p>
          <div className={styles.hero_link}>
            <NavLink
              to=""
              className={`text-black fs-4 fw-medium font-family-Poppins m-0 px-3 py-2 ${styles.btn_link}`}>
              {" "}
              BULK ORDER{" "}
            </NavLink>
            <NavLink
              to=""
              className={`text-black fs-4 fw-medium font-family-Poppins m-0 px-3 py-2 ${styles.watch_link}`}>
              CONTACT US{" "}
              <span>
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </NavLink>
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center vh-80">
          <img
            src={HeroImage}
            alt=""
            className={`img-fluid ${styles.product_img}`}
          />
        </Col>
      </Row>
      <Row>
        <Col className="pt-5">
          <h1 className="text-center pt-5">Featured Products</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
