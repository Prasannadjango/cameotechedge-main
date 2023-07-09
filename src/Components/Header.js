import React, { useState } from "react";
import {
  Button,

  Nav,

  Navbar,
 
} from "react-bootstrap";
import Logo from "../Assets/Images/cameo-logo.png";

import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import { FaPhoneAlt } from "react-icons/fa";
export default function Header() {
  const handleLinkClick = () => {
    scroll.scrollToTop(); // Scroll to the top of the page
  };

  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        className="p-3 position-fixed Navbar-container"
      >
        <div className="d-flex ">
          <Navbar.Brand href="/">
            <div className="Logo-container">
              <img src={Logo} className="w-100 h-100" />
            </div>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Link to='/Aboutus' onClick={handleLinkClick}>who we are?</Link>
            <Link to='/Ourpromoters' onClick={handleLinkClick}>Our Promoters</Link>
            <Link to='/Services' onClick={handleLinkClick}>Our Services</Link>
            <Link to='/Ourlocation' onClick={handleLinkClick}>Our Locations</Link>
          
            <Link to='/Careers'>Careers</Link>
           
            {/* <Nav.Link onClick={handleShow3}>Service & Operational</Nav.Link> */}
            <div className="Contactus-btnres">
              <Link to="/contactus">
               <Button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="me-2  bi bi-telephone-forward-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
</svg> Contact us
              </Button>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="Contactus-btn position-relative">
          <Link to="/contactus">
            <Button className="text-white">
              <FaPhoneAlt className="fs-3 me-3"/>
       Contact us
              </Button>
          </Link>
        </div>
      </Navbar>


    </>
  );
}
