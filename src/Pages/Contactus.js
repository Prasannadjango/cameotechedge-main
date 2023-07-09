import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Contactusill from "../Assets/Images/contactusill.jpg";
import { MdFlag } from "react-icons/md";

export default function Contactus() {
  const countryOptions = [
    { name: "Uganda", flag: <MdFlag /> },
    { name: "DR Congo", flag: <MdFlag /> },
    { name: "Tanzania", flag: <MdFlag /> },
  ];

  return (
    <>
      <Header />
      <div className="maincontainer mb-xl-5 mb-0 Container-spacing">
        <div className="d-flex  Carrers-container p-5 ">
          <Col xl={6}>
            <img src={Contactusill} className="w-100 h-100" />
          </Col>
          <Col xl={6} xs={12} className=" p-4">
            <Form className="Contact-form">
              <p className="fw-bolder display-6 py-4 text-center">
                Just let us know how we can help?
              </p>
              <Form.Select aria-label="Default select example"className="py-3 mb-3">
                <option>--choose Location--</option>
                {countryOptions.map((option, index) => (
                  <option key={index} value={option.name}>
                    {option.flag} {option.name}
                  </option>
                ))}
              </Form.Select>
              <div className=" Form-container">
                <Col className="mb-4">
                  <Form.Control placeholder="First name " className="py-3"/>
                </Col>
                <Col className="mb-4">
                  <Form.Control placeholder="Last name" className="py-3"/>
                </Col>
              </div>
              <div className=" Form-container">
                <Col className="mb-4">
                  <Form.Control placeholder="E-mail" className="py-3"/>
                </Col>
                <Col className="mb-4">
                  <Form.Control placeholder="Company" className="py-3"/>
                </Col>
              </div>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Please specify your needs"
              />
              <div className="d-flex pt-4">
                <Button>Let’s Talk</Button>
              </div>
            </Form>
          </Col>
        </div>
      </div>
     

      <Footer />
    </>
  );
}
