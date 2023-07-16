import React, { useEffect, useState } from 'react'
import "../Css/Dashboard.css"
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios'
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from "chart.js"
import {Bar} from "react-chartjs-2"
import MobDashboard from './MobDashboard'

ChartJS.register(
  BarElement,CategoryScale,LinearScale,Tooltip,Legend
)


const getCounts=async()=>{
  return await axios.get("http://localhost:8080/projectsCounts")
}



const Dashboard = () => {
  const [Count,setCount]=useState([])
  const [Total,setTotal]=useState(0)
  const [Closed,setClosed]=useState(0)
  const [clouser,setClouser]=useState(0)
  const [Ftotal,setFtotal]=useState(0)
  const [FClosed,setFClosed]=useState(0)
  const [Department,setDepartment]=useState([])

  const [statusData,setStatusData]=useState([])
  const [running,setRunning]=useState(0)
  const [cancelled,setCancelled]=useState(0)
  
  const pathname=window.location.pathname
  
  let dept=["FIN","HR","MAN","QLT","STR","STO"]
    let departments=[];
    let totals=[]
    let closed=[]

  useEffect(()=>{
    getCounts().then((res)=>{
      setCount(res.data.project)
      setClouser(res.data.clousercount)
      setStatusData(res.data.statusCount)
    })
  },[])
  useEffect(()=>{
    let Totalsum=0;

    Count.forEach(item => {
      Totalsum+=item.total
    });
    setTotal(Totalsum)
    let Closedsum = 0;

    Count.forEach((item)=>{
      Closedsum += item.closedCount;
    })

    setClosed(Closedsum);

    Count.forEach((item)=>{
      Closedsum += item.closedCount;
    })

    setClosed(Closedsum);

    statusData.forEach((item)=>{
      if(item._id==="Running"){
        setRunning(item.count)
      }else if(item._id==="Cancelled"){
        setCancelled(item.count)
      }
    })

    setClosed(Closedsum);
    
    for(let i=0;i<Count.length;i++){
  
      let per=(Count[i].closedCount/Count[i].total)*100
      departments.push([`${per.toFixed(0)}%`," ",dept[i]])
      totals.push(Count[i].total)
      closed.push(Count[i].closedCount)
    }

    setDepartment(departments)
    setFClosed(closed)
    setFtotal(totals)
    
  },[Count,statusData])

 





  const data={
    
    labels:Department,
    datasets:[{
      label:'Total',
      data:Ftotal,
      backgroundColor:'blue',
      borderRadius:10
    },
    {
      label:'Closed',
      data:FClosed,
      backgroundColor:'green',
      borderRadius:10
    }]
  }


  return (
    <>
    <div id="Dashboard_page">
      <div id="Dashboard_container">
      <Sidebar pathname={pathname} />
      <div id="child2">
         <Header />
         <div id="dhashboard_info">
          <div className='dhashboard_info_child' >
             <div className='dhashboard_info_one'>
             </div>
             <div className='dhashboard_info_two'>
                <p className="title">Total Projects</p>
                <p className="num">{Total}</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Closed</p>
                <p className="num">{Closed}</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Running</p>
                <p className="num">{running}</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Clousre Delay</p>
                <p className="num">{clouser}</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Cancelled</p>
                <p className="num">{cancelled}</p>
            </div>
          </div>
         </div>
         <p id="totalvsclosed">Department wise - Total vs Closed</p>
         <div id="chart">
            <Bar
            data={data}
            width={'250px'}
            >
            </Bar>
         </div>
      </div>
    </div>
    </div>
    <div id="Mob_dashboard_page">
      <MobDashboard  getCounts={getCounts}/>
    </div>
    </>
  )
}

export default Dashboard