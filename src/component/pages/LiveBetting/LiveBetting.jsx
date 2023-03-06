import "./LiveBetting.css"
import Navbar from "../../static/Navbar/Navbar";
import SubNavbar from "../../SubNavbar/SubNavbar";
import LivebetNav from "../../LiveBetNav/LivebetNav";
import Livebetsub from "../../livebetsub/Livebetsub";
import Livebetgames from "../../LivebetGames/Livebetgames";
import SportRightContent from "../../SportRightContent/SportRightContent";



const LiveBetting=()=>{
    return(
        <div className="LiveBetting">
            <Navbar/>
            <SubNavbar/>

            <div className="main ">
            <div className="whala">
            <LivebetNav/>
            <Livebetsub/>
            <Livebetgames/>
            </div>
            <SportRightContent/>
            </div>

        </div>
    )
}
export default LiveBetting;