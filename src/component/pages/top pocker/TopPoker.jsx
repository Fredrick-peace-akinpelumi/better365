import React from 'react'
import Footer from '../../static/footer/Footer'
import Navbar from '../../static/Navbar/Navbar'
import poker from '../../images/top.PNG'
import { Link } from 'react-router-dom'

const TopPoker = () => {
  return (
    <>
    <Navbar/>
    <div className="container-fluid" style={{backgroundColor:"rgb(16,16,16)"}}>
    <div className="container">
                <div className=" d-lg-flex justify-content-center">
                    <div className="col-4 p-5 text-white">
                        <h1>Show</h1>
                        <h3>Your Skills!</h3>
                        <button className='btn btn-danger col-5 rounded-pill'>Play</button>
                    </div>
                    <img className=' d-lg-block  d-md-none d-sm-none' src={poker} alt="" />
                </div>
               
                <div className='p-3 mt-5'>
                    <p className='text-white'>The online poker game fits very well to the requests of every player. enjoy your game in our exclusive Poker Tables.Select your favourite table and</p>
                    <h3 className='text-danger'>Show Your Skills</h3>
                    <Link className='text-danger mt-5 fs-3'>How to play?</Link>
                    <p className='text-white'>In our poker help game you will find the rules of all popular games. From Texas Hold'em and Omaha variations to Spins and Fast Forward, everything you need to know is here.</p>
                </div>
            </div>
    </div>
        <Footer/>
    </>
  )
}

export default TopPoker