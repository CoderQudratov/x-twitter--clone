import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navigation-bar.css";
function SideBarOptions({ text, img, to,cname,parentcname }) {
  let navigate=useNavigate()
  function handlePath() {
   navigate(to)
  }
  return (
    <div className="side-bar__inner">
      <span className={`side-bar__wrapper ${parentcname}`} onClick={handlePath} >
        <img src={img} className={cname} alt={`${text}-icon`} />
        <NavLink to={to}>{text}</NavLink>
      </span>
    </div>
  );
}

export default React.memo(SideBarOptions);
