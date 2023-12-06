import React from "react";
import { NavLink } from "react-router-dom";
import img_icon from "../../../Assets/images/Default.svg";
import gif_icon from "../../../Assets/images/Group.svg";
import diagram_icon from "../../../Assets/images/diagram.svg";
import smile_icon from "../../../Assets/images/smile.svg";
import date_icon from "../../../Assets/images/date.svg";
import avatar__icon from "../../../Assets/images/Ellipse 281.svg";
function AddPostOPtions({ src }) {
  return (
    // <NavLink to={"/"}>
    //  <img src={src} ></img>
    // </NavLink>         
    <div className="post__instruments">
   
   <div className="post__file-img">
   <input type="file" accept="images" name="file-img" id="file-img" style={{display:"none"}}/>  
   <label htmlFor="file-img">
    <img src={img_icon} alt="" />
   </label>
   </div>

      <input type="file" />
      <input type="file" />
      <input type="file" />
      <input type="file" />
    </div>
  );
}

export default AddPostOPtions;
