import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("session");
    alert("Logged-out Successfully!");
    navigate("/");
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">art'sU</Link>
      </div>
      <div className="nav-container">
        <nav className="nav">
          <div className="border-0 border-black flex w-[1300px] items-center justify-between">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {!localStorage.getItem("session") ? (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              ) : null}
            </ul>
            {localStorage.getItem("session") ? (
              <ul>
                <li className="cursor-pointer" onClick={(e) => handleLogOut(e)}>
                  Logout
                </li>
              </ul>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
