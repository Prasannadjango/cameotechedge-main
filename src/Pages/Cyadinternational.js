import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Card, Col, Row } from "react-bootstrap";
import Cyadaiimage from "../Assets/Images/CyadAI.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import bsfisoftware from '../Assets/Images/serviceicon/icons8-computer-support-50.png'
import Aiface from "../Assets/Images/AI-Operations.svg";
import kycimg from "../Assets/Images/Content-Control-and-Verification.svg";
import Cyadinternationalimg from "../Assets/Images/Cyantech.jpg";
import Cyadinternationalimage2 from '../Assets/Images/cyadimg2.jpg';
import servicephone from "../Assets/Images/serviceicon/icons8-ringing-phone-50.png";
import kycimgcore from "../Assets/Images/serviceicon/kyc.png";
import { Link } from "react-router-dom";

export default function Cyadinternational() {
  return (
    <>
      <Header />
      <div className="maincontainer">
        <Row xl={2} xs={1} className="m-0 pb-100">
          <Col className="vision-img pe-xl-5 pe-0">
            <img src={Cyadinternationalimg} className="w-100 h-100" />
          </Col>
          <Col className='py-xl-0 py-4'>
           
            <p className="fw-bolder display-5 py-3">
              CYAD International Holdings
            </p>
            <p className="ourvision-content text-black-50 ">
              CYAD International Holdings, a private company incorporated in
              Mauritius, is an investment company focused on investments in a
              variety of sectors in the Central African Region.  Active
              investments can be found in the Democratic Republic of Congo,
              Uganda, and Angola with representation offices in Rwanda and the
              Republic of Congo.
            </p>
            {/* <p className="ourvision-content text-black-50 ">
            CYAD
              International and their promoters already have a working
              relationship with most organizations & business houses in the
              Uganda & Democratic Republic of Congo through various investments,
              including
             The sectors of activities are widely varied
              and comprise of service-related businesses to manufacturing and
              transformation industries.
            </p>
            <p className="ourvision-content text-black-50 ">
             Through its subsidiary companies, the
              firm employs over 700 people indirectly and has four companies in
              Uganda that operate within diverse market segments.
            </p> */}
          </Col>
        </Row>
        
        <Row xl={2} xs={1} className="m-0 pb-100">
        <Col className='py-xl-0 py-4'>
           
          
           <p className="ourvision-content text-black-50 ">
            The sectors of activities are widely varied and comprise of service-related businesses to manufacturing and transformation industries.  Through its subsidiary companies, the firm employs over 700 people indirectly and has four companies in Uganda that operate within diverse market segments.
CYAD International and their promoters already have a working relationship with most organizations & business houses in the Uganda & Democratic Republic of Congo through various investments, including
           </p>
          
         </Col>
         <Col className="vision-img ps-xl-5 ps-0">
            <img src={Cyadinternationalimage2} className="w-100 h-100" />
          </Col>
         
        </Row>



        
       

        <Row xl={2} xs={1} className="m-0 pb-100">
          <Col>
            <h4 className="Colorhead-txt">HUMAN IN THE LOOP</h4>
            <p className="fw-bolder display-5 py-3">
              Integrated & Empowered Content
            </p>
            <p className="ourvision-content text-black-50 ">
              Our approach to content control, security, and moderation allows
              dynamic integration regardless of your social, in-house, or user
              platform. We consume and drive personalized control at every step
              along with your customer or consumer journey. Leveraging the best
              tech stack, we put the right people in the loop at exactly the
              right time to transform your Content control.
            </p>
          </Col>
          <Col className="vision-img ps-xl-5 ps-0">
            <img src={Cyadaiimage} className="w-100 h-100" />
          </Col>
        </Row>

        
      </div>
      <Footer />
    </>
  );
}
