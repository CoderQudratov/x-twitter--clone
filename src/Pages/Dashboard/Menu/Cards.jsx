import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../../../Assets/images/Ellipse 281.svg";
import Cristiano from "../../../Assets/images/Cristiano_Ronaldo_WC2022_-_01_(cropped).jpg";
import CardFunctions from "./Card-functions";
import { Context } from "../../../Settings/Contex/ContextProvider";
function Cards({posts,setPosts}) {
  const {srcImg}=useContext(Context)
// posts.forEach(element => {
//   console.log(element);
// });
  return (
    <>
    {posts.map(post=>(
 <div className="cards">
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
       <NavLink>-{post?.postTime}</NavLink>  
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
         <img src={post.postImages} alt="not found" />
         
       </div>
    <CardFunctions/>
     </div>
   </div>
 </div>
 </div>
 
</div>
    ))}
      

    </>
    
  );
}

export default Cards;
