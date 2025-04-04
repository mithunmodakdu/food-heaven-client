import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 bg-orange-400 min-h-screen">
        <ul className="menu p-4">
          <li className="mb-4">
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add a review
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/dashboard/bookings">
              <FaList></FaList>
              My Bookings
            </NavLink>
          </li>

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
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default Dashboard;