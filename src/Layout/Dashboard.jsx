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

const Dashboard = () => {
  const [carts] = useCart();
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 bg-orange-400 min-h-screen">
        <ul className="menu p-4">
          {isAdmin ? <>
              <li className="mb-4">
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
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
                <NavLink to="/dashboard/manageBookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
           : 
            <></>
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
