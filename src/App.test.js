import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App", () => {
  it("should render the home page content correctly", () => {
    render(<App />);
    expect(screen.getByText("EVENTIFY")).toBeTruthy();
  });
});
