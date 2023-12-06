import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../Menu";
import SideBar from "../Side-bar/SideBar";
import Trending from "../Trending/Trending";
import "./dashboard.css";
import TrendForYou from "../Trending/TrendForYou";
import ExploreMain from "../Explore/ExploreMain";
import Noifacations from "../Noifacations/Noifacations";
export const Dashboard = () => {
  const { pathname } = useLocation();
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
              </Routes>
            </div>
            <div
              className={`twitter-wrapper__child ${
                pathname == "explore" ? "explore-nothome" : "explore"
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
