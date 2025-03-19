import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../components";

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
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-900 text-white p-5">
          <h2 className="text-xl font-bold text-yellow-500 mb-5">
            Admin Dashboard
          </h2>
          <ul className="space-y-3">
            <li>
              <Link to="/admin" className="hover:text-yellow-500">
                📊 Dashboard
              </Link>
            </li>
            <li>
              <Link to="adminreserve" className="hover:text-yellow-500">
                📅 Reservations
              </Link>
            </li>
            <li>
              <Link to="adminorder" className="hover:text-yellow-500">
                🍽 Orders
              </Link>
            </li>
            <li>
              <Link to="adminmenu" className="hover:text-yellow-500">
                📜 Menu
              </Link>
            </li>
            <li>
              <Link to="admincustomer" className="hover:text-yellow-500">
                👤 Customers
              </Link>
            </li>
            <li>
              <Link to="adminanalytics" className="hover:text-yellow-500">
                📊 Analytics
              </Link>
            </li>
            <li>
              <Link to="adminstaff" className="hover:text-yellow-500">
                👥 Staff
              </Link>
            </li>
            
            <li>
              <Link to="admininventory" className="hover:text-yellow-500">
                🛒 Inventory
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
