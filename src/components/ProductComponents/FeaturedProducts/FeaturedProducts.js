// FeaturedProducts.js
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Card, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import styles from "./FeaturedProducts.module.css";
import ProductImage from "../../../Assets/Product-Hero-Image.png";
import star from "../../../Assets/Star 1 (1).png"
const datas = [
  {
    title: "ROM HOODIE",
    text: "100% woolen Rapture on my mind hoodie with cape.",
  },
  {
    title: "ROM HOODIE",
    text: "100% woolen Rapture on my mind hoodie with cape.",
  },
  {
    title: "ROM HOODIE",
    text: "100% woolen Rapture on my mind hoodie with cape.",
  },
  {
    title: "ROM HOODIE",
    text: "100% woolen Rapture on my mind hoodie with cape.",
  },
  {
    title: "ROM HOODIE",
    text: "100% woolen Rapture on my mind hoodie with cape.",
  },
  {
    title: "ROM HOODIE",
    text: "100% woolen Rapture on my mind hoodie with cape.",
  },
];

const FeaturedProducts = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 2 : 3,
    slidesToScroll: 3,
  };

  return (
    <div className={`py-5 ${styles.container}`}>
      <Container className="w-75 m-auto mt-5">
        <Slider {...settings}>
          {datas.map((data, index) => (
            <div key={index} className={isSmallScreen ? styles.body :""}>
              <Card
                className={`bg-white col-12 rounded-xl ${
                  isSmallScreen ? styles.smallcard  : ""
                }`}>
                <Card.Img
                  variant="top"
                  src={ProductImage}
                  className="h-56 rounded-t-xl"
                />
                <Card.Body className="d-flex flex-column justify-content-center align-items-center p-4">
                  <Card.Title
                    className={`text-xl font-semibold text-center ${
                      isSmallScreen ? styles.smalltitle : ""
                    }`}>
                    {data.title}
                  </Card.Title>
                  <Card.Text
                    className={`${
                      isSmallScreen ? "small-screen-text" : "text-center fs-6"
                    }`}>
                    {data.text}
                  </Card.Text>
                  <Card.Text >
                    <img src={star} alt="" style={{display:"inline"}}/>
                    <img src={star} alt="" style={{display:"inline"}}/>
                    <img src={star} alt="" style={{display:"inline"}}/>
                    <img src={star} alt="" style={{display:"inline"}}/>
                  </Card.Text>
                  <Button
                    className={`px-4 py-2 rounded-xl ${styles.btn}`}>
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
