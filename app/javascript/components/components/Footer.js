import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavbarText } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Navbar fixed="bottom" expand dark color="dark">
        <NavbarBrand href="/">Apartment App</NavbarBrand>
        <Nav className="me-auto" navbar></Nav>
        <NavbarText>&copy; YMCJ Alpha 2023</NavbarText>
      </Navbar>
    </footer>
  );
};

export default Footer;
