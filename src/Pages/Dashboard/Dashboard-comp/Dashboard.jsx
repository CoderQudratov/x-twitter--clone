import { Home } from "../Menu"
import SideBar from "../Side-bar/SideBar"
import './dashboard.css'
export const Dashboard =()=>{
    return(
        <main id="main">
            <section className="twitter">
                <div className="container-dashboard">
                    <div className="twitter-wrapper">
                        <div className="twitter-wrapper__child side-bar">
                            <SideBar/>
                        </div>
                        <div className="twitter-wrapper__child menu">
                            <Home/>
                        </div>
                        <div className="twitter-wrapper__child explore"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}