import { BetSlip, BookBet, CheckTicket, FollowUs, LatestBet, PlayNow } from "../RightSidebarComponent/RightSidebarComponent";
import "./SportRightContent.css";

const SportRightContent=()=>{
    return(
        <div className="SportRightContent">
            <BetSlip />
            <BookBet />
            <CheckTicket />
            <LatestBet />
            <PlayNow />
            <FollowUs />

        </div>
    )
}
export default SportRightContent;