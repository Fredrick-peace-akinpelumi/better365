import { useState } from "react"
import "./BetTable.css"
import football from "../images/football.png"
import basketball from "../images/basketball.png"
import tennis from "../images/tennis.png"
import footballBetData from "../../data/footballBetData"

export const LiveBetTable=()=>{
    const [isOpen, setIsOpen]=useState(true)
    const handleOpen=()=>{
        setIsOpen(true)
    }
    const handleClose=()=>{
        setIsOpen(false)
    }
    return(
        <div className="LiveBetTable">
            <div>
                <div>
                    {isOpen?
                        <i onClick={handleClose} className="bi bi-caret-down-fill"></i>
                    :
                        <i onClick={handleOpen} className="bi bi-caret-right-fill"></i>
                    }
                    
                    <span>  <span>LIVE</span> NOW</span>
                </div>
                {isOpen &&
                    <div>
                        <select>
                            <option value="">Final Result</option>
                            <option value="">Next Goal</option>
                            <option value="">Match Goal</option>
                        </select>
                        <div>
                            <span><i className="bi bi-caret-left-fill"></i></span>
                            <span>1/7</span>
                            <span><i className="bi bi-caret-right-fill"></i></span>
                        </div>
                        
                        
                    </div>
                }
            </div>
            {isOpen &&
                <div>
                    <div>
                        <button><img src={football} alt="football" width="19" />Football</button>
                        <button><img src={basketball} alt="basketball" width="19" />Basketball</button>
                        <button><img src={tennis} alt="tennis" width="19" />Tennis</button>
                    </div>
                    <div>
                        {footballBetData.map((footballBet)=>{
                            return(
                                <FootballBetTable 
                                    home={footballBet.home}
                                    homeOdd={footballBet.homeOdd}
                                    away={footballBet.away}
                                    awayOdd={footballBet.awayOdd}
                                    totalOdd={footballBet.totalOdd}
                                    numOfBets={footballBet.numOfBets}
                                    service={footballBet.service}
                                    matchTime={footballBet.matchTime}
                                    matchScore={footballBet.matchScore}
                                />
                            )
                        })}

                    </div>
                </div>
                
            }

        </div>
    )
}

export const UpcomingBetTable=()=>{
    const [isOpen, setIsOpen]=useState(true)
    const handleOpen=()=>{
        setIsOpen(true)
    }
    const handleClose=()=>{
        setIsOpen(false)
    }
    return(
        <div className="LiveBetTable">
            <div>
                <div>
                    {isOpen?
                        <i onClick={handleClose} className="bi bi-caret-down-fill"></i>
                    :
                        <i onClick={handleOpen} className="bi bi-caret-right-fill"></i>
                    }
                    
                    <span>UPCOMING</span>
                </div>
                {isOpen &&
                    <div>
                        <select>
                            <option value="">Final Result</option>
                            <option value="">Next Goal</option>
                            <option value="">Match Goal</option>
                        </select>
                        <div>
                            <span><i className="bi bi-caret-left-fill"></i></span>
                            <span>1/7</span>
                            <span><i className="bi bi-caret-right-fill"></i></span>
                        </div>
                        
                        
                    </div>
                }
                
                
            </div>
            {isOpen &&
                <div>
                    <div>
                        <button><img src={football} alt="football" width="19" />Football</button>
                        <button><img src={basketball} alt="basketball" width="19" />Basketball</button>
                        <button><img src={tennis} alt="tennis" width="19" />Tennis</button>
                    </div>
                    <div>
                        {footballBetData.map((footballBet)=>{
                            return(
                                <FootballBetTable 
                                    home={footballBet.home}
                                    homeOdd={footballBet.homeOdd}
                                    away={footballBet.away}
                                    awayOdd={footballBet.awayOdd}
                                    totalOdd={footballBet.totalOdd}
                                    numOfBets={footballBet.numOfBets}
                                    service={footballBet.service}
                                    matchTime={footballBet.matchTime}
                                    matchScore={footballBet.matchScore}
                                />
                            )
                        })}

                    </div>
                    
                    
                </div>
            }
            

        </div>
    )
}

export const FootballBetTable=({home,homeOdd,away,awayOdd,totalOdd,numOfBets,service,matchTime,matchScore})=>{
    const addToFavourite=()=>{

    }
    return(
        <div className="FootballBetTable">
            <div>
                <i onClick={addToFavourite} class="bi bi-star-fill"></i>
                <div>
                    <span>{matchTime}</span>
                    <span>{matchScore}</span>
                </div>
                <i class="bi bi-stopwatch-fill"></i>
            </div>
            <div className="bet-table-match">
                <span>{home}</span>
                <span>{homeOdd}</span>
            </div>
            <div className="bet-table-odd">
                <span>X</span>
                <span>{totalOdd}</span>
            </div>
            <div className="bet-table-match">
                <span>{away}</span>
                <span>{awayOdd}</span>
            </div>
            <span>+16</span>
            <span>
                <i class="bi bi-reception-4"></i>
            </span>
        </div>
    )
}