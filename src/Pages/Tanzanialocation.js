import React from "react";
import * as RB from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Tanzaniaflag from "../Assets/Images/tanzania.png";

import Congoimg2 from "../Assets/Images/congocity.jpg";

import Tanzaniaimg1 from "../Assets/Images/tanzaniaimg1.jpg";
import Tanzaniaimg2 from "../Assets/Images/Tanzaniaimg2.jpg";
export default function Tanzanialocation() {
  return (
    <>
      <Header />
      <div className="Container-spacing pb-100">
        <RB.Row xl={2} xs={1} className="pb-5">
          <RB.Col>
            <div className="brd-15">
              <img src={Tanzaniaimg1} className="w-100" />
            </div>
            <RB.Row className="mt-3">
              <RB.Col className="brd-15 mb-xl-0 mb-3" xl={5}>
                <img src={Congoimg2} className="w-100 h-100" />
              </RB.Col>
              <RB.Col className="brd-15" xl={7}>
                <img src={Tanzaniaimg2} className="w-100" />
              </RB.Col>
            </RB.Row>
          </RB.Col>

          <RB.Col className="pb-xl-0 pb-4">
            <RB.Row>
              <RB.Col className="brd-15 mb-xl-0 mb-3" xl={6}>
                <img src={Congoimg2} className="w-100 h-100" />
              </RB.Col>
              <RB.Col className="brd-15" xl={6}>
                <img src={Tanzaniaimg2} className="w-100 h-100" />
              </RB.Col>
            </RB.Row>
            <div className="brd-15 mt-3">
              <img src={Tanzaniaimg1} className="w-100" />
            </div>
          </RB.Col>
        </RB.Row>

        <section className="pb-5">
          <p className="display-5 m-0">Tanzania</p>
          <div className="py-4">
            <h4 className="fw-bold">Mr.Senthil Errachetty</h4>
            <p className="Colorhead-txt pt-1">Country head</p>
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
              Sky City Mall, 5th Floor, University Road, Dar es Salaam, Tanzania
            </p>
            <p className="text-secondary py-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
             +255 786 55 33 22
            </p>
            <p className="text-secondary ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
            Senthil@cameotechedge.africa
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
