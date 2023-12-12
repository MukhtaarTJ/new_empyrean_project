import React from "react";
import navBack from "../../../Assets/chevrons-down.png";
import styles from "./Product.module.css";

const ProductPagination = ({ nPages, currentPage, setCurrentPage }) => {
  // create array of numbers from number of n pages
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  // next page click handler
  const nextPage = (event) => {
    event.preventDefault();
    if (currentPage !== nPages) {
      return setCurrentPage(currentPage + 1);
    }
  };

  //previous page click handler
  const prevPage = (event) => {
    event.preventDefault();
    if (currentPage !== 1) {
      return setCurrentPage(currentPage - 1);
    }
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={styles.pag_link}>
          <a className="" href="#" onClick={prevPage}>
            <img src={navBack} />
          </a>
        </li>
        {pageNumbers.map((pgNum) => {
          return (
            <li key={pgNum} className={styles.pag_link}>
              <a className="" href="#">
                {pgNum}
              </a>
            </li>
          );
        })}
        <li className={styles.pag_link}>
          <a className="" onClick={nextPage} href="#">
            <img src={navBack} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ProductPagination;
