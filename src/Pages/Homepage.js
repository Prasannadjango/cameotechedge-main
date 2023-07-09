import React from "react";
import { TypeAnimation } from "react-type-animation";
import Header from "../Components/Header";
import { Card, Col, Row } from "react-bootstrap";
import Homepagevideo from "../Assets/Media/homepagevideo.webm";
import icon1 from "../Assets/Images/icon1.svg";
import icon2 from "../Assets/Images/icon2.svg";
import icon3 from "../Assets/Images/icon3.svg";
import person1 from "../Assets/Images/blackwomen.jpg";
import callaccept from "../Assets/Images/callin.svg";
import callreject from "../Assets/Images/callout.svg";
import visionimage from "../Assets/Images/visionimage-3.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import servicephone from "../Assets/Images/serviceicon/icons8-ringing-phone-50.png";
import kycimgcore from "../Assets/Images/serviceicon/kyc.png";
import Man1 from "../Assets/Images/african-man.webp";

import bsfisoftware from "../Assets/Images/serviceicon/icons8-computer-support-50.png";
import Footer from "../Components/Footer";
import clientimg1 from "../Assets/Images/Airtellogo.png";
import clientimg2 from "../Assets/Images/AfricellLogo.png";
import clientimg3 from "../Assets/Images/vodacomlogo.png";
import clientimg4 from "../Assets/Images/Familysearchlogo.png";
import { Link } from "react-router-dom";
import lefttorightimg from "../Assets/Images/lefttorightdot.png";
import Orangerdclogo from "../Assets/Images/orangedrc.png";
import Cameotechimg2 from "../Assets/Images/cameotechourvisionimg-1.webp";
import Centerline from "../Components/Centerline";

