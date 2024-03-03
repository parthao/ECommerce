import client from "../http-user";

const saveProduct = (data) => {
  debugger;
  return client.post("/product", data);
};

const updateProduct = (data) => {
  return client.put("/product", data);
};

const getProduct = () => {
  return client.get("/product");
};

const getCartProduct = () => {
  return client.get("/cart/cartproduct");
};

const deleteProduct = (id) => {
  return client.delete(`/product/${id}`);
};
export default {
  saveProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getCartProduct,
};
