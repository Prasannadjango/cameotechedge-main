import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Col, Row, Card, Accordion } from "react-bootstrap";
import Cameotechimg from "../Assets/Images/cameotechimg.jpg";
import Businessoperationimg from "../Assets/Images/Businessoperations.jpg";
import Cyadaiimage from "../Assets/Images/CyadAI.jpg";
import servicephone from "../Assets/Images/call.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Aiface from "../Assets/Images/AI-Operations.svg";
import kycimg from "../Assets/Images/Content-Control-and-Verification.svg";
import Capacityexpimage1 from "../Assets/Images/CapacityExpansion.jpg";

export default function Businessoperation() {
  return (
    <>
      <Header />
      <div className="maincontainer">
        <Row xl={2} xs={1} className="m-0 pb-100">
          <Col className="vision-img pe-xl-5 pe-0">
            <img src={Businessoperationimg} className="w-100 h-100" />
          </Col>
          <Col className="pt-xl-0 pt-3">
            <h4 className="Colorhead-txt">Strategies</h4>
            <p className="fw-bolder display-5 py-3">
              Business Continuty plan Exist for Agents
            </p>
            <p className="ourvision-content text-black-50 ">
              We focus on transforming experience at the personalized human
              level by combining the right technology through integration and
              bringing your business workflow to life with caring, passionate
              people focused on the why in each interaction. You want to meet
              your customers where they are with a personalized journey that
              creates brand ambassadors. We go beyond eCommerce customer
              service, tools, and digital technology and bring the culture that
              increases your buyer community.
            </p>
            <Button className="color-btn px-3 fw-bold py-2 mt-4 fs-5">
              Let's connect
            </Button>
          </Col>
        </Row>

        <div className="m-0 pb-100">
          <div className="text-center pb-xl-5 pb-3">
            <h4 className="Colorhead-txt">INDUSTRY CHALLENGES</h4>
            <p className="fw-bolder display-5 py-3">
              What’s Top Of Mind For Leaders In The Retail Industry?
            </p>
          </div>
          <Row xl={2} xs={1} className="m-0 pb-100">
            <Col className="vision-img pe-xl-5 pe-0">
              <img src={Capacityexpimage1} className="w-100 h-100" />
            </Col>
            <Col>
              <p className="ourvision-content text-black-50 pt-xl-0 pt-3">
                Our approach to content control, security, and moderation allows
                dynamic integration regardless of your social, in-house, or user
                platform. We consume and drive personalized control at every
                step along with your customer or consumer journey. Leveraging
                the best tech stack, we put the right people in the loop at
                exactly the right time to transform your Content control.
              </p>
              <p className="ourvision-content text-black-50">
                We provide the right humans in the loop to transform and
                integrate this journey. Regardless of task type or interaction —
                by empowering the absolute best in “people as a service” we are
                that critical human connection within your loop of technology,
                communication, and services to support your customers along
                their journey.
              </p>
            </Col>
          </Row>
        </div>

        <div className="m-0 pb-100">
          <div className="text-center">
            <p className="fw-bolder display-4">Core Services</p>
          </div>

          <Row xl={3} xs={1} className="m-0 pt-5 Coreservice-container gx-5">
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
                    Problem-solving skills to handle the complex issues through;
                  </p>
                </div>
                <Button className="Color-txt fw-bold coreservices-btn">
                  Learn more
                  <FaLongArrowAltRight className="ms-3" />
                </Button>
              </Card>
            </Col>

            <Col>
              <Card>
                <div className="d-flex align-items-center py-3 ">
                  <div className="pe-4">
                    <img src={kycimg} />
                  </div>
                  <h3 className="fw-bold">KYC/ Backoffice Services</h3>
                </div>
                <div>
                  <p className="m-0">
                    Data and management functions is certainly crucial for
                    organization’s smooth operations. We help to get the best
                    out of your enterprise’s back office and render the required
                    support.
                  </p>
                </div>
                <Button className="Color-txt fw-bold coreservices-btn">
                  Learn more
                  <FaLongArrowAltRight className="ms-3" />
                </Button>
              </Card>
            </Col>

            <Col>
              <Card>
                <div className="d-flex align-items-center py-3">
                  <div className="pe-4">
                    <img src={Aiface} />
                  </div>
                  <h3 className="fw-bold">BFSI & Software Solutions</h3>
                </div>
                <div>
                  <p className="m-0">
                    Our Intelligent Ecosystem receivables are best practice with
                    our leading-edge technology software solutions to provide
                    improved cross-channel value access all processes.
                  </p>
                </div>
                <Button className="Color-txt fw-bold coreservices-btn">
                  Learn more
                  <FaLongArrowAltRight className="ms-3" />
                </Button>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="m-0 pb-100">
          <p className="fw-bolder display-5 py-xl-5 py-3 text-center">
            Your Challanges Our Solutions
          </p>
          <Accordion className="Solution-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="border-0">
                Optimized Multi-Channel Digital Experience
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="border-0">
                Consumer Trust in Digital Content
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="border-0">
                Personalized Buyer Experiences
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="border-0">
                Conversion Rates & Purchase Abandonment
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="border-0">
                Acceleration to Market & Outpacing Competition
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
}
