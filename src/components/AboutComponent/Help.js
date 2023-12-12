import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./Help.module.css";
import Ellipse from "../../Assets/Ellipse 10.png";

const Help = () => {
  const cardData = [
    {
      title: "Provide Supportive Listening",
      description:
        "Sometimes, couples just need someone to listen to their concerns and challenges.",
    },
    {
      title: "Offer Advice and Guidance",
      description:
        "Sometimes, couples just need someone to listen to their concerns and challenges.",
    },
    {
      title: "Organize Couples' Activities",
      description:
        "Sometimes, couples just need someone to listen to their concerns and challenges.",
    },
    {
      title: "Celebrate Milestones",
      description:
        "Sometimes, couples just need someone to listen to their concerns and challenges.",
    },
    {
      title: "Encourage Self-Care",
      description:
        "Sometimes, couples just need someone to listen to their concerns and challenges.",
    },
  ];

  return (
    <Container fluid className={`py-5  ${styles.container}`}>
      <p className={`text-center text-black fs-1 fw-medium font-family-Poppins text-capitalize m-0 px-3 py-3 ${styles.help_text}`}>
        How we help
      </p>

      <Row className="p-1 justify-content-center align-items-center d-flex mx-auto">
        {/* <Col className="text-center"></Col> */}
      </Row>

      <Row className="p-1 justify-content-center align-items-center d-flex">
        <Col lg={1}></Col>
        <Col
          xs={12}
          lg={5}
          className="d-flex justify-content-center align-items-center me-auto ms-auto ">
            <div className={styles.text_layout}>
          <p className={`text-black fs-1 fw-medium font-family-Poppins text-capitalize px-3 py-1 text-justify-left ${styles.help_text}`}>
            There are several ways we make a positive impact in the lives of
            others.
          </p>
          </div> 
        </Col>
        <Col
          xs={12}
          lg={6}
          className={`d-flex justify-content-center align-items-center ${styles.card_container}`}>
          <Card className={`rounded-4 col-10 ml-4  ${styles.card}`}>
            <Card.Img
              className="rounded-circle border border-3 border-white col-7 mx-auto"
              src={Ellipse}
              alt={cardData[0].title}
              style={{ width: "180px" }}
            />
            <Card.Body className="text-center">
              <Card.Title className={`text-black fs-3 fw-medium font-family-Poppins text-capitalize col-12 m-0 px-3 py-1 pb-4 ${styles}`}>
                {cardData[0].title}
              </Card.Title>
              <Card.Text className="text-black fs-6 fw-light font-family-Poppins text-capitalize col-12 m-0 px-1 py-2">
                {cardData[0].description}
              </Card.Text>
              <div className="mx-auto py-1 bg-white d-flex justify-content-center align-items-center  col-6">
                <p className="text-black fs-6 fw-medium font-family-Poppins m-0 px-1 py-1 ">
                  Learn more
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="p-1 justify-content-center align-items-center d-flex">
        {cardData.slice(1).map((item, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            lg={6}
            className={`d-flex justify-content-center align-items-center ${styles.card_container2}`}>
            <Card className={`rounded-4 col-10 py-3  ${styles.card_2}`}>
              <Card.Img
                className="rounded-circle border border-3 border-white col-7 mx-auto"
                src={Ellipse}
                alt={item.title}
                style={{ width: "180px" }}
              />
              <Card.Body className="text-center">
                <Card.Title className="text-black fs-3 fw-medium font-family-Poppins text-capitalize col-12 m-0 px-3 py-2">
                  {item.title}
                </Card.Title>
                <Card.Text className="text-black fs-6 fw-light font-family-Poppins text-capitalize col-12 m-0 px-1 py-2">
                  {item.description}
                </Card.Text>
                <div className={`mx-auto py-1 bg-white d-flex  justify-content-center align-items-center col-6 ${styles.button_layout}`}>
                  <p className="text-black fs-6 fw-medium font-family-Poppins m-0 px-1 py-1 ">
                    Learn more
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Help;
