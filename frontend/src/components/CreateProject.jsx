import React, { useState } from 'react'
import Sidebar from './Sidebar'
import "../Css/Createproject.css"
import HeaderCreateP from './HeaderCreateP'
import axios from 'axios'

const CreateProject = () => {
  const initial={
    theme:"",
    reason:"",
    type:"",
    division:"",
    category:"",
    priority:"",
    department:"",
    start_date:"",
    end_date:"",
    location:""
}
  const [project,setProject]=useState(initial)
  const [theme,setTheme]=useState(false)
  const [reason,setReason]=useState(false)
  const [type,setType]=useState(false)
  const [division,setDivision]=useState(false)
  const [category,setCategory]=useState(false)
  const [sdate,setSdate]=useState(false)
  const [edate,setEdate]=useState(false)
  const [priority,setPriority]=useState(false)
  const [department,setDepartment]=useState(false)
  const [location,setLocation]=useState(false)
  const [datecheck,setDatecheck]=useState(false)
  const [checkdate,setCheckdate]=useState("")
    const pathname=window.location.pathname;
    const handleChnage=(e)=>{
      const {name,value}=e.target;
      setProject({...project,[name]:value});
      if(e.target.name==="start_date"){
        let d=e.target.value
        let arr=d.split("-").map(Number)
        arr[2]=arr[2]+1
        let cdate=arr.join("-0")
        setCheckdate(cdate)
      }
    }
    const handlesubmit=async(e)=>{
      e.preventDefault()
      console.log(project)
      if(project.theme===""){
        setTheme(true)
      }
      else{
        setTheme(false)
      }
      if(project.reason===""){
        setReason(true)
      }
      else{
        setReason(false)
      }
      if(project.type===""){
        setType(true)
      }
      else{
        setType(false)
      }
      if(project.division===""){
        setDivision(true)
      }
      else{
        setDivision(false)
      }
      if(project.category===""){
        setCategory(true)
      }
      else{
        setCategory(false)
      }
      if(project.start_date===""){
        setSdate(true)
      }
      else{
        setSdate(false)
      }
      if(project.end_date===""){
        setEdate(true)
      }
      else{
        setEdate(false)
      }
      if(project.priority===""){
        setPriority(true)
      }
      else{
        setPriority(false)
      }
      if(project.department===""){
        setDepartment(true)
      }
      else{
        setDepartment(false)
      }
      if(project.location===""){
        setLocation(true)
      }
      else{
        setLocation(false)
      }
      if(project.theme!=="" && project.reason!=="" && project.type!=="" && project.division!=="" && project.category!=="" && project.start_date!=="" && project.end_date!=="" && project.priority!=="" && project.department!=="" && project.location!==""){
        // let startarray=project.start_date.split("-").map(Number)
        // let endarray=project.end_date.split("-").map(Number)
        // console.log(startarray,endarray)
        // if(startarray[0]<endarray[0] || startarray[1]<endarray[1])
        // {
        //   setDatecheck(true)
        // }else{
        //   setDatecheck(false)
          let res=await axios.post("http://localhost:8080/createproject",project)
          alert(res.data.msg)
        
      }
    }
  return (
    <div id="create_project_project">
        <div id="create_project_project_container">  
        <div id="Dashboard_container">
          <Sidebar pathname={pathname} />
            <div id="child2">
              <HeaderCreateP />
            <div id="create_project">
              <div id="create_project_child">
                <div id="create_project_child1">
                  <input name="theme" type="text" placeholder='Enter Project Theme' onChange={handleChnage} />
                  {theme?<p>Project theme required</p>:<></>}
                </div>
                <div id="create_project_child2">
                  <button onClick={handlesubmit}>Save Project</button>
                </div>
              </div>
              <div id='create_project_child_two'>
                <div className='label'>
                     <p >Reason</p>
                     <select name="reason" onChange={handleChnage} >
                      <option value="">Reason</option>
                      <option value="Buisness">For Buisness</option>
                      <option value="Dealership">For Dealership</option>
                      <option value="Tranport">For Tranport</option>
                     </select>
                     {reason?<p className='input_error'>Project theme required</p>:<></>}
                </div>
                <div className='label'>
                     <p >Type</p>
                     <select name="type" onChange={handleChnage} >
                      <option value="">Type</option>
                      <option value="Internal">Internal</option>
                      <option value="Eternal">Eternal</option>
                      <option value="Vendor">Vendor</option>
                     </select>
                     {type?<p className='input_error'>Project Type required</p>:<></>}
                </div>
                <div className='label'>
                     <p >Division</p>
                     <select name="division" onChange={handleChnage}>
                      <option value="">Division</option>
                      <option value="Filters">Filters</option>
                      <option value="Compressor">Compressor</option>
                      <option value="Pumps">Pumps</option>
                      <option value="Glass">Glass</option>
                      <option value="Water Heater">Water Heater</option>
                     </select>
                     {division?<p className='input_error'>Project Division required</p>:<></>}
                </div>
                <div className='label'>
                     <p >Category</p>
                     <select name="category" onChange={handleChnage} >
                      <option value="">Category</option>
                      <option value="Quality A">Quality A</option>
                      <option value="Quality B">Quality B</option>
                      <option value="Quality C">Quality C</option>
                      <option value="Quality D">Quality D</option>
                     </select>
                     {category?<p className='input_error'>Project Category required</p>:<></>}
                </div>
                <div className='label'>
                     <p >Priority</p>
                     <select name="priority" onChange={handleChnage} >
                      <option value="">Priority</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                     </select>
                     {priority?<p className='input_error'>Project Priority required</p>:<></>}
                </div>
                <div className='label'>
                     <p >Department</p>
                     <select name="department" onChange={handleChnage} >
                      <option value="">Department</option>
                      <option value="Statergy">Statergy</option>
                      <option value="Finance">Finance</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Stores">Stores</option>
                     </select>
                     {department?<p className='input_error'>Project Department required</p>:<></>}
                </div>
                <div className='label'>
                     <p >Start Date as per the Project Plan</p>
                     <input className='lable_input' onChange={handleChnage} type="date" name="start_date" />
                     {sdate?<p className='input_error'>Project Start Date required</p>:<></>}
                </div>
                <div className='label'>
                     <p >End Date as per the Project Plan</p>
                     <input className='lable_input'onChange={handleChnage} type="date" name="end_date" min={checkdate} />
                     {edate?<p className='input_error'>Project End Date required</p>:<></>}
                     {datecheck?<p className='input_error'>End Date should be greater than Start date</p>:<></>}
                </div>
                <div className='label'>
                     <p >Location</p>
                     <select name="location"onChange={handleChnage} >
                      <option value="">Location</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Dilhi">Dilhi</option>
                      <option value="Bangalore">Bangalore</option>
                     </select>
                     {location?<p className='input_error'>Project Location required</p>:<></>}
                </div>
              </div>
              <div style={{width:"87%",textAlign:"right",marginLeft:"15px"}}>
              <p>status :<span style={{fontWeight:"bold",marginRight:"150px"}}> Registored</span></p>
              </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default CreateProject