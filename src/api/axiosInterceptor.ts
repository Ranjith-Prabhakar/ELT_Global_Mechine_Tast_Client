// axiosInstance.js
import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage
    let token = localStorage.getItem("ELTToken");

    if (token) {
      // If the token exists, add it to the headers
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle the request error here
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status code outside the range of 2xx causes this function to trigger
    // You can handle global errors like token expiration here
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, like redirecting to the login page
      console.error("Unauthorized access - possibly token expired");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
