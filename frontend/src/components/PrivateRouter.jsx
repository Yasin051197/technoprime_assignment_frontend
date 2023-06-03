import React, { useContext } from 'react'
import { Authcontext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
    const {islogin}=useContext(Authcontext)
    if(!islogin){
        return <Navigate to="/"/>
    }
    return children;
}

export default PrivateRouter