import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./index.css";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="haut">
      <nav>
        <button
          className={`burger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          type="button"
        >
          <button
            className={`line ${isMenuOpen ? "active" : ""}`}
            type="button"
          />
          <button
            className={`line ${isMenuOpen ? "active" : ""}`}
            type="button"
          />
          <button
            className={`line ${isMenuOpen ? "active" : ""}`}
            type="button"
          />
        </button>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <h1>Smash Cards</h1>
        </Link>
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <img src="/logo-smash.png" alt="Accueil" />
        </NavLink>
        <ul className={`link ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/description"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Description
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
