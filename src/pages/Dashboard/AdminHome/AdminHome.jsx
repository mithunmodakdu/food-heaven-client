import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";

const AdminHome = () => {
  const { user} = useAuthInfo();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats')
      return res.data;
    },
  });
 

  return (
    <div>
      <h1 className="text-3xl">
        <span>Hi, welcome admin </span>
        {user?.displayName ? user.displayName : "Back"}
      </h1>
      <div>
        <div className="stats shadow h-[150px] my-5">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaDollarSign className="text-5xl"></FaDollarSign>
            </div>
            <div className="stat-title text-xl">Total Revenue</div>
            <div className="stat-value text-primary">{stats.revenue}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaBook className="text-5xl"></FaBook>
            </div>
            <div className="stat-title text-xl">Menu Items</div>
            <div className="stat-value text-secondary">{stats.menuItems}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
            <FaUsers className="text-5xl text-green-600"></FaUsers>
            </div>
            <div className="stat-title text-xl">Users</div>
            <div className="stat-value text-green-600">{stats.users}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
            <IoFastFoodSharp className="text-[#00FFFF] text-5xl" />
            </div>
            <div className="stat-title text-xl">Orders</div>
            <div className="stat-value text-[#00FFFF]">{stats.orders}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
