import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img_icon from "../../../Assets/images/Default.svg";
import gif_icon from "../../../Assets/images/Group.svg";
import diagram_icon from "../../../Assets/images/diagram.svg";
import smile_icon from "../../../Assets/images/smile.svg";
import date_icon from "../../../Assets/images/date.svg";
import avatar__icon from "../../../Assets/images/Ellipse 281.svg";
import {ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase";
function AddPostOPtions({selectedFile, setSelectedFile,previewImage, setPreviewImage}) {

  const [progres, setProgres] = useState(0);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Rasmni ko'rsatish uchun URL manzilini olish
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  
  };
  return (
    <div className="post__instruments">
      <div className="post__file-img">
        <input
          type="file"
          accept="images"
          name="file-img"
          id="file-img"
          
          style={{ display: "none" }}
         onChange={handleFileChange}/>
        <label htmlFor="file-img">
          <img src={img_icon} alt="" />
        </label>
      </div>
      <NavLink to={"foundmedia/search"}>
        <img src={gif_icon} alt="" style={{ cursor: "pointer" }} />
      </NavLink>

      <img src={diagram_icon} alt="" role="button" />
      <img src={smile_icon} alt="" role="button" />
      <img src={date_icon} alt="" />
    </div>
  );
}

export default AddPostOPtions;
