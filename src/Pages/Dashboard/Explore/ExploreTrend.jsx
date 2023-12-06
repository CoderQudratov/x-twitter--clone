import React from 'react'
import ExploreTrendItem from './ExploreTrendItem'
import { NavLink } from 'react-router-dom'

function ExploreTrend() {
  return (
    <div className="trend-foryou explore-trend">
    <h3  className="trend-foryou__headnig">Trends for you</h3>
   <ExploreTrendItem/>
   <ExploreTrendItem/>
   <ExploreTrendItem/>
   <ExploreTrendItem/>
   <ExploreTrendItem/>
    <div className="trend-foryou__link-con explore-trend__linc">
      <NavLink className={"trend-foryou__showmore"}>Show more</NavLink>
    </div>
  </div>
  )
}

export default ExploreTrend