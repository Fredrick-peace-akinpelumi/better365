import "./SportMainContent.css";
import menuIcon from "../images/menu-icon.png"
import SelectTimezone from "../SelectTimezone/SelectTimezone";

const SportMainContent=()=>{
    const time=new Date()
    console.log(time) 
    return(
        <div className="SportMainContent">
            <div>
                <div>
                    <button><img src={menuIcon} alt="" /></button>
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
                <span>1 Mar 2023 | 20:02:50</span>


                </div>
            </div>

        </div>
    )
}
export default SportMainContent;