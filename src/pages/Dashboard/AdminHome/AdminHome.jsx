import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend
} from "recharts";

// :::::: for bar chart ::::::::
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
// :::::: for pie chart ::::::::
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuthInfo();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });
  console.log(chartData);

  // :::::: for bar chart ::::::::
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // :::::: for pie chart ::::::::
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map(data =>{
    return {
      name: data.category,
      value: data.revenue
     }
  })

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
      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
