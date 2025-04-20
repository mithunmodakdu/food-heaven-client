import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { FaEnvelope } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";
import useAuthInfo from "../hooks/useAuthInfo";

const Dashboard = () => {
  const [carts] = useCart();
  const [isAdmin] = useAdmin();
  const {user} = useAuthInfo();

  return (
    <div className="flex">
      <div className="w-64 bg-orange-400 min-h-screen">
        <ul className="menu p-4">

          {/* admin dashboard */}
          {isAdmin ? <>
              <li className="mb-4">
                <NavLink to="/dashboard">
                  <FaHome></FaHome>
                  Admin Dashboard
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  Cart ({carts.length})
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/dashboard/paymentHistory">
                  <FaBook></FaBook>
                  Payment History
                </NavLink>
              </li>
            </>
           : 
            <>
            <li className="mb-4">
                <NavLink to="/dashboard">
                  <FaHome></FaHome>
                  User Dashboard
                </NavLink>
              </li>
              
              <li className="mb-4">
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  Carts ({carts.length})
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/dashboard/paymentHistory">
                  <FaBook></FaBook>
                  Payment History
                </NavLink>
              </li>
            </>
          }

         




          <div className="divider"></div>

          <li className="mb-4">
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Order
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
