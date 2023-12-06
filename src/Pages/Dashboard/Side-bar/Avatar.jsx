import React, { useContext } from 'react'
import Avatar_img from "../../../Assets/images/Ellipse 281.svg"
import { Context } from '../../../Settings/Contex/ContextProvider'
function Avatar() {
  const {user}=useContext(Context)

  return (
    <div className='side-bar__avatar avatar-inner'>
     <div className="avatar-inner__left">
      <img src={Avatar_img} alt="avatar-img" width="40" height="40" />
      <div className="avatar-inner__title">
        <p className='avatar-inner__name'>{user.displayName}</p>
        <p className='avatar-inner__nickname'>{user.email}</p>
      </div>
     </div>
      <span className="avatar-inner__dot"></span>
    </div>
  )
}

export default Avatar