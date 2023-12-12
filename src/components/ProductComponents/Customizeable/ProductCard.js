import { Card, Col } from "react-bootstrap";
import styles from "./Product.module.css";

const ProductCard = ({ name, description, ratings, price, imagePath }) => {
  return (
    <Col lg={4} md={6} className={`mb-3 `}>
      <Card className={styles.product_card}>
        <Card.Img variant="top" src={imagePath} />
        <Card.Body className="text-center">
          <Card.Title>{name.toUpperCase()}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div>
            <p>{`$${price}`}</p>
          </div>
          <button>ADD TO CART</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
