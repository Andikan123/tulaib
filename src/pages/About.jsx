import { motion } from "framer-motion";
import hero1 from "../assets/food1.jpg";
import hero2 from "../assets/food2.jpg";
import hero3 from "../assets/food3.jpg";
import hero4 from "../assets/food4.jpg";
import hero5 from "../assets/food5.jpg";
import reserve from "../assets/reserve.png";
import {
  FaMapMarkerAlt,
  FaUtensils,
  FaMoneyBillWave,
  FaTruck,
  FaStar,
  FaQuestionCircle 
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    feedback: "Excellent service! The food was amazing and the ambiance is perfect for family gatherings.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    feedback: "Great food, great service! Would love to visit again soon.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 3,
    name: "Samuel Wilson",
    rating: 5,
    feedback: "Best dining experience I’ve had! Highly recommend the chef’s special.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Emily Johnson",
    rating: 4,
    feedback: "Good food and friendly staff. I’ll be back for sure!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const faqs = [
  {
    question: "What types of food do you serve?",
    answer: "We serve a variety of dishes, including vegetarian, vegan, and non-vegetarian options. We specialize in gourmet meals with a focus on fresh, local ingredients.",
  },
  {
    question: "How can I make a reservation?",
    answer: "You can make a reservation through our website or by calling our customer service. We recommend making a reservation in advance to ensure availability.",
  },
  {
    question: "Do you offer delivery or takeout?",
    answer: "Yes, we offer both delivery and takeout options. You can place an order through our website or via our mobile app for quick and easy service.",
  },
  {
    question: "Are there any discounts available?",
    answer: "We offer seasonal promotions and discounts from time to time. Make sure to sign up for our newsletter to stay updated on any ongoing offers.",
  },
  {
    question: "Is there a dress code for dining?",
    answer: "We encourage casual, comfortable attire. However, we ask guests to avoid wearing overly casual items like flip-flops or beachwear.",
  },
];

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Heading with Animation */}
      <motion.div
        className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow-lg rounded-lg px-4 py-2">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Tulaib
            </div>
          </div>
        </div>
      </motion.div>

      {/* Animated Paragraph */}
      <motion.p
        className="mt-8 max-w-xl text-lg leading-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </motion.p>

      {/* 2-Column Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
        {/* Image Grid (Left Side) */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <img
            src={hero1}
            alt="Restaurant"
            className="rounded-lg shadow-lg object-cover w-full h-48"
          />
          <img
            src={hero2}
            alt="Food"
            className="rounded-lg shadow-lg object-cover w-full h-48"
          />
          <img
            src={hero3}
            alt="Chef"
            className="rounded-lg shadow-lg object-cover w-full h-48"
          />
          <img
            src={hero4}
            alt="Dining"
            className="rounded-lg shadow-lg object-cover w-full h-48"
          />
        </motion.div>

        {/* Text Content (Right Side) */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            Experience Fine Dining Like Never Before
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8">
            At Tulaib, we bring you an exquisite culinary experience with
            flavors from around the world. Our chefs craft delicious meals with
            the freshest ingredients, ensuring an unforgettable dining
            experience.
          </p>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Whether you're looking for a romantic dinner, a family gathering, or
            a place to enjoy gourmet meals, we have something special for you.
          </p>
        </motion.div>
      </div>

      {/* Reservation Steps Section (Image Right - Text Left) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 max-w-6xl mx-auto items-center">
        {/* Text Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            How to <span className="text-primary">Make a Reservation</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Booking your table has never been easier. Follow these simple steps
            to enjoy your meal with us.
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-center gap-6 p-6 rounded-xl bg-gray-100 shadow-lg border-l-4 border-primary">
              <FaMapMarkerAlt className="text-primary text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Set Your Location
                </h3>
                <p className="text-gray-600 text-base">
                  Choose your location to find the best restaurants near you.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-6 p-6 rounded-xl bg-gray-100 shadow-lg border-l-4 border-primary">
              <FaUtensils className="text-primary text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Select Food
                </h3>
                <p className="text-gray-600 text-base">
                  Browse our delicious menu and select your favorite dishes.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-6 p-6 rounded-xl bg-gray-100 shadow-lg border-l-4 border-primary">
              <FaMoneyBillWave className="text-primary text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Pay Cash or Online
                </h3>
                <p className="text-gray-600 text-base">
                  Choose a convenient payment method—secure and hassle-free.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-6 p-6 rounded-xl bg-gray-100 shadow-lg border-l-4 border-primary">
              <FaTruck className="text-primary text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Delivery or Pickup
                </h3>
                <p className="text-gray-600 text-base">
                  Get your meal delivered or pick it up at your convenience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <img
            src={reserve}
            alt="Reservation Steps"
            className="rounded-xl shadow-xl object-cover w-full h-full"
          />
        </motion.div>
      </div>
      <div className="mt-16 max-w-6xl mx-auto">
      <motion.h2
        className="text-center text-4xl font-semibold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        What Our Customers Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * review.id, duration: 0.6 }}
          >
            <figure className="px-4 pt-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="rounded-full w-24 h-24 object-cover border-4 border-primary"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <div className="flex justify-center gap-1 text-yellow-400">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <p className="mt-8 max-w-xl text-lg text-primary leading-8">{review.feedback}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="mt-16 max-w-6xl mx-auto px-4">
    <motion.h2
  className="text-center text-5xl md:text-6xl font-extrabold mb-10 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text shadow-2xl drop-shadow-xl p-4"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
>
  Foodie FAQ: Your Culinary Queries Answered
</motion.h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <div className="collapse collapse-plus border border-base-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary">
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-2xl font-semibold text-primary peer-checked:text-primary transition-all duration-300">
                <FaQuestionCircle className="mr-3 text-primary inline-block" />
                {faq.question}
              </div>
              <div className="collapse-content p-4 text-lg text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default About;
