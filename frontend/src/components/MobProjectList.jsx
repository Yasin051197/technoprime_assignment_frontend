
import NavAndFootbar from './NavAndFootbar'
import Footer from './Footer'
import "../Css/MobProjectList.css"

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const getData=async()=>{
  return await axios.get(`http://localhost:8080/projects`)
}

const MobProjectList = () => {
    const [can,setCan]=useState(false)
    const [data,setData]=useState([])

    useEffect(()=>{
      getData().then((res)=>setData(res.data))
    },[])

    const handlesort=(e)=>{
      let s=e.target.value
      if(s==="priority"){
        let high=data.filter((el)=>{
          return el.priority==="high"
        })
        let medium=data.filter((el)=>{
          return el.priority==="medium"
        })
        let low=data.filter((el)=>{
          return el.priority==="low"
        })
        setData([...high,...medium,...low])
      }
      if(s==="status"){
        let registered=data.filter((el)=>{
          return el.status==="Registered"
        })
        let running=data.filter((el)=>{
          return el.status==="Running"
        })
        let closed=data.filter((el)=>{
          return el.status==="Closed"
        })
        let cancled=data.filter((el)=>{
          return el.status==="Cancled"
        })
        setData([...registered,...running,...closed,...cancled])
      }

      if(s==="end_date"){
        let end=data.filter((el)=>el.end_date) .sort((a, b) => new Date(a.end_date) - new Date(b.end_date));
        setData([...end])
      }
      if(s==="start_date"){
        let start=data.filter((el)=>el.start_date) .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
        setData([...start])
      }
    }
    


    const handlefiltercancle=(e)=>{
      setCan(true)
      let a=e.target.value
      if(a){
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
      else{
        getData().then((res)=>setData(res.data))
      }
    }

    const handlecancle=()=>{
      setCan(false)
      document.getElementById("search_input").value=""
      getData().then((res)=>setData(res.data))
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
    <div style={{backgroundColor:" rgb(239, 244, 248)"}}  >
      <NavAndFootbar />
      <div style={{backgroundColor:" rgb(239, 244, 248)"}} >
        <div className="MobPL1">
                <div id="filter_div">
                  <svg id="filter_svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                  <input style={{backgroundColor:" rgb(239, 244, 248)"}} onChange={handlefiltercancle} type="text" id="search_input" placeholder='Search' />
                  {can?<button style={{backgroundColor:" rgb(239, 244, 248)"}} id="cancle_fil" onClick={handlecancle}>X</button>:<></>}
                </div>
                <div style={{backgroundColor:" rgb(239, 244, 248)"}} id="sort_div">
                  <select style={{backgroundColor:" rgb(239, 244, 248)"}} onChange={handlesort} name="sort" id="sort">
                  <option value=""></option>
                  <option value="priority">Priority</option>
                  <option value="status">Status</option>
                  <option value="start_date">State Date</option>
                  <option value="end_date">End Date</option>
                  </select>
                </div>
        </div>
        <div className="MobPL2">
          {data.map((el)=>(
            <div className='MobPL2_child' key={el._id}>
              <div id="MobPL_child1">
                <div>
                  <p className='MobPL_child1_p'>{el.theme}</p>
                  <p>{`${el.start_date} to ${el.end_date}`}</p>
                </div>
                <div>
                  <p className='MobPL_child1_sec_p'>{el.status}</p>
                </div>
              </div>
              <div id="MobPL_child2">
                <p>Reason: {el.reason}</p>
                <p>Type: {el.type} . Category : {el.category}</p>
                <p>Div: {el.division} . Dept: {el.department}</p>
                <p>Location: {el.location}</p>
                <p>Priority: {el.priority}</p>
              </div>
              <div id="MobPL_child3">
                    <div><button onClick={()=>handleStart(el._id)} id="sta">Start</button></div>
                    <div><button onClick={()=>handleClose(el._id)} id="clo">Close</button></div>
                    <div><button onClick={()=>handleCancle(el._id)} id="canc">Cancle</button></div>
              </div>
              </div>
          ))}
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default MobProjectList
