import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../../../Assets/images/Ellipse 281.svg";
import Cristiano from "../../../Assets/images/Cristiano_Ronaldo_WC2022_-_01_(cropped).jpg";
import CardFunctions from "./Card-functions";
import { Context } from "../../../Settings/Contex/ContextProvider";
function Cards() {
  const {srcImg}=useContext(Context)

  return (
    <>
       <div className="cards">
      <div className="container-home">
      <div className="cards__inner">
        <NavLink>
          <img src={Avatar} alt="" width={"40"} height={"40"} />
        </NavLink>
        <div className="card__right">
          <div className="card__titles">
            <div className="card__nickname">
            <NavLink>TC</NavLink>
            <NavLink>@totlacristiano</NavLink>
            <NavLink>-23h</NavLink>  
            </div>
            
            <span className="avatar-inner__dot"></span>
          </div>
          <div className="cards__body">
            <div className="cards__disc" style={{ color: "#fff " }}>
              <p>
                -Буни мендан қарзи бор, 2-3йил олдин отларимни сотиб берганман.
                -Мен шу инсонни укаси бўламан, қарзингизни тўлаб бераман. -Бугун
                берасанми, алдамайсанми? ... Эххх, бу дунёни арзимаган чақа
                чуқаси охиратингни қийинлаштиришга арзирмикан? Озгина фикр
                қилайлик.
              </p>
            </div>
            <div className="cards__img-con">
              {
              srcImg?.map(item=>{
               
               return(
                <img src={item} alt="img" />
               )
              })
              }
              
            </div>
         <CardFunctions/>
          </div>
        </div>
      </div>
      </div>
      
    </div>

    </>
    
  );
}

export default Cards;
