import React from 'react'
import './Livebetsub.css'
import football from "../images/football.png"

const Livebetsub = () => {
  return (
    <div className='livebetsub'>
        <div className='d-flex justify-content-between'>
        <div>
        <img className='bal' src={football} alt="" />
        <b className='text-white'>FOOTBALL (108) LIVE</b>
        </div>
        <img className='bal' src={football} alt="" />

        </div>
    </div>
  )
}

export default Livebetsub