import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <Link to="/historia">Historia</Link>
      <Link to="/equipos">Equipos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}
