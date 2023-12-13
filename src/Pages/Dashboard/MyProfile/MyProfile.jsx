import React, { useEffect, useState } from 'react'
import MyProfileHeader from './MyProfileHeader'
import "./myprofile.css"
import MyProfileAbout from './MyProfileAbout'
import Cards from '../Menu/Cards'
import { child, get, ref } from 'firebase/database'
import { database } from '../../../firebase'
import FollowTrending from '../Trending/FollowTrending'
function MyProfile() {
    const [posts,setPosts]=useState([])
    async function fetchData() {
        try {
          let postArray = [];
          const snapshot = await get(child(ref(database), "users_post/doston"));
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