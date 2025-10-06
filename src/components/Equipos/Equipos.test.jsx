import { render, screen } from "@testing-library/react";
import Equipos from "./Equipos";

test("Equipos muestra la lista de equipos", () => {
  render(<Equipos />);
  expect(screen.getByText(/Atlético Nacional/i)).toBeInTheDocument();
});
