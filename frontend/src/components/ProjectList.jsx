import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import HeaderProjectL from './HeaderProjectL'
import axios from 'axios'

const getData=async()=>{
  return await axios.get("http://localhost:8080/projects")
}

const ProjectList = () => {
    const pathname=window.location.pathname
    const [can,setCan]=useState(false)
    const [data,setData]=useState([])
    const [sdata,setSdata]=useState("")

    useEffect(()=>{
      getData().then((res)=>setData(res.data))
    },[])
    const handlesort=(e)=>{
      let s=e.target.value
      console.log(s)
      if(s==="priority"){
        let high=data.filter((el)=>{
          return el.priority="high"
        })
        let medium=data.filter((el)=>{
          return el.priority="medium"
        })
        let low=data.filter((el)=>{
          return el.priority="low"
        })
        setData([...high,...medium,...low])
      }
    }


    const handlefiltercancle=(e)=>{
      setCan(true)
      let a=e.target.value
      const filteredarr=data.filter(obj=>{
        return Object.values(obj).some(value=>{
          if(typeof value==="string"){
            return value.includes(a)
          }
          return false
        })
      })
      setData(filteredarr)
    }
    const handlecancle=()=>{
      setCan(false)
      document.getElementById("filter_input").value=""
    }
    const handleStart=async(id)=>{
      
      return await axios.put(`http://localhost:8080/projects/${id}`,{status:"Running"}).then(()=>getData().then((res)=>setData(res.data)))
    }
    const handleClose=async(id)=>{
      
      return await axios.put(`http://localhost:8080/projects/${id}`,{status:"Closed"}).then(()=>getData().then((res)=>setData(res.data)))
    }
    const handleCancle=async(id)=>{
      
      return await axios.put(`http://localhost:8080/projects/${id}`,{status:"Cancelled"}).then(()=>getData().then((res)=>setData(res.data)))
    }
  return (
    <div id="project_list">
        <div id="project_list_container">  
        <div id="Dashboard_container">
          <Sidebar pathname={pathname} />
            <div id="child2">
              <HeaderProjectL />
            <div id="create_project">
              <div id="filter_sort">
                <div id="filter_div">
                  <svg id="filter_svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                  <input onChange={handlefiltercancle} type="text" id="filter_input" placeholder='Search' />
                  {can?<button id="cancle_filter" onClick={handlecancle}>X</button>:<></>}
                </div>
                <div id="sort_div">
                  <p>Sort By : </p>
                  <select onChange={handlesort} name="sort" id="sort">
                  <option value="">Sort</option>
                  <option value="priority">Priority</option>
                  {/* <option value="Recently Modified">Recently Modified</option> */}
                  <option value="status">Status</option>
                  <option value="start_date">State Date</option>
                  <option value="end_date">End Date</option>
                  </select>
                </div>
              </div>
              <div id="table_div">
              <table>
  <tr id="table_first_row">
    <th>Project Name</th>
    <th>Reason</th>
    <th>Type</th>
    <th>Division</th>
    <th>Category</th>
    <th>Priority</th>
    <th>Dept.</th>
    <th>Location</th>
    <th>Status</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  {data.map((el)=>(
  <tr className='trRow' key={el._id}>
    <td id="them_date">{el.theme}{<br/>}{`${el.start_date} to ${el.end_date}`}</td>
    <td>{el.reason}</td>
    <td>{el.type}</td>
    <td>{el.division}</td>
    <td>{el.category}</td>
    <td>{el.priority}</td>
    <td>{el.department}</td>
    <td>{el.location}</td>
    <td>{el.status}</td>
    <td><button onClick={()=>handleStart(el._id)} id="start">Start</button></td>
    <td><button onClick={()=>handleClose(el._id)} id="close">Close</button></td>
    <td><button onClick={()=>handleCancle(el._id)} id="cancle">Cancle</button></td>
  </tr>
  ))}
</table>
              </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectList

{/* <p id="sdate_edate">{el.start_date} to {el.end_date}</p> */}