export default function Homepage() {
  return (
    <>
      <Header />

      <div className="maincontainer">
        <Row
          xl={2}
          xs={1}
          className="m-0 Videomain-container Container-spacing"
        >
          <Col>
            <h4 className="Colorhead-txt">YOUR CAMEOTECHEDGE</h4>
            <div className="pb-4">
              <p className="fw-bolder display-5">
                Amazing Customer Experiences.
              </p>
              <p className="fw-bolder display-5 Colorhead-txt">Together.</p>
            </div>
            <div>
              <p className="m-0 fs-5 text-black-50">
                CameoTechedge is a Business Process Outsourcing company that’s
                based in Central Africa .
              </p>
            </div>
          </Col>
          <Col className="position-relative">
            <div className="video-container ps-xl-5 ps-0">
              <video
                autoPlay
                muted
                loop
                src={Homepagevideo}
                className=" h-100"
              ></video>
              <div className="icon-1">
                <img src={icon1} />
              </div>
              <div className="icon-2">
                <img src={icon2} />
              </div>
              <div className="icon-3">
                <img src={icon3} />
              </div>
              <div>
                <TypeAnimation
                  sequence={[
                    "Hello!", // Types 'One'
                    3000, // Waits 1s
                    "Guten Tag!",
                    3000,
                    "Hola!",
                    3000,
                    "Ola!",
                    3000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="type-txt"
                />
              </div>

              <div className="Call-container">
                <div className="d-flex justify-content-center ">
                  <img src={person1} className="w-100 h-100" />
                </div>
                <h5 className="fw-bold py-2">Jane Maria</h5>
                <div className="d-flex justify-content-center ">
                  <div className="pe-3">
                    <img src={callreject} />
                  </div>
                  <div>
                    <img src={callaccept} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-center">
        <Centerline/>
        </div>
    
        {/* Our vision section */}
        <Row
          xl={2}
          xs={1}
          className="m-0 w-100 pb-100 sectionbg1 Container-spacing Ourvision-container"
        >
          <Col className="vision-img pe-xl-5 pe-0">
            <img src={visionimage} className="w-100 h-100" />
          </Col>

          <Col>
            <p className="fw-bolder display-5 py-3 header-font">Who we are</p>
            <p className="ourvision-content text-black-50 ">
              CameoTechedge provides efficient, Call center solution services,
              KYC services,Document Digitizing, Warehousing & Software solutions
              across Africa. CameoTechedge’s representation in Africa stretches
              across the following countries: Democratic Republic of Congo,
              Tanzania and Uganda.
            </p>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
        <Centerline/>
        </div>
        <Row xl={2} xs={1} className="m-0 pb-100 Container-spacing">
          <Col className="pt-xl-0 pt-4">
            <p className="fw-bolder display-5 py-3 header-font">Our mission</p>
            <p className="ourvision-content text-black-50 ">
              To provide world class services and efficient solutions to our
              client’s businesses and empower local communities . CameoTechedge
              aims to be in the forefront of building and empowering the youth,
              women, and various minorities, by turning them into a world class,
              efficient and effective customer focused workforce
            </p>
          </Col>
          <Col className="vision-img ps-xl-5 ps-0">
            <img src={Cameotechimg2} className="w-100 h-100" />
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
        <Centerline/>
        </div>
        <Row xl={2} xs={1} className="m-0 pb-100 Container-spacing sectionbg1">
          <Col className="position-relative outsourcing-container ">
            <img src={Man1} className="w-100" />
          </Col>
          <Col className="ps-xl-5 ps-0">
            <h4 className="Colorhead-txt pb-4">EXPLORE CAMEOTECHEDGE</h4>
            <div className="pb-4">
              <h1 className="fw-bolder ">
                Let’s chat about business process outsourcing for success
              </h1>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
        <Centerline/>
        </div>
        <div className="m-0 pb-100 Beyond-expectionmain Container-spacing">
          <div className="text-center">
            <h4 className="Colorhead-txt pb-4">OUR PROVEN APPROACH</h4>
            <h1 className="fw-bolder display-5">
              Executing Experience Beyond Expectation
            </h1>
          </div>
          <Row className="m-0 pb-100 Beyond-expection  py-5" xl={3} xs={1}>
            <Col className="d-flex Beyond-expectiontxt">
              <Card className="Beyond-expectionsection card1 bg-white">
                <div className="d-flex flex-column">
                  <div className="count-container text-center">1</div>
                  <h5 className="m-0 fw-bold py-3">Onboarding</h5>
                  <p className="m-0">
                    Your onboarding manager helps you build your team using a
                    proven project management approach (roadmap, recruit,
                    process, train, and launch).
                  </p>
                </div>
                <div className="go-corner"></div>
              </Card>
            </Col>

            <Col className="d-flex Beyond-expectiontxt">
              <Card className="Beyond-expectionsection card1 bg-white">
                <div className="d-flex flex-column">
                  <div className="count-container text-center">2</div>
                  <h5 className="m-0 fw-bold py-3">Recuritment</h5>
                  <p className="m-0">
                    our recruiting team combines sourcing and headhunting to
                    interview, test, and curate your custom-tailored team.
                  </p>
                </div>
                <div className="go-corner"></div>
              </Card>
            </Col>

            <Col className="d-flex Beyond-expectiontxt">
              <Card className="Beyond-expectionsection  card1 bg-white">
                <div className="d-flex flex-column">
                  <div className="count-container text-center">3</div>
                  <h5 className="m-0 fw-bold py-3">Training</h5>
                  <p className="m-0">
                    our training team facilitates and builds training
                    documentation with you and creates a certification plan with
                    your team.
                  </p>
                </div>
                <div className="go-corner"></div>
              </Card>
            </Col>

            <Col className="d-flex Beyond-expectiontxt">
              <Card className="Beyond-expectionsection mt-5 card1 bg-white">
                <div className="d-flex flex-column">
                  <div className="count-container text-center">4</div>
                  <h5 className="m-0 fw-bold py-3">Production</h5>
                  <p className="m-0">
                    Your custom team is 100% dedicated to you. They are assigned
                    a manager, and we continually monitor KPIs and goals.
                  </p>
                </div>
                <div className="go-corner"></div>
              </Card>
            </Col>

            <Col className="d-flex Beyond-expectiontxt">
              <Card className="Beyond-expectionsection card1 bg-white mt-5">
                <div className="d-flex flex-column">
                  <div className="count-container text-center">5</div>
                  <h5 className="m-0 fw-bold py-3">Continuous improvement</h5>
                  <p className="m-0">
                    You are assigned a customer support manager to partner with
                    you on continuous improvement and help you project manage
                    your work and team.
                  </p>
                </div>
                <div className="go-corner"></div>
              </Card>
            </Col>

            <Col className="d-flex Beyond-expectiontxt">
              <Card className="Beyond-expectionsection  card1 bg-white mt-5">
                <div className="d-flex flex-column">
                  <div className="count-container text-center">6</div>
                  <h5 className="m-0 fw-bold py-3">Growth</h5>
                  <p className="m-0">
                    You can accelerate growth, level up production, increase
                    efficiency, and improve your bottom line.
                  </p>
                </div>
                <div className="go-corner"></div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center">
        <Centerline/>
        </div>
        <div className="Container-spacing sectionbg1 pb-100">
          <div className="text-center">
            <h4 className="Colorhead-txt pb-4">OUR GREATEST ASSETS ARE</h4>
            <h1 className="fw-bolder display-5">Our clients</h1>
          </div>
          <Row
            xl={6}
            xs={2}
            className="pt-5 justify-content-center  Companylogo-container"
          >
            <Col>
              <Card className="company-logo flex-row">
                <img src={clientimg1} className="w-100" />
              </Card>
            </Col>
            <Col>
              <Card className="company-logo">
                <img src={clientimg2} className="w-100" />
              </Card>
            </Col>
            <Col>
              <Card className="company-logo">
                <img src={clientimg3} className="w-100" />
              </Card>
            </Col>
            <Col>
              <Card className="company-logo">
                <img src={clientimg4} className="w-100" />
              </Card>
            </Col>
            <Col>
              <Card className="company-logo">
                <img src={Orangerdclogo} className="w-100" />
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </>
  );
}
