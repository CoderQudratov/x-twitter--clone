import React from 'react'
import FollowAcounts from './FollowAcounts'
import { NavLink } from 'react-router-dom'

function FollowExplore() {
  return (
    <div className='follow-ex'>
       
        <FollowAcounts/>
        <div className="trend-foryou__link-con-ex">
        <NavLink className={"trend-foryou__showmore"}>Show more</NavLink>
      </div>
    </div>
  )
}

export default FollowExplore