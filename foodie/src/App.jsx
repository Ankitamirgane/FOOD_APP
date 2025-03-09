import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RestaurantGrid from "./components/RestaurantGrid";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar 
        onSignupOpen={() => setIsSignupOpen(true)} 
        onLoginOpen={() => setIsLoginOpen(true)} 
      />

      {/* Modals for Signup & Login */}
      {isSignupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Signup onClose={() => setIsSignupOpen(false)} />
        </div>
      )}

      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Login onClose={() => setIsLoginOpen(false)} />
        </div>
      )}

      {/* Other Components */}
      <HeroSection />
      <RestaurantGrid />
    </>
  );
}

export default App;
