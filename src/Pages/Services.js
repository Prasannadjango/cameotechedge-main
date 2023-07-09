import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import servicephone from "../Assets/Images/serviceicon/icons8-ringing-phone-50.webp";
import warehouseimg from "../Assets/Images/serviceicon/warehouse.webp";
import kycimgcore from "../Assets/Images/serviceicon/kyc.webp";
// import Man1 from "../Assets/Images/african-man.jpg";
import Archivingicon from "../Assets/Images/serviceicon/archiveicon.webp";
import bsfisoftware from "../Assets/Images/serviceicon/icons8-computer-support-50.webp";

import servicesimg from "../Assets/Images/services.jpg";

import { animateScroll as scroll } from "react-scroll";
export default function Services() {
  const handleLinkClick = () => {
    scroll.scrollToTop(); // Scroll to the top of the page
  };
  return (
    <>
      <Header />
      <div className="Bannerimg-section d-flex justify-content-center align-items-center">
          <h1 className='text-white display-4 fw-bold'>Our services</h1>
       </div>
     
      <div >
        <Row xl={2} xs={1} className="m-0 pb-100 Container-spacing">
          <Col className="pt-xl-0 pt-4">
            <h4 className="Colorhead-txt">Greater experience</h4>
            <p className="fw-bolder display-5 py-3">Our Services</p>
            <p className="ourvision-content text-black-50 ">
              We focus on transforming experience at the personalized human
              level by combining the right technology through integration and
              bringing your business workflow to life with caring, passionate
              people focused on the why in each interaction.
            </p>
          </Col>
          <Col className="vision-img pe-xl-5 pe-0 pt-xl-0 pt-4">
            <img src={servicesimg} className="w-100 object-fit-contain" />
          </Col>
        </Row>

        <div className="pb-100 Container-spacing">
          <div className="text-center">
            <h4 className="Colorhead-txt pb-3">Quality Service</h4>
            <p className="fw-bolder display-4">What we Offer</p>
          </div>
          <Row xl={2} xs={1} className="m-0 pt-5 Coreservice-container gx-5">
            <Link to="/Digitalexperience" onClick={handleLinkClick}>
              <Col>
                <Card className="Services-card">
                  <div className="d-flex align-items-center py-3">
                    <div className="pe-4">
                      <img src={servicephone} />
                    </div>
                    <h3 className="fw-bold">Call Centre Services</h3>
                  </div>
                  <div>
                    <p className="m-0">
                    Our Call center services typically involve a team of trained persons who are responsible for answering phone calls, interacting with customers or prospects, and resolving their queries or issues.
                    </p>
                    <span className="Color-txt">learn more...</span>
                  </div>
                </Card>
              </Col>
            </Link>

            <Link to="/Digitalexperiencekyc" onClick={handleLinkClick}>
              <Col>
                <Card className="Services-card">
                  <div className="d-flex align-items-center py-3 ">
                    <div className="pe-4">
                      <img src={kycimgcore} />
                    </div>
                    <h3 className="fw-bold">KYC/Digitizing</h3>
                  </div>
                  <div>
                    <p className="m-0">
                      Client KYC (Know Your Customer) holds significant
                      importance in the telecom industry, in line with
                      regulatory requirements.Telecom companies need to
                      diligently verify customer identities {/* and maintain
                      accurate records to combat fraud,    identity theft, and
                       misuse of services. KYC procedures enable compliance with
                      anti-money laundering (AML) and counter-terrorism
                      financing (CTF) regulations, protecting the integrity of
                      the telecom network and contributing to national security.
                      By thoroughly understanding customers' identities,
                      activities, and potential risks, telecom providers can
                      establish trust, prevent unauthorized access, and ensure
                      the lawful and responsible use of their services. */}
                    </p>
                    <span className="Color-txt">learn more...</span>
                  </div>
                </Card>
              </Col>
            </Link>

            <Link to="/Digitalexperiencebsfi" onClick={handleLinkClick}>
              <Col className="mt-5">
                <Card className="Services-card">
                  <div className="d-flex align-items-center ">
                    <div className="pe-4">
                      <img src={bsfisoftware} />
                    </div>
                    <h3 className="fw-bold"> Software Solutions</h3>
                  </div>
                  <div>
                    <p className="m-0">
                      Our Software solutions can help commercial organizations
                      stay attuned to the technological advancements and deliver
                      better services to customers. CAMEO can be a reliable
                      partner for outsourced Software Solution services.
                    </p>
                    <span className="Color-txt">learn more...</span>
                  </div>
                </Card>
              </Col>
            </Link>

            <Link to="/Digitalwarehousing">
              <Col className="mt-5">
                <Card className="Services-card">
                  <div className="d-flex align-items-center ">
                    <div className="pe-4">
                      <img src={warehouseimg} />
                    </div>
                    <h3 className="fw-bold">Document Warehousing</h3>
                  </div>
                  <div>
                    <p className="m-0 pt-2">
                      Cameo has witnessed an unanticipated growth with the aid
                      of tech innovations. 
                      {/* Our Software solutions can help commercial organizations  stay attuned to the technological
                      advancements and deliver better services to customers.
                      CAMEO can be a reliable partner for outsourced Software
                      Solution services. */}
                    </p>
                    <span className="Color-txt">learn more...</span>
                  </div>
                </Card>
              </Col>
            </Link>

            <Link to="/Documentmanagesystem">
              <Col className="mt-5">
                <Card className="Services-card">
                  <div className="d-flex align-items-center ">
                    <div className="pe-4">
                      <img src={Archivingicon} />
                    </div>
                    <h3 className="fw-bold">Document Management system</h3>
                  </div>
                  <div>
                    <p className="m-0 pt-2">
                      Document digitizing provides numerous advantages and added
                      {/* value to businesses and individuals alike. By converting
                      physical documents into digital formats, accessibility and
                      portability are enhanced, allowing for easy retrieval and
                      sharing of information. It streamlines workflow processes,
                      reduces storage costs, and enables efficient searching and
                      indexing. Moreover, digitized documents are less
                      susceptible to loss or damage, ensuring long-term
                      preservation and enabling effective data analysis. */}
                    </p>
                    <span className="Color-txt">learn more...</span>
                  </div>
                </Card>
              </Col>
            </Link>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}
