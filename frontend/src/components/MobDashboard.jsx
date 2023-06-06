import React, { useEffect, useState } from 'react'
import"../Css/MobDashboard.css"
import axios from 'axios'
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from "chart.js"
import {Bar} from "react-chartjs-2"
import NavAndFootbar from './NavAndFootbar'
import Footer from './Footer'

ChartJS.register(
  BarElement,CategoryScale,LinearScale,Tooltip,Legend
)


const getCounts=async()=>{
  return await axios.get("https://techprimelab-assignment-server.onrender.com/projectsCounts")
}


const MobDashboard = () => {
    const [count,setCount]=useState({count:0,closedcount:0,runningcount:0,runningcount:0,clousercount:0,cancledcount:0,  strcount:0,strclosedcount:0,fincount:0,finclosedcount:0,qltcount:0,qltclosedcount:0,mancount:0,manclosedcount:0,stocount:0,stoclosedcount:0,hrcount:0,hrclosedcount:0})
  useEffect(()=>{
    getCounts().then((res)=>setCount(res.data))
  },[])
 

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
    <div style={{backgroundColor:" rgb(239, 244, 248)"}}>
        <NavAndFootbar />
        <div style={{backgroundColor:" rgb(239, 244, 248)"}}>
        <div id="Mobdashboard" >
            <div id="Mobdashboard_child1">
                    <div className='Mobdashboard_child1_child_first' >
                       <div className='Mobdashboard_child1_one'></div>
                       <div className='Mobdashboard_child1_two'>
                        <p className="Mobdashboard_child1_two_title">Total Projects</p>
                        <p className="Mobdashboard_child1_two_num">{count.count}</p>
                       </div>
                    </div>
                    <div className='Mobdashboard_child1_child' >
                       <div className='Mobdashboard_child1_one'></div>
                       <div className='Mobdashboard_child1_two'>
                        <p className="Mobdashboard_child1_two_title">Closed</p>
                        <p className="Mobdashboard_child1_two_num">{count.closedcount}</p>
                       </div>
                    </div>
                    <div className='Mobdashboard_child1_child' >
                       <div className='Mobdashboard_child1_one'></div>
                       <div className='Mobdashboard_child1_two'>
                        <p className="Mobdashboard_child1_two_title">Running</p>
                        <p className="Mobdashboard_child1_two_num">{count.runningcount}</p>
                       </div>
                    </div>
                    <div className='Mobdashboard_child1_child' >
                       <div className='Mobdashboard_child1_one'></div>
                       <div className='Mobdashboard_child1_two'>
                        <p className="Mobdashboard_child1_two_title">Clousre Delay</p>
                        <p className="Mobdashboard_child1_two_num">{count.clousercount}</p>
                       </div>
                    </div>
                    <div className='Mobdashboard_child1_child' >
                       <div className='Mobdashboard_child1_one'></div>
                       <div className='Mobdashboard_child1_two'>
                        <p className="Mobdashboard_child1_two_title">Cancelled</p>
                        <p className="Mobdashboard_child1_two_num">{count.cancledcount}</p>
                       </div>
                    </div>
            </div>
            <div id="Mobdashboard_child2"><p>Department wise - Total Vs Closed</p></div>
            <div id="Mobdashboard_child3">
            <Bar
              data={data}
              width={"100%"}
             >
            </Bar>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default MobDashboard