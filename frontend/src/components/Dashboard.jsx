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
  const [Cextra,setCextra]=useState(0)
  const [Textra,setTextra]=useState(0)
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

let Cel0=Closed[0]
let Cel1=Closed[1]
let Cel2=Closed[2]
let Cel3=Closed[3]
let Cel4=Closed[4]
let Cel5=Closed[5]
for(let i in Cel1){
  if(i){
    Cel0._id==="Finance"?fin1=Cel0.closedCount:fin1=0
    Cel1._id==="HR"?hr1=Cel1.closedCount:hr1=0
    Cel2._id==="Maintenance"?man1=Cel2.closedCount:man1=0
    Cel3._id==="Qaulity"?qlt1=Cel3.closedCount:qlt1=0
    Cel4._id==="Statergy"?str1=Cel4.closedCount:str1=0
    Cel5._id==="Stores"?sto1=Cel5.closedCount:sto1=0
  }
  else{
    setCextra(0)
  }
  
}

let Tel0=Total[0]
let Tel1=Total[1]
let Tel2=Total[2]
let Tel3=Total[3]
let Tel4=Total[4]
let Tel5=Total[5]

for(let i in Tel1){
  if(i){
    Tel0._id==="Finance"?fin2=Tel0.totalCount:fin2=0
    Tel1._id==="HR"?hr2=Tel1.totalCount:hr1=0
    Tel2._id==="Maintenance"?man2=Tel2.totalCount:man2=0
    Tel3._id==="Qaulity"?qlt2=Tel3.totalCount:qlt2=0
    Tel4._id==="Statergy"?str2=Tel4.totalCount:str2=0
    Tel5._id==="Stores"?sto2=Tel5.totalCount:sto2=0
  }
  else{
    setTextra(0)
  }
}






  const data={
    
    labels:[[Math.floor((str1?str1:Cextra/str2?str2:Textra)*100)+"%"," ","STR"],[Math.floor((fin1/fin2)*100)+"%"," ",'FIN'],[Math.floor((qlt1/qlt2)*100)+"%"," ",'QLT'],[Math.floor((man1/man2)*100)+"%"," ",'MAN'],[Math.floor((sto1/sto2)*100)+"%"," ",'STO'],[Math.floor((hr1/hr2)*100)+"%"," ",'HR']],
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