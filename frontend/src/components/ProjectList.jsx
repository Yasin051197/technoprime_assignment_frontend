import React from 'react'
import Sidebar from './Sidebar'
import HeaderProjectL from './HeaderProjectL'

const ProjectList = () => {
    const pathname=window.location.pathname
  return (
    <div id="project_list">
        <div id="project_list_container">  
        <div id="Dashboard_container">
          <Sidebar pathname={pathname} />
            <div id="child2">
              <HeaderProjectL />
            <div id="create_project">

            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectList