import "./SelectTimezone.css"

const SelectTimezone=()=>{
    return(
        <div className="SelectTimezone">
            <select name="timezone">
				<option class="tz_opt" value="-12">GMT -12</option>
				<option class="tz_opt" value="-11">GMT -11</option>
                <option class="tz_opt" value="-10">GMT -10</option>
				<option class="tz_opt" value="-9">GMT -9</option>
				<option class="tz_opt" value="-8">GMT -8</option>
				<option class="tz_opt" value="-7">GMT -7</option>
				<option class="tz_opt" value="-6">GMT -6</option>
				<option class="tz_opt" value="-5">GMT -5</option>
				<option class="tz_opt" value="-4">GMT -4</option>
				<option class="tz_opt" value="-3">GMT -3</option>
				<option class="tz_opt" value="-2">GMT -2</option>
				<option class="tz_opt" value="-1">GMT -1</option>
				<option class="tz_opt" value="0">GMT +0</option>
				<option class="tz_opt" value="1" selected="selected">GMT +1</option>
				<option class="tz_opt" value="2">GMT +2</option>
				<option class="tz_opt" value="3">GMT +3</option>
				<option class="tz_opt" value="4">GMT +4</option>
				<option class="tz_opt" value="5">GMT +5</option>
				<option class="tz_opt" value="6">GMT +6</option>
				<option class="tz_opt" value="7">GMT +7</option>
				<option class="tz_opt" value="8">GMT +8</option>
				<option class="tz_opt" value="9">GMT +9</option>
			    <option class="tz_opt" value="10">GMT +10</option>
				<option class="tz_opt" value="11">GMT +11</option>
				<option class="tz_opt" value="12">GMT +12</option>
			</select>

        </div>
    )
}
export default SelectTimezone