import React, { useEffect, useState } from 'react'
import "../Css/Dashboard.css"
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios'
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from "chart.js"
import {Bar} from "react-chartjs-2"

ChartJS.register(
  BarElement,CategoryScale,LinearScale,Tooltip,Legend
)


const getCounts=async()=>{
  return await axios.get("http://localhost:8080/projectsCounts")
}



const Dashboard = () => {
  const [count,setCount]=useState({count:0,closedcount:0,runningcount:0,runningcount:0,clousercount:0,cancledcount:0,  strcount:0,strclosedcount:0,fincount:0,finclosedcount:0,qltcount:0,qltclosedcount:0,mancount:0,manclosedcount:0,stocount:0,stoclosedcount:0,hrcount:0,hrclosedcount:0})
  useEffect(()=>{
    getCounts().then((res)=>setCount(res.data))
  },[])
  const pathname=window.location.pathname

  const data={
    
    labels:[[Math.floor((count.strclosedcount/count.strcount)*100)+"%"," ","STR"],[Math.floor((count.finclosedcount/count.fincount)*100)+"%"," ",'FIN'],[Math.floor((count.qltclosedcount/count.qltcount)*100)+"%"," ",'QLT'],[Math.floor((count.manclosedcount/count.mancount)*100)+"%"," ",'MAN'],[Math.floor((count.stoclosedcount/count.stocount)*100)+"%"," ",'STO'],[Math.floor((count.hrclosedcount/count.hrcount)*100)+"%"," ",'HR']],
    datasets:[{
      label:'Total',
      data:[count.strcount,count.fincount,count.qltcount,count.mancount,count.stocount,count.hrcount],
      backgroundColor:'blue',
      borderRadius:10
    },
    {
      label:'Closed',
      data:[count.strclosedcount,count.finclosedcount,count.qltclosedcount,count.manclosedcount,count.stoclosedcount,count.hrclosedcount],
      backgroundColor:'green',
      borderRadius:10
    }]
  }


  return (
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
                <p className="num">{count.count}</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Closed</p>
                <p className="num">{count.closedcount}</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Running</p>
                <p className="num">{count.runningcount}</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Clousre Delay</p>
                <p className="num">{count.clousercount}</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Cancelled</p>
                <p className="num">{count.cancledcount}</p>
            </div>
          </div>
         </div>
         <p id="totalvsclosed">Department wise - Total vs Closed</p>
         <div id="chart">
            <Bar
            data={data}
            >
            </Bar>
         </div>
      </div>
    </div>
  )
}

export default Dashboard