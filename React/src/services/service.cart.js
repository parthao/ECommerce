import client from "../http-user";

const addCart = (id) => {
  return client.post(`/cart/${id}`);
};

const getCart = () => {
  return client.get("/cart");
};

const getCartProduct = () => {
  return client.get("/cart/productincart");
};

const deleteCart = (id) => {
  debugger;
  return client.delete(`/cart/${id}`);
};
export default { addCart, getCart, deleteCart, getCartProduct };
