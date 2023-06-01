import React from 'react'
import Sidebar from './Sidebar'
import "../Css/Createproject.css"
import HeaderCreateP from './HeaderCreateP'

const CreateProject = () => {
    const pathname=window.location.pathname
  return (
    <div id="create_project_project">
        <div id="create_project_project_container">  
        <div id="Dashboard_container">
          <Sidebar pathname={pathname} />
            <div id="child2">
              <HeaderCreateP />
            <div id="create_project">

            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default CreateProject