import React from 'react'
import "../Css/Dashboard.css"
import active from "../Assets/Dashboard-active.svg"
import unactive from "../Assets/Dashboard.svg"
import active_project_list from "../Assets/Project-list-active.svg"
import unactive_project_list from "../Assets/Project-list.svg"
import active_create_project from "../Assets/create-project-active.svg"
import unactive_create_project from "../Assets/create-project.svg"
import logout_logo from "../Assets/Logout.svg"
import { useNavigate } from 'react-router-dom'


const Sidebar = ({pathname}) => {
    const navigate=useNavigate()
    const redirectdashboard=()=>{
        setTimeout(()=>navigate("/dashboard"),500)
    }
    const redirectprojectlist=()=>{
        setTimeout(()=>navigate("/projectlist"),500)
    }
    const redirectcreateproject=()=>{
        setTimeout(()=>navigate("/createproject"),500)
    }
    const redirectlogout=()=>{
        setTimeout(()=>navigate("/"),500)
    }
  return (
    <div id="child1">
              <div id="child1_child1">
                <div className='child1_child1_div'>
                  {pathname==="/dashboard"?<img onClick={redirectdashboard}  src={active} alt={active} />:<img onClick={redirectdashboard} src={unactive} alt={unactive} />}
                </div>
                <div className='child1_child1_div'>
                {pathname==="/projectlist"?<img onClick={redirectprojectlist} src={active_project_list} alt={active_project_list} />:<img onClick={redirectprojectlist} src={unactive_project_list} alt={unactive_project_list} />}
                </div>
                <div className='child1_child1_div'>
                {pathname==="/createproject"?<img onClick={redirectcreateproject} src={active_create_project} alt={active_create_project} />:<img onClick={redirectcreateproject} src={unactive_create_project} alt={unactive_create_project} />}
                </div>
              </div>
              <div id="child1_child2">
                <img onClick={redirectlogout} src={logout_logo} alt={logout_logo} />
              </div>
      </div>
  )
}

export default Sidebar