import React from 'react'
import ExploreSearch from './ExploreSearch'
import "./explore.css"
import ExploreTrend from './ExploreTrend'
import Cards from '../Menu/Cards'
import FollowAcounts from './FollowAcounts'
import FollowExplore from './FollowMore'


function ExploreMain() {
  return (
    <div className='explore-main'>
        <ExploreSearch/>
        <ExploreTrend/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
     <FollowExplore/>
    </div>
  )
}

export default ExploreMain