import { LiveJackpot,PreMatchJackpot } from "../../JackpotComponent/JackpotComponent"
import Navbar from "../../static/Navbar/Navbar"
import virtualGames from "../../../data/vitualGames"
import "./Virtual.css"
import virtualScreen from "../../../data/virtualScreen"
import Footer from "../../static/footer/Footer"

const Virtual=()=>{
    return(
        <div className="Virtual">
            <Navbar />
            <div>
                <div>
                    <LiveJackpot />
                    <PreMatchJackpot />
                </div>
                <div>
                    {virtualGames.map((games)=>{
                        return(
                            <div className="vitual-game">
                                <img src={games.Image} alt={games.game} />
                                <span>{games.game}</span>
                                <span>{games.time}</span>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div>
                {virtualScreen.map((games)=>{
                    return(
                        <div>
                            <img src={games.img} alt="games" />
                        </div>
                    )
                })}
            </div>
            <Footer />

        </div>
    )
}
export default Virtual