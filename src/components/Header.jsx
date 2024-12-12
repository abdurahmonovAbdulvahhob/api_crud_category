import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const token = useSelector((s) => s.token.value);
  const activeClass = "text-slate-800 border-t-2 border-slate-800";

  return (
    <header className="bg-gradient-to-r from-slate-400 via-slate-600 to-gray-600 text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-around py-6 px-8">
        <h2 className="text-2xl font-extrabold tracking-wide">
          <NavLink to="/" className="hover:text-yellow-400">
            E-commerce
          </NavLink>
        </h2>
        <div className="flex space-x-8 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${isActive ? activeClass : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${isActive ? activeClass : ""}`
            }
          >
            Register
          </NavLink>
          {token ? (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${isActive ? activeClass : ""}`
              }
            >
              Admin
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${isActive ? activeClass : ""}`
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
