import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../Menu";
import SideBar from "../Side-bar/SideBar";
import Trending from "../Trending/Trending";
import "./dashboard.css";
import ExploreMain from "../Explore/ExploreMain";
import Noifacations from "../Noifacations/Noifacations";
import MyProfile from "../MyProfile/MyProfile";
import { useContext } from "react";
import { Context } from "../../../Settings/Contex/ContextProvider";
export const Dashboard = () => {
  const { pathname } = useLocation();
  const {user}=useContext(Context)
  console.log(user);
  return (
    <main id="main">
      <section className="twitter">
        <div className="container-dashboard">
          <div className="twitter-wrapper">
            <div className="twitter-wrapper__child side-bar">
              <SideBar />
            </div>
            <div className="twitter-wrapper__child menu">
              <Routes>
                <Route path="explore*" element={<ExploreMain />} />
                <Route path="home*" element={<Home />} />
                <Route path="notifacations*" element={<Noifacations/>} />
                <Route path={`${user.displayName}`} element={<MyProfile/>}/>
              </Routes>
            </div>
            <div
              className={`twitter-wrapper__child ${
                pathname === "explore" ? "explore-nothome" : "explore"
              }`}
            >
              <Trending />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
