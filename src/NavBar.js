import React from "react";
import Nav from "react-bootstrap/Nav";


function NavBar() {
  return (
    <Nav defaultActiveKey="/" className="justify-content-center">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/foryou">💬 For You</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
//💬 For You