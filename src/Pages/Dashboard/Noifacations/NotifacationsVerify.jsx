import React from 'react'
import verfy_img from "../../../Assets/images/verify.png"
function NoifacationVerify() {
  return (
    <div className='noifacaions-message' style={{
        "color":"#fff"
    }}>
        <div className="noifacaions-message__con">
            <img src={verfy_img} alt="" />
          <h4>Nothing to see here — yet</h4>
        <p>Likes, mentions, reposts, and a whole lot more — when it comes from a verified account, you’ll find it here. <a href="https://help.twitter.com/ru/managing-your-account/about-x-verified-accounts" target='_blank'>Learn more</a> </p>   
        </div>
       
    </div>
  )
}

export default NoifacationVerify;