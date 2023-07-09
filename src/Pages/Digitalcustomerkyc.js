import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {  Col, Row, Card } from "react-bootstrap";
import collectionicon from "../Assets/Images/serviceicon/icons8-improvement-64.webp";
import servicephone from "../Assets/Images/call.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import kycicon from "../Assets/Images/serviceicon/kyc.webp";

import dataentryicon from "../Assets/Images/serviceicon/dataentry.webp";
import warehousingicon from "../Assets/Images/serviceicon/warehousing.png";
import DataConversionsicon from "../Assets/Images/serviceicon/icons8-edit-file-64.webp";
import Archivingicon from "../Assets/Images/serviceicon/archiveicon.webp";
import kycill from '../Assets/Images/kycill.jpg';
export default function Digitalcustomerkyc() {
  return (
    <>
      <Header />

      <div className="Bannerimg-section d-flex justify-content-center align-items-center">
          <h1 className='text-white display-4 fw-bold'>Our KYC services</h1>
       </div>
     
        
      <div className="Container-spacing">
       
        <div className="m-0 pb-100">
        <Row xl={2} xs={1} className="m-0  Container-spacing ">
         
         <Col className="py-xl-0 py-2">
          
           <p className="ourvision-content text-black-50 pb-4">
           Client KYC (Know Your Customer) holds significant
                      importance in the telecom industry, in line with
                      regulatory requirements.Telecom companies need to
                      diligently verify customer identities  and maintain
                      accurate records to combat fraud,    identity theft, and
                       misuse of services. KYC procedures enable compliance with
                      anti-money laundering (AML) and counter-terrorism
                      financing (CTF) regulations, protecting the integrity of
                      the telecom network and contributing to national security.
                      By thoroughly understanding customers' identities,
                      activities, and potential risks, telecom providers can
                      establish trust, prevent unauthorized access, and ensure
                      the lawful and responsible use of their services.
             </p>
            
         </Col>
         <Col className="vision-img ps-xl-5 ps-0">
           <img src={kycill} className="w-100 h-100" />
           
         </Col>
       </Row>


          <Row xl={2} xs={1} className="m-0 pt-5 Coreservice-container gx-4">
            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={kycicon} />
                  </div>
                  <h4 className="fw-bold">Electronic KYC</h4>
                </div>
                <p>
                Electronic Know Your Customer (e-KYC) is a process that allows organizations to verify the identity of customers electronically, typically using digital platforms or technology. KYC refers to the procedures and regulations that businesses and financial institutions must follow to verify the identity and assess the suitability of their customers, in order to prevent fraud, money laundering, and other illegal activities.

                </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={ DataConversionsicon} />
                  </div>
                  <h4 className="fw-bold">Physical KYC</h4>
                </div>
                <p>
                Physical KYC (Know Your Customer) refers to the process of verifying the identity and credentials of customers through physical documents and in-person interactions. It involves collecting and verifying various documents and information provided by customers to ensure compliance with regulatory requirements and to mitigate the risk of fraud and illicit activities.
                </p>
              </Card>
            </Col>

           
          </Row>
        </div>

        
      </div>
    
    </>
  );
}
