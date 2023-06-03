import { createContext, useState } from "react";

export const Authcontext=createContext();

export const AuthcontextProvider=({children})=>{
    let mes=localStorage.getItem("msg")
const [islogin,setIslogin]=useState(mes?true:false)

    const login=(msg)=>{
        setIslogin(true)
    }

    const logout=()=>{
        localStorage.removeItem("msg")
        setIslogin(false)
    }



    return <Authcontext.Provider value={{islogin,login,logout}}>{children}</Authcontext.Provider>
}