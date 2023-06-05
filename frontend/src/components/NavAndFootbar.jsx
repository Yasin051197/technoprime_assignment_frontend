import React, { useContext } from 'react'
import "../Css/NavAndFootbar.css"
import header from "../Assets/Header-bg.svg"
import logout_logo from "../Assets/Logout.svg"
import { Authcontext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const NavAndFootbar = () => {
  const navigate=useNavigate()
  const {logout}=useContext(Authcontext)
  const redirectlogout=()=>{
    logout()
    setTimeout(()=>navigate("/"),500)
}
  return (
    <div id="NavAndFootbar">
        <div id="Nav">
        <img id="NavAndFootbar_img" src={header} alt={header} />
            <div id="NavAndFootbar_div">
              <div><p id="NavAndFootbar_p">{"<  Project Listing"}</p></div>
              <div id="NavAndFootbar_logout">
                  <img onClick={redirectlogout} src={logout_logo} alt={logout_logo} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default NavAndFootbar