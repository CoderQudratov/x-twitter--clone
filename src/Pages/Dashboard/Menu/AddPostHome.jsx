import AddPostOPtions from "./AddPostOPtions";
import avatar__icon from "../../../Assets/images/Ellipse 281.svg";
import EvreOneSelect from "./EvreOneSelect";
import { useContext, useEffect, useState } from "react";
import { storage, database } from "../../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Context } from "../../../Settings/Contex/ContextProvider";
import { set, ref as dbref, get, child } from "firebase/database";
import { uid } from "uid";
export const AddPostHome = ({ posts, setPosts }) => {
  const [value, setValue] = useState("");
  const { user } = useContext(Context);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [progres, setProgres] = useState(0);
  const [inputBlur, setInputBlur] = useState(false);
  const user_token = user?.token;
 const elPostInput =document.getElementById("post-title")
 
  async function handleSubmit(e) {
    e.preventDefault();
    const uuid = uid();
    const FullDate =new Date()
    console.log(FullDate);
    const formData = new FormData(e.target);
    let imageGet = formData.get("file-img");
    const post_title =formData.get('post-titles')
    if (imageGet == null) return;
    const imageRef = ref(storage, `images/${imageGet.name}`);
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
          setImageUrl(url);
        });
      }
    );
    let postImage = await getDownloadURL(uploadTask.snapshot.ref);

    await set(dbref(database, "posts/" + uuid), {
      uuid,
      user_token,
      userName: user.displayName,
      postImages: imageGet.name?.length ? postImage : null,
      postDisc:post_title ,

      userEmail: user.email,
      time: FullDate.toISOString(),
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

    MyPostGet()
    fetchData();
    // imageGet=null
    elPostInput.value=null
    setPreviewImage(null)
  }

  async function fetchData() {
    try {
      let postArray = [];
      const snapshot = await get(child(dbref(database), "posts"));
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
  function MyPostGet() {
    posts.filter((data) => {
      if (data?.user_token === user_token) {
        set(dbref(database, "users_post/" + `${user?.displayName}/${data.uuid}`), data);
      }
    });
  }
  useEffect(()=>{
   MyPostGet()
  },[posts])
function handleNull(params) {
  // setValue(null)
 

 
}
  return (
    <div className="add-post__wrapper">
      <img width="40" height={"40"} src={avatar__icon} alt="" />
      <form className="post-home__form home-form" onSubmit={handleSubmit}>
        <div className="home-form__inner">
          <div className="home-form__top">
            <label htmlFor="post-title">
              <input
                className="home-form__input"
                type="text"
                placeholder="What is happening?!"
                aria-label="add post"
                name="post-titles"
                id="post-title"
                onKeyUp={(e) => setValue(e.target.value)}
              />
            </label>

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
              <button className={"home-form__btn"} onClick={handleNull} type="submit">
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
