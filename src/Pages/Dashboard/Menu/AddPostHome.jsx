import AddPostOPtions from "./AddPostOPtions";
import avatar__icon from "../../../Assets/images/Ellipse 281.svg";

import EvreOneSelect from "./EvreOneSelect";
import { useContext, useState } from "react";
import { db } from "../../../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Context } from "../../../Settings/Contex/ContextProvider";
import { child, get, getDatabase, ref, set } from "firebase/database";
import ImageUploader from "./ImageUpload";
export const AddPostHome = () => {
  const [inputBlur, setInputBlur] = useState(false);
  const [value, setValue] = useState("");
  const { user, token, } = useContext(Context);
  return (
    <div className="add-post__wrapper">
      <img width="40" height={"40"} src={avatar__icon} alt="" />
      <form className="post-home__form home-form">
        <div className="home-form__inner">
          <div className="home-form__top">
            <input
              className="home-form__input"
              type="text"
              placeholder="What is happening?!"
              onFocus={() => setInputBlur(true)}
              onKeyUp={(event) => setValue(event.target.value)}
              aria-label="add post"
            />
            {inputBlur ? <EvreOneSelect /> : false}
          </div>
          <div className="home-form__bottom">
            <div className="home-form__images">
              <AddPostOPtions/>
           
            </div>
            <div className="home-form__btn-inner">
              <button
                className={`${
                  value.length > 0
                    ? "home-form__btn"
                    : "home-form__btn-notactive"
                }`}
                type="submit"
                disabled={value.length > 0 ? false : true}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
