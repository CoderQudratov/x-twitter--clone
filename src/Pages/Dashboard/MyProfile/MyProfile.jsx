import React, { useContext, useEffect, useState } from 'react'
import MyProfileHeader from './MyProfileHeader'
import "./myprofile.css"
import MyProfileAbout from './MyProfileAbout'
import Cards from '../Menu/Cards'
import { child, get, ref } from 'firebase/database'
import { database, storage } from '../../../firebase'
import FollowTrending from '../Trending/FollowTrending'
import { Context } from '../../../Settings/Contex/ContextProvider'
function MyProfile() {
    const [posts,setPosts]=useState([])
    const {user}=useContext(Context)
    async function fetchData() {
        try {
          let postArray = [];
          const snapshot = await get(child(ref(database), `users_post/${user.displayName}`));
          snapshot.forEach((childSnapchot) => {
            postArray.push(childSnapchot.val());
          });
          setPosts(postArray);
       
        } catch (error) {
          console.error("Xatolik:", error);
        }
      }
    
      useEffect(() => {
        fetchData();
        
      },[]);
      function gets(params) {
get(child(ref(database), `users_post/${user.displayName}/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});  

      }
 gets('aa')   
      console.log(posts);
  return (
    <div className='myprofile'>
        <MyProfileHeader/>
        <MyProfileAbout/>
        <Cards posts={posts} setPosts={setPosts}/>
        <FollowTrending/>
    </div>
  )
}

export default MyProfile