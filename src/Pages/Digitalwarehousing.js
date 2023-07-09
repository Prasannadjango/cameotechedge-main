import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {  Col, Row, Card } from "react-bootstrap";

import kycicon from "../Assets/Images/serviceicon/kyc.webp";
import Documentwarehosingill from '../Assets/Images/Documentwarehousingimg.jpg';
import dataentryicon from "../Assets/Images/serviceicon/dataentry.webp";
import warehousingicon from "../Assets/Images/serviceicon/warehousing.png";
import DataConversionsicon from "../Assets/Images/serviceicon/icons8-edit-file-64.webp";
import Archivingicon from "../Assets/Images/serviceicon/archiveicon.webp";

export default function Digitalwarehousing() {
  return (
    <>
      <Header />

      <div className="Bannerimg-section d-flex justify-content-center align-items-center">
          <h1 className='text-white display-4 fw-bold'>Our Document warehousing services</h1>
       </div>


      <div className="Container-spacing">
       
        <div className="m-0 pb-100">
        <Row xl={2} xs={1} className="m-0  Container-spacing ">
         
         <Col className="py-xl-0 py-2">
          
           <p className="ourvision-content text-black-50 pb-4">
           Document digitizing provides numerous advantages and added
                      value to businesses and individuals alike. By converting
                      physical documents into digital formats, accessibility and
                      portability are enhanced, allowing for easy retrieval and
                      sharing of information. It streamlines workflow processes,
                      reduces storage costs, and enables efficient searching and
                      indexing. Moreover, digitized documents are less
                      susceptible to loss or damage, ensuring long-term
                      preservation and enabling effective data analysis. 
             </p>
            
         </Col>
         <Col className="vision-img ps-xl-5 ps-0">
           <img src={Documentwarehosingill} className="w-100 h-100" />
           
         </Col>
       </Row>

          <Row xl={2} xs={1} className="m-0 pt-5 Coreservice-container gx-4">
            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={kycicon} />
                  </div>
                  <h4 className="fw-bold">
                    warehousing and E2E Document Management
                  </h4>
                </div>
                <p>
                Designed to optimize and streamline warehouse operations.Which provides tools to manage inventory, track goods, and facilitate efficient movement of goods within the warehouse.
                </p>
               
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={ DataConversionsicon} />
                  </div>
                  <h4 className="fw-bold">Digital and Physical Archiving</h4>
                </div>
                <p>
                End-to-End Document Management encompasses the entire lifecycle of documents within an organization, from creation and capture to storage, retrieval, and eventual disposition. E2E Document Management solutions aim to digitize, organize, and automate document-related processes, reducing manual effort, improving collaboration, and enhancing compliance.

            </p>
              </Card>
            </Col>
           
           
          </Row>
        </div>

        
      </div>
      
    </>
  );
}
