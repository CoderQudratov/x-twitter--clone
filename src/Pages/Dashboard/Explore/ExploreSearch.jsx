import React from 'react'
import Search from "../../../Assets/images/search.svg"
import Settings from "../../../Assets/images/Settings.svg"
function ExploreSearch() {
  return (
    <div className="explore-main__header">
      <form className='explore-form'>
      <label htmlFor="search-input" className='explore-input__label'>
        <img src={Search} alt="" />
        <input type="text" id='search-input' inputMode='search' placeholder='Search' />
      </label>
    </form>
    <img src={Settings} alt="" width="18" />    
    </div>
  
  )
}

export default ExploreSearch