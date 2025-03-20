import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaHeart } from "react-icons/fa";
import client from "../sanityClient";
import { foodMenuQuery } from "../utils/queries";

// Function to format price (if needed)
const formatPrice = (price) => `$${price.toFixed(2)}`;

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await client.fetch(foodMenuQuery);
        setProducts(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch menu items.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { name, price, description, image } = product;
        const formattedPrice = formatPrice(price);

        return (
          <div
            key={product._id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden p-4"
          >
            {/* Heart Icon - Top Left */}
            <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-600 transition">
              <FaHeart className="w-5 h-5 text-red-500 hover:text-white" />
            </button>

            {/* Discount Badge - Top Right */}
            <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-md font-semibold shadow-md">
              20% OFF
            </span>

            {/* Image Section */}
            <figure className="px-4 pt-4">
              <img
                src={image?.asset?.url}
                alt={name}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body text-center p-4">
              <h2 className="card-title capitalize tracking-wider text-lg font-semibold">
                {name}
              </h2>
              <p className="text-sm text-gray-500">{description}</p>

              {/* Price */}
              <span className="text-lg font-bold text-primary">
                {formattedPrice}
              </span>

              {/* Order Now Button */}
              <button
                onClick={() =>
                  navigate("/reservation", { state: { selectedFood: product } })
                }
                className="btn bg-green-500 text-white w-full mt-4"
              >
                Order Now 🍽️
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
