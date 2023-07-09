import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Card, Col, Row } from "react-bootstrap";
import Aboutusimg from "../Assets/Images/aboutus.webp";
import congoflag from "../Assets/Images/democratic-republic-of-congo.webp";
import Ugandaflag from "../Assets/Images/uganda.webp";
import Aboutuspersonimg from "../Assets/Images/Aboutusperson1.jpg";
import Tanzaniaflag from "../Assets/Images/tanzania.webp";
import CountUp from "react-countup";
import indiaflag from "../Assets/Images/india.webp";
import Usaflag from "../Assets/Images/united-states.webp";
import Aboutus2 from "../Assets/Images/Aboutus2.webp";
import Jawaharnehruimg from "../Assets/Images/jawharnehru.webp";
import khalilimg from "../Assets/Images/khalilhaji.webp";
import ramamoorthyimg from "../Assets/Images/ramamorthi.webp";
import vijivenkateshimg from "../Assets/Images/vijivenketasan.webp";
import Rajeshcaplotimg from "../Assets/Images/rajeshcahplot.webp";
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Aboutus() {
  return (
    <>
      <Header />

       <div className="Bannerimg-section d-flex justify-content-center align-items-center">
          <h1 className='text-white display-4 fw-bold'>Who we are ?</h1>
       </div>



      <div>
        <Row xl={2} xs={1} className="m-0 pb-100 Container-spacing">
        <AnimationOnScroll animateIn="animate__bounceInLeft">
          <Col className="vision-img pe-xl-5 pe-0 ">
            <img src={Aboutusimg} className="w-100 h-100" />
          </Col>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__bounceInRight">
          <Col className="py-xl-0 py-5">
            <h4 className="Colorhead-txt">MEET THE TEAM</h4>
            <p className="fw-bolder display-5 py-3">CameoTechedge Family</p>

            <div className="py-4">
              <div className=" align-items-center Aboutus-point">
                <span>1</span>
                <span>CameoTechedge Uganda Est. in 2011 and sold in 2017</span>
              </div>
              <div className=" align-items-center Aboutus-point">
                <span>2</span>
                <span>CameoTechedge DRC Est. in 2014</span>
              </div>
              <div className=" align-items-center Aboutus-point">
                <span>3</span>
                <span>CameoTechedgeTanzania Est. in 2021</span>
              </div>
              <div className=" align-items-center Aboutus-point">
                <span>4</span>
                <span>Certus Technologies Uganda Est. in 2022</span>
              </div>
            </div>
          </Col>
          </AnimationOnScroll>
        </Row>

        <Row xl={5} md={2} xs={1} className=" Container-spacing m-0 pb-100 Counter-containermain">
          <Col className="text-center">
            <CountUp start={400} end={500} delay={2}>
              {({ countUpRef }) => (
                <div className="fw-bold display-5 d-flex align-items-center justify-content-center">
                  <span ref={countUpRef}></span>
                  <span>+</span>
                </div>
              )}
            </CountUp>
            <h5 className="pt-3">Agents</h5>
          </Col>
          <Col className="text-center">
            <CountUp start={0} end={4} delay={4}>
              {({ countUpRef }) => (
                <div className="fw-bold display-5 d-flex align-items-center justify-content-center">
                  <span ref={countUpRef}></span>
                  <span>+</span>
                </div>
              )}
            </CountUp>
            <h5 className="pt-3">Languages</h5>
          </Col>
          <Col className="text-center">
            <CountUp start={800} end={900} delay={4}>
              {({ countUpRef }) => (
                <div className="fw-bold display-5 d-flex align-items-center justify-content-center">
                  <span ref={countUpRef}></span>
                  <span>+</span>
                </div>
              )}
            </CountUp>
            <h5 className="pt-3">seat fully equipped BPO Hub</h5>
          </Col>
          <Col className="text-center">
            <CountUp start={0} end={10} delay={4}>
              {({ countUpRef }) => (
                <div className="fw-bold display-5 d-flex align-items-center justify-content-center">
                  <span ref={countUpRef}></span>
                  <span>+</span>
                </div>
              )}
            </CountUp>
            <h5 className="pt-3">years of experience</h5>
          </Col>
          <Col className="text-center">
            <CountUp start={0} end={65} delay={4}>
              {({ countUpRef }) => (
                <div className="fw-bold display-5 d-flex align-items-center justify-content-center">
                  <span ref={countUpRef}></span>
                  <span>%</span>
                </div>
              )}
            </CountUp>
            <h5 className="pt-3">Female workforce</h5>
          </Col>
        </Row>

        <Row xl={2} xs={1} className="m-0 pb-100 Container-spacing">
        <AnimationOnScroll animateIn="animate__bounceInLeft">
          <Col>
            <h4 className="Colorhead-txt pb-4">
              CREATE EXPERIENCE BEYOND EXPECT
            </h4>

            <p className="ourvision-content text-black-50 ">
              Our similar experience branches to all Telecom, Banking, Insurance
              and Industries and have proven track record of our exemplary
              service
            </p>
            <p className="fw-bold fs-5 py-4">
              We span 3 Countries across Africa with offices in
            </p>
            <Row xl={3} xs={1} className="py-4 gy-5">
              <Col className="d-flex align-items-center Aboutus-point1">
                <div>
                  <img src={congoflag} className="w-100 h-100" />
                </div>
                <h5>Congo</h5>
              </Col>
              <Col className="d-flex align-items-center Aboutus-point1">
                <div>
                  <img src={Ugandaflag} className="w-100 h-100" />
                </div>
                <h5>uganda</h5>
              </Col>

              <Col className="d-flex align-items-center Aboutus-point1">
                <div>
                  <img src={Tanzaniaflag} className="w-100 h-100" />
                </div>
                <h5>Tanzania</h5>
              </Col>
            </Row>
          </Col>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__bounceInRight">
          <Col className="vision-img ps-xl-5 ps-0">
            <img src={Aboutus2} className="w-100 h-100" />
          </Col>
          </AnimationOnScroll>
        </Row>

        <div className="Container-spacing pb-100">
          <div className="py-3 text-center">
            {/* <h4 className="Colorhead-txt">BOARD OF DIRECTORS</h4> */}
            <p className="fw-bolder display-5 py-3 header-font">
              {" "}
              OUR LEADERSHIP TEAM{" "}
            </p>
          </div>
          <Row className="m-0 ">
           
            <Col>
              <img src={Jawaharnehruimg} className="w-100 h-100"/>
            </Col>
          

           
            <Col className="ps-5">
              <h4 className="Colorhead-txt">CHAIRMAN</h4>
              <p className="fw-bolder display-5 py-3">Jawahar Vadivelu</p>
              <p className="ourvision-content text-black-50 py-3">
                Jawahar Vadivelu, holds MBA degrees from the
                Asian Institute of Management, Philippines, and from the Booth
                School of Business, University of Chicago.
              </p>
              <p className="ourvision-content text-black-50 ">
                Jawahar Vadivelu is the Chairman of Cameo Corporate Services
                Limited, a business process outsourcing firm headquartered in
                Chennai, also having a presence in key markets in Africa through
                its joint venture companies . Cameo principally offers document management
                solutions and transaction processing services to Telecos, Banks
                & Insurance Companies in India. Jawahar Vadivelu also holds
                directorships in the following companies, namely National Trust
                Housing Finance Limited, Navia Markets Limited and Navia
                Commodities Broker Pvt Limited. He has served as independent
                director on the board of India’s largest company, Oil and
                Natural Gas Corporation Limited, and on several of its
                sub-committees, including its audit committee and policy and
                planning committee. He has also served on the boards of Southern
                Petrochemical Industries Corporation Limited (SPIC) and Sical
                Logistics Limited.
              </p>
            </Col>
        
          </Row>
          
          <Row xl={2} xs={1} className="m-0 pb-100">
          <AnimationOnScroll animateIn="animate__bounceInLeft">
            <Col>
              <h4 className="Colorhead-txt"> MANAGING DIRECTOR</h4>
              <p className="fw-bolder display-5 py-3">Khalil Hajee</p>
              <p className="ourvision-content text-black-50 py-3">
                Khalil is the Managing Director of CameoTechedge Services and is
                responsible for defining the strategic direction to accelerate
                growth for the organisation and creating long term values for
                the shareholders. Khalil brings rich experience in driving
                strategy, profitable revenue growth, developing new markets,
                service offerings, partnerships, and client relationships.
                Khalil is a graduate from Queen's University.
              </p>
            </Col>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__bounceInRight">
            <Col className="vision-img ps-xl-5 ps-0">
              <img src={khalilimg} className="w-100 h-100" />
            </Col>
            </AnimationOnScroll>
          </Row>

          <Row xl={2} xs={1} className="m-0 pb-100">
          <AnimationOnScroll animateIn="animate__bounceInLeft">
            <Col className="vision-img pe-xl-5 pe-0">
              <img src={ramamoorthyimg} className="w-100 h-100" />
            </Col>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__bounceInRight">
            <Col>
              <h4 className="Colorhead-txt">DIRECTOR</h4>
              <p className="fw-bolder display-5 py-3">Ravi Ramamoorthy</p>
              <p className="ourvision-content text-black-50 py-3">
                Ravi Ramamoorthy is Bachelor of Science, Master of Law, Fellow
                Member of the Institute of Company Secretaries of India and
                Director of CameoTechedge
              </p>
              <p className="ourvision-content text-black-50 ">
                His Past Positions are; Managing Director - Cameo Corporate
                Services Limited, India. President of the Institute of Company
                Secretaries of India, for the year 2005. Was a member in the
                Primary Market, Secondary Market & Mutual fund Committees of
                SEBI - 2005 Council Member of the Institute of Company
                Secretaries of India from 2001-07 Chairman of the Southern India
                Regional Council – Institute of Company Secretaries of India
                2000 Member of the Regional Advisory committee of Central Excise
                Dept. President for International Federation of Company
                Secretaries - 2005 President of the Rotary Club of Madras Ashok
                Nagar - 2000 Office of Trustee in Sir Thyagaraya College, Madras
                for 6 yrs.
              </p>
            </Col>
            </AnimationOnScroll>
          </Row>

          <Row xl={2} xs={1} className="m-0 pb-100">

          <AnimationOnScroll animateIn="animate__bounceInLeft">
            <Col>
              <h4 className="Colorhead-txt">DIRECTOR</h4>
              <p className="fw-bolder display-5 py-3">Rajesh Chaplot</p>
              <p className="ourvision-content text-black-50 py-3">
                Rajesh Chaplot a Chartered Accountant is currently a Director of
                Cameo Techedge Rajesh Chaplot has been Chairman of
                Presidential Investors Round Table Conference (PIRT), Technical
                Working Group (TWG) which is Business advisory Body to the
                President of Uganda.
              </p>
              <p className="ourvision-content text-black-50">
                He is currently a member of Presidential CEO Forum in Uganda. He
                is currently a Board Member at Private Sector Foundation Uganda,
                and was Board member of Uganda Manufacturer Association for 6
                years. He is Ex- Chairman of the Indian Association, Uganda and
                headed Indian Business Forum (IBF) as First Secretary General.
                He is a recipient of the Highest Civilian Award of Uganda, “The
                Golden Jubilee Award yr 2020” from His Excellency the President
                of Uganda. He is also, a recipient of “Pravasi Bharatiya Samman
                Award in the yr. 2019” which is the highest Non- Resident Award
                from His Excellency the President of India.
              </p>
            </Col>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__bounceInRight">
            <Col className="vision-img ps-xl-5 ps-0">
              <img src={Rajeshcaplotimg} className="w-100 h-100" />
            </Col>
            </AnimationOnScroll>
          </Row>

         

          <Row xl={2} md={2} xs={1} className="m-0 pb-100">
          <AnimationOnScroll animateIn="animate__bounceInLeft">
            <Col className="vision-img pe-xl-5 pe-md-3 pe-0">
              <img src={vijivenkateshimg} className="w-100 h-100" />
            </Col>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__bounceInRight">
            <Col>
              <h4 className="Colorhead-txt">HEAD OF AFRICA</h4>
              <p className="fw-bolder display-5 py-3">Vijai Venkatesan</p>

              <p className="ourvision-content text-black-50 ">
                Vijai is the General Manager of Cameo Techedge and is responsible for
                daily business activities,  During his 20+years tenure, Vijai had developed a
                deep understanding for both financial and business operations
                prospective. His experience in Retail & Telecom industry had
                attained the goals from his ability to lead his teams to
                success. Vijai holds a post graduate degree in Executive MBA
                from IIM Ahmadabad, India.
              </p>
            </Col>
            </AnimationOnScroll>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}
