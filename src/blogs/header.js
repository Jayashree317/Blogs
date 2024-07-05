import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './header.css'
const Header = () => {
  return (
    <Navbar expand="lg" className='nav'>
      <Navbar.Brand href="/"  className='blog'>BlogSite</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link className='nav-link'>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/add-post">
            <Nav.Link className='nav-link'>Add Post</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
