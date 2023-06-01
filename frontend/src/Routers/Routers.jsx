import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import ProjectList from '../components/ProjectList';
import CreateProject from '../components/CreateProject';

const Routers = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/dashboard" element={<Dashboard />}/>
           <Route path="/projectlist" element={<ProjectList />}/>
           <Route path="/createproject" element={<CreateProject />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routers