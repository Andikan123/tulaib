import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

// Example analytics data
const analyticsData = {
  totalReservations: 120,
  confirmedReservations: 80,
  pendingReservations: 30,
  cancelledReservations: 10,
  totalRevenue: 2500, // in USD
  salesByDay: [
    { day: "Mon", sales: 400 },
    { day: "Tue", sales: 350 },
    { day: "Wed", sales: 500 },
    { day: "Thu", sales: 600 },
    { day: "Fri", sales: 450 },
    { day: "Sat", sales: 450 },
    { day: "Sun", sales: 350 },
  ],
};

const AdminAnalytics = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-teal-600">
      <h2 className="text-3xl font-bold text-teal-600 mb-4">Analytics Dashboard</h2>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Reservations */}
        <div className="bg-teal-100 p-6 rounded-lg text-teal-600">
          <h3 className="text-xl font-semibold">Total Reservations</h3>
          <p className="text-4xl">{analyticsData.totalReservations}</p>
        </div>

        {/* Confirmed Reservations */}
        <div className="bg-teal-100 p-6 rounded-lg text-teal-600">
          <h3 className="text-xl font-semibold">Confirmed Reservations</h3>
          <p className="text-4xl">{analyticsData.confirmedReservations}</p>
        </div>

        {/* Pending Reservations */}
        <div className="bg-teal-100 p-6 rounded-lg text-teal-600">
          <h3 className="text-xl font-semibold">Pending Reservations</h3>
          <p className="text-4xl">{analyticsData.pendingReservations}</p>
        </div>

        {/* Cancelled Reservations */}
        <div className="bg-teal-100 p-6 rounded-lg text-teal-600">
          <h3 className="text-xl font-semibold">Cancelled Reservations</h3>
          <p className="text-4xl">{analyticsData.cancelledReservations}</p>
        </div>

        {/* Total Revenue */}
        <div className="bg-teal-100 p-6 rounded-lg text-teal-600">
          <h3 className="text-xl font-semibold">Total Revenue</h3>
          <p className="text-4xl">${analyticsData.totalRevenue}</p>
        </div>
      </div>

      {/* Sales by Day (Chart with Recharts) */}
      <div className="mt-8 bg-teal-100 p-6 rounded-lg text-teal-600">
        <h3 className="text-xl font-semibold">Sales by Day</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={analyticsData.salesByDay}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#00b8a3"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminAnalytics;
