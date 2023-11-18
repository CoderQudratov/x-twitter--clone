import { NavLink } from "react-router-dom";
import "./navigation-bar.css";
import Logo from "../../../Assets/images/Logo.svg";
import HomeIcon from "../../../Assets/images/Home-icon.svg";
import ExploreICon from "../../../Assets/images/Explore.svg";
import Notifacation_icon from "../../../Assets/images/Notification.svg";
import Messages_icon from "../../../Assets/images/Messages-icon.svg";
import Bookmarks from "../../../Assets/images/Bookmark.svg";
import List_icon from "../../../Assets/images/List.svg";
import Avatar_icon from "../../../Assets/images/Ellipse 281.svg";
import More_icon from "../../../Assets/images/More.svg";
import SideBarOptions from "./SideBarOptions";
import Avatar from "./Avatar";
function SideBar(){
  return (
    <div className="side-bar__container">
      <div className="side-bar__top">
      <SideBarOptions img={Logo} to={"/"} cname="site-logo" parentcname="site-logo__parent"/>
      <SideBarOptions text="Home" img={HomeIcon} to={"/home"} />
      <SideBarOptions text="Explore" img={ExploreICon} to={"/explore"}/>
      <SideBarOptions text="Notifications" img={Notifacation_icon} to={"/notifacations"}/>
      <SideBarOptions text="Messages" img={Messages_icon} to={"/messages"}/>
      <SideBarOptions text="Bookmarks" img={Bookmarks} to={"/bookmarks"}/>
      <SideBarOptions text="Lists" img={List_icon} to={"/lists"}/>
      <SideBarOptions text="Profile" img={Avatar_icon} to={"/profile"}/>
      <SideBarOptions text="More" img={More_icon} to={"/more"}/>
      <span className="side-bar__post-con">
      <NavLink className={'side-bar__post'} to={'/add-post'}>Post</NavLink>   
      </span>
      
      </div>
      <Avatar/>
    </div>
  );
};
export default SideBar
