import React from 'react'
import "../Css/Dashboard.css"
import Sidebar from './Sidebar'
import Header from './Header'


const Dashboard = () => {
  const pathname=window.location.pathname
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
                <p className="num">8</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Closed</p>
                <p className="num">8</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Running</p>
                <p className="num">8</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Clousre Delay</p>
                <p className="num">8</p>
            </div>
          </div>
          <div className='dhashboard_info_child' >
            <div className='dhashboard_info_one'></div>
            <div className='dhashboard_info_two'>
                <p className="title">Cancelled</p>
                <p className="num">8</p>
            </div>
          </div>
         </div>
         <p id="totalvsclosed">Department wise - Total vs Closed</p>
         <div id="chart"></div>
      </div>
    </div>
  )
}

export default Dashboard