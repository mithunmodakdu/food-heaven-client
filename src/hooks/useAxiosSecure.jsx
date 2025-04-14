import axios from "axios";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
  // request interceptor to  add authorization headers for every secure call to the api
  axiosSecure.interceptors.request.use(
    function(config){
     const token = localStorage.getItem('access-token');
     config.headers.authorization = `Bearer ${token}`;
     return config;
    }, 

    function(error){
     return Promise.reject(error);
    }
  )

  // response interceptor for 401 and 403 status
  axiosSecure.interceptors.response.use(
    function(response){
      return response;
    },

    (error) =>{
      console.log('error in the interceptor', error)
      const status = error.response.status;
      return Promise.reject(error);
    }
  )

  return axiosSecure;
};

export default useAxiosSecure;