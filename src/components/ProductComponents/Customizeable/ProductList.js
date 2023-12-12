import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import products from "./products";
import ProductPagination from "./ProductPagination";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  let currentRecords;
  let nPages;

  if (products.length > 0) {
    currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
    nPages = Math.ceil(products.length / recordsPerPage);
  } else {
    currentRecords = [];
    nPages = [];
  }

  return (
    <Container className="mb-5">
      <Row>
        <h2 className="text-center mt-5 mb-5"> Our Products</h2>
        {products.length > 0 &&
          currentRecords.map((product) => {
            return (
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                ratings={product.ratings}
                imagePath={product.imagePath}
                key={product.id}
              />
            );
          })}
      </Row>
      {nPages > 0 && (
        <ProductPagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
};

export default ProductList;
