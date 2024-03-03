import axios from "axios";

export default axios.create({
  //baseURL: 'https://timelesstreasure.myproject.com.pl/',
  //baseURL: "http://localhost:8292/",
  baseURL: "http://192.168.1.40:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});
