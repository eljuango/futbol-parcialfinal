import "./Equipos.css";

export default function Equipos() {
  const equipos = [
    {
      nombre: "Atlético Nacional",
      ciudad: "Medellín",
      descripcion:
        "Fundado en 1947, es el club más laureado de Colombia. Campeón de la Copa Libertadores en 1989 y 2016.",
      imagen: "/img/atletico-nacional.jpg",
    },
    {
      nombre: "Millonarios FC",
      ciudad: "Bogotá",
      descripcion:
        "Uno de los clubes más tradicionales. Ganó múltiples ligas y es conocido por su época dorada en los años 50.",
      imagen: "/img/millonarios.jpg",
    },
    {
      nombre: "América de Cali",
      ciudad: "Cali",
      descripcion:
        "Reconocido por su pasión e historia. Alcanzó cuatro finales consecutivas de Copa Libertadores en los 80.",
      imagen: "/img/america-cali.jpg",
    },
    {
      nombre: "Junior de Barranquilla",
      ciudad: "Barranquilla",
      descripcion:
        "Emblema de la costa caribe. Famoso por su estilo ofensivo y por ser uno de los clubes más populares del país.",
      imagen: "/img/junior.jpg",
    },
    {
      nombre: "Deportivo Cali",
      ciudad: "Cali",
      descripcion:
        "Uno de los clubes más antiguos del país. Campeón de la liga y finalista de la Copa Libertadores en 1978 y 1999.",
      imagen: "/img/deportivo-cali.jpg",
    },
    {
      nombre: "Independiente Santa Fe",
      ciudad: "Bogotá",
      descripcion:
        "Primer campeón del fútbol profesional colombiano (1948). Ganó la Copa Sudamericana en 2015.",
      imagen: "/img/santa-fe.jpg",
    },
  ];

  return (
    <section className="reveal equipos-section">
      <h2>Equipos más destacados</h2>
      <div className="equipos-grid">
        {equipos.map((equipo) => (
          <div key={equipo.nombre} className="equipo-card">
            <img src={equipo.imagen} alt={equipo.nombre} />
            <h3>{equipo.nombre}</h3>
            <p className="ciudad">🏟️ {equipo.ciudad}</p>
            <p className="descripcion">{equipo.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

