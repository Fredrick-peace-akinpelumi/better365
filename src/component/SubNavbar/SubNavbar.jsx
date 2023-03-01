import "./SubNavbar.css"
import { Link } from "react-router-dom";
import openBetIcon from "../images/open_bet_icon.png"


const SubNavbar=()=>{
    return(
        <div className="SubNavbar">
            <div>
                <Link>Live Betting</Link>
                <Link>Sport</Link>
                <Link>Livescore</Link>
                <Link>Statistics</Link>
                <Link>Bilatat</Link>
                <Link>JackPot</Link>
            </div>
            <div>
                <img src={openBetIcon} alt="open bet icon" />
                <div><span>0 </span>Active Bet</div>
            </div>
        </div>
    )
}
export default SubNavbar;