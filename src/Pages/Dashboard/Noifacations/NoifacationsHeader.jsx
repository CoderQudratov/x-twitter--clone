import React from 'react'
import { NavLink } from 'react-router-dom'
import settings_icon from "../../../Assets/images/Settings.svg"
function NoifacationsHeader() {
  return (
    <div className='noifacations-header'>
        <div className="noifacations-header__top">
            <h3>Notifications</h3>
            <NavLink to={'/settings'}>
             <img src={settings_icon} alt="" />    
            </NavLink>
           
        </div>
        <ul className="noifacations-header__bottom" role='list'>
            <li className="noifacation-header__item">
                <NavLink className="noifacation-header__link" to={""}>All</NavLink>
            </li>
            <li className="noifacation-header__item">
                <NavLink className="noifacation-header__link" to="verified">Verified</NavLink>
            </li>
            <li className="noifacation-header__item">
                <NavLink className="noifacation-header__link" to="mentions">Mentions</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NoifacationsHeader