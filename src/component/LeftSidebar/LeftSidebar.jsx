import "./LeftSidebar.css";

import search from "../images/search.png"
import { LiveJackpot, PreMatchJackpot } from "../JackpotComponent/JackpotComponent";
import { ActionMenu, Favourite, QuickMenu, SidebarSport, Support } from "../LeftSidebarComponent/LeftSidebarComponent";

const LeftSidebar=()=>(
    <div className="LeftSidebar">
        <form>
            <input type="text" placeholder="" />
            <button type="submit"><img src={search} alt="Search button" /></button>
        </form>
        <LiveJackpot />
        <PreMatchJackpot />
        <QuickMenu />
        <Favourite />
        <SidebarSport />
        <Support />
        <ActionMenu />
    </div>
)
export default LeftSidebar;