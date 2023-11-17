import { NavLink } from "react-router-dom"
import Settings_icon from "../../../Assets/images/Settings.svg"
import './home.css'
export const Home =()=>{
    return(
        // <>
        <header className="header-home">
            <nav className="header-home__navigation home-navigation">
                    <ul className="home-navigation__list" role="list">
                        <li className="home-navigation__item">
                            <NavLink  className="home-navigation__link">For You</NavLink>
                        </li>
                        <li className="home-navigation__item">
                            <NavLink  className="home-navigation__link">Following</NavLink>
                        </li>
                        <li className="home-navigation__item">
                            <NavLink  className="home-navigation__link">
                                <img src={Settings_icon} alt="" />
                            </NavLink>
                        </li>
                    </ul>
            </nav>
        </header>
        // </>
    )
}