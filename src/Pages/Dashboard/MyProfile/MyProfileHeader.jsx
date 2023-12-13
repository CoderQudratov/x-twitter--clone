import React from 'react'
import back_icon from "../../../Assets/images/back_icon.svg"
function MyProfileHeader() {
  return (
    <header className='myprofile-header padding-profile'>
        <nav className="myprofile-header__nav">
        <ul className="myprofile-header__inner" role='list'>
            <li><img src={back_icon} alt="" /></li>
            <li>
                <h4>Doston Coder</h4>
                <span>13 posts</span>
            </li>
        </ul>
        </nav>
    </header>
  )
}

export default MyProfileHeader