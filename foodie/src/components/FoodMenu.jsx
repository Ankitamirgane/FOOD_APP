import React from "react";

const FoodMenu = () => {
    const foods = [
      { name: "Pizza", price: "$10", image: "food1.jpg" },
      { name: "Burger", price: "$8", image: "burger.jpg" },
      { name: "Pasta", price: "$12", image: "pasta.jpg" },
      { name: "Sandwich", price: "$7", image: "sandwich.jpg" }
    ];
  
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={food.image} alt={food.name} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-2">{food.name}</h2>
              <p className="text-gray-600">{food.price}</p>
              <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-red-600">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FoodMenu;