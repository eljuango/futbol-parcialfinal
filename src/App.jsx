import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Historia from "./components/Historia/Historia";
import Equipos from "./components/Equipos/Equipos";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Historia />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/equipos" element={<Equipos />} />
          <Route
            path="/contacto"
            element={
              <section>
                <h2>Contacto</h2>
                <p>Escríbenos a juan.restrepo.7140@miremington.edu.co</p>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

