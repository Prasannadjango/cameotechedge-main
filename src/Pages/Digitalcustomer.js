import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {  Col, Row, Card} from "react-bootstrap";
import callcenterill from '../Assets/Images/call center illustration.jpg';
import servicephone from "../Assets/Images/serviceicon/icons8-ringing-phone-50.webp";
import Backofficeicon from "../Assets/Images/serviceicon/icons8-external-link-64.webp";
import Archivingicon from "../Assets/Images/serviceicon/archiveicon.webp";
export default function Digitalcustomer() {
  return (
    <>
      <Header />
      <div className="Bannerimg-section d-flex justify-content-center align-items-center">
          <h1 className='text-white display-4 fw-bold'>Our Call center services</h1>
       </div>
      <div >
       

    

        <div className="m-0 pb-100 Container-spacing ">
        <Row xl={2} xs={1} className="m-0  Container-spacing ">
         
         <Col className="py-xl-0 py-2">
          
           <p className="ourvision-content text-black-50 pb-4">
           Our Call center services typically involve a team of trained persons who are responsible for answering phone calls, interacting with customers or prospects, and resolving their queries or issues.
             </p>
            
         </Col>
         <Col className="vision-img ps-xl-5 ps-0">
           <img src={callcenterill} className="w-100 h-100" />
           
         </Col>
       </Row>

          <Row xl={3} xs={1} className="m-0 py-5 Coreservice-container gx-4">
            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={servicephone} />
                  </div>
                  <h4 className="fw-bold">Inbound services</h4>

                 
                </div>
                <p>
                  To ensure effective management of inbound calls, our organizations use call center software or customer relationship management (CRM) systems. These tools often include features such as call routing, call queuing, call recording, and integration with other business systems to enhance our client experience and streamline communication processes.

                  </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={servicephone} />
                  </div>
                  <h4 className="fw-bold">Out Bound Services</h4>
                </div>
               <p>
               Our Outbound call centers and our sales teams effectively handle calls. We use customer databases and lead lists to make calls, to manage and track interactions. Our tools can provide features like call scripting, call recording, automated dialing, call disposition tracking, and performance analytics to optimize outbound calling efforts.

               </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={Archivingicon } />
                  </div>
                  <h4 className="fw-bold">Backoffice</h4>
                </div>
              <p>
              <p>
              Our Efficient backoffice operations are smooth functioning of a business, as we support and enable the frontline operations and customer-facing activities. Automation and digital tools are often utilized to streamline backoffice processes, increase efficiency, and we reduce manual workloads.


                  </p>
              </p>
              </Card>
            </Col>
          </Row>
        </div>

       
      </div>
      {/* <Footer /> */}
    </>
  );
}
