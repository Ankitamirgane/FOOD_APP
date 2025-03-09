import React from "react";
import { Link } from "react-router-dom";
import FoodMenu from "../components/FoodMenu"; // Importing FoodMenu

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white font-bold">Welcome to Foodies</h1>
          <p className="text-lg text-gray-200 mt-2">Find the best restaurants near you</p>
          <Link to="/restaurants" className="mt-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition">
            Explore Restaurants
          </Link>
        </div>
      </div>

      {/* Food Menu Section */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Menu</h2>
        <FoodMenu /> {/* Displays the menu */}
      </div>
    </div>
  );
};

export default Home;
