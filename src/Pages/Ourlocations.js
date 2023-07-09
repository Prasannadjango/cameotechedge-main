import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Card, Col, Row } from "react-bootstrap";
import * as RB from "react-bootstrap";
import Cyadaiimage from "../Assets/Images/CyadAI.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import bsfisoftware from "../Assets/Images/serviceicon/icons8-computer-support-50.png";
import Cyadinternationalimgsa from "../Assets/Images/CameotechSA.jpg";
import Cameotechimg from "../Assets/Images/cameotechimg.jpg";
import servicephone from "../Assets/Images/serviceicon/icons8-ringing-phone-50.png";
import kycimgcore from "../Assets/Images/serviceicon/kyc.png";
import { Link } from "react-router-dom";
import Ugandaflag from "../Assets/Images/uganda.png";
import Tanzaniaflag from "../Assets/Images/tanzania.png";
import Congoflag from "../Assets/Images/democratic-republic-of-congo.png";

import Congoimg2 from "../Assets/Images/congocity.jpg";

import Tanzaniaimg1 from "../Assets/Images/tanzaniaimg1.jpg";
import Tanzaniaimg2 from "../Assets/Images/Tanzaniaimg2.jpg";
import Ugandaimg1 from "../Assets/Images/Ugandaimg1.jpg";
export default function Ourlocation() {
  return (
    <>
      <Header />
      <div className="maincontainer">
        <div className="text-center">
          <p className="display-5 pb-5">Our Locations</p>
        </div>
        <Row xl={3} xs={1} className="m-0 gx-5 pb-100">

        <Link to='/congolocation'> 
          <RB.Col>
            <RB.Card className="d-flex align-items-center bg-white  py-3 Location-card">
              <div className="flag-container me-3">
                <img src={Congoflag} />
              </div>
              <p className="fw-bolder h2 pt-3 ">DR Congo</p>
            </RB.Card>
          </RB.Col>
          </Link>
          <Link to='/Tanzanialocation'> 
          <RB.Col>
            <RB.Card className="d-flex  align-items-center bg-white  py-3 Location-card">
              <div className="flag-container me-3">
                <img src={Tanzaniaflag} />
              </div>
              <p className="fw-bolder h2 pt-3 ">Tanzania</p>
            </RB.Card>
          </RB.Col>
          </Link>


          <Link to='/Ugandalocation' >
          <RB.Col>
            <RB.Card className="d-flex align-items-center bg-white  py-3 Location-card">
              <div className="flag-container me-3">
                <img src={Ugandaflag} />
              </div>
              <p className="fw-bolder h2 pt-3 ">Uganda</p>
            </RB.Card>
          </RB.Col>
          </Link>
        </Row>

     
      </div>
      <Footer />
    </>
  );
}
