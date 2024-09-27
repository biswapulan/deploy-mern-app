import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import Saloncard from "./HomeComponents/salonCard";
import Menubar from "./HomeComponents/menuBar";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);
  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Loggedout Successfully.");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="home_page">
      <h1>Welcome {loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <h2>Salons</h2>
        <Saloncard />
        <Saloncard />
      </div>
      <Menubar />
      <ToastContainer />
    </div>
  );
}

export default Home;
