import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {  Col, Row, Card} from "react-bootstrap";
import collectionicon from "../Assets/Images/serviceicon/icons8-improvement-64.webp";
import scanningicon from '../Assets/Images/serviceicon/icons8-zoom-all-50.webp';
import { FaLongArrowAltRight } from "react-icons/fa";
import kycicon from "../Assets/Images/serviceicon/kyc.webp";
import Documentsoftwaresysytemill from '../Assets/Images/documentmanagementsysytem.jpg'
import dataentryicon from "../Assets/Images/serviceicon/dataentry.webp";
import wbhicon from "../Assets/Images/serviceicon/icons8-secure-cloud-64.webp";
import DataConversionsicon from "../Assets/Images/serviceicon/icons8-edit-file-64.webp";
import Archivingicon from "../Assets/Images/serviceicon/archiveicon.webp";
import servicephone from "../Assets/Images/serviceicon/icons8-ringing-phone-50.webp";
import Backofficeicon from "../Assets/Images/serviceicon/icons8-external-link-64.webp";
import Customerret from '../Assets/Images/serviceicon/icons8-paste-special-64.webp';
import metaicon from '../Assets/Images/serviceicon/aboutus.webp';
export default function Documentms() {
  return (
    <>
      <Header />
      <div className="Bannerimg-section d-flex justify-content-center align-items-center">
          <h1 className='text-white display-4 fw-bold'>Our Document Management services</h1>
       </div>
      
      <div className="Container-spacing">
       
   
      <Row xl={2} xs={1} className="m-0  Container-spacing pb-100">
         
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
           <img src={Documentsoftwaresysytemill} className="w-100 h-100" />
           
         </Col>
       </Row>

       
         

          <Row xl={2} xs={1} className="m-0 pt-5 Coreservice-container gx-4">
            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={dataentryicon} />
                  </div>
                  <h4 className="fw-bold">Date Entry</h4>
                </div>
                <p>
                It is a process of entering or inputting data into a computer system or database. It involves manually transcribing information from physical documents, electronic sources, or other formats into a digital format.

                </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={DataConversionsicon} />
                  </div>
                  <h4 className="fw-bold">Data Validation</h4>
                </div>
               <p>
               The process of ensuring that data entered into a computer system or database is accurate, consistent, and meets specified criteria or requirements. It involves checking the integrity, validity, and reliability of the data to maintain data quality and prevent errors or inconsistencies.

               </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={kycicon } />
                  </div>
                  <h4 className="fw-bold">Biometric KYC</h4>
                </div>
               <p>
               The process of ensuring that data entered into a computer system or database is accurate, consistent, and meets specified criteria or requirements. It involves checking the integrity, validity, and reliability of the data to maintain data quality and prevent errors or inconsistencies.

               </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={Customerret  } />
                  </div>
                  <h4 className="fw-bold">Customer rentention and Document Collection</h4>
                </div>
               <p>
               Customer retention is the ability of a business to retain its existing customers and keep them engaged, satisfied, and loyal over time. It is a critical aspect of business success as it contributes to long-term profitability, reduces customer churn, and fosters a positive brand reputation. 

               </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={metaicon} />
                  </div>
                  <h4 className="fw-bold">Meta Data Processing</h4>
                </div>
               <p>
               Metadata processing refers to the management and manipulation of metadata, which is descriptive information about a piece of data or a document. Metadata provides context, structure, and additional information about the data, helping to organize, search, and understand it more effectively.

               </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={ Backofficeicon} />
                  </div>
                  <h4 className="fw-bold">Record Management services</h4>
                </div>
               <p>
               Our Services refer to outsourced services provided by specialized companies to help organizations efficiently manage their records throughout their lifecycle. These services typically include the storage, retrieval, organization, protection, and disposal of physical and electronic records.

               </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={ collectionicon} />
                  </div>
                  <h4 className="fw-bold">Cheque Truncation Data Entry services</h4>
                </div>
               <p>
               Cheque truncation data entry services involve the manual entry of data from physical cheques into electronic systems as part of the cheque truncation process.Where physical cheques are converted into electronic images and the paper cheques are no longer required for further processing.

               </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={Archivingicon} />
                  </div>
                  <h4 className="fw-bold">
                    Applications forms Processing under finacial inclusion
                  </h4>
                </div>
                <p>
                Application form processing in the context of financial inclusion refers to the handling and processing of application forms submitted by individuals or businesses seeking financial services or products to promote financial inclusion.

                </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={scanningicon} />
                  </div>
                  <h4 className="fw-bold">
                   Scanning services
                  </h4>
                </div>
               <p>
               Scanning services refer to the professional service of converting physical documents, images, or other materials into digital format using specialized scanning equipment and software. Scanning services are commonly used to digitize large volumes of documents, records, photos, and other visual content for various purposes, such as archiving, document management, information sharing, and preservation.
               </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={wbhicon} />
                  </div>
                  <h4 className="fw-bold">
                  Web hosting of scanned images i.e. electronics Documents
                  </h4>
                </div>
               <p>
               Web hosting of scanned images refers to the process of storing and making digitized documents or images available on a web server for access and viewing over the internet. It involves uploading the scanned images to a web hosting provider's server and configuring them for web-based access.
               </p>
              </Card>
            </Col>

            <Col>
              <Card className="Digitalcard">
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={servicephone} />
                  </div>
                  <h4 className="fw-bold">
                Number Management system
                  </h4>
                </div>
               <p>
               A Number Management System (NMS) is a software or system that helps organizations manage and control telephone numbers or other numerical resources. Which enables efficient allocation, tracking, and administration of numbers, ensuring effective management of telecommunications resources.
               </p>
              </Card>
            </Col>


          </Row>
     

       
      </div>
      <Footer />
    </>
  );
}
