import { Col, Container, Row } from "react-bootstrap";
import heroImage from "../../../Assets/hero image.png";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <Container style={{ marginTop: "150px" }} className={` ${styles.container}`}>
      <Row>
        <h2 className={`text-center mb-5 ${styles.intro_text}`}>
          The Empyrean Couple{" "}
        </h2>
        <Col lg={6} className={styles.div1}>
          <div className={styles.intro_desc}>
            <h1>An Expression of shared lifestyle, beliefs, love & faith.</h1>
          </div>

          <div className={styles.desc}>
            <p>
              Love is the universal language that binds us all. We celebrate
              love in all its forms. We offer advice, support, and inspiration
              to foster healthy relationships and a compassionate world.
            </p>
          </div>

          <div className={styles.hero_link}>
            <Link to="" className={styles.btn_link}>
              {" "}
              WATCH{" "}
            </Link>
            <Link to="" className={styles.watch_link}>
              {" "}
              BOOK A CONSULTATION{" "}
              <span>
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </Col>
        <Col lg={6} className={styles.div2}>
          <div>
            <img src={heroImage} className={styles.hero_img} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;