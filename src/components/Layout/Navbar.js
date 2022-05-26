import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";
import Container from "./Container";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="cost-logo" />
        </Link>
        <ul className={style.list}>
          <li className={style.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={style.item}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={style.item}>
            <Link to="/company">Company</Link>
          </li>
          <li className={style.item}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
