import React from 'react'
import Avatar_img from "../../../Assets/images/Ellipse 281.svg"
function Avatar() {
  return (
    <div className='side-bar__avatar avatar-inner'>
     <div className="avatar-inner__left">
      <img src={Avatar_img} alt="avatar-img" width="40" height="40" />
      <div className="avatar-inner__title">
        <p className='avatar-inner__name'>Doston Coder</p>
        <p className='avatar-inner__nickname'>@CoderDoston</p>
      </div>
     </div>
      <span className="avatar-inner__dot"></span>
    </div>
  )
}

export default Avatar