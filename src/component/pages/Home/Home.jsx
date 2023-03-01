import React from "react";
import Navbar from "../../static/Navbar/Navbar";
import "./Home.css"

import playingSoccer from "../../images/playing-soccer.png"
import pressingPhone from "../../images/browsering better365 app.png"
import playerJogging from "../../images/players jogging.png"
import maradonaDribbling from "../../images/maradona dribbling.png"
import playerJubilating from "../../images/player jubilating.png"
import casinoImage from "../../images/football-tackle.png"
import virtualImage from "../../images/vitual-image.png"
import Footer from "../../static/footer/Footer";

const Home=()=>{
    return(
        <div className="Home">
            <Navbar />
            <hr className="line"/>
            <div className="square-section">
                <img src={playingSoccer} alt="playing soccer" />
                <div className="home-sub-section">
                    <span className="sub-section-first-text">ENTER A NEW GAME WORLD </span>
                    <span className="sub-section-second-text">Join Now!!!</span>
                </div>
            </div>
            <div className="home-section">
                <div className="square-section">
                    <img src={pressingPhone} alt="pressing phone" />
                    <div className="home-sub-section">
                        <span className="sub-section-first-text">SIMPLE, FAST AND RELIABLE</span>
                        <span className="sub-section-second-text">Sport App</span>
                    </div>

                </div>
                <div className="square-section">
                    <img src={playerJogging} alt="pressing phone" />
                    <div className="home-sub-section-header">
                        <span>Live</span>
                        <span>World Cup Final</span>
                        <span></span>
                    </div>
                    <div className="home-sub-section-center">
                        <span>Asana</span>
                        <span>0-0</span>
                        <span>Sotrar</span>
                    </div>

                </div>
            </div>
            <div className="home-section">
                <div className="square-section">
                    <img src={playerJubilating} alt="player jubilating" />
                    <div className="home-sub-section">
                        <span className="sub-section-center-text">Passion is the Way</span>
                    </div>

                </div>
                <div className="square-section">
                    <img src={maradonaDribbling} alt="Maradona dribbling" />
                    <div className="home-sub-section">
                        <span className="sub-section-center-text">Feel the Energy</span>
                    </div>
                    
                </div>
            </div>
            <div className="last-home-section">
                <div className="square-section">
                    <img src={casinoImage} alt="casino" />
                    <div className="home-sub-section">
                        <span className="sub-section-center-text">CASINO</span>
                    </div>

                </div>
                <div className="square-section">
                    <img src={playerJubilating} alt="player jubilating" />
                    <div className="home-sub-section">
                        <span className="sub-section-center-text">POCKER</span>
                    </div>

                </div>
                <div className="square-section">
                    <img src={virtualImage} alt="vitual" />
                    <div className="home-sub-section">
                        <span className="sub-section-center-text">VIRTUAL</span>
                    </div>

                </div>
                
            </div>
            <hr className="line" />
            

            <Footer/>
        </div>
    )
}
export default Home;