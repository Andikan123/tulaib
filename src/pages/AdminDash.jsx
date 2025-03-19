import { useState } from "react";
import { Link, Outlet } from "react-router-dom"; // Import Outlet
import { FaCalendarCheck, FaUtensils, FaMoneyBillWave, FaUsers, FaListAlt } from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [stats, setStats] = useState({
    reservations: 120,
    orders: 85,
    revenue: 5600,
    customers: 200,
    menuItems: 50,
  });
 
  

  const data = [
    { name: "Reservations", value: stats.reservations },
    { name: "Orders", value: stats.orders },
    { name: "Revenue", value: stats.revenue },
  ];

  const COLORS = ["#FFBB28", "#FF8042", "#0088FE"];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
     
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard icon={FaCalendarCheck} color="text-yellow-500" label="Total Reservations" value={stats.reservations} />
          <StatCard icon={FaUtensils} color="text-green-500" label="Total Orders" value={stats.orders} />
          <StatCard icon={FaMoneyBillWave} color="text-blue-500" label="Total Revenue" value={`$${stats.revenue}`} />
          <StatCard icon={FaUsers} color="text-purple-500" label="Total Customers" value={stats.customers} />
          <StatCard icon={FaListAlt} color="text-red-500" label="Menu Items" value={stats.menuItems} />
        </div>

        {/* Pie Chart Section */}
        <div className="mt-8 bg-white shadow-md p-6 rounded-lg w-full">
          <h2 className="text-lg font-bold mb-3">Revenue Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

     
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, color, label, value }) => (
  <div className="p-5 bg-primary shadow-md rounded-lg flex items-center gap-4">
    <Icon className={`text-4xl ${color}`} />
    <div>
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  </div>
);

export default Dashboard;
