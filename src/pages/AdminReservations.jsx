import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const reservationsData = [
  {
    id: 1,
    customer: "John Doe",
    table: 5,
    food: "Grilled Salmon",
    price: "$25.99",
    image: "https://via.placeholder.com/100", // Placeholder image
    status: "Confirmed",
  },
  {
    id: 2,
    customer: "Jane Smith",
    table: 3,
    food: "Steak & Fries",
    price: "$30.50",
    image: "https://via.placeholder.com/100",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Michael Brown",
    table: 8,
    food: "Caesar Salad",
    price: "$12.99",
    image: "https://via.placeholder.com/100",
    status: "Cancelled",
  },
];

const AdminReservations = () => {
  const [reservations, setReservations] = useState(reservationsData);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-black mb-4">Reservations</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="border p-3 text-left ">Customer</th>
              <th className="border p-3 text-left">Table</th>
              <th className="border p-3 text-left">Food</th>
              <th className="border p-3 text-left">Price</th>
              <th className="border p-3 text-left">Image</th>
              <th className="border p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="border">
                <td className="p-3 border text-black">{reservation.customer}</td>
                <td className="p-3 border text-black">Table {reservation.table}</td>
                <td className="p-3 border text-black">{reservation.food}</td>
                <td className="p-3 border text-black">{reservation.price}</td>
                <td className="p-3 border">
                  <img
                    src={reservation.image}
                    alt={reservation.food}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 border">
                  {reservation.status === "Confirmed" ? (
                    <span className="text-green-600 flex items-center">
                      <FaCheckCircle className="mr-2" /> {reservation.status}
                    </span>
                  ) : reservation.status === "Pending" ? (
                    <span className="text-yellow-600">{reservation.status}</span>
                  ) : (
                    <span className="text-red-600 flex items-center">
                      <FaTimesCircle className="mr-2" /> {reservation.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReservations;
