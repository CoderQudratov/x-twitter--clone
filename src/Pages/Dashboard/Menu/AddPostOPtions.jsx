import React from 'react'
import { NavLink } from 'react-router-dom'



function AddPostOPtions({src}) {
  return (
    <NavLink to={"/"}>
     <img src={src} ></img>   
    </NavLink>
    
  )
}

export default AddPostOPtions