import "./LiveBetting.css"
import Navbar from "../../static/Navbar/Navbar";
import SubNavbar from "../../SubNavbar/SubNavbar";
import SportMainContent from "../../SportMainContent/SportMainContent";
import LivebetNav from "../../LiveBetNav/LivebetNav";
import Livebetsub from "../../livebetsub/Livebetsub";
import Livebetgames from "../../LivebetGames/Livebetgames";



const LiveBetting=()=>{
    return(
        <div className="LiveBetting">
            <Navbar/>
            <SubNavbar/>
            <LivebetNav/>
            <Livebetsub/>
            <Livebetgames/>
            
            

        </div>
    )
}
export default LiveBetting;