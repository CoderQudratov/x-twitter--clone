import React, { useContext } from "react";
import X_img from "../../../Assets/images/x-svgrepo-com.svg";
import "./login.css";
import Login_btns from "./Login_btns";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth ,db} from "../../../firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { Context } from "../../../Settings/Contex/ContextProvider";
import { useNavigate } from "react-router-dom";
function Login() {
  let {setUser,setToken}=useContext(Context)
  let navigate =useNavigate()
 async function get() {
//   let data ={
//     name:"messi",
//     img:"messi"
//   }

//  let setdoc =doc(db, "users", "users")
//  let docSnap  =await getDoc(setdoc)
//  console.log(docSnap.data());

  }
  get()
  function handleSign(event) {
    event.preventDefault();
    try {
      const data = new FormData(event.target);
      let email = data.get("email");
      let password = data.get("password");
     createUserWithEmailAndPassword(auth, email, password)
     .then(async(res)=>{
      const user=res.user

      await updateProfile(user,{
        displayName:data.get('name')
      })
      console.log(user);
     setUser({
      email:user.email,
      displayName:user.displayName,
      token:user.accessToken

     })
     setToken({
      token:user.accessToken
     })
     navigate('/home')
     })
    
 
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img src={X_img} alt="" width={400} />
      </div>

      <div className="login_form">
        <h1>В курсе происходящего</h1>
        <h2>Присоединяйтесь сегодня.</h2>
        <Login_btns />
        <form onSubmit={handleSign}>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="password" name="password" />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
