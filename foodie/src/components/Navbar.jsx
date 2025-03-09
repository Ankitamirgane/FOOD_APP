import "./../styles/navbar.css";

function Navbar({ onSignupOpen, onLoginOpen }) {
  return (
    <nav className="navbar">
      <div className="logo">Foodie</div>
      <div className="nav-links">
        <button className="btn btn-blue" onClick={onLoginOpen}>Login</button>
        <button className="btn btn-green" onClick={onSignupOpen}>Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;
