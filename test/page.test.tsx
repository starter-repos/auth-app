import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

test("renders login page", () => {
  render(<Home />);
  const loginElement = screen.getByText(/Login with account/i);
  expect(loginElement).toBeInTheDocument();
});
