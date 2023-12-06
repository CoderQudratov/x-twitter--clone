import React from 'react'
import Avatar_img from "../../../Assets/images/Ellipse 281.svg"
import { NavLink } from 'react-router-dom'
function FollowAcounts() {
  return (
    <div className='follow-more-ex'>
     <div className="follow-more-ex__inner">
      <img src={Avatar_img} alt="avatar-img" width="40" height="40" />
      <div className="follow-inner-ex__title">
        <p className='follow-inner-ex__name'>Animation & comics</p>
        <p className='follow-inner-ex__nickname'>All about animation & comics</p>
      </div>
     </div>
      <div className="follow-ex-btn">
        <button className='follow-ex__btn'>follow</button>
      </div>
    </div>
  )
}

export default FollowAcounts