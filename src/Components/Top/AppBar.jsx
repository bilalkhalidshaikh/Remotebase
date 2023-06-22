import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link } from "react-router-dom";
import logo from "./../../Images/logo.png";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ height: "100px" }}>
      <Container className="nav">
        <Navbar.Brand href="">
          <img src={logo} width={300} height={300} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor:'#FFFBF0'}}>
          <Nav className="me-auto">
            <Nav.Link href="#aboutUs">About</Nav.Link>
            <Nav.Link href="#skills">Skill</Nav.Link>
            <Nav.Link href="#process">Process</Nav.Link>
            <Nav.Link href="#blogs">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <button className="davFMk">
                <Link
                  to={"/start"}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Hire Developer
                </Link>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default function AppBar() {
  return (
    <div>
      <CollapsibleExample />
    </div>
  );
}
