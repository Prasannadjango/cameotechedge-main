import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Careersimg from "../Assets/Images/carrersimg.jpg";
export default function Careers() {
  return (
    <>
      <Header />
      <div className="maincontainer mb-xl-5 mb-0 Container-spacing">
       

        <div className="d-flex  Carrers-container p-5 ">
          <Col xl={6}>
            <img src={Careersimg} className="w-100 h-100"/>
          </Col>
          <Col xl={6} xs={12} className=" p-4">
            <Form className="Contact-form ">
              <p className="fw-bolder display-6 pb-3">
                Join our Team
              </p>
           
              <div className="Form-container ">
                <Col className="mb-3">
                  <Form.Control placeholder="First name " className="py-3"/>
                </Col>
                <Col className="mb-3">
                  <Form.Control placeholder="Last name" className="py-3"/>
                </Col>
              </div>
              <div className="  Form-container">
                <Col className="mb-3">
                  <Form.Control placeholder="E-mail" className="py-3"/>
                </Col>
                <Col className="mb-3">
                  <Form.Control placeholder="Mobile NUmber" className="py-3"/>
                </Col>
              </div>
              <div className="  Form-container">
                <Col  className="mb-3">
                  <Form.Control placeholder="Location" className="py-3"/>
                </Col>
                <Col  className="mb-3">
                  <Form.Control type='file' placeholder="Upload your cv" className="py-3"/>
                </Col>
              </div>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Few words about you..."
              />
              <div className="pt-4">
                <Button>Submit</Button>
              </div>
            </Form>
          </Col>
        </div>
      </div>
      <Footer />
    </>
  );
}
