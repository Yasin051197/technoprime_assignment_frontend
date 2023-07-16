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





const MobDashboard = ({getCounts}) => {
  const [count,setCount]=useState(0)
  const [Closed,setClosed]=useState([])
  const [Total,setTotal]=useState([])
  const [clouser,setClouser]=useState(0)
  const [Data,setData]=useState([])

//  console.log(getCounts)
 
// let cancelledRec,closedRec,runningRec,registorRec;
// for(let i=0;i<Data.length;i++){
//   cancelledRec=Data[0].count
//   closedRec=Data[1].count
//   registorRec=Data[2].count
//   runningRec=Data[3].count
// }
  
// let str1,str2,fin1,fin2,qlt1,qlt2,man1,man2,sto1,sto2,hr1,hr2;
// for(let i=0;i<Closed.length;i++){
//   str1=Closed[4].closedCount
//   str2=Total[4].totalCount
//   fin1=Closed[0].closedCount
//   fin2=Total[0].totalCount
//   qlt1=Closed[3].closedCount
//   qlt2=Total[3].totalCount
//   man1=Closed[2].closedCount
//   man2=Total[2].totalCount
//   sto1=Closed[5].closedCount
//   sto2=Total[5].totalCount
//   hr1=Closed[1].closedCount
//   hr2=Total[1].totalCount
// }

  const data={
    
    // labels:[[Math.floor((str1/str2)*100)+"%"," ","STR"],[Math.floor((fin1/fin2)*100)+"%"," ",'FIN'],[Math.floor((qlt1/qlt2)*100)+"%"," ",'QLT'],[Math.floor((man1/man2)*100)+"%"," ",'MAN'],[Math.floor((sto1/sto2)*100)+"%"," ",'STO'],[Math.floor((hr1/hr2)*100)+"%"," ",'HR']],
    datasets:[{
      label:'Total',
      // data:[str2,fin2,qlt2,man2,sto2,hr2],
      backgroundColor:'blue',
      borderRadius:10
    },
    {
      label:'Closed',
      // data:[str1,fin1,qlt1,man1,sto1,hr1],
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
                        <p className="Mobdashboard_child1_two_num">{count}</p>
                       </div>
                    </div>
                    <div className='Mobdashboard_child1_child' >
                       <div className='Mobdashboard_child1_one'></div>
                       <div className='Mobdashboard_child1_two'>
                        <p className="Mobdashboard_child1_two_title">Closed</p>
                        {/* <p className="Mobdashboard_child1_two_num">{closedRec}</p> */}
                       </div>
                    </div>
                    <div className='Mobdashboard_child1_child' >
                       <div className='Mobdashboard_child1_one'></div>
                       <div className='Mobdashboard_child1_two'>
                        <p className="Mobdashboard_child1_two_title">Running</p>
                        {/* <p className="Mobdashboard_child1_two_num">{runningRec}</p> */}
                       </div>
                    </div>
                    <div className='Mobdashboard_child1_child' >
                       <div className='Mobdashboard_child1_one'></div>
                       <div className='Mobdashboard_child1_two'>
                        <p className="Mobdashboard_child1_two_title">Clousre Delay</p>
                        <p className="Mobdashboard_child1_two_num">{clouser}</p>
                       </div>
                    </div>
                    <div className='Mobdashboard_child1_child' >
                       <div className='Mobdashboard_child1_one'></div>
                       <div className='Mobdashboard_child1_two'>
                        <p className="Mobdashboard_child1_two_title">Cancelled</p>
                        {/* <p className="Mobdashboard_child1_two_num">{cancelledRec}</p> */}
                       </div>
                    </div>
            </div>
            <div id="Mobdashboard_child2"><p>Department wise - Total Vs Closed</p></div>
            <div id="Mobdashboard_child3">
            <Bar
              data={data}
              width={"120px"}
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