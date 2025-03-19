import { useState } from "react";

// Example staff data
const staffData = [
  { id: 1, name: "Alice Johnson", position: "Manager", contact: "123-456-7890", status: "Active" },
  { id: 2, name: "Bob Smith", position: "Chef", contact: "234-567-8901", status: "Active" },
  { id: 3, name: "Charlie Brown", position: "Waiter", contact: "345-678-9012", status: "Inactive" },
];

const AdminStaff = () => {
  const [staff, setStaff] = useState(staffData);
  const [newStaff, setNewStaff] = useState({
    name: "",
    position: "",
    contact: "",
    status: "Active",
  });

  const handleAddStaff = () => {
    const newStaffMember = { ...newStaff, id: staff.length + 1 };
    setStaff([...staff, newStaffMember]);
    setNewStaff({ name: "", position: "", contact: "", status: "Active" }); // reset form
  };

  const handleDeleteStaff = (id) => {
    setStaff(staff.filter((member) => member.id !== id));
  };

  const handleStatusChange = (id) => {
    setStaff(
      staff.map((member) =>
        member.id === id
          ? { ...member, status: member.status === "Active" ? "Inactive" : "Active" }
          : member
      )
    );
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-teal-600">
      <h2 className="text-3xl font-bold text-teal-600 mb-4">Staff Management</h2>

      {/* Staff Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-teal-100">
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Position</th>
              <th className="border p-3 text-left">Contact</th>
              <th className="border p-3 text-left">Status</th>
              <th className="border p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member) => (
              <tr key={member.id} className="border">
                <td className="p-3 border">{member.name}</td>
                <td className="p-3 border">{member.position}</td>
                <td className="p-3 border">{member.contact}</td>
                <td className="p-3 border">
                  <span
                    className={`${
                      member.status === "Active" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="p-3 border">
                  <button
                    onClick={() => handleStatusChange(member.id)}
                    className="bg-teal-500 text-white p-2 rounded mr-2"
                  >
                    Toggle Status
                  </button>
                  <button
                    onClick={() => handleDeleteStaff(member.id)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Staff Form */}
      <div className="mt-6 bg-teal-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-teal-600">Add New Staff</h3>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Name"
            value={newStaff.name}
            onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Position"
            value={newStaff.position}
            onChange={(e) => setNewStaff({ ...newStaff, position: e.target.value })}
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Contact"
            value={newStaff.contact}
            onChange={(e) => setNewStaff({ ...newStaff, contact: e.target.value })}
            className="border p-2 rounded mb-2 w-full"
          />
          <div className="mb-4">
            <label className="mr-2">Status:</label>
            <select
              value={newStaff.status}
              onChange={(e) => setNewStaff({ ...newStaff, status: e.target.value })}
              className="border p-2 rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button
            onClick={handleAddStaff}
            className="bg-teal-500 text-white p-3 rounded w-full"
          >
            Add Staff
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminStaff;
