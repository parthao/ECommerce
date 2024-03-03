import { useState } from "react";
import style from "./style/card.module.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function Product(props) {
  const { productid, onClick } = props;
  debugger;
  return (
    <div className={style.carddiv}>
      <div className={style.cardbuttondiv}>
        <img className={style.cardimg} src={props.imagex}></img>
      </div>
      <div className={style.cardheading}>{props.heading}</div>
      <div className={style.textcss}>
        {props.deatils.toString().substring(0, 100) + "....."}
      </div>
      <div className={style.cardprice}>{props.price} ₹</div>
      <div>
        <button className={style.cardbutton} onClick={() => onClick(productid)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default Product;
