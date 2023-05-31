import React from 'react'
import "../Css/Login.css"
import show from "../Assets/hide-password.svg"
import login_bg_1 from "../Assets/login-bg-1.svg"
import logo from "../Assets/Logo.svg"
import logo2 from "../Assets/smallScreen.png"

const Login = () => {

    const handleChange=(e)=>{

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div id="login_page">
      <div id="login_div">
       <div className="banner_div">
        <img id="banner_img" src={login_bg_1} alt={login_bg_1} />
        <img  id="banner_img_small" src={logo2} alt={logo2} />
       </div>
       <div id="logo_img">
        <img src={logo} alt={logo} />
        <p>Online Project Management</p>
       </div>
       <div id="login">
       <form onSubmit={handlesubmit}>
        <p id="login_title">Login to get started</p>
        <div className='label'>
          <p >Email</p>
          <input className='input' type="email"  onChange={handleChange} />
        </div>
        <div className='label'>
          <p >Password</p>
          <div id="password_div">
          <input className='pass' type="password"  onChange={handleChange} /> 
          <img src={show} alt={show} /> 
          </div>
          <p id="forgot">Forgot password ?</p>
          <p style={{color:"rgb(243, 76, 76)"}} id="invalid">Invalid credentials</p>
        </div>
        <br />
        <br />
        <div>
          <input id="submit" type="submit" value="Login" />
        </div>
      </form>
    </div>
    </div>
    <div id="extra_div">
      <p>Invalid credentials</p>
    </div>
    </div>
  )
}

export default Login