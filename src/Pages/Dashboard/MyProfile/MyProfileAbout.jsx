import React from "react";
import Avatar from "../../../Assets/images/Ellipse 281.svg";
import { NavLink } from "react-router-dom";
import Banner from "../../../Assets/images/Placeholder.png";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
function MyProfileAbout() {
  return (
    <div className="myprofile__about myprofile-about">
      <div className="myprofile-about__banner">
        <img src={Banner} alt="" />
      </div>
      <div className="myprofile-about__top padding-profile">
        <img src={Avatar} alt="" />
        <div className="myprofile-aboout__btn-con">
          <NavLink className={"myprofile-about_btn"}>Edit profile</NavLink>
        </div>
      </div>
      <ul className="myprofile-list padding-profile">
        <li className="myprofile-list__item">
          <p className="myprofile-list__name">Doston Coder</p>
          <span className="myprofile-list__user-name">@coderDoston</span>
        </li>
        <li className="myprofile-list__item myprofile-disc">
            <p>h1</p>
        </li>
        <li className="myprofile-list__item">
          <p>
            <BusinessCenterIcon /> Software developer/Programmer/Software
            engineer
          </p>
          <p><CalendarMonthIcon/> Joined May 2023</p>
        </li>
        <li className="myprofile-list__item">
            <NavLink className={"following-btn"}>18 <span>Following</span> </NavLink>
            <NavLink className={"followers-btn"}>0 <span>Followers</span></NavLink>
        </li>
      </ul>
      <ul className="myprofile-links__list padding-profile">
        <li className="myprofile-links__item">
            <NavLink>Posts</NavLink>
        </li>
        <li className="myprofile-links__item">
            <NavLink>Replies</NavLink>
        </li>
        <li className="myprofile-links__item">
            <NavLink>Highlights</NavLink>
        </li>
        <li className="myprofile-links__item">
            <NavLink>Media</NavLink>
        </li>
        <li className="myprofile-links__item">
            <NavLink>Likes</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MyProfileAbout;
