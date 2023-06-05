import React from 'react'
import "../Css/NavAndFootbar.css"
import active from "../Assets/Dashboard-active.svg"
import unactive from "../Assets/Dashboard.svg"
import active_project_list from "../Assets/Project-list-active.svg"
import unactive_project_list from "../Assets/Project-list.svg"
import active_create_project from "../Assets/create-project-active.svg"
import unactive_create_project from "../Assets/create-project.svg"


const Footer = () => {
   
    const redirectdashboard=()=>{

    }
    const redirectprojectlist=()=>{

    }
    const redirectcreateproject=()=>{

    }
    let pathname="/dashboard"
  return (
    <div id="footer">
        <div id="footer_child">
                <div className='footer_child1_div'>
                  {pathname==="/dashboard"?<img onClick={redirectdashboard}  src={active} alt={active} />:<img onClick={redirectdashboard} src={unactive} alt={unactive} />}
                </div>
                <div className='footer_child1_div'>
                {pathname==="/projectlist"?<img onClick={redirectprojectlist} src={active_project_list} alt={active_project_list} />:<img onClick={redirectprojectlist} src={unactive_project_list} alt={unactive_project_list} />}
                </div>
                <div className='footer_child1_div'>
                {pathname==="/createproject"?<img onClick={redirectcreateproject} src={active_create_project} alt={active_create_project} />:<img onClick={redirectcreateproject} src={unactive_create_project} alt={unactive_create_project} />}
                </div>
    </div>
    </div>
  )
}

export default Footer