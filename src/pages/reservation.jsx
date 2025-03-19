import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaClock, FaUsers } from "react-icons/fa";
import client from "../sanityClient"; // Import Sanity client
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify

const Reservation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "", // Added email for customer identification
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Check if the customer already exists by email
      const existingCustomer = await client.fetch(
        '*[_type == "customer" && email == $email][0]',
        { email: formData.email }
      );

      let customerId;

      if (!existingCustomer) {
        // 2. If the customer doesn't exist, create a new customer
        const newCustomer = await client.create({
          _type: "customer",
          name: formData.name,
          email: formData.email,
          phone: "", // You can add a phone number field if needed
          status: "Active",
        });

        // 3. Publish the new customer immediately
        await client
          .patch(newCustomer._id) // Get the ID of the new customer
          .set({ published: true }) // Set the 'published' field to true (or make it live)
          .commit();

        customerId = newCustomer._id; // Use the new customer's ID
        console.log('New customer created and published:', newCustomer);
      } else {
        // 4. If the customer exists, use their existing ID
        customerId = existingCustomer._id;
        console.log('Existing customer found:', existingCustomer);
        
        // 5. Toastify message for existing customer
        toast.success(`Welcome back, ${existingCustomer.email}! 🎉`);
      }

      // 6. Create the reservation and link it to the customer
      const reservation = await client.create({
        _type: "reservation",
        customer: { _ref: customerId }, // Reference to the customer (new or existing)
        table: Math.floor(Math.random() * 20) + 1, // Random table number
        status: "Confirmed",
        reservationDate: new Date(`${formData.date}T${formData.time}:00Z`),
      });
      console.log(reservation);
       // Store reservation info in localStorage for use in Orders page
    localStorage.setItem("reservation", JSON.stringify({
      name: formData.name,
      date: formData.date,
      time: formData.time,
      guests: formData.guests
    }));

      toast.success("✅ Reservation Confirmed! Select your food.");
      navigate("/createorders");
    } catch (error) {
      console.error("Error creating reservation:", error);
      alert("❌ Failed to create reservation. Try again!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?luxury-restaurant,dining')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Candlelight flicker effect */}
      <div className="absolute inset-0 animate-flicker bg-yellow-500/10 blur-xl"></div>

      {/* Reservation card */}
      <div className="relative z-10 bg-black/80 backdrop-blur-md text-white p-8 rounded-2xl shadow-2xl max-w-lg w-full border border-yellow-500/40 transform transition-all hover:scale-105 hover:shadow-yellow-500/50">
        <h1 className="text-5xl font-bold text-center mb-2 text-yellow-500 glow">🍷 Reserve a Table</h1>
        <p className="text-center text-gray-300 mb-6 italic">An unforgettable fine dining experience awaits.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute left-4 top-3 text-yellow-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full pl-10 bg-gray-900 text-white border-gray-600 focus:border-yellow-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaUser className="absolute left-4 top-3 text-yellow-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full pl-10 bg-gray-900 text-white border-gray-600 focus:border-yellow-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaCalendarAlt className="absolute left-4 top-3 text-yellow-400" />
            <input
              type="date"
              name="date"
              className="input input-bordered w-full pl-10 bg-gray-900 text-white border-gray-600 focus:border-yellow-400"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaClock className="absolute left-4 top-3 text-yellow-400" />
            <input
              type="time"
              name="time"
              className="input input-bordered w-full pl-10 bg-gray-900 text-white border-gray-600 focus:border-yellow-400"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaUsers className="absolute left-4 top-3 text-yellow-400" />
            <input
              type="number"
              name="guests"
              min="1"
              max="10"
              className="input input-bordered w-full pl-10 bg-gray-900 text-white border-gray-600 focus:border-yellow-400"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning w-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-yellow-500/40"
          >
            Reserve & Select Food 🍽️
          </button>
        </form>
      </div>

      {/* Toast container to show toasts */}
      <ToastContainer />
    </div>
  );
};

export default Reservation;
