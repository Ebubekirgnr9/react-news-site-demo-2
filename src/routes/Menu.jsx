import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo.svg';
import { useState } from 'react';
import { Fragment } from "react";
import css from '../App.css';
import { Outlet } from "react-router-dom";
export default function Menu() {

  return (
    <Fragment>
      <Navbar bg="black" expand="xl">
        <Container >
          <Navbar.Brand href="#" className=''>
            <img src={logo} className="App-logo img-fluid" width={150} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='bg-white text-danger' />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto  my-lg-0  ">

              <Nav.Link href="/" className='text-white'>Home</Nav.Link>
              <Nav.Link href="/Sports" className='text-white'>Sports</Nav.Link>
              <Nav.Link href="/Communication" className='text-white'>Communication</Nav.Link>





            </Nav>

            <Nav.Link href="/Register" className='text-white  bg-red p-2 rounded-0 px-5 '>
            SIGN IN
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );
}
