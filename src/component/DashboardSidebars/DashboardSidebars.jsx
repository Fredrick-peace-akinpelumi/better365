import {Link} from "react-router-dom"
import "./DashboardSidebars.css"
export const FundsSidebar=()=>{
    return(
        <div className="DashboardSidebars">
            <span>Funds</span>
            <Link><div></div>Betting Records</Link>
            <Link><div></div>My Wallet</Link>
            <Link><div></div>Turnover</Link>
            <Link><div></div>Gift Points</Link>
        </div>
    )
}

export const ProfileSidebar=()=>{
    return(
        <div className="DashboardSidebars">
            <span>Profile</span>
            <Link><div></div>Personal Info</Link>
            <Link><div></div>Reset Password</Link>
            <Link><div></div>Referrals</Link>
            <Link><div></div>Transaction</Link>
        </div>
    )
}