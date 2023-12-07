import AddPostOPtions from "./AddPostOPtions";
import avatar__icon from "../../../Assets/images/Ellipse 281.svg";

import EvreOneSelect from "./EvreOneSelect";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState } from "react";
import { db, storage, database } from "../../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Context } from "../../../Settings/Contex/ContextProvider";
// import { addDoc, collection } from "firebase/firestore";
import { set, ref as dbref, get, child } from "firebase/database";
export const AddPostHome = ({ posts, setPosts }) => {
  const [inputBlur, setInputBlur] = useState(false);
  const [value, setValue] = useState("");
  const { user, token } = useContext(Context);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [progres, setProgres] = useState(0);
  const imageListRef = ref(storage, "images/");
  console.log(imageUrl);
  async function handleSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    let imageGet = data.get("file-img");
    if (imageGet == null) return;
    const imageRef = ref(storage, `images/${imageGet.name}`);
    console.log(imageRef);
    let uploadTask = uploadBytesResumable(imageRef, imageGet);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const proggresPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgres(proggresPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          // const articleCollaction=collection(database,"posts/"+uuidv4())
          console.log(url);
          setImageUrl(url);
        });
      }
    );
    let postImage = await getDownloadURL(uploadTask.snapshot.ref);

    await set(dbref(database, "posts/" + uuidv4()), {
      userName: "doston",
      postDisc: value,
      postImages: postImage.length ? postImage : null,
      userEmail: "coder@gmail.com",
      postTime: "time",
      user_avatar: "Avatar.png",
      likes: {
        userName: false,
      },
      commentary: {
        userName: {
          commentary_media: null,
          commentary_title: "dfjadjlsy",
          commentary_time: "12:00",
        },
      },
    });

    // setValue("")
    // setimageGet("")
  }
  useEffect(() => {
    let postArray = [];
    get(child(dbref(database), "posts")).then((snapshot) => {
      snapshot.forEach((childSnapchot) => {
        console.log(childSnapchot.val());
        postArray.push(childSnapchot.val());
      });
      setPosts(postArray);
    });
  }, []);

  return (
    <div className="add-post__wrapper">
      <img width="40" height={"40"} src={avatar__icon} alt="" />
      <form className="post-home__form home-form" onSubmit={handleSubmit}>
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
            {previewImage && (
              <img
                className="post-image"
                src={previewImage}
                alt="Tanlangan rasm"
              />
            )}
            {inputBlur ? <EvreOneSelect /> : false}
          </div>

          <div className="home-form__bottom">
            <div className="home-form__images">
              <AddPostOPtions
                setPreviewImage={setPreviewImage}
                previewImage={previewImage}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
              />
            </div>
            <div className="home-form__btn-inner">
              <button
                className={"home-form__btn"}
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
