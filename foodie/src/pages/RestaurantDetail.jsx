import React from "react";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Restaurant Details</h1>
      <p>Details of restaurant with ID: {id}</p>
    </div>
  );
};

export default RestaurantDetail;
