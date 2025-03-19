import { useState } from "react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", total: "$45.00", status: "Pending" },
    { id: 2, customer: "Jane Smith", total: "$78.50", status: "Completed" },
    { id: 3, customer: "Michael Brown", total: "$32.20", status: "Processing" },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Orders Management</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left text-black">Order ID</th>
            <th className="border p-3 text-left text-black">Customer</th>
            <th className="border p-3 text-left text-black">Total</th>
            <th className="border p-3 text-left text-black">Status</th>
            <th className="border p-3 text-left text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border">
              <td className="border p-3 text-black">{order.id}</td>
              <td className="border p-3 text-black">{order.customer}</td>
              <td className="border p-3 text-black">{order.total}</td>
              <td className="border p-3 font-bold text-blue-600">{order.status}</td>
              <td className="border p-3">
                <select
                  className="p-2 border rounded"
                  value={order.status}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
