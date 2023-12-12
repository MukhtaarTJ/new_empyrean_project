import React from "react";
import navBack from "../../../Assets/chevrons-down.png";
import navNext from "../../../Assets/chevrons-left.png"
import styles from "./ProductPagination.module.css";
import { Link , NavLink} from "react-router-dom";

const ProductPagination = ({ nPages, currentPage, setCurrentPage }) => {
  // create array of numbers from number of n pages
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  // next page click handler
  const nextPage = (event) => {

    event.preventDefault()
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
          <a href="#" className="" to="#" onClick={prevPage}>
            <img src={navBack} className={styles.next_img} alt=""/>
          </a>
        </li>
        {pageNumbers.map((pgNum) => {
          return (
            <li key={pgNum} className={styles.pag_link} >
              <NavLink className={styles.pag_numbers} to="#"  >
                {pgNum}
              </NavLink>
            </li>
          );
        })}
        <li className={styles.pag_link}>
          <a href="#"
          className="" onClick={nextPage} to="#">
            <img src={navNext} alt="" className={styles.next_img}/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ProductPagination;
