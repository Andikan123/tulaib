import { useState } from "react";

const AdminInvent = () => {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Delicious grilled salmon with herbs and spices.",
      price: "$25.99",
      quantity: 50,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Caesar Salad",
      description: "Fresh Caesar salad with homemade dressing.",
      price: "$12.99",
      quantity: 30,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    quantity: 0,
    image: "",
  });

  const handleAddItem = () => {
    if (newItem.name && newItem.price && newItem.quantity > 0) {
      setInventory([
        ...inventory,
        { ...newItem, id: inventory.length + 1 },
      ]);
      setNewItem({ name: "", description: "", price: "", quantity: 0, image: "" });
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  const handleUpdateQuantity = (id, quantity) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-4xl font-semibold text-teal-700 mb-6 text-center">Manage Inventory</h2>

        {/* Add New Item Form */}
        <div className="bg-teal-100 p-6 rounded-lg mb-8 shadow-lg">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">Add New Food Item</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="border border-teal-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Food Name"
            />
            <input
              type="text"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              className="border border-teal-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Description"
            />
            <input
              type="number"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              className="border border-teal-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Price"
            />
            <input
              type="number"
              value={newItem.quantity}
              onChange={(e) => setNewItem({ ...newItem, quantity: +e.target.value })}
              className="border border-teal-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Quantity"
            />
            <input
              type="text"
              value={newItem.image}
              onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
              className="border border-teal-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Image URL"
            />
            <button
              onClick={handleAddItem}
              className="bg-teal-600 text-white rounded-lg p-3 w-full hover:bg-teal-500 transition duration-200"
            >
              Add Item
            </button>
          </div>
        </div>

        {/* Inventory List */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-600 mb-6">Current Inventory</h3>
          {inventory.length === 0 ? (
            <p className="text-center text-gray-500">No items in inventory.</p>
          ) : (
            <div className="space-y-6">
              {inventory.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-teal-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-teal-700">{item.name}</h4>
                      <p className="text-gray-600">{item.description}</p>
                      <p className="font-bold text-teal-600">{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, 1)}
                        className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-400 transition duration-200"
                      >
                        +1
                      </button>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, -1)}
                        className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-400 transition duration-200"
                      >
                        -1
                      </button>
                    </div>
                    <p className="font-semibold text-teal-600">Quantity: {item.quantity}</p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="bg-red-500 text-white p-3 rounded-full hover:bg-red-400 transition duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminInvent;
