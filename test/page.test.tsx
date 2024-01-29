import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "@/app/page";

test("renders hello world message", () => {
  render(<Home />);
  const helloWorldElement = screen.getByText(/hello, world/i);
  expect(helloWorldElement).toBeDefined();
});
