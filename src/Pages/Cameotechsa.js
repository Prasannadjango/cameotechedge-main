import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Card, Col, Row } from "react-bootstrap";
import Cyadaiimage from "../Assets/Images/CyadAI.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import bsfisoftware from "../Assets/Images/serviceicon/icons8-computer-support-50.png";
import Cyadinternationalimgsa from "../Assets/Images/CameotechSA.jpg";
import Cameotechimg from "../Assets/Images/cameotechimg.jpg";
import servicephone from "../Assets/Images/serviceicon/icons8-ringing-phone-50.png";
import kycimgcore from "../Assets/Images/serviceicon/kyc.png";
import { Link } from "react-router-dom";

export default function Cameotechsa() {
  return (
    <>
      <Header />
      <div className="maincontainer">
        <Row xl={2} xs={1} className="m-0 pb-100">
          <Col className="vision-img pe-xl-5 pe-0">
            <img src={Cyadinternationalimgsa} className="w-100 h-100" />
          </Col>
          <Col className="pt-xl-0 pt-4">
            <h4 className="Colorhead-txt">Our offices</h4>
            <p className="fw-bolder display-5 py-3">Cameotech SA</p>
            <p className="ourvision-content text-black-50 ">
              a private company incorporated in Mauritius, is an investment
              company focused on investments in a variety of sectors in the
              Central African Region.  Active investments can be found in the
              Democratic Republic of Congo, Uganda, and Angola with
              representation offices in Rwanda and the Republic of Congo.
            </p>
          </Col>
        </Row>

        <div className="m-0 pb-100">
          <div className="text-center">
            <h4 className="Colorhead-txt">CAMEOTECHEDGE EXPERTISE</h4>
            <p className="fw-bolder display-4">Core Services</p>
          </div>

          <Row
            xl={3}
            xs={1}
            className="m-0 pt-xl-5 pt-4 Coreservice-container gx-5"
          >
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
              <Col className="my-xl-0 my-4">
                <Card>
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

        <Row xl={2} xs={1} className="m-0 pb-100 py-xl-0 py-3">
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

        <div className="pb-100">
          <div className="text-center">
            <h4 className="Colorhead-txt pb-3">Our Benefits</h4>
            <p className="fw-bolder display-4">What set us Part? </p>
          </div>
          <Row className="pt-xl-5 pt-3">
            <Col xl={4}>
              <div className="d-flex flex-column setpart-card">
                <Col>
                  <Card>
                    <h3 className="fw-bold">Transformative</h3>
                    <div className="py-3">
                      <p>
                        Our focus on transformation is powered by removing
                        barriers that you face in your process. Blockers in
                        providing the right input and quality are on top of our
                        minds. We use integrated automation to effectively
                        personalize the experience and quality of your data.
                        Interjecting the right human intelligence to power your
                        AI is how we transform.
                      </p>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card className="setpart-cardimg my-xl-0 my-3">
                    <img src={Cameotechimg} />
                  </Card>
                </Col>
              </div>
            </Col>
            <Col xl={8}>
              <Col>
                <Card className="setpart-card2">
                  <h3 className="fw-bold">Strategic</h3>
                  <div className="py-3">
                    <p>
                      Our focus on transformation is powered by removing
                      barriers that you face in your process. Blockers in
                      providing the right input and quality are on top of our
                      minds. We use integrated automation to effectively
                      personalize the experience and quality of your data.
                      Interjecting the right human intelligence to power your AI
                      is how we transform.
                    </p>
                  </div>
                </Card>
              </Col>
              <Row xl={2} xs={1}>
                <Col>
                  <Card className="setpart-card3">
                    <h3 className="fw-bold">Purpose Driven</h3>
                    <div className="py-3">
                      <p>
                        Our focus on transformation is powered by removing
                        barriers that you face in your process. Blockers in
                        providing the right input and quality are on top of our
                        minds. We use integrated automation to effectively
                        personalize the experience and quality of your data.
                        Interjecting the right human intelligence to power your
                        AI is how we transform.
                      </p>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card className="setpart-card4">
                    <h3 className="fw-bold">Future-focused</h3>
                    <div className="py-3">
                      <p>
                        Our focus on transformation is powered by removing
                        barriers that you face in your process. Blockers in
                        providing the right input and quality are on top of our
                        minds. We use integrated automation to effectively
                        personalize the experience and quality of your data.
                        Interjecting the right human intelligence to power your
                        AI is how we transform.
                      </p>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}
