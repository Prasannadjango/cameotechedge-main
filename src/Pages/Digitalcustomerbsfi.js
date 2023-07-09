import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Col, Row, Card } from "react-bootstrap";
import collectionicon from "../Assets/Images/serviceicon/icons8-improvement-64.webp";
import servicephone from "../Assets/Images/call.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import kycicon from "../Assets/Images/serviceicon/kyc.webp";
import Softwareill from '../Assets/Images/softwaresolutions.jpg'
import dataentryicon from "../Assets/Images/serviceicon/dataentry.webp";



import ERPicon from '../Assets/Images/serviceicon/erpicon.webp';
import Acqusionicon from '../Assets/Images/serviceicon/acqusionicon.webp';
import Bankingsoftwareicon from '../Assets/Images/serviceicon/icons8-refund-64.webp';


import checktrunkicon from '../Assets/Images/serviceicon/icons8-zoom-all-50.webp';
import paymenticon from '../Assets/Images/serviceicon/icons8-money-bag-64.webp';

export default function Digitalcustomerbsfi() {
  return (
    <>
      <Header />

      <div className="Bannerimg-section d-flex justify-content-center align-items-center">
          <h1 className='text-white display-4 fw-bold'>Our Software Solutions</h1>
       </div>
      <div >
       

        <div className="m-0 Container-spacing">
          
      
        <Row xl={2} xs={1} className="m-0  Container-spacing pb-100">
         
         <Col className="py-xl-0 py-2">
          
           <p className="ourvision-content text-black-50 pb-4">
           Our Software solution is designed to address a specific problem, automate a process and provide a service to track all activities. We leverage technology to streamline operations, enhance productivity, and achieve desired outcomes.

             </p>
            
         </Col>
         <Col className="vision-img ps-xl-5 ps-0">
           <img src={Softwareill} className="w-100 h-100" />
           
         </Col>
       </Row>





          <Row xl={2} xs={1} className="m-0 pt-5 Coreservice-container g-4">
            <Col>
              <Card className='Digitalcard'>
                <div className="d-flex align-items-center py-3">
                  <div className="pe-3">
                    <img src={Acqusionicon} />
                  </div>
                  <h5 className="fw-bold">
                    Document Management Software
                  </h5>
                </div>
                <p>
                Our Document Management Software (DMS) software solution is designed to manage, organize, store, and track electronic documents and files within an organization.Which helps businesses streamline their document-related processes, enhance collaboration, ensure document security, and improve overall efficiency in handling information.

                </p>
              </Card>
            </Col>

            <Col>
              <Card className='Digitalcard'>
                <div className="d-flex align-items-center py-3">
                  <div className="pe-3">
                    <img src={kycicon} />
                  </div>
                  <h5 className="fw-bold">CKYC Automation</h5>
                </div>
                
               <p>
               Our CKYC (Centralized Know Your Customer) automation technology and software solutions to streamline and automate the process of capturing and verifying client information as mandated by the CKYC guidelines.Our centralized repository that enables financial institutions to access and share customer KYC information across different entities, reducing duplication of effort and enhancing efficiency in KYC compliance.
               </p>
              </Card>
            </Col>

            <Col>
              <Card className='Digitalcard'>
                <div className="d-flex align-items-center py-3">
                  <div className="pe-3">
                    <img src={ERPicon} />
                  </div>
                  <h5 className="fw-bold">ERP Solutions</h5>
                </div>
               <p>
               Our ERP (Enterprise Resource Planning) solutions software systems that integrate and manage core business processes and data across various functional areas.Our ERP software provides a centralized database and a suite of modules to streamline operations, optimize resources, and facilitate effective decision-making.
               </p>
              
              </Card>
            </Col>

            <Col>
              <Card className=" Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-3">
                    <img src={checktrunkicon } />
                  </div>
                  <h5 className="fw-bold">Digitization of Physical Records</h5>
                </div>
               <p>
               Our digitization of the physical record  process of converting paper-based or physical documents into digital format, typically through scanning, capturing, and storing them electronically. This conversion allows organizations to manage and access their records digitally, leading to improved efficiency, accessibility, and long-term preservation of information
               </p>
               
              </Card>
            </Col>

            <Col>
              <Card className=" Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-3">
                    <img src={Bankingsoftwareicon} />
                  </div>
                  <h5 className="fw-bold">Core Banking software</h5>
                </div>
                <p>

  Our CBS Enables banks and financial institutions to manage their core banking operations, including customer accounts, transactions, and other essential banking functionalities. It serves as the backbone of a bank's operations, providing a comprehensive suite of modules and tools to support various banking services.

                </p>
               
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-3">
                    <img src={paymenticon} />
                  </div>
                  <h5 className="fw-bold">Payment Service solutions</h5>
                </div>
               <p>
               Our software systems and platforms that facilitate and manage various aspects of payment processing, enabling businesses to accept and process payments from customers through multiple channels. We provide solutions typically to provide the infrastructure and tools required to securely handle payment transactions, ensuring efficiency, accuracy, and compliance with payment industry standards.

               </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={dataentryicon} />
                  </div>
                  <h5 className="fw-bold">Contact Center Software & Solutions</h5>
                </div>
                <p>
                We use tools and platforms designed to streamline and enhance the operations and customer interactions of contact centers. Which provides solutions to a wide range of features and capabilities to manage and optimize inbound and outbound communications, customer support, and overall contact center performance.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
        
      </div>
      <Footer />
    </>
  );
}
