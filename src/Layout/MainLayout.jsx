import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/Navbar";


const MainLayout = () => {
  const location = useLocation();
  const isLoginSignUpPage = location.pathname.includes('login') || location.pathname.includes('signup');

  return (
    <div>
      {isLoginSignUpPage || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLoginSignUpPage || <Footer></Footer>}
      
    </div>
  );
};

export default MainLayout;