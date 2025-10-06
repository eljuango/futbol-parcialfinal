import "./Historia.css";

export default function Historia() {
  return (
    <section className="reveal historia-section">
      <h2>Historia del Fútbol Colombiano</h2>

      <div className="historia-intro">
        <img src="/img/historia-fpc.jpg" alt="Fútbol profesional colombiano" />
        <p>
          El fútbol colombiano tiene una historia rica y apasionante que refleja
          la cultura, la identidad y el espíritu competitivo del país. Desde la
          creación del torneo profesional en 1948, el balompié nacional ha
          experimentado momentos de gloria, talento y transformación.
        </p>
      </div>

      <div className="historia-contenido">
        <article>
          <h3> Los primeros años del profesionalismo</h3>
          <p>
            La primera liga profesional se disputó en 1948 con tan solo 10
            equipos. El <strong>Independiente Santa Fe</strong> se consagró como
            el primer campeón del país. Esta época marcó el inicio de una nueva
            era, con la llegada de jugadores extranjeros y el auge del fútbol en
            ciudades como Bogotá, Cali y Medellín.
          </p>
        </article>

        <article>
          <h3>La época dorada de los 80 y 90</h3>
          <img src="/img/copas-colombianas.jpg" alt="Copas y trofeos del fútbol colombiano" />
          <p>
            Durante estas décadas, equipos como <strong>América de Cali</strong>,
            <strong> Atlético Nacional</strong> y <strong>Millonarios</strong>
            alcanzaron reconocimiento internacional. Nacional ganó la
            <em> Copa Libertadores de 1989</em>, siendo el primer club
            colombiano en lograrlo. Además, la Selección Colombia vivió su auge
            con jugadores legendarios como Valderrama, Higuita y Asprilla.
          </p>
        </article>

        <article>
          <h3>🇨🇴 El presente y futuro del fútbol nacional</h3>
          <img src="/img/seleccion-colombia.jpg" alt="Selección Colombia" />
          <p>
            En los últimos años, Colombia ha consolidado una generación de
            futbolistas talentosos que brillan en las ligas más importantes del
            mundo. Con estrellas como James Rodríguez y Luis Díaz, la
            <strong> Selección Colombia</strong> continúa siendo protagonista en
            la escena internacional. Además, la <strong>liga femenina</strong> ha
            crecido significativamente, aportando al desarrollo del deporte.
          </p>
        </article>
      </div>

      <div className="historia-cierre">
        <p>
          Hoy, el fútbol colombiano es símbolo de unión, pasión y esperanza. Cada
          partido es una celebración de identidad y orgullo nacional.
        </p>
      </div>
    </section>
  );
}


