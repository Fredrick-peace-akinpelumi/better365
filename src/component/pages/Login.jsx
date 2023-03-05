import {React, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import logo from '../images/headerlogo.png'
// import alb from '../images/albanian.png'

const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
 const  navigate =useNavigate()
  const login=()=>{
    if (username==="" || password==="") {
      alert('Please fill all the fields')
    }else if(username!=="onehost" && password!==12345){
      alert("Unauthorized User")
    }else{
      navigate('/home')

    }
  }
  return (
    <>
    <div className="container-fluid navbar-brand p-2" style={{backgroundColor:"rgb(34,34,34)"}}>
      <div className="row">
        <img className='mx-auto  image' src={logo} alt="" />
      </div>
    </div>
    <div className="container-fluid height" style={{backgroundColor:"rgb(0,0,0)"}}>
      <div className="container width ">
        <div className="row">
          <input className='form-control mb-4 shadow-none text-white border-0' onChange={(e)=>setusername(e.target.value)} value={username} style={{backgroundColor:"rgb(59,59,59)"}} type="text" placeholder='Username'/>
          <input className='form-control mb-4 shadow-none text-white border-0' onChange={(e)=>setpassword(e.target.value)} value={password}  style={{backgroundColor:"rgb(59,59,59)"}} type="password" placeholder='Password' />
          <button className='btn text-white mb-4' style={{backgroundColor:"rgb(59,59,59)"}} onClick={()=>login()}>Login</button>
         <div className="d-flex mb-4 text-white">
         <input type="checkbox" />
          <label htmlFor="" className='ms-2'>Remember Me</label>
         </div>
          <select className='form-select mb-4 text-white shadow-none w-50 m-auto ' style={{backgroundColor:"rgb(59,59,59)"}} name="" id="">
            <option value="Albanian"> Albanian</option>
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
        </div>
      </div>
    </div>
    </>
  )
}

export default Login