import { Card, Col } from "react-bootstrap";
import styles from "./Product.module.css";

const ProductCard = ({ name, description, ratings, price, imagePath }) => {
  return (
    <Col lg={4} md={6} className={`mb-3 `}>
      <Card className={styles.product_card} style={{ height: "100%" }}>
        <Card.Img
          variant="top"
          src={imagePath}
          style={{ maxWidth: "100%" }}
          className={`img-fluid ${styles.card_image}`}
        />
        <Card.Body className={`text-center`}>
          <Card.Title className={styles.title}>{name.toUpperCase()}</Card.Title>
          <Card.Text className={styles.description}>{description}</Card.Text>
          <div className={styles.card_body}>
            <p className={styles.price}>{`$${price}`}</p>
          </div>
        </Card.Body>
        <div className="text-end d-flex justify-content-center ">
          <button>ADD TO CART</button>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;
