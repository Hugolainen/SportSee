import axios from "axios";

/**
 * Returns axios instance with default parameters to communicate with the API
 */
export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json"
  }
});