import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/Navbar";


const MainLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.includes('login');

  return (
    <div>
      {isLoginPage || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLoginPage || <Footer></Footer>}
      
    </div>
  );
};

export default MainLayout;