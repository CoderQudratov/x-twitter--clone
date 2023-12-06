import React from 'react'
import FollowAcounts from './FollowAcounts'
import { NavLink } from 'react-router-dom'

function FollowTrending() {
  return (
    <div className='follow'>
        <h3 className='follow-header'>Who to follow</h3>
        <FollowAcounts/>
        <FollowAcounts/>
        <FollowAcounts/>
        <div className="trend-foryou__link-con">
        <NavLink className={"trend-foryou__showmore"}>Show more</NavLink>
      </div>
    </div>
  )
}

export default FollowTrending