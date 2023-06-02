import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ApartmentNew from "./ApartmentNew";

describe("<ApartmentNew />", () => {
  beforeEach(() => {
    const current_user = {
      email: "test@testing.com",
      password: "testing123",
      id: 1,
    };

    render(
      <BrowserRouter>
        <ApartmentNew current_user={current_user} />
      </BrowserRouter>
    );
  });

  it("renders without crashing", () => {});

  it("has a textbox for address", () => {
    const apartments = screen.getByRole("textbox", {
      name: /address/i,
    });
    expect(apartments).toBeInTheDocument();
  });

  it("has a textbox for planet", () => {
    const apartments = screen.getByRole("textbox", {
      name: /planet/i,
    });
    expect(apartments).toBeInTheDocument();
  });

  it("has a textbox for parking", () => {
    const apartments = screen.getByRole("textbox", {
      name: /parking/i,
    });
    expect(apartments).toBeInTheDocument();
  });

  it("has a textbox for bedrooms", () => {
    const apartments = screen.getByPlaceholderText(/bedrooms/i);
    expect(apartments).toBeInTheDocument();
  });

  it("has a textbox for bathrooms", () => {
    const apartments = screen.getByPlaceholderText(/bathrooms/i);
    expect(apartments).toBeInTheDocument();
  });

  it("has a textbox for square footage", () => {
    const apartments = screen.getByPlaceholderText(
      /how big is the apartment\?/i
    );
    expect(apartments).toBeInTheDocument();
  });

  it("has a textbox for price", () => {
    const apartments = screen.getByPlaceholderText(/price/i);
    expect(apartments).toBeInTheDocument();
  });

  it("has a textbox for utilities", () => {
    const apartments = screen.getByPlaceholderText(/utilities/i);
    expect(apartments).toBeInTheDocument();
  });

  it("has an option for pets", () => {
    const apartments = screen.getByText(/pets/i);
    expect(apartments).toBeInTheDocument();
  });

  it("has a textbox for image", () => {
    const apartments = screen.getByPlaceholderText(/place an image/i);
    expect(apartments).toBeInTheDocument();
  });
});
