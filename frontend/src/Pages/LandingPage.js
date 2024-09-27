import React from "react";
import { handleSuccess } from "../utils";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    handleSuccess("Redirecting to the Login Page.🎯");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <div>
      <h1>
        Landing page under construction🚧. Sorry for the inconvinience caused.😞
      </h1>
      <div id="login">
        <button onClick={handleLogin}>Login</button>
      </div>
      <footer>
        <h3>© Copyright @biswapulan.</h3>
      </footer>
    </div>
  );
}

export default LandingPage;
