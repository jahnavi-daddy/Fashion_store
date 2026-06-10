import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("TC_NAV_001 - renders Navbar successfully", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("TC_NAV_002 - displays Home link", () => {
    render(<Navbar />);
    expect(screen.getAllByText(/home/i).length).toBeGreaterThan(0);
  });

  test("TC_NAV_003 - displays Login button", () => {
    render(<Navbar />);
    expect(screen.getAllByText(/login/i).length).toBeGreaterThan(0);
  });
});