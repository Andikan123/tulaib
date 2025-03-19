import { useState } from "react";

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+123456789",
      reservation: "Confirmed",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+987654321",
      reservation: "Pending",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michaelbrown@example.com",
      phone: "+1122334455",
      reservation: "Cancelled",
    },
  ]);

  const handleReservationStatusToggle = (customerId) => {
    setCustomers(customers.map((customer) =>
      customer.id === customerId ? {
        ...customer,
        reservation: customer.reservation === "Confirmed" ? "Cancelled" : "Confirmed"
      } : customer
    ));
  };

  const handleDeleteCustomer = (customerId) => {
    setCustomers(customers.filter(customer => customer.id !== customerId));
  };

  const handleEditCustomer = (customerId) => {
    // Logic to edit customer details
    alert(`Edit customer with ID: ${customerId}`);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-teal-600">
      <h2 className="text-3xl font-bold text-teal-600 mb-4">Manage Customers</h2>

      {/* Customer List */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3 text-left text-teal-600">Name</th>
              <th className="border p-3 text-left text-teal-600">Email</th>
              <th className="border p-3 text-left text-teal-600">Phone</th>
              <th className="border p-3 text-left text-teal-600">Reservation Status</th>
              <th className="border p-3 text-left text-teal-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border">
                <td className="p-3 border text-teal-600">{customer.name}</td>
                <td className="p-3 border text-teal-600">{customer.email}</td>
                <td className="p-3 border text-teal-600">{customer.phone}</td>
                <td className="p-3 border text-teal-600">
                  <span
                    className={customer.reservation === "Confirmed" ? "text-green-600" :
                      customer.reservation === "Pending" ? "text-yellow-600" : "text-red-600"}>
                    {customer.reservation}
                  </span>
                </td>
                <td className="p-3 border text-teal-600">
                  <button
                    onClick={() => handleEditCustomer(customer.id)}
                    className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCustomer(customer.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleReservationStatusToggle(customer.id)}
                    className="bg-yellow-500 text-white px-4 py-1 rounded ml-2"
                  >
                    Toggle Reservation Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCustomers;
