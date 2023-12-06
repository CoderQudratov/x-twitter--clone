import React from 'react'
import { NavLink } from 'react-router-dom'

function Subscribe() {
  return (
    <div className='subscribe'>
        <h3 className='subscribe__title'>Subscribe to Premium</h3>
        <p className='subscribe__disc'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <div className="subscribe__btn">
        <NavLink className="subscribe__btn-click">Subscribe</NavLink>    
        </div>
        
    </div>
  )
}

export default Subscribe