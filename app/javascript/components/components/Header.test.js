import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it("has clickable links for a registered user", () => {
    render(
      <BrowserRouter>
        <Header logged_in={true} />
      </BrowserRouter>
    );
    const myApartments = userEvent.click(
      screen.getByRole("link", { name: /my listings/i })
    );
    const allApartments = userEvent.click(
      screen.getByRole("link", { name: /view listings/i })
    );
    const createApartment = userEvent.click(
      screen.getByRole("link", { name: /create apartment/i })
    );
    const signOut = userEvent.click(screen.getByText(/sign out/i));
  });

  it("has clickable links for an unregistered user", () => {
    render(
      <BrowserRouter>
        <Header logged_in={false} />
      </BrowserRouter>
    );
    const allApartments = userEvent.click(
      screen.getByRole("link", { name: /view listings/i })
    );
    const signIn = userEvent.click(screen.getByText(/sign in/i));
    const signUp = userEvent.click(screen.getByText(/sign up/i));
  });
});
