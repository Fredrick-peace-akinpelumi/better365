import React from "react";
import { useState } from "react";
import "./casino.css";
import casi from "../../images/casi.png";
import casi2 from "../../images/casi2.png";
import casi3 from "../../images/casi3.png";
import casilogo from "../../images/casinologo.PNG";
import Navbar from "../../static/Navbar/Navbar";
import hoverimg from "../../images/casino1.png";
import hoverimg2 from "../../images/casi2.webp";
import hoverimg3 from "../../images/casi3.webp";
import hoverimg4 from "../../images/casi4.webp";
import hoverimg5 from "../../images/casi5.webp";
import hoverimg6 from "../../images/casi6.webp";
import hoverimg7 from "../../images/casi7.webp";
import hoverimg8 from "../../images/casi8.webp";
import hoverimg9 from "../../images/casi9.webp";
import hoverimg10 from "../../images/casi10.webp";
import hoverimg11 from "../../images/casi11.webp";
import hoverimg12 from "../../images/casi12.webp";
import Footer from "../../static/footer/Footer";

const Casino = () => {
  const [show, setshow] = useState(false);

  const items=[hoverimg,hoverimg2,hoverimg3,hoverimg4,hoverimg5,hoverimg6,hoverimg7,hoverimg8,hoverimg9,hoverimg10,hoverimg11,hoverimg12]
  return (
    <>
    <Navbar/>
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgb(0,0,0)" }}
      >
        <div
          className="container-fluid w-100"
          style={{ backgroundColor: "rgb(62,62,62)" }}
        >
          <div className="container text-white">
            <b>Game History</b>
            <b className="ms-2">Jackpots</b>
          </div>
        </div>
        <div className="container mt-2">
          <div className="row">
            <div className="d-lg-flex justify-content-center">
              <div>
                <h1 className="text-center text-white shad">
                  MEGA <br /> JACKPOT
                </h1>
                <div className="bord text-white text-center d-flex justify-content-between">
                  <h3 style={{ color: "rgb(0,196,255)" }}>$</h3>
                  <h3 style={{ color: "rgb(0,196,255)" }}>6,292.36</h3>
                </div>
                <div className="d-flex">
                  <img className="w-25 mt-2" src={casi} alt="" />
                  <div
                    className="p-2 mt-3"
                    style={{ backgroundColor: "rgb(34,34,34)" }}
                  >
                    <div className="text-white" style={{ lineHeight: "0.1" }}>
                      <p>
                        PlayerID-122172 won{" "}
                        <b style={{ color: "rgb(0,196,255)" }}>9,445.95$</b>
                      </p>
                      <p style={{ color: "rgb(0,196,255)" }}>Weekly JackPot</p>
                      <p>40 Super Hot</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-center text-white shad">
                  WEEKLY <br />
                  JACKPOT
                </h1>
                <div className="bord text-white text-center d-flex justify-content-between">
                  <h3 style={{ color: "rgb(0,196,255)" }}>$</h3>
                  <h3 style={{ color: "rgb(0,196,255)" }}>744.15</h3>
                </div>
                <div className="d-flex">
                  <img className="w-25 mt-2" src={casi2} alt="" />
                  <div
                    className="p-2 mt-3"
                    style={{ backgroundColor: "rgb(34,34,34)" }}
                  >
                    <div className="text-white" style={{ lineHeight: "0.1" }}>
                      <p>
                        PlayerID-122172 won{" "}
                        <b style={{ color: "rgb(0,196,255)" }}>9,445.95$</b>
                      </p>
                      <p style={{ color: "rgb(0,196,255)" }}>Weekly JackPot</p>
                      <p>40 Super Hot</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-center text-white shad">
                  DAILY <br />
                  JACKPOT
                </h1>
                <div className="bord text-white text-center d-flex justify-content-between">
                  <h3 style={{ color: "rgb(0,196,255)" }}>$</h3>
                  <h3 style={{ color: "rgb(0,196,255)" }}>308.42</h3>
                </div>
                <div className="d-flex">
                  <img className="w-25 mt-2" src={casi3} alt="" />
                  <div
                    className="p-2 mt-3"
                    style={{ backgroundColor: "rgb(34,34,34)" }}
                  >
                    <div className="text-white" style={{ lineHeight: "0.1" }}>
                      <p>
                        PlayerID-122172 won{" "}
                        <b style={{ color: "rgb(0,196,255)" }}>9,445.95$</b>
                      </p>
                      <p style={{ color: "rgb(0,196,255)" }}>Weekly JackPot</p>
                      <p>40 Super Hot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3 col-lg-12 col-sm-12 col-md-6">
          <div className="row">
            <div
              className="d-flex justify-content-between p-lg-2"
              style={{ backgroundColor: "rgb(58,58,58)" }}
            >
              <div className="text-light d-lg-flex d-sm-block gap-3">
                <b>FAVOURITES(0)</b>
                <b>FEATURED(51)</b>
                <b>ALL SLOTS(445)</b>
              </div>
              <div className="text-light d-lg-flex gap-3">
                <p><i class="fa-sharp fa-regular fa-filter"></i></p>
                <p><i class="fa-solid fa-magnifying-glass"></i></p>
                <p><i class="fa-solid fa-gear"></i></p>
              </div>
            </div>
          </div>

          <div
            className="container mt-2"
            style={{ backgroundColor: "rgb(34,34,34)" }}
          >
            <div className="row ">
              <div className="d-flex p-2 justify-content-around gap-3 ">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <div className="w-25" style={{ border: "solid thin white" }}>
                    <img src={casilogo} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>

{/* games cat map */}
                  <div className="d-flex flex-wrap">
                  {
                    items.map((item,index)=>(

          <div className="col-3 mt-3">
            <div
              className="">
              <img onMouseOver={() => setshow(true)} 
              onMouseOut={() => setshow(false)} 
              className="hove" src={item} alt="" 
              style={
                show
                  ? {  opacity: "0.5", transition: " 0.5s ease-out" }
                  : {  opacity: "1" }
              }/>

             <div className="butt" style={
                  show
                    ? {  display: "block" }
                    : {  display: "none" }
                }>
             <i class="fa-regular fa-heart ms-3 text-warning fs-3"></i> <br />
             <button
                className="btn btn-primary mt-3"
                style={{ backgroundColor: "rgb(28,114,168)"}}
              >
                Play
              </button>
             </div>
            </div>
            <div className="d-flex gap-5">
            <i class="fa-regular fa-heart mt-2 text-white"></i>
              <p className="text-white ms-5">Sizzling Hot</p>
            </div>
          </div>
                    ))
                  }
                  </div>
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Casino;
