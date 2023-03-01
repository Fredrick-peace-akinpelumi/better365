import alb from "../images/albanian.png"

const SelectCountry=()=>{
    return(
        <select className='form-select mb-4 text-white shadow-none m-auto ' style={{backgroundColor:"rgb(59,59,59)"}} name="" id="">
            <option value="Albanian"><img className='w-50' src={alb} alt="albanian Flag"/> Albanian</option>
            <option value="English">English</option>
            <option value="Italiano">Italiano</option>
            <option value="German">German</option>
            <option value="French">French</option>
            <option value="Greek">Greek</option>
            <option value="Spanish">Spanish</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Turkish">Turkish</option>
            <option value="Brazilian">Brazilian</option>
            <option value="Serbian">Serbian</option>
        </select>
    )
}
export default SelectCountry;