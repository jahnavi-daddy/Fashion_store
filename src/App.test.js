import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("TC_APP_001 - renders App successfully", () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  test("TC_APP_002 - routes load correctly", () => {
    render(<App />);
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  test("TC_APP_003 - Navbar is present inside App", () => {
    render(<App />);
    expect(screen.getAllByText(/home/i).length).toBeGreaterThan(0);
  });
});