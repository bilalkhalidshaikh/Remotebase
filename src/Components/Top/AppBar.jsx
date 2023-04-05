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
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href="">Skill</Nav.Link>
            <Nav.Link href="">Process</Nav.Link>
            <Nav.Link href="">Blog</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="">Action</NavDropdown.Item>
              <NavDropdown.Item href="">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link style={{  }}> */}
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
                lineHeight: "32px",
                marginTop: "12px",
                cursor:'pointer'
              }}
              to={"/applyforjob"}
            >
              Apply as a Developer
              {/* </Nav.Link> */}
            </Link>
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
