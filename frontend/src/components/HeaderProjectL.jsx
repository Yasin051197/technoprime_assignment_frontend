import React from 'react'
import header from "../Assets/Header-bg.svg"
import logo from "../Assets/Logo.svg"
import "../Css/ProjectList.css"

const HeaderProjectL = () => {
  return (
    <div id="header_container">
            <img id="header_img" src={header} alt={header} />
            <p id="headerProjectL_p">{"<  Project Listing"}</p>
            <div id="logo_img">
              <img src={logo} alt={logo} />
            </div>
         </div>
  )
}

export default HeaderProjectL