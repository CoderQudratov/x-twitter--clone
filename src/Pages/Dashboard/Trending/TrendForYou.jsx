import React from "react";
import { NavLink } from "react-router-dom";
import TrendForYouItem from "./TrendForYouItem";

function TrendForYou() {
  return (
    <div className="trend-foryou">
      <h3  className="trend-foryou__headnig">Trends for you</h3>
      <TrendForYouItem />
      <TrendForYouItem />
      <TrendForYouItem />
      <TrendForYouItem />
      <TrendForYouItem />
      <TrendForYouItem /> 
      <TrendForYouItem />
      <TrendForYouItem />
      <TrendForYouItem />
      <div className="trend-foryou__link-con">
        <NavLink className={"trend-foryou__showmore"}>Show more</NavLink>
      </div>
    </div>
  );
}

export default TrendForYou;
