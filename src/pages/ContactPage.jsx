import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?restaurant,food')",
      }}
    >
      <div className="relative z-10 bg-black/80 text-white p-8 rounded-xl shadow-xl w-full max-w-4xl border border-yellow-500/40">
        <h1 className="text-4xl font-bold text-center text-yellow-500">
          Contact Us
        </h1>
        <p className="text-gray-300 text-center mt-2">
          We would love to hear from you! Reach out to us for reservations, inquiries, or feedback.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white h-32"
              placeholder="Type your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-bold text-yellow-400">Visit Us</h2>
          <p className="text-gray-300">123 Food Street, Culinary City, Foodland</p>
          <p className="text-gray-300">📞 +123 456 7890</p>
          <p className="text-gray-300">✉️ contact@restaurant.com</p>

          {/* Google Map Embed */}
          <div className="mt-4">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509368!2d144.9537353153169!3d-37.81627937975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772fd365c8691b!2sThe%20Famous%20Restaurant!5e0!3m2!1sen!2sus!4v1638460736844!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="text-yellow-400 text-2xl hover:text-yellow-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-yellow-400 text-2xl hover:text-yellow-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-yellow-400 text-2xl hover:text-yellow-300">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
