import React from 'react'
import Search from "../../../Assets/images/search.svg"
function TrendingSearch() {
  return (
    <form className='trending-input__inner'>
      <label htmlFor="search-input" className='trending-input__label'>
        <img src={Search} alt="" />
        <input type="text" id='search-input' inputMode='search' placeholder='Search' />
      </label>
    </form>
  )
}

export default TrendingSearch