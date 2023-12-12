import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";
import { useGetAllProductsMutation } from "../../../lib/API/productApi";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const [getAllProducts, {data}] = useGetAllProductsMutation()

  useEffect(() => {
    getAllProducts()
  }, [])

  

  let currentRecords;
  let nPages;

  if (data?.data.length > 0) {
    currentRecords = data?.data.slice(indexOfFirstRecord, indexOfLastRecord);
    nPages = Math.ceil(data?.data.length / recordsPerPage);
  } else {
    currentRecords = [];
    nPages = [];
  }

  return (
    <Container className="mb-5">
      <Row>
        <h2 className="text-center mt-5 mb-5"> Our Products</h2>
        {data?.data.length > 0 &&
          currentRecords.map((product) => {
            return (
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                ratings={product.ratings}
                imagePath={product.media[0].url}
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
