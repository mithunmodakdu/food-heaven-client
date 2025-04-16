import { Navigate, useLocation } from "react-router-dom";
import useAuthInfo from "../hooks/useAuthInfo";

const PrivateRoute = ({children}) => {
  const {user, loading} = useAuthInfo();
  const location = useLocation();


  if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if(user){
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
