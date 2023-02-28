import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import fastMoneyLogo from "../../images/fast-money-logo.png";
import profile from "../../images/profile.png";
import headerLogo from "../../images/headerlogo.png"
import SelectCountry from '../../SelectCountry/SelectCountry';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div>
        <Link><img src={headerLogo}  alt="logo" /></Link>
        <div>
          <Link><img src={fastMoneyLogo} alt='moving money' /></Link>
          <Link><img src={profile} alt='User' /></Link>
          <button>Log Out</button>
        </div>
      </div>
      <div>
        <div>
          <Link>SPORT</Link>
          <Link>LIVE BETTING</Link>
          <Link>CASINO</Link>
          <Link>TOP POCKER</Link>
          <Link>VISUAL</Link>
        </div>
        <div>
          <SelectCountry />
        </div>
      </div>
    </div>
  )
}

export default Navbar