import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const [reservation, setReservation] = useState({});
  const [order, setOrder] = useState([]);

  // Load reservation and order details from localStorage
  useEffect(() => {
    const savedReservation = JSON.parse(localStorage.getItem("reservation"));
    const savedOrder = JSON.parse(localStorage.getItem("order"));
    
    if (savedReservation) {
      setReservation(savedReservation);
    }
    if (savedOrder) {
      setOrder(savedOrder);
    }
  }, []);

  // Calculate total
  const totalPrice = order.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-primary p-8 shadow-lg rounded-lg max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Order Confirmed!</h1>
        <p className="text-lg text-gray-700">Thank you, {reservation.name}! Your reservation is confirmed.</p>
        <p className="text-gray-600">We look forward to serving you on <strong>{reservation.date}</strong> at <strong>{reservation.time}</strong> for <strong>{reservation.guests}</strong> guests.</p>
        <h2 className="mt-6 text-xl font-bold">Order Summary</h2>
        <div className="bg-secondary-50 p-4 mt-4 rounded-lg shadow">
          {order.map((item) => (
            <div key={item.id} className="flex justify-between py-2 border-b">
              <span>{item.quantity}x {item.name}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <h3 className="mt-4 text-lg font-semibold">Total: ${totalPrice}</h3>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("order");
          localStorage.removeItem("reservation");
          window.location.href = "/"; // Redirect to home page
        }}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">
        Done ✅
      </button>
    </div>
    </div>
  );
};

export default Confirmation
