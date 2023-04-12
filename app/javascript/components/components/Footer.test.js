import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
  it("has clickable link to return to the home page", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const home = userEvent.click(
      screen.getByRole("link", { name: /apartment app/i })
    );
  });
});
