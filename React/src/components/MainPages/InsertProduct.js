import React, { useState, useRef } from "react";
import SaveProduct from "../../services/service.product";
import storage from "../FireBase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InsertProduct = () => {
  const [PName, setPName] = useState();
  const [PImage, setPImage] = useState(null);
  const [PDescription, setPDescription] = useState();
  const [PPrice, setPPrice] = useState();
  const fileInputRef = useRef(null);
  const [Url, setUrl] = useState("");

  const saveData = (url) => {
    console.log(PName + " " + PImage + " " + PDescription);

    const data = {
      PName: PName,
      PImage: url,
      PDescription: PDescription,
      PPrice: PPrice,
    };
    SaveProduct.saveProduct(data)
      .then((resp) => {
        const inputElement = document.getElementById("fileInput");
        inputElement.value = "";
        setPName("");
        setPImage("");
        setPDescription("");
        setPPrice("");
        toast.success("Data Successfully Saved");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const upload = () => {
    const randomnumber = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
    if (PImage == null) return;
    storage
      .ref(`/images/${randomnumber}${PImage.name}`)
      .put(PImage)
      .on("state_changed", alert("Success"), alert, () => {
        // Getting Download Link
        storage
          .ref("images")
          .child(`${randomnumber}${PImage.name}`)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            console.log(url);
            saveData(url);
          });
      });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="text-danger">Product Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Product Name"
              value={PName}
              onChange={(e) => {
                setPName(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="text-danger">Product Image</label>
            <input
              id="fileInput"
              className="form-control"
              type="file"
              placeholder="Enter Product Image"
              onChange={(e) => {
                setPImage(e.target.files[0]);
              }}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label>Product Description</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Product Description"
              value={PDescription}
              onChange={(e) => {
                setPDescription(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label>Product Price</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Product Price"
              value={PPrice}
              onChange={(e) => {
                setPPrice(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="col-md-12">
          <button
            className="btn btn-primary"
            onClick={() => {
              upload();
            }}
          >
            Save
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InsertProduct;
