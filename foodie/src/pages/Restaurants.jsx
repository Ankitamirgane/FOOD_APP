import React from "react";
import { Link } from "react-router-dom";

const restaurants = [
  { id: 1, name: "Pizza Hut" },
  { id: 2, name: "Burger King" },
  { id: 3, name: "Dominos" },
];

const Restaurants = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Restaurants</h1>
      <ul className="mt-4">
        {restaurants.map((res) => (
          <li key={res.id} className="border p-2 my-2">
            <Link to={`/restaurants/${res.id}`} className="text-red-500">{res.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
