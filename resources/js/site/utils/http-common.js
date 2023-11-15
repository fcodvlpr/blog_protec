import axios from "axios";

export default axios.create({
  baseURL: "http://127.1.2.3:4567/api/",
  headers: {
    "Content-type": "application/json"
  }
});