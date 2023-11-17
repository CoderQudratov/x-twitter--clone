import { Home } from "../Menu"
import { NavigationBar } from "../NavigationBar/NavigationBar"
import './dashboard.css'
export const Dashboard =()=>{
    return(
        <main id="main">
            <section className="twitter">
                <div className="container-dashboard">
                    <div className="twitter-wrapper">
                        <div className="twitter-wrapper__child navigation-bar">
                            <NavigationBar/>
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