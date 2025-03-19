import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




const Orders = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [order, setOrder] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load reservation data
  useEffect(() => {
    const savedReservation = JSON.parse(localStorage.getItem("reservation"));
    console.log(savedReservation)
    setFormData(savedReservation || {});
  }, []);

  // Fetch menu items from Sanity
  useEffect(() => {
    const fetchMenuItems = async () => {
      const url = '/sanity-api/v2025-03-18/data/query/production?query=*%5B_type%3D%3D%22foodMenu%22%5D%7B_id%2Cname%2Cdescription%2Cprice%2Ccategory%2Cimage%7Basset-%3E%7B_id%2Curl%7D%7D%7D';
      
      try {
        // Fetching data with Axios
        const response = await axios.get(url);
        
        console.log('Sanity API Response:', response.data); // Log the response for debugging

        // Process the data from the response
        if (response.data && response.data.result && response.data.result.length > 0) {
          setMenuItems(response.data.result); // Update state with fetched menu items
        } else {
          setError('No data found.'); // Handle the case where no data is returned
        }
      } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
        setError('Failed to fetch menu items.'); // Display error message if fetching fails
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchMenuItems();
  }, []);

  // Function to update order
  const handleAddItem = (item) => {
    setOrder((prev) => {
      const existingItem = prev.find((i) => i.id === item._id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, id: item._id, quantity: 1 }];
    });
  };

  const handleRemoveItem = (itemId) => {
    setOrder((prev) =>
      prev
        .map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  // Calculate total price
  const totalPrice = order.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle order submission
  const handleOrder = () => {
    if (order.length === 0) {
      alert("Please add at least one item to your order!");
      return;
    }
    localStorage.setItem("order", JSON.stringify(order));
    navigate("/confirm");
  };

  if (loading) return <div>Loading menu...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?dining-table,restaurant')",
      }}
    >
      <div className="relative z-10 bg-black/80 text-white p-6 rounded-xl shadow-xl w-full max-w-3xl border border-yellow-500/40">
        <h1 className="text-5xl font-bold text-center text-yellow-500">
          Place Your Order
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Select the food items you want to order
        </p>

        <div className="mb-4 p-4 bg-gray-900 rounded-xl shadow-md">
          <h2 className="text-xl text-yellow-400 mb-3">Your Reservation</h2>
          <p>
            <span className="font-bold">Name:</span> {formData.name || "N/A"}
          </p>
          <p>
            <strong>Date:</strong> {formData.date || "N/A"}
          </p>
          <p>
            <strong>Time:</strong> {formData.time || "N/A"}
          </p>
          <p>
            <strong>Guests:</strong> {formData.guests || "N/A"}
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-2xl text-yellow-400">Choose Your Food</h2>
          <div className="grid grid-cols-2 gap-4 mt-3">
            {menuItems.map((item) => (
              <div key={item._id} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>${item.price}</p>
                <div className="flex items-center justify-between mt-2">
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="btn btn-sm btn-error"
                  >
                    -
                  </button>
                  <span className="mx-3">
                    {order.find((i) => i.id === item._id)?.quantity || 0}
                  </span>
                  <button
                    onClick={() => handleAddItem(item)}
                    className="btn btn-sm btn-success"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Receipt Section */}
          <div className="mt-6 p-4 bg-gray-900 rounded-lg">
            <h2 className="text-xl font-bold text-yellow-500">Order Summary</h2>
            {order.length === 0 ? (
              <p className="text-gray-300 text-center">No items selected yet</p>
            ) : (
              <ul className="text-gray-300">
                {order.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>
                      {item.quantity}x {item.name}
                    </span>
                    <span>${item.price * item.quantity}</span>
                  </li>
                ))}
                <hr className="my-2 border-yellow-500" />
                <h3 className="text-lg font-bold text-yellow-400 text-right">
                  Total: ${totalPrice}
                </h3>
              </ul>
            )}
          </div>

          {/* Confirm Order */}
          <button
            onClick={handleOrder}
            className="btn bg-green-500 text-white w-full mt-4"
          >
            Confirm Order ✅
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
