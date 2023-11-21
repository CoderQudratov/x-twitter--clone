import React from 'react'
import chat from "../../../Assets/images/comentary.svg"
import reply from "../../../Assets/images/reply.svg"
import heart from "../../../Assets/images/heart.svg"
import diagram from "../../../Assets/images/chart.svg"
import bookmark from "../../../Assets/images/bookmark-twitter.svg"
import send from "../../../Assets/images/send-twitter.svg"



import { NavLink } from 'react-router-dom'
function CardFunctions() {
  return (
    <ul className="cards__functions card-functions" role="list">
   <li className="card-functions__item">
    <NavLink>
        <img src={chat} alt="" width={'20'} />
        76
    </NavLink>
   </li>
   <li className="card-functions__item">
    <NavLink>
        <img src={reply} alt="" />
        10
    </NavLink>
   </li>
   <li className="card-functions__item">
    <NavLink>
        <img src={heart} alt="" width={"20"} />
        28
    </NavLink>
   </li>
   <li className="card-functions__item">
    <NavLink>
        <img src={diagram} alt="" width={"20"} />
        1M
    </NavLink>
   </li>
   <li className="card-functions__item">
    <img src={bookmark} alt="" width={"20"} />
    <img src={send} alt=""  width={"20"}/>
   </li>
  </ul>
  )
}

export default CardFunctions