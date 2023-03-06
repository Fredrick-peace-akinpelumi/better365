import {React, useState} from 'react'
import SelectTimezone from '../SelectTimezone/SelectTimezone'
import menuIcon from "../images/menu-icon.png"
import football from "../images/football.png"
import basketball from "../images/basketball.png"
import tennis from "../images/tennis.png"
import clock from "../images/clock.png";
import './LivebetNav.css'



const LivebetNav = () => {
    const [isSidebarOn,setIsSidebarOn]=useState(true)
    const closeSidebar=()=>{
        setIsSidebarOn(false)
        
    }
  return (
    <div className='LivebetNav'>
          <div>
                <div>
                    <button onClick={closeSidebar}><img src={menuIcon} alt="" /></button>
                    <SelectTimezone/>
                    <div className="SelectTimezone">
                        <select name="price_format">
							<option value="3" class="pf_opt">Farcational</option>
							<option value="1" class="pf_opt" selected="selected">Decimal</option>
							<option value="2" class="pf_opt">American</option>
						</select>
                    </div>
                    <i class="fa-solid fa-volume-xmark mute"></i>
                </div>
                <div>
                    <span><img src={clock} alt="clock" /> 1 Mar 2023 | 20:02:50</span>
                </div>
            </div>
        {/* Overview nav */}
        <div className='overview'>
            <button className='btn overbtn'>Overview</button>
        </div>
        <div className='p-2 gap-3'>
            {
                [football,basketball,tennis].map((item,index)=>(
                    <img className='ball ms-3' src={item} alt="" />
                ))
            }
        </div>
    </div>
  )
}

export default LivebetNav