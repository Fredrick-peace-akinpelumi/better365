import { useState } from "react"
import "./RightSidebarComponent.css"
import dice from "../images/dice.png"
import FiveBetsData from "../../data/5BetsData";

import play1 from "../images/11.png";

export const BetSlip=()=>{
    const goingBet=[]
    if(goingBet.length===0){
        return(
            <div className="BetSlip">
                <div>
                    <span>BET SLIP</span>
                    <button><i className="bi bi-pin-angle"></i></button>
    
                </div>
                <div>
                    <span className="no-slip">
                        There are no bet in your Bet slip.To make a sports bet,click on any price
                    </span>
    
                </div>
    
            </div>
        )
    }else{
        return(
            <div className="BetSlip">
                <div>
                    <span>BET SLIP</span>
                    <button><i className="bi bi-pin-angle"></i></button>
    
                </div>
                <div>
                    slip is not empty
    
                </div>
    
            </div>
        )
    }
    
}

export const BookBet=()=>{
    const [isOpen, setIsOpen]=useState(true)

    const handleClose=()=>{
        setIsOpen(false)

    }
    const handleOpen=()=>{
        setIsOpen(true)
        
    }
    return(
        <div className="BookBet">
            <div className="heading-wrapper">
                <span>BOOK BET</span>
                {isOpen?
                    <button onClick={handleClose}>
                        <i className="bi bi-caret-down-fill"></i>
                    </button>
                :   
                    <button onClick={handleOpen}>
                        <i className="bi bi-caret-right-fill"></i>
                    </button>
                }
            </div>
            {isOpen &&
                <form className="book-bet-form">
                    <div>
                        <input type="text" />
                        <button><i className="bi bi-caret-right-fill"></i></button>
                    </div>
                    <hr />
                    <button type="sumbit">BOOK BET</button>
                </form>
            }
            
        </div>
    )
}

export const CheckTicket=()=>{
    const [isOpen, setIsOpen]=useState(true)

    const handleClose=()=>{
        setIsOpen(false)

    }
    const handleOpen=()=>{
        setIsOpen(true)
        
    }
    
    return(
        <div className="BookBet">
            <div className="heading-wrapper">
                <span>CHECK TICKET</span>
                {isOpen?
                    <button onClick={handleClose}>
                        <i className="bi bi-caret-down-fill"></i>
                    </button>
                :   
                    <button onClick={handleOpen}>
                        <i className="bi bi-caret-right-fill"></i>
                    </button>
                }
            </div>
            {isOpen &&
                <form className="book-bet-form">
                    <div>
                        <input type="text" />
                        <button><i className="bi bi-caret-right-fill"></i></button>
                    </div>
                    <hr />
                    <button>CHECK TICKET</button>
                </form>
            }
            
        </div>
    )
}

export const LatestBet=()=>{
    return(
        <div className="LatestBet">
            <div className="heading-wrapper">
                <span><img src={dice} alt="dice" /> 5 BETS</span>
            </div>
            <div className="inner-latest-bet">
                {FiveBetsData.map((bets)=>{
                    return(
                        <div className="bet">
                            <span>{bets.match}</span>
                            <span>{bets.odd}</span>
                        </div>
                    )
                })}
                <form>
                    <input type="range" />
                    <div>
                        <div className="stakes">
                            <span>Stakes</span>
                            <input type="text" />
                        </div>
                        <div className="returns">
                            <span>Returns</span>
                            <span>500</span>

                        </div>

                    </div>
                    <button>ADD TO SLIP</button>

                </form>
            </div>
            
        </div>
    )
}

export const FollowUs=()=>{
    return(
        <div className="FollowUs">
            <div className="heading-wrapper">
                <span>FOLLOW US ALSO ON:</span>
            </div>
            <div>
                <a id="facebook" href="www.facebook.com">Facebook</a>
                <a id="twitter" href="www.twitter.com">Twitter</a>
            </div>
            
        </div>
    )
}

export const PlayNow=()=>{
    return(
        <div className="PlayNow">
            <div>
                <img src={play1} alt="11" />
                <button>PLAY NOW</button>
            </div>
            <div>
                <span>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                </span>
            </div>
            
        </div>
    )
}