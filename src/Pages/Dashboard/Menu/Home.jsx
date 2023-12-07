import { NavLink } from "react-router-dom";
import Settings_icon from "../../../Assets/images/Settings.svg";
import "./home.css";
import { AddPostHome } from "./AddPostHome";
import Cards from "./Cards";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
export const Home = () => {
  const [posts,setPosts]=useState([])
  return (
    <>
      <header className="header-home">
        <nav className="header-home__navigation home-navigation">
          <ul className="home-navigation__list" role="list">
            <li className="home-navigation__item">
              <NavLink className="home-navigation__link">For You</NavLink>
            </li>
            <li className="home-navigation__item">
              <NavLink className="home-navigation__link">Following</NavLink>
            </li>
            <li className="home-navigation__item">
              <NavLink className="home-navigation__link">
                <img src={Settings_icon} alt="" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="post-home">
        <div className="container-home">
          <AddPostHome posts={posts} setPosts={setPosts} />
        </div>
      </section>
      <section className="cards">
        <Cards setPosts={setPosts} posts={posts} />
      
      </section>
    </>
  );
};
