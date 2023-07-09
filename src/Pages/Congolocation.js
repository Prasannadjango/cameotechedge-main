import React from "react";
import * as RB from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import DRcongoflag from "../Assets/Images/democratic-republic-of-congo.png";
import Congoimg1 from "../Assets/Images/Congolocation1.jpg";
import Congoimg2 from "../Assets/Images/congocity.jpg";
import Congoimg3 from "../Assets/Images/congoimage3.jpg";

export default function Congolocation() {
  return (
    <>
      <Header />
      <div className="Container-spacing pb-100">
        <RB.Row xl={2} xs={1} className="pb-5">
          <RB.Col>
            <div className="brd-15">
              <img src={Congoimg1} className="w-100" />
            </div>
            <RB.Row className="mt-3" >
              <RB.Col className="brd-15 mb-xl-0 mb-3" xl={5}>
                <img src={Congoimg2} className="w-100 h-100" />
              </RB.Col>
              <RB.Col className="brd-15" xl={7}>
                <img src={Congoimg3} className="w-100" />
              </RB.Col>
            </RB.Row>
          </RB.Col>

          <RB.Col className="pb-xl-0 pb-4">
          
            <RB.Row  >
              <RB.Col className="brd-15 mb-xl-0 mb-3" xl={6}>
                <img src={Congoimg2} className="w-100 h-100" />
              </RB.Col>
              <RB.Col className="brd-15" xl={6}>
                <img src={Congoimg3} className="w-100 h-100" />
              </RB.Col>
            </RB.Row>
            <div className="brd-15 mt-3">
              <img src={Congoimg1} className="w-100" />
            </div>
          </RB.Col>

       
        </RB.Row>
        
        <section className="pb-5">
          <p className="display-5 m-0">
            DR Congo
          </p>
          <div className="py-4">
            <h4 className="fw-bold">Mr.Vijai Venkatesan</h4>
            <p className="Colorhead-txt pt-1">General Manager</p>
            <p className="text-secondary pt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="me-2 bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
             Cameotechedge Services,SA|Av.No.1538,De I'avenue Mondjiba,No-1527,C/Nagaliema Boulevard,Kinshasa-DRC
            </p>
            <p className="text-secondary py-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
             +243-972 444 007
            </p>
            <p className="text-secondary ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
            Vijai@cameotechedge.africa
            </p>
          </div>
        </section>
     


      </div>
      <Footer />
    </>
  );
}
