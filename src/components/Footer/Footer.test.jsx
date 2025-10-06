import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Footer muestra contacto", () => {
  render(<Footer />);
  expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
});
