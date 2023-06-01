import React from 'react'
import '../Css/Dashboard.css'
import header from "../Assets/Header-bg.svg"
import logo from "../Assets/Logo.svg"


const HeaderCreateP = () => {
  return (
    <div id="header_container">
            <img id="header_img" src={header} alt={header} />
            <p id="headercreateP_p">{"<  Create Project"}</p>
            <div id="logo_img">
              <img src={logo} alt={logo} />
            </div>
         </div>
  )
}

export default HeaderCreateP