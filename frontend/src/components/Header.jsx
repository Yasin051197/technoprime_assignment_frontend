import React from 'react'
import '../Css/Dashboard.css'
import header from "../Assets/Header-bg.svg"
import logo from "../Assets/Logo.svg"

const Header = () => {
  return (
    <div id="header_container">
            <img id="header_img" src={header} alt={header} />
            <p id="header_p">Dashboard</p>
            <div id="logo_img">
              <img src={logo} alt={logo} />
            </div>
         </div>
  )
}

export default Header