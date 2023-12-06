import { useContext } from "react";
import { Dashboard,} from "./Pages";
import { Context } from "./Settings";
import Login from "./Pages/Register/Login/Login";





function App() {
  const {token}=useContext(Context)

  return (
    <>
   {token?
   <>
   <Dashboard/>
   </>:
   <>
   <Login/>
   </>}
    </>
   
    
  );
}

export default App;
