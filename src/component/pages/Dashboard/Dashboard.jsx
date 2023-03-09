import { FundsSidebar, ProfileSidebar } from "../../DashboardSidebars/DashboardSidebars"
import Navbar from "../../static/Navbar/Navbar"
import "./Dashboard.css"
import profile from "../../images/pprofile.png"
import Footer from "../../static/footer/Footer"


const Dashboard=()=>{
    return(
        <div className="Dashboard">
            <Navbar />
            <div>
                <span>MY ACCOUNT</span>
                <div>
                    <i className="bi bi-bank"></i>
                    <span>Deposit</span>
                </div>
                <div>
                    <i className="bi bi-cash-coin"></i>
                    <span>Withdrawal</span>
                </div>                                
            </div>
            <div>
                <FundsSidebar />
                <div>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="password" />
                    </form>
                    <img src={profile} alt="profile" />
                </div>

            </div>
            <hr />
            <div>
                <ProfileSidebar />
                <div>
                    <form>
                        <div>
                            <label htmlFor="amount">Amount:</label>
                            <input id="amount" type="text" placeholder="0.0" />
                        </div>
                        <div>
                            <label htmlFor="bonus">Bonus Code:</label>
                            <input id="bonus" type="text" />
                        </div>
                    </form>
                    <hr />
                    <form>
                        <input type="radio" id="payment" />
                        <input type="radio" id="payment" />
                        <input type="radio" id="payment" />
                        <input type="radio" id="payment" />
                        
                    </form>
                </div>

            </div>
            <Footer />
            


        </div>
    )
}
export default Dashboard