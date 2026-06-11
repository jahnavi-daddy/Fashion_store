import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("TC_NAV_001 - renders Navbar successfully", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Navbar uses <header>
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("TC_NAV_002 - displays Categories link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(
      screen.getAllByText(/categories/i).length
    ).toBeGreaterThan(0);
  });

  test("TC_NAV_003 - displays Login button", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(
      screen.getAllByText(/login/i).length
    ).toBeGreaterThan(0);
  });
});