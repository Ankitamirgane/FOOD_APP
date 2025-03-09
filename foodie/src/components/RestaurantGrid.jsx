import "./../styles/restaurantGrid.css";

function RestaurantGrid() {
  return (
    <section className="restaurant-grid">
      <div className="card">
        <img src="food1.jpg" alt="Pizza" />
      </div>
      <div className="card">
        <img src="burger.jpg" alt="Restaurant 1" />
      </div>
      <div className="card">
        <img src="pasta.jpg" alt="Restaurant 2" />
      </div>
      <div className="card">
        <img src="sandwich.jpg" alt="Restaurant 2" />
      </div>
    </section>
  );
}

export default RestaurantGrid;
