import React from 'react'
import './noifacation.css'
import NoifacationsHeader from './NoifacationsHeader'
import { Route, Routes } from 'react-router-dom'
import NoifacatiosFirst from './NoifacatiosFirst'
import NoifacationVerify from './NotifacationsVerify'
import Mentions from './Mentions'
function Noifacations() {
  return (
    <div className='noifacations'>
      <NoifacationsHeader/>
      <Routes>
      {/* <Route path='notifacations'  element={<NoifacatiosFirst/>}/> */}
        <Route path='/'  element={<NoifacatiosFirst/>}/>
        <Route path='verified'  element={<NoifacationVerify/>}/>
        <Route path='mentions'  element={<Mentions/>}/>
      </Routes>
    </div>
  )
}

export default Noifacations