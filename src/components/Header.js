import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.webp";
import user from "./user.svg";

const Header = () => {
  const toggleNav = () => {
    const hamburgerToggler = document.querySelector(".hamburger");
    const navLinksContainer = document.querySelector(".navlinks-container");

    hamburgerToggler.classList.toggle("open");
    const ariaToggle =
      hamburgerToggler.getAttribute("aria-expanded") === "true"
        ? "false"
        : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle);
    navLinksContainer.classList.toggle("open");
  };

  return (
    <nav>
      <Link
        to="#"
        class="nav-icon"
        aria-label="visit homepage"
        aria-current="page"
      >
        <img src={logo} alt="logo meet'n'sith" />
      </Link>

      <div class="main-navlinks">
        <button
          class="hamburger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded="false"
          onClick={() => toggleNav()}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="navlinks-container">
          <Link to="/" aria-current="page">
            Home
          </Link>
          <Link to="/page2">Rencontres</Link>
          <Link to="/page3">About Us</Link>
        </div>
      </div>

      <div class="nav-authentication">
        <Link to="#" class="sign-user" aria-label="Sign in page">
          <img src={user} alt="user-icon" />
        </Link>
        <div class="sign-btns">
          <button type="button">Sign In</button>
          <button type="button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
