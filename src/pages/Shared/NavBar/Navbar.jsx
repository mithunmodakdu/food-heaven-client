// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
import {
  FaCartShopping,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaLocationPin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAdmin from "../../../hooks/useAdmin";
import { IoIosPerson, IoMdLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import './navbar.css'

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext);
  const { user, logOut } = useAuthInfo();
  console.log(user);
  const [isAdmin] = useAdmin();
  const [carts] = useCart();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li className="text-textColor mr-6 md:text-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="text-textColor mr-6 md:text-lg ">
        <Link to="/menu">Menus</Link>
      </li>
      <li className="text-textColor mr-6 md:text-lg">
        <Link to="/order/salad">Order</Link>
      </li>
      <li className="text-textColor mr-6 md:text-lg">
        <Link>About us</Link>
      </li>
    </>
  );

  return (
    <div className="">
      {/* Top menu  */}
      <div className="flex items-center justify-between w-full bg-primaryColor text-white ">
        <div className="w-1/2 text-right">
          <ul className="menu lg:menu-horizontal rounded-box">
            <li>
              <a>
                <FaLocationPin></FaLocationPin>
                Police Plaza, Gulshan, Dhaka
              </a>
            </li>
            <li>
              <a>
                <FaPhone></FaPhone>
                01919834450               
              </a>
            </li>
            <li>
              <a>
                <FaEnvelope></FaEnvelope>
                foodheaven@gmail.com
              </a>
            </li>
          </ul>
          
        </div>
        <div className="w-1/5 ">
          <ul className="menu menu-horizontal rounded-box ">
            <li>
              <a className="tooltip tooltip-bottom" data-tip="Facebook">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-bottom" data-tip="LinkedIn">
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-bottom" data-tip="Twitter">
                <FaTwitter></FaTwitter>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Top menu  */}
      <div className="navbar max-w-screen-xl mx-auto bg-surface text-heading">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>

          <a href="">
            <img src="/public/logo (2).png" alt="" className="w-20" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex gap-6">
            <div className="dropdown dropdown-end z-10">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle mr-8"
              >
                <div className="indicator">
                  <FaCartShopping className="text-4xl text-primaryColor" />
                  <span className="badge badge-lg indicator-item text-whiteColor  bg-secondaryColor p-2">
                    + {carts.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold text-[#F47D2C]">
                    {carts.length} Items
                  </span>
                  <span className="text-[#F47D2C]">
                    Total Price: ${totalPrice}
                  </span>
                  <div className="card-actions">
                    <Link to="/dashboard/cart">
                      <button className="btn bg-[#F47D2C] btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {user ? (
                <>
                  <div className="dropdown dropdown-end z-10 ">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-12 rounded-full">
                        <img alt="User Image" src={user?.photoURL} />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-[#F47D2C]  rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                      
                      <li>
                          <Link to="/dashboard/userHome"><IoIosPerson />{user?.displayName}</Link>
                      </li>

                      {user && isAdmin && (
                        <li>
                          <Link to="/dashboard/adminHome"><MdDashboard />Dashboard</Link>
                        </li>
                      )}
                      {user && !isAdmin && (
                        <li>
                          <Link to="/dashboard/userHome"><MdDashboard />Dashboard</Link>
                        </li>
                      )}

                      <li>
                        <button
                          onClick={handleLogOut}
                          className="btn btn-ghost"
                        >
                          <IoMdLogOut className="text-xl" />
                          Log out
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
