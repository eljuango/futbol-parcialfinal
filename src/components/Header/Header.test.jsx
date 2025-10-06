import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Header muestra el título", () => {
  render(<Header />);
  expect(screen.getByText(/Fútbol Colombiano/i)).toBeInTheDocument();
});
