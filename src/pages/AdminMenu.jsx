import { useState } from "react";

const AdminFoodAndTableMenu = () => {
  const [foods, setFoods] = useState([
    { id: 1, name: "Grilled Salmon", price: "$25.99", available: true },
    { id: 2, name: "Steak & Fries", price: "$30.50", available: true },
    { id: 3, name: "Caesar Salad", price: "$12.99", available: false },
  ]);
  const [tables, setTables] = useState([
    { id: 1, number: 5, available: true },
    { id: 2, number: 3, available: true },
    { id: 3, number: 8, available: false },
  ]);

  const handleFoodStatusToggle = (foodId) => {
    setFoods(foods.map((food) =>
      food.id === foodId ? { ...food, available: !food.available } : food
    ));
  };

  const handleTableStatusToggle = (tableId) => {
    setTables(tables.map((table) =>
      table.id === tableId ? { ...table, available: !table.available } : table
    ));
  };

  const addFoodItem = () => {
    // Logic to add a new food item
  };

  const addTable = () => {
    // Logic to add a new table
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-pink-600">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">Manage Menu & Tables</h2>
      
      {/* Food Management */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-pink-600 mb-4">Food Menu</h3>
        <button onClick={addFoodItem} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">Add Food</button>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3 text-left text-pink-600">Food</th>
                <th className="border p-3 text-left text-pink-600">Price</th>
                <th className="border p-3 text-left text-pink-600">Available</th>
                <th className="border p-3 text-left text-pink-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food) => (
                <tr key={food.id} className="border">
                  <td className="p-3 border text-pink-600">{food.name}</td>
                  <td className="p-3 border text-pink-600">{food.price}</td>
                  <td className="p-3 border text-pink-600">
                    <span className={food.available ? "text-green-600" : "text-red-600"}>
                      {food.available ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td className="p-3 border text-pink-600">
                    <button
                      onClick={() => handleFoodStatusToggle(food.id)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded"
                    >
                      Toggle Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Table Management */}
      <div>
        <h3 className="text-2xl font-semibold text-pink-600 mb-4">Tables</h3>
        <button onClick={addTable} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">Add Table</button>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3 text-left text-pink-600">Table</th>
                <th className="border p-3 text-left text-pink-600">Available</th>
                <th className="border p-3 text-left text-pink-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tables.map((table) => (
                <tr key={table.id} className="border">
                  <td className="p-3 border text-pink-600">Table {table.number}</td>
                  <td className="p-3 border text-pink-600">
                    <span className={table.available ? "text-green-600" : "text-red-600"}>
                      {table.available ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td className="p-3 border text-pink-600">
                    <button
                      onClick={() => handleTableStatusToggle(table.id)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded"
                    >
                      Toggle Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminFoodAndTableMenu;
