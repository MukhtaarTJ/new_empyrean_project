import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
import logo from "../../Assets/empyreanlogo.png";
import cart from "../../Assets/cart.svg";


const MainNav = () => {
  return (
    <Navbar expand="md" className={`${styles.navbar} fixed-top`}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className={styles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            <NavLink className={styles.navItem} to={"/"}>
              HOME
            </NavLink>
            <NavLink className={styles.navItem} to={"/about"}>
              ABOUT US
            </NavLink>
            <NavLink className={styles.navItem} to={"premium-services"}>
              PREMIUM SERVICES
            </NavLink>
            <NavLink className={styles.navItem} to={"/products"}>
              SHOP
            </NavLink>
          </Nav>

          <NavLink className={styles.navItem} to={""}>
            <img src={cart} />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
