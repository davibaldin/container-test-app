import axios from "axios";

var clientConfig = {
  headers: {
    "Content-type": "application/json"
  },
  withCredentials: false,
  params: {
    access_token: "token-123-token",
  },
};
clientConfig.baseURL = process.env.REACT_APP_BACKEND_ADDRESS;

export default axios.create(clientConfig);