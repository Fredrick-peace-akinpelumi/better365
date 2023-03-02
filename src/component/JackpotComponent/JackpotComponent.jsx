import "./JackpotComponent.css"
import jackpotOn from "../images/jackpot_on.gif";
import jackpotOff from "../images/jackpot_off.png";

export const LiveJackpot=()=>{
    return(
        <div className="live-jackpot">
            <div>
                <span>LIVE JACKPOT</span>
                <i className="bi bi-caret-down-fill"></i>
            </div>
            <div>
                <img src={jackpotOff} alt=" " />
                <div>
                    <span>$</span>
                    <span>234.56</span>
                </div>
            </div>
        </div>
    )
}

export const PreMatchJackpot=()=>{
    return(
        <div className="live-jackpot">
            <div>
                <span>PREMATCH JACKPOT</span>
                <i className="bi bi-caret-down-fill"></i>

            </div>
            <div>
                <img src={jackpotOn} alt=" " />
                <div>
                    <span>$</span>
                    <span>234.56</span>
                </div>
            </div>
        </div>
    )
}