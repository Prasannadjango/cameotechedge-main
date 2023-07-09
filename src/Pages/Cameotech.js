import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Col, Row, Card } from "react-bootstrap";
import Cameotechimg2 from "../Assets/Images/cameotechourvisionimg.jpg";
import Cameotechmainig from "../Assets/Images/Cameotechmain.jpg";
import Cyadaiimage from "../Assets/Images/CyadAI.jpg";

export default function Cameotech() {
  return (
    <>
      <Header />
      <div className="maincontainer">
        <Row xl={2} xs={1} className="m-0 pb-100">
          <Col className="vision-img pe-xl-5 pe-0">
            <img src={Cameotechmainig} className="w-100 h-100" />
          </Col>
          <Col className="pt-xl-0 pt-4">
            <h4 className="Colorhead-txt">Explore Digitally</h4>
            <p className="fw-bolder display-5 py-3">Cameo Cooperate services</p>
            <p className="ourvision-content text-black-50 ">
              We focus on transforming experience at the personalized human
              level by combining the right technology through integration and
              bringing your business workflow to life with caring, passionate
              people focused on the why in each interaction.
            </p>
            <Button className="color-btn px-3 fw-bold py-2 mt-4 fs-5">
              Let's connect
            </Button>
          </Col>
        </Row>

        <Row xl={2} xs={1} className="m-0 pb-100">
          <Col className="pt-xl-0 pt-4">
            <p className="fw-bolder display-5 py-3">Our mission</p>
            <p className="ourvision-content text-black-50 ">
              To provide world class services and efficient solutions to our
              client’s businesses and empower local communities and our vision
              is to be the leading contact center management service provider in
              Tanzania and the rest of Africa. CameoTechedge aims to be in the
              forefront of building and empowering the youth, women, and various
              minorities, by turning them into a world class, efficient and
              effective customer focused workforce
            </p>
          </Col>
          <Col className="vision-img ps-xl-5 ps-0">
            <img src={Cameotechimg2} className="w-100 h-100" />
          </Col>
        </Row>

        <Row xl={2} xs={1} className="m-0 pb-100">
          <Col className="vision-img pe-xl-5 pe-0 ">
            <img src={Cameotechmainig} className="w-100 h-100" />
          </Col>
          <Col className="py-xl-0 py-5">
            <p className="fw-bolder display-5 py-3">
              WHY CHOOSE CAMEOTECHEDGE?
            </p>
            <p className="ourvision-content fs-5">
              CameoTechedge has a competitive advantage because:
            </p>
            <ol className="choosecameo-list ps-0  text-black-50 pt-4">
              <li>
                We have been part of Contact center for more than 2 decades.
              </li>
              <li>
                As a result, we have extensive experience and in-depth
                understanding of the history, vision, and tailor-made solutions
                to attain the proposed KPI’s and SLA of Wananchi
              </li>
              <li>
                Our hands-on knowledge and all-round experience will ensure a
                smooth transition of the contact center outsourcing
              </li>
              <li>
                We are the largest outsourcing company, and this gives us a
                deeper understanding of the market and laws
              </li>
              <li>We have extensive local knowledge</li>
              <li>Most of our key staff members are Tanzanian citizens</li>
            </ol>
          </Col>
        </Row>

        <Row xl={2} xs={1} className="m-0 pb-100">
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
      </div>
      <Footer />
    </>
  );
}
