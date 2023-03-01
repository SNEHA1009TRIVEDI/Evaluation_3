import { render } from "@testing-library/react";
import React from "react";
import Footer from "../index";

describe("Footer", () => {
  it("should renders without crashing ", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
