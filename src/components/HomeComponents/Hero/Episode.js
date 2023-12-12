import { Row, Col, Container } from "react-bootstrap";
import styles from "./Episode.module.css";
import rectangle37 from "../../../Assets/Rectangle 37.png";
import rectangle372 from "../../../Assets/Rectangle372.png";
import videoFrame from "../../../Assets/video frame (1).png";
import { Link } from "react-router-dom";

const Episode = () => {
  return (
    <div className={styles.episode_container}>
      <div className="text-center mb-5 mt-5">
        <h2>Most watched Episodes</h2>
      </div>
      <div className={styles.episode_row}>
        <div className={styles.episode_item1}>
          <img src={rectangle37} alt="img" className="img-fluid img-fit"/>
        </div>
        <div className={styles.episode_item2}>
          <img src={videoFrame} alt="img" className="img-fluid img-fit"/>
        </div>
        <div className={styles.episode_item3}>
          <img src={rectangle372} alt="img" className="img-fluid img-fit"/>
        </div>
      </div>
 
    </div>
  );
};

export default Episode;