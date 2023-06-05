import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import ProjectList from '../components/ProjectList';
import CreateProject from '../components/CreateProject';
import PrivateRouter from '../components/PrivateRouter';


const Routers = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/dashboard" element={<PrivateRouter><Dashboard /></PrivateRouter>}/>
           <Route path="/projectlist" element={<PrivateRouter><ProjectList /></PrivateRouter>}/>
           <Route path="/createproject" element={<PrivateRouter><CreateProject /></PrivateRouter>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routers