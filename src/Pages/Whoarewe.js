import React from "react";
import * as RB from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Card, Col, Row } from "react-bootstrap";
import Whoarewe1 from "../Assets/Images/whoarewe1.jpg";
import Ugandaflag from "../Assets/Images/uganda.png";
import Ugandaimg2 from "../Assets/Images/Ugandaimg2.jpg";
import Congoimg2 from "../Assets/Images/congocity.jpg";
import Ugandaimg1 from "../Assets/Images/Ugandaimg1.jpg";
import bsfisoftware from "../Assets/Images/serviceicon/icons8-computer-support-50.png";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import servicephone from "../Assets/Images/call.png";
import kycimgcore from "../Assets/Images/serviceicon/kyc.png";

export default function Whoarewe() {
  return (
    <>
      <Header />
      <div className="maincontainer">
        <RB.Row xl={2} xs={1} className="pb-100">
          <RB.Col>
            <h4 className="Colorhead-txt">OUR ADVANTAGE #1</h4>
            <div className=" py-3">
              <p className="fw-bolder display-5 ">
                Modern Approach to Outsourcing
              </p>
            </div>
            <p className="ourvision-content text-black-50 ">
              We focus on transforming experience at the personalized human
              level by combining the right technology through integration and
              bringing your business workflow to life with caring, passionate
              people focused on the why in each interaction.
            </p>
            <Link to="/contactus">
              <RB.Button className="color-btn px-3 fw-bold py-2 mt-4 fs-5">
                Access top Talent
              </RB.Button>
            </Link>
          </RB.Col>
          <RB.Col className="brd-15 pt-xl-0 pt-4">
            <img
              src={Whoarewe1}
              className="w-100 h-100
              "
            />
          </RB.Col>
        </RB.Row>

        <RB.Row xl={2} xs={1} className="pb-100">
          <RB.Col className="brd-15 pt-xl-0 pt-5">
            <img src={Ugandaimg2} className="w-100 h-100" />
          </RB.Col>
          <RB.Col className="ps-xl-5 ps-0 pt-xl-0 pt-4">
            <h4 className="Colorhead-txt">OUR ADVANTAGE #2</h4>
            <div className=" py-3">
              <p className="fw-bolder display-5 ">Clear focus on People</p>
            </div>
            <p className="ourvision-content text-black-50 ">
              clear focus on People as a Service model has led to our market
              leading position in BPO. We use a modern approach to outsourcing.
              We created the company to change perceptions of what outsourcing
              is and can be.
            </p>
            <p className="ourvision-content text-black-50 ">
              clear focus on People as a Service model has led to our market
              leading position in BPO. We use a modern approach to outsourcing.
              We created the company to change perceptions of what outsourcing
              is and can be.
            </p>
          </RB.Col>
        </RB.Row>

        <RB.Row xl={2} xs={1} className="pb-100">
          <RB.Col>
            <h4 className="Colorhead-txt">OUR ADVANTAGE #3</h4>
            <div className=" py-3">
              <p className="fw-bolder display-5 ">People Advantage</p>
            </div>
            <p className="ourvision-content text-black-50 ">
              clear focus on People as a Service model has led to our market
              leading position in BPO. We use a modern approach to outsourcing.
              We created the company to change perceptions of what outsourcing
              is and can be.
            </p>
            <p className="ourvision-content text-black-50 ">
              clear focus on People as a Service model has led to our market
              leading position in BPO. We use a modern approach to outsourcing.
              We created the company to change perceptions of what outsourcing
              is and can be.
            </p>
          </RB.Col>
          <RB.Col className="brd-15 pt-xl-0 pt-4">
            <img src={Ugandaimg2} className="w-100 h-100" />
          </RB.Col>
        </RB.Row>

        <RB.Row xl={2} xs={1} className="pb-100">
          <RB.Col className="brd-15">
            <img src={Ugandaimg2} className="w-100 h-100" />
          </RB.Col>
          <RB.Col className="ps-xl-5 ps-0 pt-xl-0 pt-4">
            <h4 className="Colorhead-txt">OUR ADVANTAGE #4</h4>
            <div className=" py-3">
              <p className="fw-bolder display-5 ">Leadership Advantage</p>
            </div>
            <p className="ourvision-content text-black-50 ">
              clear focus on People as a Service model has led to our market
              leading position in BPO. We use a modern approach to outsourcing.
              We created the company to change perceptions of what outsourcing
              is and can be.
            </p>
            <p className="ourvision-content text-black-50 ">
              clear focus on People as a Service model has led to our market
              leading position in BPO. We use a modern approach to outsourcing.
              We created the company to change perceptions of what outsourcing
              is and can be.
            </p>
          </RB.Col>
        </RB.Row>

        <RB.Row xl={2} xs={1} className="pb-100">
          <RB.Col>
            <h4 className="Colorhead-txt">OUR ADVANTAGE #4</h4>
            <div className=" py-3">
              <p className="fw-bolder display-5 ">Team Building Advantage</p>
            </div>
            <p className="ourvision-content text-black-50 ">
              clear focus on People as a Service model has led to our market
              leading position in BPO. We use a modern approach to outsourcing.
              We created the company to change perceptions of what outsourcing
              is and can be.
            </p>
            <p className="ourvision-content text-black-50 ">
              clear focus on People as a Service model has led to our market
              leading position in BPO. We use a modern approach to outsourcing.
              We created the company to change perceptions of what outsourcing
              is and can be.
            </p>
          </RB.Col>
          <RB.Col className="brd-15 pt-xl-0 pt-4">
            <img src={Ugandaimg2} className="w-100 h-100" />
          </RB.Col>
        </RB.Row>

        <RB.Row xl={2} xs={1} className="pb-100">
          <RB.Col className="brd-15">
            <img src={Ugandaimg2} className="w-100 h-100" />
          </RB.Col>
          <RB.Col className="ps-xl-5 ps-0 pt-xl-0 pt-4">
            <h4 className="Colorhead-txt">OUR ADVANTAGE #5</h4>
            <div className=" py-3">
              <p className="fw-bolder display-5 ">Leadership Advantage</p>
            </div>
            <p className="ourvision-content text-black-50 ">
              clear focus on People as a Service model has led to our market
              leading position in BPO. We use a modern approach to outsourcing.
              We created the company to change perceptions of what outsourcing
              is and can be.
            </p>
            <p className="ourvision-content text-black-50 ">
              clear focus on People as a Service model has led to our market
              leading position in BPO. We use a modern approach to outsourcing.
              We created the company to change perceptions of what outsourcing
              is and can be.
            </p>
          </RB.Col>
        </RB.Row>

        <div className="m-0 pb-100">
          <div className="text-center">
            <h4 className="Colorhead-txt">CAMEOTECHEDGE EXPERTISE</h4>
            <p className="fw-bolder display-4">Core Services</p>
          </div>

          <Row xl={3} xs={1} className="m-0 pt-5 Coreservice-container gx-5">
            <Link to="/Digitalexperience">
              <Col>
                <Card>
                  <div className="d-flex align-items-center py-3">
                    <div className="pe-4">
                      <img src={servicephone} />
                    </div>
                    <h3 className="fw-bold">Call Centre Services</h3>
                  </div>
                  <div>
                    <p className="m-0">
                      Our advisor’s workforce has the social, emotional, and
                      Problem-solving skills to handle the complex issues
                      through;
                    </p>
                  </div>
                  <Button className="Color-txt fw-bold coreservices-btn">
                    Learn more
                    <FaLongArrowAltRight className="ms-3" />
                  </Button>
                </Card>
              </Col>
            </Link>

            <Link to="/Digitalexperiencekyc">
              <Col>
                <Card className="my-xl-0 my-4">
                  <div className="d-flex align-items-center py-3 ">
                    <div className="pe-4">
                      <img src={kycimgcore} />
                    </div>
                    <h3 className="fw-bold">KYC/ Backoffice Services</h3>
                  </div>
                  <div>
                    <p className="m-0">
                      Data and management functions is certainly crucial for
                      organization’s smooth operations. We help to get the best
                      out of your enterprise’s back office and render the
                      required support.
                    </p>
                  </div>
                  <Button className="Color-txt fw-bold coreservices-btn">
                    Learn more
                    <FaLongArrowAltRight className="ms-3" />
                  </Button>
                </Card>
              </Col>
            </Link>

            <Link to="/Digitalexperiencebsfi">
              <Col>
                <Card>
                  <div className="d-flex align-items-center py-3">
                    <div className="pe-4">
                      <img src={bsfisoftware} />
                    </div>
                    <h3 className="fw-bold">BFSI & Software Solutions</h3>
                  </div>
                  <div>
                    <p className="m-0">
                      Our Intelligent Ecosystem receivables are best practice
                      with our leading-edge technology software solutions to
                      provide improved cross-channel value access all processes.
                    </p>
                  </div>
                  <Button className="Color-txt fw-bold coreservices-btn">
                    Learn more
                    <FaLongArrowAltRight className="ms-3" />
                  </Button>
                </Card>
              </Col>
            </Link>
          </Row>
        </div>

        <div className="pb-100">
          <div className="text-center">
            <h4 className="Colorhead-txt pb-3">WHY US?</h4>
            <p className="fw-bolder display-4">
              Because We Deliver Customer Moments that Matter
            </p>
          </div>
          <RB.Row className="pt-xl-5 pt-3" xl={3} xs={1}>
            <RB.Col className="mb-xl-0 mb-3">
              <RB.Card className="Location-card1">
                <h3 className="fw-bold">People</h3>
                <div className="py-3">
                  <p>
                    Our global locations are all positioned in easy-to-access
                    locations, utilize the highest comforts and latest
                    technology for our teams, and our culture first.
                  </p>
                </div>
              </RB.Card>
            </RB.Col>
            <RB.Col className="mb-xl-0 mb-3">
              <RB.Card className="Location-cardimg1">
                <div className="p-4">
                  <h3 className="fw-bold">
                    Integrated and Secure Infrastructure
                  </h3>
                  <div className="py-3">
                    <p>
                      Our teams have the necessary information
                      security/technology protocols and privacy regulations
                      whether physically located in an office location or
                      working from home.
                    </p>
                  </div>
                </div>
              </RB.Card>
            </RB.Col>
            <RB.Col>
              <RB.Card className="Location-card2">
                <h3 className="fw-bold">Geographically Dispersed</h3>
                <div className="py-3">
                  <p>
                    Our global footprint provides business continuity and a
                    broad range of cost options, language capabilities,
                    tech-savvy and highly motivated teams.
                  </p>
                </div>
              </RB.Card>
            </RB.Col>
          </RB.Row>

          <RB.Row className="pt-xl-5 pt-3" xl={3} xs={1}>
            <RB.Col className="mb-xl-0 mb-4">
              <RB.Card className="Location-cardimg2 ">
                <div className="p-4">
                  <h3 className="fw-bold">Rapid Staffing Mobility</h3>
                  <div className="py-3">
                    <p>
                      Our onshore, nearshore, and across-the-globe teams can be
                      deployed quickly for immediate scalability.
                    </p>
                  </div>
                </div>
              </RB.Card>
            </RB.Col>
            <RB.Col className="mb-xl-0 mb-4">
              <RB.Card className="Location-card3">
                <h3 className="fw-bold">No Service Disruptions</h3>
                <div className="py-3">
                  <p>
                    With redundant disaster recovery plans and advanced security
                    tech, all locations maintain protocols for geo disasters
                    that allow teams to set up quickly at home or alternate
                    locations should a disaster arise.
                  </p>
                </div>
              </RB.Card>
            </RB.Col>

            <RB.Col>
              <RB.Card className="Location-card4">
                <h3 className="fw-bold">
                  Customer Experience in Language They Prefer
                </h3>
                <div className="py-3">
                  <p>
                    Our top talent across-the-globe delivers superior
                    translation and language experiences. Our language fluency
                    accelerates hiring, training, and branding for superior
                    customer journeys.
                  </p>
                </div>
              </RB.Card>
            </RB.Col>
          </RB.Row>
        </div>
      </div>
      <Footer />
    </>
  );
}
