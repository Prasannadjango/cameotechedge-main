import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Card, Col, Row } from "react-bootstrap";
import Centerline from "../Components/Centerline";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Cyadinternationalimg from "../Assets/Images/Cyantech.webp";


import Cameotechmainig from "../Assets/Images/Cameotechmain-1.webp";

export default function Ourpromoters() {
  return (
    <>
      <Header />
      <div className="Bannerimg-section d-flex justify-content-center align-items-center">
          <h1 className='text-white display-4 fw-bold'>Our Promoters</h1>
       </div>
      <div >
        <Row xl={2} xs={1} className="m-0 pb-100 Container-spacing ">
        <AnimationOnScroll animateIn="animate__bounceInLeft">
          <Col className="vision-img pe-xl-4 pe-0">
            <img src={Cameotechmainig} className="w-100 h-100 object-fit-contain " />
          </Col>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__bounceInRight">
          <Col className="pt-xl-0 pt-4">
           
            <p className="fw-bolder display-5 py-3">Cameo Corperate services india</p>
            <p className="ourvision-content text-black-50  pb-4 ">
              Established in 1997, Cameo Corporate Services Limited is a leading
              provider of Business Process Outsourcing Services head quartered
              in Chennai, India. Their service bouquet includes Document
              Management &Custodial Services, Payment Processing Services for
              Banks, publishing Services for Publishing Houses, Registry
              &Transfer Agency Services for companies listed on stock exchanges,
              and Transcription Services for Hospitals and Medical
              Professionals.
            </p>
            <a href='https://cameoindia.com/' className='Color-txt text-decoration-none'>for more information, visit cameoindia.com</a>
          </Col>
          </AnimationOnScroll>
        </Row>

        <div className="d-flex justify-content-center">
        <Centerline/>
        </div>

        <Row xl={2} xs={1} className="m-0 pb-100 Container-spacing ">
         
        <AnimationOnScroll animateIn="animate__bounceInLeft">
          <Col className="py-xl-0 py-2">
            <p className="fw-bolder display-6 py-3">
              CYAD support & Finance initative
            </p>
            <p className="ourvision-content text-black-50 pb-4">
            CYAD support & Finance initative, a subsiduary of CYAD International Holdings, a private company incorporated in
              Mauritius, is an investment company focused on investments in a
              variety of sectors in the Central African Region.  Active
              investments can be found in the Democratic Republic of Congo,
              Uganda, and Angola with representation offices in Rwanda and the
              Republic of Congo.  The sectors of activities are widely varied
              and comprise of service-related businesses to manufacturing and
              transformation industries.
              </p>
              <a href='https://www.cyad.mu/' className=' Color-txt text-decoration-none'>for more information, visit www.cyad.mu</a>
          </Col>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__bounceInRight">
          <Col className="vision-img ps-xl-5 ps-0">
            <img src={Cyadinternationalimg} className="w-100 h-100" />
          </Col>
          </AnimationOnScroll>
        </Row>
      </div>
      <Footer />
    </>
  );
}
