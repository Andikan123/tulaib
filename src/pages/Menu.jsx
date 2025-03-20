import { useState, useEffect } from "react";
import axios from "axios"; // Importing Axios
import client from "../sanityClient";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]); // State to hold fetched menu items
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

 

  // Fetch data from Sanity using Axios
  useEffect(() => {
    const fetchMenuItems = async () => {
      const url = '/sanity-api/v2025-03-18/data/query/production?query=*%5B_type%3D%3D%22foodMenu%22%5D%7B_id%2Cname%2Cdescription%2Cprice%2Ccategory%2Cimage%7Basset-%3E%7B_id%2Curl%7D%7D%7D';
      
      try {
        // Fetching data with Axios
        const query = `*[_type == "foodMenu"]{
          _id, name, description, price, category,
          "imageUrl": image.asset->url
        }`;
      
        const response = await client.fetch(query);
        setMenuItems(response);
        
        console.log('Sanity API Response:', response); // Log the response for debugging

        // Process the data from the response https://us05web.zoom.us/j/87524357390?pwd=kO3Enk2k1xR6o3ig5bt3Za6OJXUq2h.1
        // if (response.data && response.data.result && response.data.result.length > 0) {
        //   setMenuItems(response.data.result); // Update state with fetched menu items
        // } else {
        //   setError('No data found.'); // Handle the case where no data is returned
        // }
      } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
        setError('Failed to fetch menu items.'); // Display error message if fetching fails
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
      <h1 className="text-4xl font-bold text-center text-primary mb-6">🍽️ Our Menu</h1>

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
                <span className="text-lg font-bold text-primary">{item.price}</span>
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
