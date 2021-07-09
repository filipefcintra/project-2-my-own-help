import React from "react";
import NavDrop from "./NavDrop";
import { Navbar, Container, Nav } from "react-bootstrap";
export default function NavBor() {
  return (
    <Navbar className="navbar sticky-top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">MyOwnHelp</Navbar.Brand>
        <Navbar collapseOnSelect>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/addnew">Add New</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
              <NavDrop />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Navbar>
  );
}
