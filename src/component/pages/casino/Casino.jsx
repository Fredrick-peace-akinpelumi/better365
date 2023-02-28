import React from "react";
import { useState } from "react";
import "./casino.css";
import casi from "../../images/casi.png";
import casi2 from "../../images/casi2.png";
import casi3 from "../../images/casi3.png";
import casilogo from "../../images/casinologo.PNG";

const Casino = () => {
  const [show, setshow] = useState(false);
  return (
    <>
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
            <div className="d-flex justify-content-center">
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

        <div className="container mt-3">
          <div className="row">
            <div
              className="d-flex justify-content-between p-2"
              style={{ backgroundColor: "rgb(58,58,58)" }}
            >
              <div className="text-light d-flex gap-3">
                <b>FAVOURITES(0)</b>
                <b>FEATURED(51)</b>
                <b>ALL SLOTS(445)</b>
              </div>
              <div className="text-light d-flex gap-3">
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
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

          
          <div className="col-3 mt-3">
            <div
              className="hove"
              onMouseOver={() => setshow(true)}
              onMouseOut={() => setshow(false)}
              style={
                show
                  ? {  opacity: "0.5" }
                  : {  opacity: "1" }
              }
            >

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
        </div>
      </div>
    </>
  );
};

export default Casino;
