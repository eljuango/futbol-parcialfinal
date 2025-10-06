import { render, screen } from "@testing-library/react";
import Historia from "./Historia";

test("Historia incluye título y enlace a Dimayor", () => {
  render(<Historia />);
  expect(screen.getByText(/Historia del Fútbol en Colombia/i)).toBeInTheDocument();
  expect(screen.getByText(/Haz clic aquí/i)).toBeInTheDocument();
});
