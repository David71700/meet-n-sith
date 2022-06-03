import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.webp";
import theme from "../images/bluesaber.png";


const blueText = document.querySelectorAll('.blue-text');
// const redText = document.querySelectorAll('.red-text');
const bgColor = document.querySelectorAll('.blue-background');

function changeRed() {
  blueText.forEach((e) => {
    e.classList.toggle("red-text");
  });
  bgColor.forEach((e) => {
    e.classList.toggle("red-background");
  } )
}
// function changeBlue() {
//   redText.forEach((e) => {
//     e.classList.toggle("blue-text");
//   });
// }

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
    <nav className="blue-background">
      <Link
        to="#"
        className="nav-icon"
        aria-label="visit homepage"
        aria-current="page"
      >
        <img src={logo} alt="logo meet'n'sith" />
      </Link>

      <div className="main-navlinks">
        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded="false"
          onClick={() => toggleNav()}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navlinks-container blue-background">
          <Link aria-expanded="false" onClick={() => toggleNav()} to="/" aria-current="page">
            Home
          </Link>

          <Link to="/page2">Rencontres</Link>
          <Link to="/page3">À propos</Link>

        </div>
      </div>

      <div className="nav-authentication">
        <Link to="#" className="sign-user" onClick={() => changeRed()} aria-label="Sign in page">
          <img src={theme} alt="lightsaber" />
        </Link>
        <div className="sign-btns">
          {/* <button onClick={() => changeBlue()} type="button">Jedi</button> */} 
          <button onClick={() => changeRed()} type="button">Changer de Theme</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
