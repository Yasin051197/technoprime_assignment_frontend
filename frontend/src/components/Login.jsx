import React, { useContext, useEffect, useState } from 'react'
import "../Css/Login.css"
import show from "../Assets/hide-password.svg"
import login_bg_1 from "../Assets/login-bg-1.svg"
import logo from "../Assets/Logo.svg"
import logo2 from "../Assets/smallScreen.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Authcontext } from '../contexts/AuthContext'




const Login = () => {
  const initial={
    email:"",
    password:"",
}
  const [showP, setShowp] = useState(false);
  const [user,setuser]=useState(initial);
  const [emailerr,setEmailerr]=useState(false);
  const [passerr,setPasserr]=useState(false);
  const [invalid,setinvalid]=useState(false)
  const {islogin,login,logout}=useContext(Authcontext)
  const navigate=useNavigate()

  

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setuser({...user,[name]:value});

    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        if(user.email===""){
          setEmailerr(true)
         }
         else{
          setEmailerr(false)
         }
         if(user.password===""){
          setPasserr(true)
         }
         else{
          setPasserr(false)
         }
        if(user.email!=="" && user.password!==""){
          let res=await axios.post("http://localhost:8080/login",user)
          console.log(res.data)
          if(res.data.Message==="Invalid Response")
          {
            setinvalid(true)
          }
          else if(res.data.Message==="Valid Response"){
            setinvalid(false)
            login(res.data.Message)
            localStorage.setItem("msg",res.data.Message)
            setTimeout(()=>navigate("/dashboard"),1000)
          }
        }
    }

    useEffect(()=>{

    },[])
  return (
    <div id="login_page">
      <div id="login_div">
       <div className="banner_div">
        <img id="banner_img" src={login_bg_1} alt={login_bg_1} />
        <img  id="banner_img_small" src={logo2} alt={logo2} />
       </div>
       <div id="logo_img1">
        <img src={logo} alt={logo} />
        <p >Online Project Management</p>
       </div>
       <div id="login">
         <form onSubmit={handlesubmit}>
          <p id="login_title">Login to get started</p>
          <div className='label'>
          <p >Email</p>
          <input className='input' type="email" name="email"  onChange={handleChange} />
          </div>
          {emailerr?<p className="err1">email is required</p>:<></>}
          <div className='label'>
          <p >Password</p>
          <div id="password_div">
          <input className='pass' type={showP ? 'text' : 'password'} name="password" onChange={handleChange} /> 
          <img onClick={() =>setShowp((showP) => !showP)} src={show} alt={show} /> 
          </div>
          {passerr?<p className="err">password is required</p>:<></>}
          <p id="forgot">Forgot password ?</p>
          {invalid?<p id="invalid">Invalid credentials</p>:<></>}
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
      {invalid?<p>Invalid credentials</p>:<></>}
    </div>
    </div>
  )
}

export default Login