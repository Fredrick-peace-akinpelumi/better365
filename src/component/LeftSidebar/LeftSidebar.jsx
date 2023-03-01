import "./LeftSidebar.css";

import search from "../images/search.png"

const LeftSidebar=()=>{
    return(
        <div className="LeftSidebar">
            <form>
                <input type="text" placeholder="" />
                <button type="submit"><img src={search} alt="Search button" /></button>
            </form>
            <div>
                <div>
                    <span>LIVE JACKPOT</span>
                </div>
            </div>


        </div>
    )
}
export default LeftSidebar;