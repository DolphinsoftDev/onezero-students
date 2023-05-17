import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.onezerobank.com/api/v1/marketing/",
});

export default instance;
