import { Link } from "react-router-dom";

import hero1 from "../assets/food1.jpg";
import hero2 from "../assets/food2.jpg";
import hero3 from "../assets/food3.jpg";
import hero4 from "../assets/food4.jpg";
import hero5 from "../assets/food5.jpg";

const carouselImages = [hero1, hero2, hero3, hero4, hero5];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Crafting your Exceptional Dining Reservations
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Reservation is a step into a world of gastronomic wonder. Reserve your
          table today and let us paint your culinary dreams into reality.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Meals
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
