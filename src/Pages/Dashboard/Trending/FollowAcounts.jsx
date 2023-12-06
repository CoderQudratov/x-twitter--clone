import React from 'react'
import Avatar_img from "../../../Assets/images/Ellipse 281.svg"
import { NavLink } from 'react-router-dom'
function FollowAcounts() {
  return (
    <div className='follow-more'>
     <div className="follow-more__inner">
      <img src={Avatar_img} alt="avatar-img" width="40" height="40" />
      <div className="follow-inner__title">
        <p className='follow-inner__name'>Doston Coder</p>
        <p className='follow-inner__nickname'>@CoderDoston</p>
      </div>
     </div>
      <div className="follow-btn">
        <button className='follow__btn'>follow</button>
      </div>
    </div>
  )
}

export default FollowAcounts