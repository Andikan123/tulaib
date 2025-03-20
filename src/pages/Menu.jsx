import { useState, useEffect } from "react";
import client from "../sanityClient";
import { foodMenuQuery } from "../utils/queries";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]); // State to hold fetched menu items
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch data from Sanity using Axios
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await client.fetch(foodMenuQuery);
        setMenuItems(response);
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
        setError("Failed to fetch menu items."); // Display error message if fetching fails
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchMenuItems(); // Call the fetch function when component mounts
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Display loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if there was an issue fetching the data
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        🍽️ Our Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={item.image?.asset?.url} // Use the URL from Sanity with optional chaining
                alt={item.name}
                className="h-40 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-between items-center mt-2">
                <span className="text-lg font-bold text-primary">
                  {item.price}
                </span>
                <button className="btn btn-outline btn-primary">Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
