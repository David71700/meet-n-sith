import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/Page2">Page2</Link>
        <Link to="/Page3">Page3</Link>
      </nav>
    </header>
  );
};

export default Header;
