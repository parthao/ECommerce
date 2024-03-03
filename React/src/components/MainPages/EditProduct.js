import React from "react";
import { useEffect, useState } from "react";
import Product from "../../services/service.product.js";
import style from "../style/cart.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = () => {
  const [product, setProduct] = useState([]);
  const [ProductId, setProductId] = useState();
  const [PName, setPName] = useState();
  const [PDescription, setPDescription] = useState();
  const [PPrice, setPPrice] = useState();

  useEffect(() => {
    Product.getProduct()
      .then((resp) => {
        setProduct(resp.data);
      })
      .catch((error) => {});
  }, []);

  const editData = () => {
    const data = {
      ProductId: ProductId,
      PName: PName,
      PDescription: PDescription,
      PPrice: PPrice,
    };

    Product.updateProduct(data)
      .then((resp) => {
        console.log(resp);
        toast.success("Data Edited Successfully");
        setProductId("");
        setPName("");
        setPDescription("");
        setPPrice("");
        Product.getProduct()
          .then((resp) => {
            setProduct(resp.data);
          })
          .catch((error) => {});
      })
      .catch((error) => {});
  };

  const deleteProduct = (id) => {
    console.log(id);
    Product.deleteProduct(id)
      .then((resp) => {
        toast.error("Data Deleted");
        Product.getProduct()
          .then((resp) => {
            setProduct(resp.data);
          })
          .catch((error) => {});
        //to
      })
      .catch((error) => {});
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              value={PName}
              onChange={(e) => {
                setPName(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>Product Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Description"
              value={PDescription}
              onChange={(e) => {
                setPDescription(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div className="form-group">
            <label>Product Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Price"
              value={PPrice}
              onChange={(e) => {
                setPPrice(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="col-md-1">
          <br></br>
          <button
            className="btn btn-primary"
            onClick={() => {
              editData();
            }}
          >
            Edit
          </button>
        </div>
      </div>

      <table className="table table-striped table-bordered mt-5">
        <thead className="thead-dark">
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th className="col-md-1">Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map((e) => (
            <tr key={e.ProductId}>
              <td>
                <img className={style.srcImage} src={e.PImage} alt="Product" />
              </td>
              <td>{e.PName}</td>
              <td>{e.PDescription}</td>
              <td>{e.PPrice} ₹</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setProductId(e.ProductId);
                    setPName(e.PName);
                    setPDescription(e.PDescription);
                    setPPrice(e.PPrice);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(e.ProductId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default EditProduct;
