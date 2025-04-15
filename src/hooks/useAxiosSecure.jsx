import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthInfo from "./useAuthInfo";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut} = useAuthInfo();
  // request interceptor to  add authorization headers for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },

    function (error) {
      return Promise.reject(error);
    }
  );

  // response interceptor for 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },

    async (error) => {
      console.log("error in the interceptor", error);
      // for 401 and 403 status logout the user and move to the login page
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
