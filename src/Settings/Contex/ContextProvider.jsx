import { createContext, useEffect, useState } from "react";
export const setItem=(key,value)=>window.localStorage.setItem(key,typeof value =="object"?JSON.stringify(value):value)
export const getItem =(key)=>window.localStorage.getItem(key)
export const Context =createContext()
const {Provider}=Context
export const ContextProvider =({children})=>{
    const getItem_token =getItem('token_regs')
    const [token,setToken]=useState(
        getItem_token?getItem_token:null
    )
    useEffect(()=>{
    if (token!==null) {
        setItem('token_regs',token)
    }
    },[token])
    const userItem =getItem('user_x')
    const [user,setUser]=useState(
        userItem?JSON.parse(userItem):null
    )
    useEffect(()=>{
        if (user!=null) {
            setItem("user_x",user)
        }
    })
    const [srcImg,setIcrImg]=useState([])
    return(
        <Provider value={{user,setUser,token,setToken,srcImg,setIcrImg}}>
        {children}
        </Provider>
    )
}