import "./Sport.css";

import Navbar from "../../static/Navbar/Navbar";
import SubNavbar from "../../SubNavbar/SubNavbar";
import LeftSidebar from "../../LeftSidebar/LeftSidebar";
import SportMainContent from "../../SportMainContent/SportMainContent";
import SportRightContent from "../../SportRightContent/SportRightContent";
import Footer from "../../static/footer/Footer";

const Sport=()=>{
    return(
        <div className="Sport">
            <Navbar />
            <SubNavbar />
            <div className="main-sport">
                <LeftSidebar />
                <SportMainContent />
                <SportRightContent />
            </div>
        <Footer/>
        </div>
    )
}
export default Sport;