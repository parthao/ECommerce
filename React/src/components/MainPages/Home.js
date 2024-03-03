import React, { useEffect, useState } from "react";
import GetProduct from "../../services/service.product.js";
import Cart from "../../services/service.cart.js";
import Product from "../ProductCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [productID, setProductID] = useState([]);

  useEffect(() => {
    GetProduct.getCartProduct()
      .then((resp) => {
        console.log(resp.data);
        setProduct(resp.data);
      })
      .catch((error) => {});
  }, []);

  const addToCart = (id) => {
    Cart.addCart(id)
      .then(() => {
        toast.success("Product added to Cart");
        GetProduct.getCartProduct()
          .then((resp) => {
            console.log(resp.data);
            setProduct(resp.data);
          })
          .catch((error) => {});
      })
      .catch();
  };

  return (
    <div className="container">
      <div className="row">
        {product.map((k) => (
          <div className="col-md-3">
            <Product
              exact
              imagex={k.PImage}
              heading={k.PName}
              deatils={k.PDescription}
              price={k.PPrice}
              onClick={(productId) => {
                addToCart(k.ProductId);
              }}
            ></Product>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
