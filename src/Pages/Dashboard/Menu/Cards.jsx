import React from "react";
import { NavLink} from "react-router-dom";
import Avatar from "../../../Assets/images/Ellipse 281.svg";
import CardFunctions from "./Card-functions";
function Cards({posts}) {
 const fullDate =new Date()
  const getElapsedDuration = (startDateTime, endDateTime) => {
    const diff = Math.abs(endDateTime - startDateTime);
    const minutes = Math.floor(diff / 60000); // 1 minut = 60000 millisekund
    const seconds = Math.floor(diff / 1000); 
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} sekund`;
    } else if (minutes < 60) {
      return `${minutes} minut`;
    } else if (hours < 24) {
      return `${hours} soat`;
    } else if (hours >= 24 && hours < 48) {
      return '1 kunga';
    } else {
      return `${days} kunga`;
    }
   
  };
 console.log(getElapsedDuration('2023-12-12T07:22:01.001',"2023-12-12T07:22:01.001"));
  return (
    <>
    {posts?.map(post=>{
 
      return(
<div className="cards" key={post?.uuid} >
 <div className="container-home">
 <div className="cards__inner">
   <NavLink>
     <img src={Avatar} alt="" width={"40"} height={"40"} />
   </NavLink>
   <div className="card__right">
     <div className="card__titles">
       <div className="card__nickname">
       <NavLink>{post?.userName}</NavLink>
       <NavLink>{post?.userEmail}</NavLink>
       <NavLink>-{
           getElapsedDuration(new Date(post?.time), new Date(fullDate.toISOString()) )
      }</NavLink>  
       </div>
       
       <span className="avatar-inner__dot"></span>
     </div>
     <div className="cards__body">
       <div className="cards__disc" style={{ color: "#fff " }}>
         <p>
       {post.postDisc}
         </p>
       </div>
       <div className="cards__img-con">
        {post?.postImages&&
         <img src={post?.postImages}  alt="h1"/>
        }
        
         
       </div>
    <CardFunctions/>
     </div>
   </div>
 </div>
 </div>
 
</div>
      )
 
})}
      

    </>
    
  );
}

export default Cards;
