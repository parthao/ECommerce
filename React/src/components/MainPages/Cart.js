import React, { useEffect, useState } from "react";
import Cartx from "../../services/service.cart";
import style from "../style/cart.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [CartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    Cartx.getCartProduct()
      .then((resp) => {
        console.log(resp.data);
        setCartProduct(resp.data);
      })
      .catch((error) => {});
  }, []);

  const removeCart = (id) => {
    debugger;
    Cartx.deleteCart(id)
      .then((resp) => {
        toast.error("Product Removed from Cart");
        Cartx.getCartProduct()
          .then((resp) => {
            console.log(resp.data);
            setCartProduct(resp.data);
          })
          .catch((error) => {});
        console.log(resp.status);
      })
      .catch();
  };
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remove</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          {CartProduct.map((e) => (
            <tr>
              <td>
                <img className={style.srcImage} src={e.PImage} alt="sss"></img>
              </td>
              <td>{e.PName}</td>
              <td>{e.PPrice} ₹</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeCart(e.ProductId[0])}
                >
                  Remove
                </button>
              </td>
              <td>
                <button className="btn btn-success">Buy</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default Cart;
