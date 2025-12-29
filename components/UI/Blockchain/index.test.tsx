import React from "react";
import { render, screen } from "@testing-library/react";
import Blockchain from "./";

describe("Blockchain", () => {
  it("should render my close", () => {
    render(<Blockchain />);
    const closeElement = document.querySelector(".close");
    expect(closeElement).toBeInTheDocument();
  });
});
