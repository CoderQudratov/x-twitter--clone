import React, { useContext, useEffect, useState } from "react";
import { db, storage } from "../../../firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { Context } from "../../../Settings/Contex/ContextProvider";
import { addDoc, collection } from "firebase/firestore";
function ImageUpload() {
  const [imageUpload, setImageUpload] = useState(null);
  const [progres, setProgres] = useState(0);
  const imageListRef = ref(storage, "images/");
  async function uploadImage(e) {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    console.log(imageRef);
    let uploadTask = uploadBytesResumable(imageRef, imageUpload);
    uploadTask.on("state_changed", (snapshot) => {
      const proggresPercent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgres(proggresPercent);
    },
    (err)=>{
      console.log(err);
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
        const articleCollaction=collection(db,"images/")
        addDoc(articleCollaction, {
          title:"doston",
          disc:"dgwsdfgaewfgaq",
          imageUrl:url
        })
      })
    });
  }
  // const [imageList, setImageList] = useState([]);
  // function gets() {
  //   const pathReference = ref(storage, "image_2023-11-30_12-21-26.png");
  //   const imageListRef = ref(storage, "images/");
  //   console.log(imageListRef);
  // }
  // gets();
  // useEffect(() => {
  //   const imageListRef = ref(storage, "images/");

  //   listAll(imageListRef)
  //     .then((res) => {
  //       const urls = [];

  //       res.items.forEach((itemRef) => {
  //         getDownloadURL(itemRef)
  //           .then((url) => {
  //             urls.push(url);
  //             setImageList(urls); // Update the state with all URLs
  //           })
  //           .catch((error) => {
  //             console.error("Error getting download URL: ", error);
  //           });
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error listing images: ", error);
  //     });
  // }, []);
  // console.log(imageList);


  return (
    <div>
      <input type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
      <button onClick={uploadImage}>upload</button>
    </div>
  );
}

export default ImageUpload;
