import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuthInfo from "../hooks/useAuthInfo";


const AdminRoute = ({children}) => {
 const {user, loading} = useAuthInfo();
 const [isAdmin, isAdminLoading] = useAdmin();
 const location = useLocation();

 if(loading || isAdminLoading){
  return <span className="loading loading-spinner loading-lg"></span>
 }

 if(user && isAdmin){
  return children;
 }

 return <Navigate to="/login" state={{from: location}} replace></Navigate>

};

export default AdminRoute;