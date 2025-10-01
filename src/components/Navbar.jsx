import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/historia">Historia</Link>
      <Link to="/equipos">Equipos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}