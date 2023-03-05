import {useState} from "react"
import {Link} from "react-router-dom"
import "./SportMainContent.css";

import menuIcon from "../images/menu-icon.png"
import SelectTimezone from "../SelectTimezone/SelectTimezone";
import clock from "../images/clock.png";
import hgl1 from "../images/hgl1.jpg"
import hgl2 from "../images/hgl2.jpg"
import { LiveBetTable, UpcomingBetTable } from "../BetTable/BetTable";

const SportMainContent=()=>{
    const time=new Date()


    const [imageIndex,setImageIndex]=useState(hgl1)
    const handleClicked=(e)=>{
        e.target.className="selected"
        setImageIndex(e.target.value)

    }
    const [isSidebarOn,setIsSidebarOn]=useState(true)
    const closeSidebar=()=>{
        setIsSidebarOn(false)
        
    }
    return(
        <div className="SportMainContent">
            <div>
                <div>
                    <button onClick={closeSidebar}><img src={menuIcon} alt="" /></button>
                    <SelectTimezone />
                    <div className="SelectTimezone">
                        <select name="price_format">
							<option value="3" class="pf_opt">London</option>
							<option value="1" class="pf_opt" selected="selected">France</option>
							<option value="2" class="pf_opt">American</option>
						</select>
                    </div>
                </div>
                <div>
                    <span><img src={clock} alt="clock" /> 1 Mar 2023 | 20:02:50</span>
                </div>
            </div>
            {/* THE HIGHLIGHT SECTION */}
            <div className="carousel">
                <div className="highlight-section">
                    <span>HIGHLIGHTS</span>
                    <div>
                        <button value={hgl1} onClick={handleClicked} className="selected" type="button"></button>
                        <button value={hgl2} onClick={handleClicked}  type="button"></button>
                    </div>
                </div>
                <Link><img src={imageIndex}  alt="carousel" height="190"/></Link>
            </div>
            <LiveBetTable />
            <UpcomingBetTable />
            

        </div>
    )
}
export default SportMainContent;