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
  return await axios.get("https://techprimelab-assignment-server.onrender.com/projectsCounts")
}



const Dashboard = () => {
  const [count,setCount]=useState(0)
  const [Closed,setClosed]=useState([])
  const [Total,setTotal]=useState([])
  const [clouser,setClouser]=useState(0)
  const [Data,setData]=useState([])
  const pathname=window.location.pathname

  useEffect(()=>{
    getCounts().then((res)=>
    {
      setTotal(res.data.Totaldata)
      setClosed(res.data.Closeddata)
      setClouser(res.data.clousercount)
      setCount(res.data.count)
      setData(res.data.data)
    })
  },[])
 
let cancelledRec,closedRec,runningRec,registorRec;
for(let i=0;i<Data.length;i++){
  cancelledRec=Data[0].count
  closedRec=Data[1].count
  registorRec=Data[2].count
  runningRec=Data[3].count
}


let str1,str2,fin1,fin2,qlt1,qlt2,man1,man2,sto1,sto2,hr1,hr2;
for(let i=0;i<Closed.length;i++){
  str1=Closed[4].closedCount
  str2=Total[4].totalCount
  fin1=Closed[0].closedCount
  fin2=Total[0].totalCount
  qlt1=Closed[3].closedCount
  qlt2=Total[3].totalCount
  man1=Closed[2].closedCount
  man2=Total[2].totalCount
  sto1=Closed[5].closedCount
  sto2=Total[5].totalCount
  hr1=Closed[1].closedCount
  hr2=Total[1].totalCount
}

  const data={
    
    labels:[[Math.floor((str1/str2)*100)+"%"," ","STR"],[Math.floor((fin1/fin2)*100)+"%"," ",'FIN'],[Math.floor((qlt1/qlt2)*100)+"%"," ",'QLT'],[Math.floor((man1/man2)*100)+"%"," ",'MAN'],[Math.floor((sto1/sto2)*100)+"%"," ",'STO'],[Math.floor((hr1/hr2)*100)+"%"," ",'HR']],
    datasets:[{
      label:'Total',
      data:[str2,fin2,qlt2,man2,sto2,hr2],
      backgroundColor:'blue',
      borderRadius:10
    },
    {
      label:'Closed',
      data:[str1,fin1,qlt1,man1,sto1,hr1],
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
                <p className="num">{count}</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Closed</p>
                <p className="num">{closedRec}</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Running</p>
                <p className="num">{runningRec}</p>
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
                <p className="num">{cancelledRec}</p>
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