import AddPostOPtions from "./AddPostOPtions";
import img_icon from "../../../Assets/images/Default.svg";
import gif_icon from "../../../Assets/images/Group.svg";
import diagram_icon from "../../../Assets/images/diagram.svg";
import smile_icon from "../../../Assets/images/smile.svg";
import date_icon from "../../../Assets/images/date.svg";
import avatar__icon from "../../../Assets/images/Ellipse 281.svg"
import EvreOneSelect from "./EvreOneSelect";
import { useState } from "react";
export const AddPostHome = () => {
  const [inputBlur,setInputBlur] =useState(false)
  return (
    <div className="add-post__wrapper">
        <img  width="40" height={"40"} src={avatar__icon} alt="" />
      <form className="post-home__form home-form" action="#">
        <div className="home-form__inner">
          <div className="home-form__top">
            <input className="home-form__input" type="text" placeholder="What is happening?!" onFocus={()=>setInputBlur(true)} aria-label="add post" />
            {inputBlur?<EvreOneSelect/>:false}
            
          </div>
          <div className="home-form__bottom">
            <div className="home-form__images">
              <AddPostOPtions src={img_icon} />
              <AddPostOPtions src={gif_icon} />
              <AddPostOPtions src={diagram_icon} />
              <AddPostOPtions src={smile_icon} />
              <AddPostOPtions src={date_icon} />
            </div>
            <div className="home-form__btn-inner">
             <button className="home-form__btn" type="submit">Post</button> 
            </div>
            
          </div>
        </div>
      </form>
    </div>
  );
};
