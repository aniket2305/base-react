import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders react text", () => {
  render(<App />);
  const element = screen.getByText(/react/i);
  expect(element).toBeInTheDocument();
});
