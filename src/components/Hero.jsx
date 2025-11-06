import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-[#4B1C4A] text-white">
      <div className="container py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Find Your Next Ride
        </h1>
        <p className="mt-3 max-w-xl text-gray-300">
          Quality pre-owned vehicles. Transparent prices. Simple financing.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/inventory" className="px-5 py-3 bg-white text-black rounded-md font-semibold">
            View Inventory
          </Link>
        </div>
      </div>
    </section>
  );
}