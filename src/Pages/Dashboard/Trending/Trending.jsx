import React from 'react'
import TrendingSearch from './TrendingSearch'
import "./Trending.css"
import Subscribe from './Subscribe'
import TrendForYou from './TrendForYou'
import FollowTrending from './FollowTrending'
import { useLocation } from 'react-router-dom'
function Trending() {
  const {pathname}=useLocation()

  return (
    <div className='trending-container'>
      {pathname!=='/explore'?
      <>
      
      <TrendingSearch/>
      {pathname=="/home"?
      <Subscribe/>:false
      }
      
      <TrendForYou/>
      </>
      :false
      }
      
      
      <FollowTrending/>
      
    </div>
  )
}

export default Trending