import "./../styles/hero.css";

function HeroSection() {
  return (
    <header className="hero">
      <h1>Foodie</h1>
      <p>Discover the best Food and Drinks in Pune</p>
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
      </div>
    </header>
  );
}

export default HeroSection;
