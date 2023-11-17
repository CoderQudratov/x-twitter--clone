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
export const NavigationBar = () => {
  return (
    <>
      <ul className="navigation-bar__list">
        <li className="navigation-bar__item">
          <NavLink
            to={"/"}
            className="navigation-bar__link navigation-bar__site-logo"
          >
            <img
              src={Logo}
              className="navigation-bar__image site-logo"
              alt=""
            />
          </NavLink>
        </li>
        <li className="navigation-bar__item">
          <NavLink to={"/"} className="navigation-bar__link">
            <img
              src={HomeIcon}
              className="navigation-bar__image"
              alt="Home-icon"
            />
            Home
          </NavLink>
        </li>
        <li className="navigation-bar__item">
          <NavLink to={"/"} className="navigation-bar__link">
            <img
              src={ExploreICon}
              className="navigation-bar__image"
              alt="Explore-icon"
            />
            Explore
          </NavLink>
        </li>
        <li className="navigation-bar__item">
          <NavLink to={"/"} className="navigation-bar__link">
            <img
              src={Notifacation_icon}
              className="navigation-bar__image"
              alt="notifacation-icon"
            />
            Notifications
          </NavLink>
        </li>
        <li className="navigation-bar__item">
          <NavLink to={"/"} className="navigation-bar__link">
            <img
              src={Messages_icon}
              className="navigation-bar__image"
              alt="messags-icon"
            />
            Messages
          </NavLink>
        </li>
        <li className="navigation-bar__item">
          <NavLink to={"/"} className="navigation-bar__link">
            <img
              src={Bookmarks}
              className="navigation-bar__image"
              alt="bookmark-icon"
            />
            Bookmarks
          </NavLink>
        </li>
        <li className="navigation-bar__item">
          <NavLink to={"/"} className="navigation-bar__link">
            <img src={List_icon} className="navigation-bar__image" alt="" />
            Lists
          </NavLink>
        </li>
        <li className="navigation-bar__item">
          <NavLink to={"/"} className="navigation-bar__link">
            <img src={Avatar_icon} className="navigation-bar__image" alt="" />
            Profile
          </NavLink>
        </li>
        <li className="navigation-bar__item">
          <NavLink to={"/"} className="navigation-bar__link">
            <img src={More_icon} className="navigation-bar__image" alt="" />
            More
          </NavLink>
        </li>
        <li className="navigation-bar__item navigation-bar__add-post ">
          <NavLink
            to={"/add"}
            className="navigation-bar__link navigation-bar__add-post"
          >
            Post
          </NavLink>
        </li>
      </ul>
      <ul className="avatar-settings" role="list">
        <li className="avatar-settings__item">
          <img
            src={Avatar_icon}
            alt="avatar-image"
            className="avatar-settings__image"
          />
        </li>
        <li className="avatar-settings__item">
          <p className="avatar-settings__title">Doston Coder</p>
          <span className="avatar-settings__nickname">@CoderDoston</span>
        </li>
        <li className="avatar-settings__item">
          <span className="avatar-settings__dot"></span>
        </li>
      </ul>
    </>
  );
};
