import "./LeftSidebarComponent.css"
import {Link} from "react-router-dom"

import football from "../images/football.png"
import basketball from "../images/basketball.png"
import tennis from "../images/tennis.png"

export const QuickMenu=()=>{
    return(
        <div className="QuickMenu">
            <div className="heading-wrapper">
                <span>Quick Menu</span>
                
            </div>
            <div>
                <Link><i className="bi bi-chevron-right"></i>Calender</Link>
                <hr />
                <Link><i className="bi bi-chevron-right"></i>Live Betting</Link>
            </div>

        </div>
    )

}

export const Favourite=()=>{
    return(
        <div className="Favourite">
            <div className="heading-wrapper">
                <span>Favourite</span>
            </div>
            <div>
                press the star button to add to favourite
            </div>
        </div>
    )
}

export const Support=()=>{
    return(
        <div className="Support">
            <div className="heading-wrapper">
                <span>Support</span>
            </div>
            <div>
                <div>
                    <span>Telephone</span>
                    <span>+335 00 00 00 000</span>
                    <span>number of telephone</span>
                </div>
                <hr />
                <div>
                    <span>E-Mail</span>
                    <span>support@better365</span>
                </div>
            </div>
            

        </div>
    )
}

export const SidebarSport=()=>{
    return(
        <div className="SidebarSport">
            <div className="heading-wrapper">
                <span>Sport</span>

            </div>
            <div>
                <Link><img src={football} alt="football" />Football</Link>
                <hr />
                <Link><img src={basketball} alt="basketball" />Basketball</Link>
                <hr />
                <Link><img src={tennis} alt="tennis" />Tennis</Link>
            </div>

        </div>
    )
}

export const ActionMenu=()=>{
    return(
        <div className="ActionMenu">
            <Link>Live Result</Link>
            <hr />
            <Link>Statistic</Link>
            <hr />
            <Link>FAQs</Link>
            <hr />
            <Link>Live Result</Link>
            <hr />
            <Link>Live Result</Link>
            <hr />
            <Link>Live Result</Link>
            <hr />
            <Link>Live Result</Link>
            <hr />
            <Link>Support</Link>
        </div>
    )
}