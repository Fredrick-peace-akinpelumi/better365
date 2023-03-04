import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className="container-fluid border-top " style={{backgroundColor:"rgb(0,0,0)"}}>
            <div className="container p-4 col-6" >
                <ul className='d-flex gap-3 text-white list-unstyled justify-content-center'>
                    <Link className='text-white nav-link lin'>Help</Link>
                    <Link className='text-white nav-link lin'>Terms&Condition</Link>
                    <Link className='text-white nav-link lin'>Security&Privacy</Link>
                    <Link className='text-white nav-link lin'>Payments</Link>
                    <Link className='text-white nav-link lin'>Support</Link>
                    <Link className='text-white nav-link lin'>Feedback</Link>
                    <Link className='text-white nav-link lin'>About Us</Link>
                </ul>
                  <div className="d-flex justify-content-center">
                  <select className='form-select w-25 border-white text-white' name="" id="" style={{backgroundColor:"rgb(0,0,0)"}}>
                        <option value="Select First Page">Select First Page</option>
                        <option value="Home">Home</option>
                        <option value="Sports">Sports</option>
                        <option value="Live Betting">Live Betting</option>
                        <option value="Casino">Casino</option>
                        <option value="Top Pocker">Top Pocker</option>
                        <option value="Virtual">Virtual</option>
                    </select>
                    <button className='btn text-white respo border-white' style={{backgroundColor:"rgb(0,0,0)"}}>Responsible Gaming</button>
                    <button className='btn text-white respo border-white' style={{backgroundColor:"rgb(0,0,0)"}}> Gaming</button>
                    <button className='btn text-white respo border-white' style={{backgroundColor:"rgb(0,0,0)"}}> Gaming</button>
                  </div>
                  <p className='text-white text-center mt-3 opacity-1'>2001-2023 Better365. All right reserved</p>
                <div>
      
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer